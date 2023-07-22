const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(API('lankey', '/api/tools/remini', {url: `${out}`, apikey: lankey}));
       const image = await api.buffer();
       conn.sendFile(m.chat, image, 'remini.jpg', wm, m);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi atau apikey yang anda gunakan adalah apikey free! silahkan upgrade untuk menggunakan nya `);
  }
}

handler.help = ['remini']
handler.tags = ['tools']
handler.command = /^(remini)$/i
handler.premium = false
handler.limit = true

module.exports = handler;
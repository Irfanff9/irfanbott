import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://e.top4top.io/m_22372qclo0.mp3', "m_22372qclo0", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bot)$/i;
handler.command = new RegExp();

export default handler;
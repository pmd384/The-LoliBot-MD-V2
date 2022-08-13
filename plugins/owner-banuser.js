let handler = async (m, { conn, text}) => {
if (!text) throw '𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓 𝑬𝒋𝒆𝒎𝒑𝒍𝒐v..@𝚝𝚊𝚐'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓b𝑬𝒋𝒆𝒎𝒑𝒍𝒐v@𝚝𝚊𝚐*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂) 🙀\n*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙿𝙾𝙳𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙷𝙰𝚂𝚃𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler

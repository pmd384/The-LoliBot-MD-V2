let handler = async (m, { conn, text}) => {
if (!text) throw '𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\n 𝑬𝒋𝒆𝒎𝒑𝒍𝒐 @𝚝𝚊𝚐'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒑𝒂𝒓𝒂 𝒃𝒂𝒏𝒆𝒂𝒓\n 𝑬𝒋𝒆𝒎𝒑𝒍𝒐 @𝚝𝚊𝚐*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂) 🙀\n*—◉ 𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒏𝒐 𝒑𝒐𝒅𝒓𝒂́ 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler

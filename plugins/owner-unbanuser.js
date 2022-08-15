let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍𝒈𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂𝒔 𝒂𝒍𝒈𝒖𝒏 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝙄𝙣𝙛𝙤❗] 𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒇𝒖𝒆 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐(𝒂)🤩 𝑪𝒐𝒏 𝒆́𝒙𝒊𝒕𝒐*\n*—◉ 𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒚𝒂 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler

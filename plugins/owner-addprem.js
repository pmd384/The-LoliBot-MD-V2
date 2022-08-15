let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒂 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒗𝒂 𝒔𝒆𝒓 𝒖𝒔𝒖𝒂𝒓𝒊𝒐(𝒂) 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾 𝚈𝙰 𝙴𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼, 𝙽𝙾 𝚃𝙴𝙽𝙳𝚁𝙰 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 𝙰𝙻 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler

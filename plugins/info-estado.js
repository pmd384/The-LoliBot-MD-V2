let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭━━━━[ *𝙀𝙎𝙏𝘼𝘿𝙊* ]━━━━━⬣
┃ *¡𝙃𝙤𝙡𝙖 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙖!* ${name}✨ 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *ミ🤖 Estado del Bot 🤖彡*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *=> Bot activo ✅*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *=> Bot uso público ✅️*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃=> 𝘼𝙘𝙩𝙞𝙫𝙤 𝙙𝙪𝙧𝙖𝙣𝙩𝙚
┃=> ${uptime} ✅
╰━━━━━━━━━━━━━━━━━━⬣
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'http://github.com/elrebelde21/The-LoliBot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*𝑵𝒐𝒎𝒃𝒓𝒆:* ${username} ${registered ? '(' + name + ') ': ''}
*𝑵𝒖𝒎𝒆𝒓𝒐:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𝑬𝒏𝒍𝒂𝒄𝒆:* wa.me/${who.split`@`[0]}${registered ? '\n*𝑬𝒅𝒂𝒅:* ' + age + ' años' : ''}
*𝑳𝒊𝒎𝒊𝒕𝒆:* ${limit} 𝒅𝒆𝒍 𝒖𝒔𝒐𝒔
*𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐:* ${registered ? '✅': '❌'}
*𝑷𝒓𝒆𝒎𝒊𝒖𝒎:* ${prem ? '✅' : '❌'}
*𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler

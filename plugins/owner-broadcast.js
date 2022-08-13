import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', 
sourceUrl: `http://github.com/elrebelde21/The-LoliBot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`✅ 𝑬𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒇𝒖𝒆 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂*\n\n*n𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒉𝒂𝒚𝒂 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔. 𝑫𝒊𝒔𝒄𝒖𝒍𝒑𝒆.`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler

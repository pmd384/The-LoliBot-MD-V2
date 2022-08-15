import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝑬𝒔𝒕𝒆 𝒆𝒔 𝒖𝒏 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒅𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '𝑪𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒅𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍 𝒂 𝒈𝒓𝒖𝒑𝒐𝒔',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', 
sourceUrl: `http://github.com/elrebelde21/The-LoliBot-MD'`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`✅ 𝑬𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒇𝒖𝒆 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 ${groups.length} 𝒈𝒓𝒖𝒑𝒐/𝚂*\n\n*𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒉𝒂𝒚𝒂 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔. 𝑫𝒊𝒔𝒄𝒖𝒍𝒑𝒆.`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler

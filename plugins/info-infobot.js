import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╭━━━━[ 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ]━━━━━⬣
┃[🤴🏻] 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[#️⃣] *𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤:*  *wa.me/5492266466080*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[✅] *𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙖𝙡:*  V2
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ [🎳] *𝙋𝙧𝙚𝙛𝙞𝙟𝙤:* *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🔐] *𝘾𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤:* *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🦜] *𝘾𝙝𝙖𝙩𝙨 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨:* *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[💡] *𝘾𝙝𝙖𝙩𝙨 𝙚𝙣 𝙩𝙤𝙩𝙖𝙡:* *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🚀] *𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙:* *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🎩] *𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨:* *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[🐢] *𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙:* *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[☑️] *𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙:*  ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃[❗] *𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙩:* ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 ]━━⬣
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://github.com/elrebelde21/The-LoliBot-MD'`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

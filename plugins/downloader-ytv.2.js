let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '𝑸𝒖𝒆 𝒆𝒔𝒕𝒂́ 𝒃𝒖𝒔𝒄𝒂𝒏𝒅𝒐? 𝑰𝒏𝒔𝒆𝒓𝒕𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒎𝒂́𝒔 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆/𝒍𝒊𝒏𝒌𝑫𝒆 𝒖𝒏 𝒗𝒊́𝒅𝒆𝒐 𝒅𝒆 𝒀𝒐𝒖𝒕𝒖𝒃𝒆*'
conn.reply(m.chat, `*⏳𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞𝙖𝙢𝙤𝙨 𝙨𝙪𝙨 𝙫𝙞𝙙𝙚𝙤..⏳*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝑫𝒋 𝑩𝒐𝒕',
body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD-V2`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
}
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
handler.limit = 1
export default handler

let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
𝙇𝙖𝙨 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚𝙨 #𝙟𝙖𝙙𝙞𝙗𝙤𝙩 #𝙗𝙤𝙩𝙨 #𝙨𝙚𝙧𝙗𝙤𝙩 #𝙨𝙪𝙗𝙗𝙤𝙩 #𝙜𝙚𝙩𝙘𝙤𝙙𝙚. 𝙉𝙤 𝙚𝙨𝙩𝙖𝙣 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 𝙚𝙣 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫  𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙝𝙖𝙘𝙚𝙧𝙩𝙚 𝙗𝙤𝙩 𝙞𝙣𝙩𝙚𝙣𝙩𝙖 𝙝𝙖𝙘𝙚𝙧𝙡𝙤 𝙫𝙤𝙨 𝙢𝙞𝙨𝙢𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙙𝙤 𝙥𝙤𝙣𝙚𝙧 #𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧𝙗𝙤𝙩  𝙮 𝙨𝙞 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙖𝙮𝙪𝙙𝙖 𝙝𝙖𝙗𝙡𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙤𝙬𝙣𝙚𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩

*—◉ 𝙿𝚄𝙴𝙳𝙴 𝙿𝚁𝙾𝙱𝙰𝚁 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙳𝙴𝚂𝙳𝙴 𝙲𝙴𝚁𝙾 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝙳𝙾 𝚄𝙽𝙾 𝙳𝙴 𝙻𝙾𝚂 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻𝙴𝚂 𝚀𝚄𝙴 𝙷𝙰𝚈 𝙴𝙽 𝙴𝙻 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫*
*◉ https://youtu.be/gh5NajZOTA8*`
let buttonMessage= {
'document': { url: `https://github.com/elrebelde21/The-LoliBot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/elrebelde21/The-LoliBot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/gh5NajZOTA8' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler


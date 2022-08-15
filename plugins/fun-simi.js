import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒉𝒂𝒃𝒍𝒂 𝒄𝒐𝒏𝒎𝒊𝒈𝒐\n\n*n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: ${usedPrefix + command} Hola bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
m.reply(json.success)}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler

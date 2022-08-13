import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙱𝙾𝚇𝙼𝙸𝙽𝙴 𝙷𝙾𝚂𝚃*
> Tutorial: https://youtu.be/eC9TfKICpcY
> Pagina Oficial: https://boxmineworld.com
> Dashboard: https://dash.boxmineworld.com/home
> Panel: https://panel.boxmineworld.com
> Soporte: https://discord.gg/84qsr4v 

------------------------------------

*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙰𝙲𝙸𝙳𝙸𝙲𝙽𝙾𝙳𝙴𝚂 𝙷𝙾𝚂𝚃*
> Tutorial: https://youtu.be/nbjvreJ0tUk
> Pagina: https://billing.acidicnodes.ml/register?ref=ADII104p
> Soporte: https://whatsapp.acidicnodes.com

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
*[❗] NO DISPONIBLE POR EL MOMENTO EL V2.[❗]*
(si quiere instalar atrave de termux hacerlo con la version anterio)

𝒔𝒊 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂𝒔 𝒂𝒚𝒖𝒅𝒂 𝒆𝒏𝒕𝒓𝒂 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕

📌 *https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*

 𝑶 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒎𝒆 𝒂𝒍 wa.me/5492266466080*
 𝒔𝒐𝒍𝒐 𝒑𝒐𝒓 𝒕𝒆𝒎𝒂 𝒅𝒆𝒍 𝒃𝒐𝒕

🔸 𝒏𝒆𝒄𝒆𝒔𝒊𝒕𝒂 2 𝒄𝒆𝒍𝒖 𝒔𝒐𝒍𝒐 𝒑𝒂𝒓𝒂 𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓 𝒆𝒍 𝑸𝑹
🔸 𝑰𝒏𝒔𝒕𝒂𝒍𝒂𝒓 𝒕𝒆𝒓𝒎𝒖𝒙 𝒅𝒆 𝑮𝒐𝒐𝒈𝒍𝒆

 𝒑𝒂𝒔𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 1*
 
🔸 termux-setup-storage
    (𝒍𝒆 𝒅𝒂𝒓 𝒆𝒍 𝒑𝒆𝒓𝒎𝒊𝒕𝒆)

🔸  apt update 

🔸  pkg upgrade 

🔸 pkg install git -y

🔸 pkg install nodejs -y

🔸 pkg install ffmpeg -y

🔸 pkg install imagemagick -y

🔸 pkg install yarn

🔸 git clone https://github.com/elrebelde21/The-LoliBot-MD

🔸  cd The-LoliBot-MD

🔸 npm install

🔸 yarn install 

🔸 npm install

🔸 npm update

🔸 ls

🔸 npm start 
 (𝒚 𝒂𝒄𝒂 𝒒𝒖𝒆 𝒗𝒂𝒏 𝒎𝒂𝒏𝒅𝒂 𝒆𝒍 𝑸𝑹 𝒕𝒆𝒏𝒆𝒓 𝒍𝒂  𝒐𝒑𝒄𝒊𝒐𝒏 𝒔𝒂𝒄𝒂 𝒖𝒏𝒂 𝒄𝒂𝒑𝒕𝒖𝒓𝒂 𝒚 𝒎𝒂𝒏𝒅𝒂𝒍𝒂  𝒂 𝒕𝒖 𝒐𝒕𝒓𝒐 𝒄𝒆𝒍𝒖 𝒚 𝒆𝒔𝒄𝒂𝒏𝒆𝒂)
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})   
}
handler.command = /^(instalarbot)/i
export default handler

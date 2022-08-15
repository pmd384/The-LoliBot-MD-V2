import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆, 𝒔𝒊 𝒏𝒐 𝒔𝒂𝒃𝒆 𝒄𝒖𝒂́𝒍 𝒆𝒔 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] 𝑽𝒆𝒓𝒊𝒇𝒊𝒒𝒖𝒆 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒆𝒍 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐, 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n\n𝑷𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒔𝒖 𝒏𝒖́𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 #myns*'
user.registered = false
m.reply(`*[ ✔ ] 𝑼𝒔𝒕𝒆𝒅 𝒚𝒂 𝒏𝒐 𝒆𝒔𝒕𝒂́ 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐(𝘼)`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler

let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? '❌ *𝑺𝒊𝒏 𝒆𝒔𝒕𝒂𝒓 𝒂𝒒𝒖𝒊 |' : '✅ *𝑺𝒊𝒈𝒐 𝒂𝒒𝒖𝒊 |  𝒀𝒆𝒔*'}]\n\n`
m.reply(`*𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙴𝙽 𝙻𝙾𝚂 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler

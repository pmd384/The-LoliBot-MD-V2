let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒇𝒖𝒆 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐🥳\n𝑨𝒉𝒐𝒓𝒂 𝒆𝒔𝒕𝒐𝒚 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆..')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒇𝒖𝒆 𝒃𝒂𝒏𝒆𝒂𝒅𝒐🤑 𝑵𝒐 𝒆𝒔𝒕𝒂𝒓𝒆 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒅𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒂')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler

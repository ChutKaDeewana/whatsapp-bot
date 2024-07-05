function help() {
    return `
┏ ❣ *SHINOMIYA KAGUYA BOT* ❣
╿
┷┯ ☾ Group Commands ☽
   ╽
   ┠❥ *!add 62858xxxxx*
   ┠❥ *!kick @tagmember*
   ┠❥ *!promote @tagmember*
   ┠❥ *!demote @tagadmin*
   ┠❥ *!mentionAll*
   ┠❥ *!adminList*
   ┠❥ *!ownerGroup*
   ┠❥ *!leave*
   ┠❥ *!linkGroup*
   ┠❥ *!delete [replyChatBot]*
   ┠❥ *!kickAll*
   ┠❥ *!NSFW [enable|disable]*
   ┠❥ *!welcome [enable|disable]*
   ╿
┯┷ ☾ Downloader Commands ☽
╽
┠❥ *!ytmp3 [linkYt]*
┠❥ *!ytmp4 [linkYt]*
┠❥ *!ig [linkIg]*
┠❥ *!fb [linkFb]*
╿
┷┯ ☾ Other Commands ☽
   ╽
   ┠❥ *!sticker*
   ┠❥ *!stickerGif*
   ┠❥ *!creator*
   ┠❥ *!neko*
   ┠❥ *!inu*
   ┠❥ *!jadwalShalat [area]*
   ┠❥ *!jadwalTv [channel]*
   ┠❥ *!cuaca [location]*
   ┠❥ *!tts [lang code] [text]*
   ┠❥ *!igStalk [@username]*
   ┠❥ *!wiki [query]*
   ┠❥ *!anime [query]*
   ┠❥ *!brainly [question] [.number]*
   ┠❥ *!loli*
   ┠❥ *!waifu*
   ┠❥ *!husbu*
   ┠❥ *!randomNekoNime*
   ┠❥ *!randomTrapNime*
   ┠❥ *!randomAnime*
   ┠❥ *!info*
   ┠❥ *!infoGempa*
   ┠❥ *!meme*
   ┠❥ *!quotemaker [|text|author|theme]*
   ┠❥ *!join [linkGroup]*
   ┠❥ *!quotes*
   ┠❥ *!quotesnime*
   ┠❥ *!wait*
   ┠❥ *!nulis [text]*
   ┠❥ *!donate*
   ┠❥ *!lirik [optional]*
   ┠❥ *!chord [query]*
   ╿
   ╿
   ╰╼❥ Send the command *!readme* to know the function and how to use the commands above, MUST READ!!.`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Fill in with a valid YouTube link without the “[” and “]” signs
Example: *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Fill in with a valid YouTube link without the “[” and “]” signs
Example: *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Fill in with a valid Instagram link without the “[” and “]” signs
Example: *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Fill in with a valid Facebook link without the “[” and “]” signs
Example: *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[area]* Fill in with a valid area without the “[” and “]” signs
Example: *!jadwalShalat Tangerang*

*[channel]* Fill in with a valid TV channel without the “[” and “]” signs
Example: *!jadwalTv Indosiar*

*[location]* Fill in with a valid location without the “[” and “]” signs
Example: *!cuaca tangerang*

*[lang code]* Fill in with a language code, e.g., *id*, *en*, etc., and *[text]* Fill in with the text you want to convert to voice, same as above without the “[” and “]” signs
Example: *!tts id Test*
Note: Max 250 characters

*[@username]* Fill in with a valid Instagram username without the “[” and “]” signs
Example: *!igStalk @duar_amjay*

*[|text|author|theme]* Fill in with text, author, and theme without the “[” and “]” signs
Example: *!quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Fill in with a valid WhatsApp group link without the “[” and “]” signs
Example: *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Fill in with text|title of the song lyrics, without the “[” and “]” signs
Example: *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `This bot is created with Node.js / JavaScript
Bot source code: https://github.com/mhankbarbar/whatsapp-bot
Bot Owner: wa.me/6285892766102
Author?: There's someone, but too lazy to put the name

Oh yes, this bot is free to use because I see many people selling similar bots, but this one is free.`
}
exports.info = info()
function snk() {
    return `Terms and Conditions of the *Shinomiya Kaguya* Bot
1. Your WhatsApp text and username will be saved on the server while the bot is active
2. Your data will be deleted when the bot is offline
3. We do not store images, videos, files, audio, and documents that you send
4. We will never ask you for personal information
5. If you find any Bugs/Errors, please report them directly to the Bot Owner
6. Whatever you command to this bot, WE WILL NOT BE RESPONSIBLE FOR IT!

Thanks!`
}
exports.snk = snk()
function donate() {
    return `Hello.. Want to donate?
    
If you want to donate, you can do so at:
OVO/PULSA/GOPAY: 085892766102
SAWERIA: https://saweria.co/donate/mhankbarbar

Thanks!`
}
exports.donate = donate()
function listChannel() {
    return `List of channels: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()

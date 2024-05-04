let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://github.com/PRINCE-GDS/THE-PRINCE-BOTraw/main/Assets/mp3/Audio5.mp3"
    let url = "https://wa.me/201022647804"
    let murl = "https://www.facebook.com/profile.php?id=100009554691220&mibextid=ZbWKwL"
    let hash = global.princebot
    let img = "https://telegra.ph/file/84ee4bc22ea38173b60ef.jpg"
    let num = "201022647804"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler

import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/moustafa011494/MR-MOSHIREF-BOT';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
╭⊱✫🛡️ⓂⓄⓈⒽⒾⓇⒺⒻ ⒷⓄⓉ🛡️✫⊱╮
│✫ - *📂Repository Name: 𝙼𝙾𝚂𝙷𝙸𝚁𝙴𝙵-𝙼𝙳*
│✫ - *📃Description: 💦𝙼𝙾𝚂𝙷𝙸𝚁𝙴𝙵-𝙼𝙳💦 SIMPLE CLEAN SUPER FAST MULTI DEVICE BOT WITH THE BUNDLES OF THE FEATURES 💌🛡️*
│✫ - *🛡️Owner: Moustafa Shiref *
│✫ - *⭐Stars: ${repoData.stargazers_count}*
│✫ - *💌Forks: ${repoData.forks_count}*
│✫ - *🌐 URL: https://www.facebook.com/profile.php?id=100009554691220&mibextid=ZbWKwL*
╰━━━━━━━━━━━━━━━━━╯
      `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'Rupee',
          amount1000: 10000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script', 'git', 'github'];

export default handler;

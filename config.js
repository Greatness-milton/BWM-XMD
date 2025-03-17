const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV246jOBD9F78mvdwJRGppIYTcCQm5r/bBgCEOYAg2Scgo/76iM73dGs3M9vJkGfvUqVOnyt8AyTFFE1SD7jdQlPgCGWqWrC4Q6AKziiJUgjYIIYOgC1pWy23pOC5M3Drdb3m+idJKHnoaGdxEb2xk+9XI2AzGkwH/Ch5tUFR+ioPfACJCThmaJx1kO5blK2uxztN6UolWZGCNRYm8v2e32rj14lfwaBAhLjGJ+8URZaiE6QTVLsTl1+jLU3fDrTFDkzPtsHBTQLay84k/0/zTyJCLRJS1odObzLbJ1+hvy+uMVpEzyIcz3HFGoc+ZZh0LjoQWZO4SLSNnbtHBLs6f9CmOCQpHISIMs/rLugfG8u7O+n7SU4+KjbZsgA+T4H6ZOWcntJyRTfnAHte3iU2/RlwXcp260bqUzQ4bW7To6cHBU7I54updEgqdoS32Fre+Q2afibvlu1eS/6O7YVzcq73c7I5G3uIPfItjtXSIg3BqqKJx6It91VRzfNxuRl+jf2rtJMru42V+7Bwue58gHJ/dYCq4szufYZNz7FH/ZFXKkn7Qh6wqf8dyLSaJvq6t6Cwd1wuZ3jVhmSyGqNDTTBGF5HhfxGRxvOy3ylVu1Zy6b1HBas1UpaddXWElDecR516yherdLM+WW4Zw7hmvbxklqB6FoCs82qBEMaashAznpNkTJaENYHjxUFAi9iYvCNVI50jaF+FVU3RXXPWP2p0f1Qdf9TKeP6ju2d4MhX1Er6+gDYoyDxClKBxiyvKyniFKYYwo6P71Vqkm6RJlOUNjHIIuECVR0yRRVQXlT/rH9QgZhUXxB0EMtEFU5tkMgS4rK9QGb+f1fk/SDFHUJFHkLb5vi7JqCUZPFSVTMCStyTB7xlzhDFEGswJ0hY4sCh2VF4TH321A0I097dMk3eQc4ZKyNamKNIfhu7fef8IgyCvCvJoEvWaBStDlP7YRY5jEtEmsIrAMjviCek0eoBvBlKJHG4ToggPU4IH8nszhgkYL+Rwr+mrc2Y7WntEId8zJ8wiP9I6MIvQShoL/IndU9OKHUH7RA1VHmqgjnVdAI8ezc5s7vzTSaJIe+q0kTc9yn55IdQ340FhOUgyf9n46AJUofFfZh0FSFas8QeQ3uFV63kxM72zaxi6KuKEyj7ONdsD3S/AJ9+ks0P32MS17edjgTbWVPtxbE9BUq4nzoxm6Ov+jHx7/at5cCBGDOKWgC3qTi1PvNavvlrrky4OBEcdGL25Efa/Re8s9LZ25TlZfTkG0mdIBWuTaiRjS2oPX+cG60f0sCEtXCux4bc1efwLSIBRhkhe7ex07mif25ryiCV6x3+srcct10u0hUQImbLgdOe/EfODmcnXx/ZXMua0BuajldrfLleVWqcfaHmZLmiN7YCxem2hPr3wO5o+MPbElMp7dTq28SsLDyjwrSpksSsaXl4ojt4zTHW+IZc2ccqMpNaqAZi1j6uOrKRfOfsfJ08XqHGRGeVUwXDq1GT+HwdswSr8/Avh7mz6dFWH0NlMJbCr0H7X57HH+0f4E8X1I/8JH5uF0P9BSloaC1zFJMnFHytUR+hm1soXmD6zhEN51ydzbxh08muYtUsiivMxAF0ASljkOQRukkDLjo01/0vl8pw2y2igKj0H23t3AaL6+2wGPfwA0QIwsfwgAAA==',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "Milton Greatness",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 23288326615",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


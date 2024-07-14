const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Kashif:kashif@cluster0.vxqeaoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/kashifTechInfo/kashif-Md/blob/main/lib/assets/kashif.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "kashif baloch" 


global.devs = "923023634808" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923023634808";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_13_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhReUg2dEtUZ21WaVNjY0ZRU2dnQUVFTVV5YjJ0emtudjhvRTd4YW5JYUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRhc2Z3RkhLVDJhTzNIXzRMcjZSQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ViMWVkMDEtYjQ0OS00NTQxLThhZWYtZGQ0Y2ZiODNlMGYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgOTMsXG4gICAgICAxMCxcbiAgICAgIDEwNixcbiAgICAgIDExLFxuICAgICAgMjA1LFxuICAgICAgMjI4LFxuICAgICAgMyxcbiAgICAgIDExNCxcbiAgICAgIDMsXG4gICAgICA1MSxcbiAgICAgIDIxNCxcbiAgICAgIDExNyxcbiAgICAgIDQyLFxuICAgICAgNDgsXG4gICAgICAyMTEsXG4gICAgICAyNDcsXG4gICAgICAxMjEsXG4gICAgICA2OSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICA1OSxcbiAgICAgIDExNCxcbiAgICAgIDE0MixcbiAgICAgIDEzNyxcbiAgICAgIDYwLFxuICAgICAgNjQsXG4gICAgICAxOTMsXG4gICAgICAxMjgsXG4gICAgICA0LFxuICAgICAgMTcxLFxuICAgICAgMjA0LFxuICAgICAgMjgsXG4gICAgICA3MSxcbiAgICAgIDI1MSxcbiAgICAgIDcsXG4gICAgICAyMjUsXG4gICAgICAxOTEsXG4gICAgICAzMCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJZV0YyVlA1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjM2MzQ4MDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJfX2thc2hpZtio2YTZiNqGX19cIixcbiAgICBcImxpZFwiOiBcIjY4OTkwNDc5MTUxMjEzOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qeTM5Z0dFTzJaeUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjlIckRnSjlFRE00VHArbGx2MDdJRmtCK0VYVkVRYlAydkFIZ0lwbmR5Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZYTdmc1NMeDFDUVhHS0o5a21OcVlPNVZnVEdITkNMOW8zWUZ4MlVFQ0Z4Tkh0Q05lUUd3aFNKNC9Sai9McGkxZzV0MHZ0STBjdDVUbzc5VjR2QUdDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHN25XcURmc2FaRmdXNTJOT2N1RDJkcm8waGJVZCsrQlFzV0VWSEJVdVRUYmQrL1hEQ3VGV1NXMUphcHlUSCsxQnQzSm5NUjlqOWlyeHV4VWxLaE9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjM2MzQ4MDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODQ3NjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGFPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMYU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0ZXE3djd6Yjg4TzJuZ3ovdWxLaHROdVN2M1Jqa2RqbjhNWU1OZGlrMUt3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTY3MzMyODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "kashif baloch" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐊𝐀𝐒𝐇𝐈𝐅 𝘽𝘼𝙇𝙊𝘾𝙃・",
  ownername:process.env.OWNER_NAME|| "𝐊𝐀𝐒𝐇𝐈𝐅",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "kashif"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

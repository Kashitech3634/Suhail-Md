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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_08_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQS90YS80WWVWcjJnYWV4aitFMTRndndXMWFDS3gwY0VmRnIycEdLc2IwST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGtLaGhFRW9Rb09BWUl0aERGZjd6d1wiLFxuICBcInBob25lSWRcIjogXCJjNWFkZDZjOS1mNDliLTQ4OTEtOTNjNC0wNWI0M2FiZjQ2ZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTY0LFxuICAgICAgMzEsXG4gICAgICAxNyxcbiAgICAgIDEzNCxcbiAgICAgIDIzOCxcbiAgICAgIDI0NixcbiAgICAgIDIwMCxcbiAgICAgIDQ2LFxuICAgICAgOTQsXG4gICAgICAxNzUsXG4gICAgICAyMjcsXG4gICAgICAyNDUsXG4gICAgICAxMjAsXG4gICAgICAxMDMsXG4gICAgICAxNyxcbiAgICAgIDIwOSxcbiAgICAgIDE2MyxcbiAgICAgIDIxMixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyNTMsXG4gICAgICAxMjQsXG4gICAgICAyMTYsXG4gICAgICAzNSxcbiAgICAgIDMxLFxuICAgICAgMTIzLFxuICAgICAgMjI4LFxuICAgICAgMjEsXG4gICAgICAxNDMsXG4gICAgICAxMzUsXG4gICAgICA1LFxuICAgICAgMTExLFxuICAgICAgODMsXG4gICAgICAyMDgsXG4gICAgICA2MSxcbiAgICAgIDI0NyxcbiAgICAgIDY4LFxuICAgICAgMTkxLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjVTWkE4QzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMzYzNDgwODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9fa2FzaGlm2KjZhNmI2oZfX1wiLFxuICAgIFwibGlkXCI6IFwiNjg5OTA0NzkxNTEyMTM6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT255MzlnR0VNYTZ6YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOOUhyRGdKOUVETTRUcCtsbHYwN0lGa0IrRVhWRVFiUDJ2QUhnSXBuZHljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNmcHRwN2xGeU9KQmlMa0JuM3pSUi9yakdpSW5ER3d0VXJSbGRKZndwQll2MWVCNWhzSzFkd0ZpeUVkazJzOHRub0xKbnVZVXh3bEQ3dDROUDUwMEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE3TGxxck9xaFplZndvN0lHeUFDQ0FnallsT0lzbUFFZDBsZWZXNXR5ZXhBb0RjNks0ajFhbUR3cEZKeU9sRlZhdm5aYXdNSnIrNXdSUnhrN1hWS0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMzYzNDgwODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MzM3MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1JMS5qc29uIjogIntcImtleURhdGFcIjpcInlSRXdQQWJuM1EyRHJ2alBqMFFueTRyU0c3QnhrTS9tdkJGT0lIN0g2YWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc5NjczMzI4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwOTMzNzEwMDMyXCJ9Igp9"  // PUT your SESSION_ID 


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

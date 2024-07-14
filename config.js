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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_14_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnSnhEZGtzVDEyUlB2K0dDNEFyV0ZTZHJaUTZJWVIwUkFiRndTSVFtWlR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBQnBnbTktalJsMnA2LXlleDJYUV93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmNzE4NTZiLWU1ZmMtNDUzNy1iNzUyLTU2MGExOGRhNjVhY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxMDUsXG4gICAgICAzLFxuICAgICAgMTQ0LFxuICAgICAgMTgyLFxuICAgICAgMjEwLFxuICAgICAgNTAsXG4gICAgICA4MixcbiAgICAgIDE1MyxcbiAgICAgIDIxNixcbiAgICAgIDI0OCxcbiAgICAgIDIxMixcbiAgICAgIDE5MSxcbiAgICAgIDQ0LFxuICAgICAgNzUsXG4gICAgICAxOCxcbiAgICAgIDIyMixcbiAgICAgIDQ3LFxuICAgICAgMTI2LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICA4OSxcbiAgICAgIDE3OSxcbiAgICAgIDE5MyxcbiAgICAgIDE5NSxcbiAgICAgIDI0NixcbiAgICAgIDIzMyxcbiAgICAgIDExMSxcbiAgICAgIDE4MCxcbiAgICAgIDIzNCxcbiAgICAgIDE5OSxcbiAgICAgIDgxLFxuICAgICAgMTM1LFxuICAgICAgMzIsXG4gICAgICA5MCxcbiAgICAgIDE0NCxcbiAgICAgIDEyMSxcbiAgICAgIDQ1LFxuICAgICAgMTM0LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1WMUxTU0xIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjM2MzQ4MDg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJfX2thc2hpZtio2YTZiNqGX19cIixcbiAgICBcImxpZFwiOiBcIjY4OTkwNDc5MTUxMjEzOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zeTM5Z0dFSVBLenJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjlIckRnSjlFRE00VHArbGx2MDdJRmtCK0VYVkVRYlAydkFIZ0lwbmR5Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDOGdNU2RPVUE2d0N3aElaaXkvVGNGWlEwMEtUVTNCSGkwY1EzN1JGdmRKb1MzaEl2b1JoTXVaWmNMMnBCcHZvVkRTUElKSWF6RGQzVVJpaDJiYW9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYT1lZaUt0eGQvMzJxRWtTTVI2cXIxUWRJN1dxWkpOQ3dUc0hCbExXZUdWZ2c0R3B2S2srcnpwcGJ2Qi82SmpMaURkNm1OaktrSDNDb1lka0FGYmhqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjM2MzQ4MDg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTUyMDcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUk2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNSTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOVHU2Y1ltaDNEL2l5TXpCd2ZuUlM2alBZYVBpV0hmNWphaURZQ1U2blVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTY3MzMyOTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NDczNjQ2NTFcIn0iCn0="  // PUT your SESSION_ID 


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

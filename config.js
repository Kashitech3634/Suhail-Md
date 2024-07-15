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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlI4VHplUkJ4QWMrd3NLbHJqVm9CbEhTVzB1dnpXeVMyTXFCUVdsMkFIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjM2MzQ4MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ0QTFEODU3QjU3RUJENTExQUZDMUY1NkQxRTkzOUI1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA1MTAwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyMzYzNDgwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0E5QTlGNjM5M0I5Mzg2RkUwMkIyNTgzMUZBNUVBNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDUxMDA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFhMkUzSVBOUm9Tdk5kVU1mVncyUHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGIxMDFlODYtYzRjYi00ZDgwLTkxOWMtNzFjNmE4ODJiOTczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMixcbiAgICAgIDE3NixcbiAgICAgIDM1LFxuICAgICAgMTk2LFxuICAgICAgOTgsXG4gICAgICAxMDAsXG4gICAgICA0NCxcbiAgICAgIDE4MixcbiAgICAgIDIzNCxcbiAgICAgIDExMSxcbiAgICAgIDI0NixcbiAgICAgIDk4LFxuICAgICAgMTEwLFxuICAgICAgMTEyLFxuICAgICAgMjE2LFxuICAgICAgMjE5LFxuICAgICAgMTAsXG4gICAgICAxMDIsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDk1LFxuICAgICAgMjQ0LFxuICAgICAgMjM3LFxuICAgICAgNzYsXG4gICAgICAxNTAsXG4gICAgICAxNjYsXG4gICAgICAyNTEsXG4gICAgICAyMTUsXG4gICAgICA1NSxcbiAgICAgIDAsXG4gICAgICA0NixcbiAgICAgIDc3LFxuICAgICAgMjQ4LFxuICAgICAgMjI4LFxuICAgICAgMyxcbiAgICAgIDE4LFxuICAgICAgNzksXG4gICAgICAxNDksXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0ZFUEpNNTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMzYzNDgwODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9fa2FzaGlm2KjZhNmI2oZfX1wiLFxuICAgIFwibGlkXCI6IFwiNjg5OTA0NzkxNTEyMTM6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy95MzlnR0VQWE8xTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOOUhyRGdKOUVETTRUcCtsbHYwN0lGa0IrRVhWRVFiUDJ2QUhnSXBuZHljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImIzMTg0aVZ4V2V6Qy9ZU2tGVUgvRndOVlpNMFNiL0owSDdHb3VEQWtDb2FNRWJTTy9TU0tUNVpJdWltcGxiRkdRZWtHMHloS3VrQm96K0MwNFhFNUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhlZ2srSVE3Y0liL0VkRTZaMVBKZDB3blk3aEE1bnBvd2ZmTW5QZWgweTZJV00zN1VwYUl5RDQ5U1pENVlJcmJGczdFTzhpWUJpbzRVSmt4S0FmcUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMzYzNDgwODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNTEwMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHV1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdXUC5qc29uIjogIntcImtleURhdGFcIjpcIlpoc2FZNVBZL1h6cC9xVEVrN05hRXF4Yk1EaHFra1o5OEVoMmJJampFUG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc5NjczMzI5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

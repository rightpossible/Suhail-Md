const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://right:right123@cluster0.jpw1e2h.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_45_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJUUDRkZzdneHJ1N3ZwcE10eEo4ZzJ4UnkvWU1KT0R0d3Ira1FROS9OK2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4NTI2MjEzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzhGRjM1MEVEMEMzNUM3NkNGNjg3NjczRkYxOTJGODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjE4MzUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF6Ykd0VXkwUksyLUpRUS1EUkF0ekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY3ZjRlM2YtZDYxNC00MDk5LWFmMWYtYzFhNmZiNzY2MmY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTk3LFxuICAgICAgMTA2LFxuICAgICAgODgsXG4gICAgICAzMyxcbiAgICAgIDg5LFxuICAgICAgMTg1LFxuICAgICAgMTg3LFxuICAgICAgMjQ2LFxuICAgICAgMTksXG4gICAgICA3NyxcbiAgICAgIDE5MCxcbiAgICAgIDI4LFxuICAgICAgMTU2LFxuICAgICAgNCxcbiAgICAgIDI0OCxcbiAgICAgIDE3MCxcbiAgICAgIDc0LFxuICAgICAgMTQzLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDExNyxcbiAgICAgIDc1LFxuICAgICAgMjI3LFxuICAgICAgMzIsXG4gICAgICAyNDcsXG4gICAgICAyMDksXG4gICAgICAxNSxcbiAgICAgIDE5NCxcbiAgICAgIDIyMyxcbiAgICAgIDIxNCxcbiAgICAgIDI5LFxuICAgICAgMzUsXG4gICAgICA0NCxcbiAgICAgIDI0OCxcbiAgICAgIDg2LFxuICAgICAgMTkxLFxuICAgICAgMTYsXG4gICAgICAyMTksXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqNXkwUVFxWmI5c3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU281RU9vTzJNYTU4OEdMc2ZOaTFOSUpUaHFEOWYxNHZzVVlGSHJCZ2JSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYdWNZekVaclZTTlFQMXk1WlpPU0N0S2pZeUxkSlBuQ3h4NHdiM0xmN0F4cW9haVZuZDFXUGUwcFVBZzh1b0VtdmgvTURHbkwvZG8wcDlweWEzT1pEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBWERQeHRGM1NKVG5qWXlYaFptbHl5M2FNR0FNVkZwNzJTaFBycFdweUhYMHAxSXUwdTNhbGFmTS95VHdmU1hyZ1ZzY25nWmVxVjdIZ2xURWNNdnpoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODUyNjIxMzk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDYzODk4NzE0OTM2NjoxM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODUyNjIxMzk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2MTgzNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLYnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUticC5qc29uIjogIntcImtleURhdGFcIjpcIkFLV0VLQU9oRjdXTllKVndrcWgwV3kwc3oyVTg4TlZXSHVjUy8wdldISXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzODUwNjMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MTgzNTA1MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919899492573";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_37_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaK2kvNFR6cHZwK2U3aXBJRFlKMURiU2VsdUJ3QmJCWHF1ZTM1eEJDckNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4V1ZQNngwR1FjV2xNQU1NS3NMcDJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1OGU2ZWU0LWFhM2YtNGUzZS05NmNkLWExOTA2YTU5NzkwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE4MyxcbiAgICAgIDE0NCxcbiAgICAgIDIsXG4gICAgICAxMTUsXG4gICAgICAxMzIsXG4gICAgICAwLFxuICAgICAgMTM0LFxuICAgICAgMTgsXG4gICAgICAyMDAsXG4gICAgICAyMzYsXG4gICAgICAxNjcsXG4gICAgICAxMzYsXG4gICAgICA3LFxuICAgICAgMjQxLFxuICAgICAgMjU1LFxuICAgICAgMjQ3LFxuICAgICAgMjIzLFxuICAgICAgMTAsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMjQ2LFxuICAgICAgMjMsXG4gICAgICA0MSxcbiAgICAgIDE1MSxcbiAgICAgIDIxOCxcbiAgICAgIDIyOSxcbiAgICAgIDEzMCxcbiAgICAgIDIzNixcbiAgICAgIDEzMixcbiAgICAgIDEyOSxcbiAgICAgIDIxNixcbiAgICAgIDIwNSxcbiAgICAgIDUzLFxuICAgICAgMTU2LFxuICAgICAgMTMwLFxuICAgICAgMjUsXG4gICAgICA0MixcbiAgICAgIDI1LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFBKeTlRQ0VJKzBnY0lHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXNnp4ZFRPeHhBQndHRzN6ZEVRQ1NQVEo2R0VlaFVGa0QyQ2FUYlI2cFRZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtpWDl5cEJoTWVxcExRU09MeDhVTGNFa0tnZGlrb0ZEVGJuUVlDeG44UEZqOWJ4dnppQkNtUmg0NzVESGJjWGFkdkdzenBhakEyUnZQdTBTakpjcEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhqZmxPT0p4VDFadC9zR0ptczJzczBGSCs1YkpPM2RzN1M1c3llT0NBOFQwQTVnd2U3MVhRWUo1TXdQTmQ1YkVwOEV3TGd6U0x2bDRzdkpxQXdKTER3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODk5NDkyNTczOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDUyNDczNjM4MjE3MTY6MjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk4OTk0OTI1NzM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0OTA0NzgyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlqZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWpkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNlRCc2NWVDljcHEyUWEzZGhoRUNHdlhlRDZOeGFqVHArRTBQck1Ub2wyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlqZS5qc29uIjogIntcImtleURhdGFcIjpcIi9PRng3QjZJNVNzcEsvZDdHa3Q0VGlXc3dwcmJrc0pINjVqb1U2eDVwVFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4ODkwNjEwMDUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWpmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1FodHkvdnhIYVlCQ2lieGFUUXZvelh4K3VKbllBVXoxaW8wakJ3M2toOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlqZy5qc29uIjogIntcImtleURhdGFcIjpcIjl4cW5LNVgzTGNiYkpNQ1pSWmNORmk0amdiWE9FM1FkTW9uZkdNR3ZBY2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4OTMxMTkxMzEyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWpoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM1hLY2VDV1VxWWl1R2s4OE5QSENQWWFoRldpVEVXNk1EWmR3dUt0UnU1Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlqaS5qc29uIjogIntcImtleURhdGFcIjpcImNSNTNYSktwRWdvZzFhZkhBNmtPcmtNcHJ2OW1pNEF1ZWpGQnF1R0VqcDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4OTYwNTc1MzY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWpqLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVVEKzhNUmJ5MjdJRVhsYUtnUXNTVVk1VGZJR1JvNXBFb2k4MVd4aU4zST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlqay5qc29uIjogIntcImtleURhdGFcIjpcImVyYjRkUGEzdUhBQTdSNTFrWjYxY2xGRWhsOVBOdm5wNXhyb0xiR0hIdzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE0MjY5OTM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ4OTYyNDU1NzU3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWpsLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWhNSi9rQ0dWdzlvdk1tekp3ZVdCY2hIWHZRd3RiT0prOUwwODJvazRqaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTQyNjk5MzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDg5Njg1Mjk3NTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJam0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjWXdpdTdxZUVxV1VzenNXaXFxd3VJMG1QY1lMTGwrNlJvQnpXWGhkRnNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNDI2OTkzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5MDA0ODU3NDk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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

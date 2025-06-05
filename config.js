const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="PAKISTAN,INDIA."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "SACHIN!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919899492573";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_11_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlkxa2pUK2F2dzczUHlBRXZsZ0YxdEIzYzVKZ0NQcTVqN1lPZXh3YlNoeGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRHT1Z3MmdHUzVpZVRENDBtdVhrTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjFlYTU1YjktNzMzZS00N2MxLWJmMTQtNDlkNmRiNjEwYjdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDMwLFxuICAgICAgMjcsXG4gICAgICA4NCxcbiAgICAgIDU5LFxuICAgICAgMTkxLFxuICAgICAgMTYxLFxuICAgICAgMTExLFxuICAgICAgMjQ4LFxuICAgICAgMTMsXG4gICAgICA0LFxuICAgICAgMzMsXG4gICAgICAxMzMsXG4gICAgICAyMTAsXG4gICAgICA3NyxcbiAgICAgIDUsXG4gICAgICAxMyxcbiAgICAgIDI1NCxcbiAgICAgIDI1MyxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICA1NCxcbiAgICAgIDIxNixcbiAgICAgIDE3MixcbiAgICAgIDE5NyxcbiAgICAgIDEwNixcbiAgICAgIDE4MSxcbiAgICAgIDIzMixcbiAgICAgIDc1LFxuICAgICAgMjQ4LFxuICAgICAgMTQ3LFxuICAgICAgMTQ1LFxuICAgICAgMTgzLFxuICAgICAgNTMsXG4gICAgICAxMTAsXG4gICAgICAxNDksXG4gICAgICAxNDUsXG4gICAgICAzNixcbiAgICAgIDE1LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUEp5OVFDRU9xVmhNSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlc2enhkVE94eEFCd0dHM3pkRVFDU1BUSjZHRWVoVUZrRDJDYVRiUjZwVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0tyQ3gyL01POC9HanoydTJQSXFhUmFVU3pzNVBIa2NQOXFGdDcxZWFXSWVzaWtoS0lsOFBaYUx1c29pK3VsaHU1RkI3WHpkeFR5bHZNQUhvSkM1Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibXBob3Y4RzlwNndjMVdqRWxIRkJXeHJXeklrMTlJdG82WUZPMW8xVzNxSWU2YW1wQ29nMUpPaGVjaUpicUtETWdqRDZsWHBoSjFSTmplcG96bzA1aGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk4OTk0OTI1NzM6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NTI0NzM2MzgyMTcxNjozMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTg5OTQ5MjU3MzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5MDkzMTAyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sachin ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "sachin",
  packname: process.env.PACK_NAME || "𝐒𝚫𝐂𝚮𝚰𝚴",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "𝐒𝚫𝐂𝚮𝚰𝚴🍁",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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

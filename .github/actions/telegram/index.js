// const core = require("@actions/core");
// const TelegramBot = require('node-telegram-bot-api');


// const token =  core.getInput("telegram_bot_token");

// const bot = new TelegramBot(token, {polling: false});

// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];

//   bot.sendMessage(chatId, resp);
// });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, 'Received your message');
// });

// core.setOutput("response", `Workflow ejecutado correctamente tras el último commit. Saludos ${core.getInput("person")}.`);

let core = require("@actions/core");
let TelegramBot = require('node-telegram-bot-api');

let token = core.getInput("TokenBot");
let chatid=core.getInput("ChatId");
let name = core.getInput("Name");

let bot = new TelegramBot(token, {polling: false});

try {
    bot.sendMessage(chatid, `Workflow ejecutado correctamente tras el último commit. Saludos ${name}`);
  } catch (error) {
    core.setFailed(error.message);
  }

console.log("Mensaje enviado con exito")
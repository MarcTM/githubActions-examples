let core = require("@actions/core");
let TelegramBot = require('node-telegram-bot-api');
let github = require("@actions/github")
github = github.context.payload;

const token =  core.getInput("telegram_bot_token");
const bot = new TelegramBot(token, {polling: false});
const name = core.getInput("person");

try {
    bot.sendMessage(core.getInput("telegram_chat_id"), `Workflow ejecutado correctamente tras el último commit. Saludos ${name} \n 
            Autor: ${github.head_commit.author.name} \n
            Email Autor:${github.head_commit.author.email} \n
            Committer: ${github.head_commit.committer.name} \n 
            Email Committer: ${github.head_commit.committer.email} \n
            Message Committer : ${github.head_commit.message}
            Repository: ${github.head_commit.url}`);
    
} catch (error) {
    core.setFailed(error.message);
}

console.log("Mensaje enviado con exito")
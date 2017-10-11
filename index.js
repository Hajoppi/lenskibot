'use strict';

const TeleBot = require('telebot'),
      token = require('./config');

const bot = new TeleBot(token)

var jagulaarit = 0;

var startTime = new Date(2017, 9, 12, 5, 30);

function difference(){
    const dif = startTime - Date.now();
    return parseInt(dif/1000);
}

bot.on('/juoJaguar', function(msg){
    jagulaarit += 1;
    return msg.reply.text("Jaguraaleja juotu: "+ jagulaarit)
});

bot.on('/aikaaLenskiin', function(msg){
    var seconds = difference();
    return msg.reply.text("Aikaa lenskiin "+seconds + " sekuntia");
});

bot.on('/start', msg => {
    let replyMarkup = bot.keyboard([
        ['/juoJaguar', '/aikaaLenskiin'],
    ], {resize: true});
    return bot.sendMessage(msg.from.id, 'started', {replyMarkup});
});

bot.start();

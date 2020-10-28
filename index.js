const Discord = require('discord.js'); 
const bot = new Discord.Client();

const token = process.env.RASHODA_TOKEN;

const prefix = 'bj';

/*Main Code*/
bot.on('ready', () => {
    console.log("HURRAY!!!! Online.");
});

bot.on('message', (msg) => {
    let args = msg.content.split(' ');
    if (args[0]!= prefix) return; 
    let reply = '';
    for(let i=1; i<args.length;i++)
        reply+=" " + args[i];
    msg.channel.send(reply);
});

bot.login(token);


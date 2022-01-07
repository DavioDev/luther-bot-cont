const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const handler = require(`wax-command-handler`);
const prefix = "-"
const { readdirSync } = require("fs");








client.login("-=-");


client.on("ready", () => {
  let commandConfig = new handler.CommandConfig(
    client,
    prefix,
    true,
    "aguarde %TIME% segundos para enviar o comando `-%CMD%` novamente",
    "você não tem a permissão `%PERM%` para executar este comando",
    "o uso correto deste comando é `"+ prefix +"%USAGE%`");

handler.setup(commandConfig);


    for(const file of readdirSync(__dirname + `/commands`).filter(file => file.endsWith('.js'))) {
        const command = require(`./commands/${file}`);

        handler.addCommand(command);
    }
    for(const file of readdirSync(__dirname + `/names`).filter(file => file.endsWith('.js'))) {
      const command = require(`./names/${file}`);

      handler.addCommand(command);
  }

    
console.log("Luther esta pronto");
    client.user.setActivity("-help", {type:"PLAYING"});
});

client.on("message",  (message) =>{
  let gifs = [
    "https://tenor.com/view/amy-poehler-whats-good-whats-up-dude-gangsta-gif-10998022",
    "https://tenor.com/view/eae-eaecasada-gif-18619523",
    "https://tenor.com/view/im-here-woody-did-you-call-me-toy-story-gif-10595757",
    "https://tenor.com/view/hello-penguin-penguins-hi-wave-gif-5441146",
    "https://tenor.com/view/tube-man-i-have-arrived-gif-11731501",
    "https://tenor.com/view/elvis-cheguei-grupo-sparkles-bubbles-gif-16805552",
    "https://tenor.com/view/telephone-talk-to-me-answe-me-waiting-gif-12191976"
  ];
  let gif = Math.round((gifs.length - 1) * Math.random()); 
  if (message.mentions.has(client.user)) {
    message.channel.send( ' :warning:  Opa, digite `-help` ou `-ajuda` para ver os comandos  :warning:   ' );
    message.channel.send(gifs[gif]);
}

  console.log(message)
  if(message.author.bot) return
  
  handler.messageReceived(message);

  if(message.content.toLocaleLowerCase() == "luther"){
    message.channel.send(" 👋 Ola, estou pronto para ser usado!")
    message.channel.send(gifs[gif]);
  }   
})
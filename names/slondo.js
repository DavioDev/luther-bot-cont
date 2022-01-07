module.exports = {
    name: "slondo",
    description: "nome slondo em emoji",
    aliases: [  ""  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
        message.channel.send("🇸 🇱 🇴 🇳 🇩 🇴")
    message.react("😁")
   } 
  };

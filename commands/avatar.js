

module.exports = {
  name: "avatar",
  description: "mostra avatar",
  aliases: [ "avat", "perfil"  ],
  cooldown: 3,
  permissions: [ "SEND_MESSAGES" ],
  async execute(client, message, args){
      const {MessageEmbed} = require("discord.js")

      const user = message.mentions.users.first() || message.author;
      const avatar = user.displayAvatarURL({ size: 512 }); 

      const embed = new MessageEmbed()
      .setColor(0xff6600)
      .setImage(avatar)
      .setAuthor(  "👀 Avatar de " + user.tag + " 👀")
      .setTitle( "clique na imagem para baixa-la");
      message.channel.send(embed);
 } 
};
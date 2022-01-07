module.exports = {
    name: "dev",
    description: "mostra meu dev",
    aliases: [ "dono", "desenvolvedor" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){

  
        const { MessageEmbed } = require('discord.js');
      

        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle('<a:check_no:928722517357649970> ' +  "|" +  "  Metodos de contato  ")
        .setDescription("!Davi!#3755" + ("\nthech.nasa.dj@gmail.com"))


       
        
       message.channel.send(embed)
        
       
     
    } 
};


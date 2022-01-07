module.exports = {
    name: "rafael",
    description: "aciona a palavra rafael",
    aliases: [  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    message.channel.send(":regional_indicator_r: :a: :regional_indicator_f: :a: :regional_indicator_e: :regional_indicator_l: ")
    message.react("😁")
  }};
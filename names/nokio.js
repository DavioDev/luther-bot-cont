module.exports = {
    name: "nokio",
    description: "aciona a palavra nokio",
    aliases: [    ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    message.channel.send(":regional_indicator_n: :regional_indicator_o: :regional_indicator_k: :regional_indicator_i: :regional_indicator_o:  ")
    message.react("😁")
  }};
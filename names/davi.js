module.exports = {
    name: "davi",
    description: "aciona a palavra davi",
    aliases: [    ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    message.channel.send(":regional_indicator_d: :regional_indicator_a: :regional_indicator_v: :regional_indicator_i:  ")
    message.react("😁")
  }};
module.exports = {
    name: "cat",
    description: "aciona a palavra cat",
    aliases: [  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    message.channel.send(" :regional_indicator_c: :regional_indicator_a: :regional_indicator_t: ")
    message.react("😁")
  }};
module.exports = {
    name: "ping",
    description: "mostra ping",
    aliases: [ "qualidade", "ping", "net" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
      
        let gifs = ["https://tenor.com/view/lag-slap-gif-5256373", "https://tenor.com/view/lag-gaming-ping-gif-15955613", "https://tenor.com/view/lag-cat-walking-not-moving-forward-gif-15348457"];
        let gif = Math.round((gifs.length - 1) * Math.random());
        
     message.channel.send( '<a:check_no:928733300971941918>' +  ` Latencia de  ${Date.now() - message.createdTimestamp}ms. Latencia da API de ${Math.round(client.ws.ping)}ms ` );
     message.channel.send(gifs[gif]);
     
    } }
;
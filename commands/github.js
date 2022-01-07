module.exports = {
    name: "github",
    description: "mostra meu github",
    aliases: [ "git" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    
      
        message.channel.send("https://github.com/DavioDev/Luther-Bot")
        let gifs = [
            "https://media3.giphy.com/media/xT1XGVp95GDPgFYmUE/giphy.gif?cid=ecf05e473xmmisrc94mv004ceioaf8a4kdbnapye9zpfr20f&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/LQiKrDoaX6SnXa0OKy/giphy-downsized-large.gif",
            "https://media.giphy.com/media/1SxvQjwrD3pMRhIDBR/giphy.gif",
            "https://tenor.com/view/ronaldo-ronaldo-united-ronaldo-manchester-ronaldo-man-utd-ronaldo-manchester-united-gif-23044067",
            "https://tenor.com/view/oklm-aucalme-calma-cristiano-ronaldo-cr7-gif-5029148",
            "https://tenor.com/view/cristiano-ronaldo-soccer-champion-gif-14715693",
            "https://tenor.com/view/cristiano-ronaldo-ronaldo-manchester-ronaldo-united-ronaldo-manchester-united-cristiano-ronaldo-manchester-united-gif-23658163"

        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
        message.channel.send(gifs[gif]);
    } }
;
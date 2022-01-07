module.exports = {
    name: "telecena",
    description: "telecena",
    aliases: [ "" ],
    usage: "num 5",
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    
        const num = Math.round(100 * Math.random())
        let acerto = "Acertou"
        let gifs = [
            "https://tenor.com/view/silvio-santos-telesena-telessena-tele-gif-9428922",
            "https://tenor.com/view/dragging-almost-there-crawling-gif-11733051",
            "https://tenor.com/view/cats-animals-reaction-wow-surprised-gif-4076137",
            "https://tenor.com/view/fausto-silva-faustop-meme-errou-err%C3%B4-gif-12916526",
            "https://tenor.com/view/faustao-silva-fausto-churrasqueira-controle-gif-9324361"
        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
        
        if(num != parseInt(args[0]))
            acerto = "Errou, o numero éra.. "+num
    
        message.channel.send(`${message.author} `+ acerto)
        message.channel.send(gifs[gif]);
     
        
     
    } }
;


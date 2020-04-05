const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `%`
    if (msg.content.substring(0, 1) != '%') 
        return;
    var args = msg.content.substring(1).split(' ');
    var cmd = args[0];
       
        args = args.splice(1);
    
    // execute cmd
    switch (cmd) {
        // %help - list commands!
        case 'help':
            msg.reply(`%help - return a list of commands \n %ping - pong! \n %pong - ping? \n %time - get the current date and time \n %expanddong - try your luck expanding the dong!`);
        break;

        // %ping -> pong!
        case 'ping':
            msg.reply('pong!');
        break;

        // %pong -> ping?
        case 'pong':
            msg.reply('ping?');
        break;
        
        // %time -> Today's date is %{calendarDate} and it is currently %{currTime}
        case 'time':
            let date = new Date();
            let calendarDate = date.getMonth() + '/' + date.getDate() + '/' + date.getYear();
            let currTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            msg.reply(`Today's date is ${calendarDate} and it is currently ${currTime}`);
        break;

        // %whoisbestgirl -> Lilit-chan, {best_girl.jpg}
        case 'whoisbestgirl':
            msg.reply('Lilith-chan', {files:['https://imgur.com/WGIneNh.jpg']});
        break;

        // %expanddong -> ???
        case 'expanddong':
            let expanded = Math.floor((Math.random() * 4) + 1);
            switch (expanded) {
                case 1:
                    msg.reply('dOnG eXpAnDeD wRoNg', {files:['https://imgur.com/R6dEviR.jpg']});
                break;
                case 2:
                    msg.reply('rAn OuT oF dOnGs', {files:['https://imgur.com/TT91MWZ.jpg']});
                break;
                case 3:
                    msg.reply('this should not expand... bUt iT dOeS', {files:['https://imgur.com/vBbqTs5.jpg']});
                break;
                case 4:
                    msg.reply('mAxImUm eXpAnSiOn', {files:['https://imgur.com/WpdhFn6.jpg']})
                break;
            }
        break;
    }

    // if (msg.content === 'ping') {
    //     msg.reply('pong');
    // }
});

client.login(auth.token);
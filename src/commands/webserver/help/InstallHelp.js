const Command = require('../../../models/Command');
const colors = require('colors');


const helpMessage = `
${colors.yellow("-----WebServer Help-----")}
${colors.grey("Commands:")}
     ${colors.cyan("pti setup help - Webserver help command.")}
     ${colors.cyan("pti setup - Setup Pterodactyl.")}
${colors.yellow("-----------------------")}`;

class WebServerHelp extends Command{

    constructor(){
        super("help", "pti webserver help");
    }

    runCommand(args){
        console.log(helpMessage);
    }

}

module.exports = WebServerHelp;
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const TOKEN= process.env.TOKEN
client.on('messageCreate', (msg) => {
 if(msg.author.bot) return;
    msg.reply({content: "Namashkar Bot ke bot me apka swagat hai"})
  console.log(msg.content);
});

client.on("interactionCreate",(interaction) => {
    console.log(interaction);
    if(interaction.commandName==='ping')
    interaction.reply("PONG!!!");
    else if(interaction.commandName==='tareef')
    interaction.reply("tum husn pari tum janey jahan tum sabse haseen tum sabse jawaan");
})
client.login("MTIwNDE0NzAyNTI2NDc3MTE1NA.GQj-Ql.2umDK69Ejf6xeH05Zs6yfHbbAFphGC3UR9oQoo")
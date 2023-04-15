const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1094670045268938932')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/developer') // or your yt url
    .setState('Recording')
    .setName('percocet')
    .setDetails('Testing Text')
    .setStartTimestamp(Date.now()) // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://discord.com/channels/@me/1071303188575170662/1094418712725041262') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('an funny big text') //Text when you hover the Large image
    .setAssetsSmallImage('https://discord.com/channels/1082428167551188992/1091033505984688228/1095205661228417125) //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Your Small Text') //Text when you hover the Small image
    .addButton('Button 1', 'https://e-z.bio/developer')
    .addButton('Button 2', 'https://youtube.com/mrnekrozyt')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/

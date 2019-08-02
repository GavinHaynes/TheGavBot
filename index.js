const Discord = require('discord.js');
const opus = require('opusscript');
const bot = new Discord.Client();

const token = 'NTc2ODg3NDUyNjE1MDQ5MjE4.XNdCrg.dmXICAnDviZIRAN2sYfP42rUzZw';

var status = 'Good'

var version = 'The Gav Bot is in version **0.0.1**';

var prefix = '!'

const usedCommandRecently = new Set();

var nuclearCode = 12345678901029459667584674605368754908272468970273496079532582

var botClient = bot.user

var interval = 5
///////////////////////////////////////////////Variables above

bot.on('ready', () => {
    if (bot.guilds.size > 1) {
        console.log(`${bot.user.username} is now online on ${bot.guilds.size} servers as of ${bot.readyAt}.`)
    } else {
        console.log(`${bot.user.username} is now online on ${bot.guilds.size} server as of ${bot.readyAt}.`)
    }
    // General Chatting ID is '576606259260686357'

    let statuses = [
        "Gavin SUFFER!",
        "Cody get BANNED!",
        "Dane lose brain cells",
        "For UR MOM",
        "Remmy DESTROY!",
        "Dorito Juice videos",
        "Minecraft servers die...",
        "something",
        "a game.",
        "kids scream",
        "Merrick get suspended",
        "",
        "Cl█r█ ███ ██k█"
    ]

    let status = statuses[Math.floor(Math.random() * statuses.length)];
    if (status === "a game.") {
        bot.user.setActivity(status, { type: 'PLAYING' }).catch(console.error);
    } else if (status === "kids scream") {
        bot.user.setActivity(status, { type: 'LISTENING' }).catch(console.error);
    } else if (status === "") {
        bot.user.setActivity();
    } else {
        bot.user.setActivity(status, { type: 'WATCHING' }).catch(console.error);
    }



})






bot.on('message', msg => {
    if (msg.content == "The Gav Bot is STUPID") {
        msg.reply('What did you just say about me? **-6,000 FRIEND POINTS**');
    }
})

///////////////////////////////////////Early Testing
bot.on('message', msg => {
    if (msg.content == "The Gav is cool") {
        msg.channel.send(':ok_hand:');
    }
})

bot.on('message', msg => {
    if (msg.content == "The Gav is BEANS") {
        msg.channel.send('NEVER...... AGAIN!!!!');
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('You have been pinged...');
            break
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'SUMMONTHEGAV':
            message.channel.send('No');
            break

        case 'Yeet':
            message.channel.startTyping('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            message.channel.sendMessage('Look away now, before its too late...');
            break

        case ('info'):
            if (args[1] == '[Version]') {
                message.channel.sendMessage(version);

            } else {

            }
            break;


    }
})



//////////////////////////////////////////////////////////////////////////////////////////Mid Testing

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'status':
            const embed = new Discord.RichEmbed()
                .setTitle('User Information')
                .addField('Username', message.mentions.users.first().username)
                .setColor(0x00F9FC)
                .addField('Discord Tag', message.mentions.users.first().tag)
                .addField('Date Created', message.mentions.users.first().createdAt)
                .addField('Last Message', message.mentions.users.first().lastMessage)
                .setThumbnail(message.mentions.users.first().avatarURL)
            if (message.mentions.users.first().discriminator == '3633') {
                message.channel.sendMessage('Ultimate Supremacy')
                embed.setFooter('I am the Gav... I am cool.')
            }

            if (message.mentions.users.first().discriminator == '0623') {
                message.channel.sendMessage('YOUR STATUS IS BIG UR MOM')
                embed.setFooter('"I am big gay because I like to suck Cody butt cheeks... Dont tell anyone."')
            }



            if (message.mentions.users.first().discriminator == '0076') {
                embed.setFooter('"ME. WANT. MINION BUTT CHEEKS!"')
            }
            embed.addField('Currently using...', message.guild.name)
            message.channel.sendEmbed(embed)
            break;
    }
})
///////////////////////////////////////////////////////////////////////////////////Attachements
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "joining-hub")
    if (!channel) return;


    member.guild.createRole({
        name: member.user.username,
        color: '#531a40',
        permissions: []
    }).then(function (role) {
        member.addRole(role);
    })


    if (member.user.discriminator == '0623') {
        let memberRole = member.guild.roles.find('name', 'Peasants [SUSPENDED]');
        member.addRole(memberRole);
    }

    if (member.user.discriminator == '7226' || '9845' || '6893' || '4178' || '9194' || '2489') {
        let memberRole = member.guild.roles.find('name', 'Friends');
        member.addRole(memberRole);

    }

    channel.send(`Welcome to the server, ${member}! Make sure to read the rules channel and wait to get approved for a rank. Remember that Gavin has the right to do anything necessary if you do not abide by the rules.`)
    member.send('Hello, please read the rules channel of the server, or read them below.');
    member.send(`Swearing:       Swearing/ Cursing is fine, as long as it is not directed at anybody
    Please leave a spoiler on what are considered tier 2 curse words.`)
    member.send(`Stupid Drama...
    Ahh, stupid drama...
I sense some things very familiar with this one...
Anyways, try to keep it cool with the drama. Of course, I'm not going to ban you or anything for like blowing up a little cockroach someone built in Minecraft, but just be respectful.
Respect people's stuff and don't ruin others fun.
In other words, don't be a jerk and everything will work out.`)
    member.send(`Refrain from posting emoticons, or things on the line of genitalia on this server. It may result in a kick, or even ban depending on the detail in the emoticon/image.`)
    member.send(`Other General Rules
Do not abuse, or attempt to abuse possible loopholes in these rules.
If you are caught doing so purposefully, you will most likely get a one week suspension, or a permanent ban.
Depending on the offense done.
[IF YOU DO NOT KNOW WHAT A 'SUSPENSION' IS, IT IS A SPECIAL ROLE APPLIED TO YOU THAT LOCKS YOU OUT OF EVERYTHING EXCEPT FOR THE RULES AND THE JOINING HUB. YOU CANNOT SEND MESSAGES OR JOIN/TALK IN VOICE CHANNELS EITHER]`)
    member.send('Read the rules channel for some extra details if you want, but remember this...')
    member.send('Watch out for Cody.');
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "alpha-bot-testing")
    if (!channel) return;

    channel.send(`Welcome to the server, ${member}! Make sure to read the rules channel and wait to get approved for a rank. Remember that Gavin has the right to do anything necessary if you do not abide by the rules.`)
})

////////////////////////////////////////////Attachments thing
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'CodyWantsMyBones':
            message.channel.send({ files: ['./CodyWantsYourBonesXD.png'] })
            break;
        case 'RevealtheSecrets':
            message.channel.send({ files: ['./Secrets.txt'] })
            break;
        case 'UNLIMITEDREM':
            message.channel.send({ files: ['./UnlimitedRem.mp4'] })
            break;



    }
})


bot.on('message', message => {
    if (message.content == '***EGG***') {
        message.channel.send({ files: ['./egg.mp3'] });
    }
})


bot.on('message', message => {
    if (message.content == 'Shut up') {
        message.delete();
        message.channel.send({ files: ['./SHUT UR FACE.mp3'] })
    }
})


bot.on('message', message => {
    if (message.content == 'shut up') {
        message.delete();
        message.channel.send({ files: ['./SHUT UR FACE.mp3'] })
    }
})
////////////////////////////////////////////Attachments thing


bot.on('message', message => {
    if (message.content == "***SUMMON THE GAV!!!***") {

    }
})

///////////////////////////////////////////////////////////////////////////Role commands
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ban':
            if (!message.member.roles.find(r => r.name === "T H E  G A V")) return message.channel.send('`You do not have the valid permissions for this command.`')
            const user1 = message.mentions.users.first();

            if (user1) {
                const member1 = message.guild.member(user1);
                if (member1) {
                    member1.ban(args[2]).then(() => {

                        message.reply(`The user '${user1.username}' was successfully banned.`).then(msg => msg.delete(120000));
                    }).catch(err => {
                        message.reply('Could not ban ' + `'` + (args[1]) + `'` + ' because the Gav Bot does not have valid permissions.');
                        console.log(err);
                    });
                } else {

                }
            } else {
                message.channel.send('The user must be defined, or the user does not exist.')
            }
    }
}
)



//////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'kick':
            if (!message.member.roles.find(r => r.name === "T H E  G A V")) return message.channel.send('`You do not have the valid permissions for this command.`')
                .then(msg => msg.delete(3000))
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick(args[2]).then(() => {

                        message.channel.send(`The user '${user.username}' was successfully kicked.`).then(msg => msg.delete(60000));

                    }).catch(err => {
                        message.reply('Could not ban ' + `'` + (args[1]) + `'` + ' because the Gav Bot does not have valid permissions.');
                        console.log(err);
                    });
                } else {

                }
            } else {
                message.channel.send('`The user must be defined, or the user does not exist.`')
            }
            break;
        case 'spam':
            if (!message.member.roles.find(r => r.name === "T H E  G A V")) return message.channel.send('`You do not have the valid permissions for this command.`')
                .then(msg => msg.delete(3000))
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')

            break;

        case ('deleteAll'):
            if (!message.member.user.discriminator === 3633) return message.channel.send('No.');
            message.channel.send('Deleting all recent messages...');
            message.channel.messages.deleteAll();

            break;
        case ('delete'):
            if (!message.member.roles.find(r => r.name === "T H E  G A V")) return message.channel.send('`You do not have the valid permissions for this command.`');
            message.delete();

            if (!args[1]) return message.channel.send('`Error, please define a second argument!`');


            if (!args[1] == 0) {
                message.channel.bulkDelete(args[1]);

                message.channel.send('Deleted ' + '**' + (args[1]) + '**' + ' messages')
            } else {
                let deletedMessages = (args[1] + 1);
                message.channel.send('`Cannot delete `' + ' ' + (args[1]) + ' ' + '`messages`')

            }

            break;


        case 'Kick':
            if (!message.member.roles.find(r => r.name === "Moderators")) return message.channel.send('`You do not have the valid permissions for this command.`')
                .then(msg => msg.delete(3000))
            const user1 = message.mentions.users.first();

            if (user1) {
                const member1 = message.guild.member(user1);
                if (member1) {
                    member1.kick(args[2]).then(() => {

                        message.channel.send(`The user '${user1.username}' was successfully kicked.`).then(msg => msg.delete(60000));
                    }).catch(err => {
                        message.reply('Could not ban ' + `'` + (args[1]) + `'` + ' because the Gav Bot does not have valid permissions.');
                        console.log(err);
                    });
                } else {

                }
            } else {
                message.channel.send('The user must be defined, or the user does not exist.')
            }
            break;




        ////////////////////////////////Spam Thing
        case 'Spam':
            if (!message.member.roles.find(r => r.name === "Moderators")) return message.channel.send('`You do not have the valid permissions for this command.`')
                .then(msg => msg.delete(3000))
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')
            message.channel.send(':eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant::eggplant:')

    }
}
)

/////////////////////////////////////////////////////Cooldowns.
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'Delete':
            if (usedCommandRecently.has(message.author.id)) {
                //Doesn't go through
                message.reply('Shut up...')
            } else {
                ////If goes through
                if (!message.member.roles.find(r => r.name === "Moderators" || "Friends")) return message.channel.send('`You do not have the valid permissions for this command.`')
                    .then(msg => msg.delete(3000))
                if (!args[1]) return message.channel.sendMessage('`Error, please define a second argument!`');
                message.channel.bulkDelete(args[1]);
                message.channel.sendMessage('Deleted ' + '**' + args[1] + '**' + ' messages')
                    .then(msg => msg.delete(3000))

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 300000)
            }
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'banMe':
            message.channel.send(`Okay, I'll gladly do so!`);
            const user3 = message.author
            if (user3) {
                member3 = message.guild.member(user3);
                if (member3) {
                    member3.ban('You requested a ban from the Gav Bot!').then(() => {
                    }).catch(err => {
                        message.reply('The Gav Bot could not ban you because the Gav Bot does not have valid permissions...');
                        console.log(err);
                    });
                } else {

                }
            } else {

            }
    }
}
)


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'role':


    }
})

bot.on('message', message => {
    if (message.content == 'DM me') {
        message.member.send('Okay, what do you want from me, ***PEASANT!!!***');
    }
})

bot.on('message', message => {
    if (message.content == 'THE GAV BOT IS ULTIMATE GAY') {
        const user6 = message.mentions.users.first();

        if (user6) {
            const member6 = message.guild.member(user1);
            if (member6) {
                member1.ban(args[2]).then(() => {

                    message.reply(`HA, GET REKD NOOB!`).then(msg => msg.delete(120000));
                }).catch(err => {
                    message.reply('I tried...');
                    console.log(err);
                });
            } else {

            }
        } else {
            message.channel.send('The user must be defined, or the user does not exist.')
        }
    }
}
)



bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

})






bot.on('message', message => {
    if (message.content == '||minion buttcheek||') {
        message.delete()
        message.channel.send('`The Gav does not appreciate that`').then(message.delete(120000));
    }
})




bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'help':
            if (message.member.roles.find(roles1 => roles1.name === "Friends" || "T H E  G A V" || "Moderators") || message.author == message.guild.owner) {

                message.channel.send('Help is on the way!');
                message.channel.bulkDelete(2, 3000);

                message.author.send('`The commands are listed below:`');
                message.author.send('`The prefix is`' + `'!'`);
                message.author.send('-------------------------Prefixless commands')
                message.author.send('`The Gav Bot is STUPID`');
                message.author.send('`The Gav is cool`');
                message.author.send('`The Gav is BEANS`');
                message.author.send('`***EGG***`');
                message.author.send('`Shut up`');
                message.author.send('`THE GAV BOT IS THE ULTIMATE GAY`');
                message.author.send('`||minion buttcheek||`');
                message.author.send('`DM me`');
                message.author.send('------------------------Prefix Commands')
                message.author.send('`spam`');
                message.author.send('`banMe`');
                message.author.send('`delete`');
                message.author.send('`kick`');
                message.author.send('`ban`');
                message.author.send('`UNLIMITEDREM`');
                message.author.send('`CodyWantsMyBones`');
                message.author.send('`RevealtheSecrets`');
                message.author.send('`status`');
                message.author.send('`info [Version]`');
                message.author.send('`Yeet`');
                message.author.send('`ping`');
                message.author.send('`SUMMONTHEGAV`');
                message.author.send('`die`');
                message.author.send('`join`');
                message.author.send('`leave`');
                message.author.send('`help`');
                message.author.send('`speak`');
                message.author.send('`lock`');
                message.author.send('`leaveServer`');
                message.author.send('`move`');
                message.author.send('`playPlaylist`');
                message.author.send('------------------------Playlists [MAKE SURE TO PUT THE PLAYLIST NAME AS THE SECOND WORD IN THE \'PLAYPLAYLIST\' COMMAND!]');
                message.author.send('`Minecraft`');
                message.author.send('`Doki Doki Literature Club (Got bored, okay?)`');
                message.author.send('`Earrape`');
                message.author.send('`For any further assistance with the Gav Bot, please contact the bot owner, or one of it\'s developers.`');
            }
    }
})



bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'die':
            message.react('🤔')
            message.channel.send('Check your DMs...');
            message.author.send('YOU ARE FREAKING BIG STUPID!!!');
    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    var argument = (args[1]);
    if (message.content == nuclearCode) {
        message.guild.owner.send(message.author.username + ' just sent a nuke request in your server, ' + `'` + message.guild.name + `'`);
        message.guild.owner.send('To accept the nuke request, please enter the code in ' + message.guild.name + ': ' + nuclearCode).then(message.delete(10000))
        interval = 30000;
        console.log('Nuke command attempt made by: ' + message.author.username);
        console.log('Their Discord discriminator: ' + message.author.discriminator);



    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'AcceptRequest':
            if (message.member.roles.find(r => r.name === "T H E G A V" || message.guild.owner == message.author)) {
                message.delete();
                message.channel.send('The end is near... The nukes are about to initiate...');

                interval = 30000;
                setTimeout(() => {
                    if (message.guild.owner.lastMessage == nuclearCode) {
                        console.log('Command executed. Nuke command initiating soon...');
                        message.guild.owner.send('Command executed. Nuke command initiating soon...');

                    }

                }, interval);
            }

    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");



    switch (args[0]) {
        case 'editCode':
            if (message.member.hasPermission('ADMINISTRATOR')) {
                if (!(args[1])) {
                    return;
                } else {
                    nuclearCode = (args[1]);
                    message.delete();
                    message.author.send('Officially changed the nuclear code to ' + '||' + nuclearCode + '||');
                }
            }

    }
})





///////////////////////Cody Status Thing Here
bot.on('', () => {
    //The Chat Room's ID is 576606258690392074
    if (bot.user.client.guilds.has('The Chat Room')) {
        const server = bot.guilds.find('The Chat Room');
        const cody = server.client.users.find('Delete this#0076');
        if (cody.client.on == true) {
            botClient.send('Cody is ONLINE!', 576606259260686357);
        }
    }
})
//////////////////////End


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case '':
            '`Invalid command, please state a second argument`'
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    if (message) {

        if (!args[0] == '!spam' || '!banMe' || '!delete' || '!kick' || '!ban' || '!UNLIMITEDREM' || '!CodyWantsMyBones' || '!RevealtheSecrets' || '!status' || '!info' || '!Yeet' || '!ping' || '!SUMMONTHEGAV' || '!die') {
            return;
        }



    }
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "joining-hub")
    if (!channel) return;

    //The Cod's discriminator is 0076
    if (member.user.discriminator == 0076) {
        member.addRole('The Cod');
    }

})

//send command. Will remain a comment for now...
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'send':
            if (!args[1]) {
                return;
            } else {
                message.delete();

            }
    }
})




bot.on('message', message => {
    if (message.content == ":middle_finger:") {
        message.delete();
        message.author.send('It is understandable that you may be angry, but please be nice. You can contact the server owner if you have any problems.');
    }
})

bot.on('message', message => {
    if (message.channel.type == Discord.DMChannel) {
        message.channel.send('You cannot make commands here');
    }
})




////////////////////////////////////////////////////////////////////////////////////////////Joining/leaving voice channels

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");


    switch (args[0]) {
        case 'join':
            const voiceChannel = message.member.voiceChannel
            if ((args[1])) {
                /*console.log("Username of command 'join': " + message.member.user.username);
                message.channel.send('Joining channel with ID ' + (args[1]));*/

            } else {
                console.log("Username of command 'join': " + message.member.user.username);
                if (!message.member.voiceChannel) {
                    return message.channel.send('`Cannot join a voice channel that does not exist`');
                } else {
                    message.member.voiceChannel.join();
                    message.channel.send('`Joining...`');
                }

            }

    }
})



//Playlist 0 below

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'playPlaylist':
            if (args[1] == 0) {
                if (!message.member.roles.find(r => r.name === "Friends" || "Moderators" || "T H E  G A V") || message.author == message.guild.owner || message.author.discriminator === 6869) return message.channel.send('Cannot play playlist 0, because you do not have the valid permissions to play audio files within voice channels')
                if (!message.member.voiceChannel) return message.author.send('You must be in a voice channel to make this action!');
                let voiceChannel = message.member.voiceChannel
                console.log(`Command 'playPlaylist' run by: ${message.member.user.username}| Their corresponding discriminator is ${message.author.discriminator}`);
                voiceChannel.join();
                /*let dispatcher = voiceChannel.connection.playFile('./egg.mp3');

                dispatcher.on('end', end => {
                    let dispatcher0 = voiceChannel.connection.playFile('./');
                    dispatcher0.on('end', end => {

                        let dispatcher1 = voiceChannel.connection.playFile('./');

                        dispatcher1.on('end', end => {
                            let dispatcher2 = voiceChannel.connection.playFile('./');

                            dispatcher2.on('end', end => {
                                let dispatcher3 = voiceChannel.connection.playFile('./');

                                dispatcher3.on('end', end => {
                                    let dispatcher4 = voiceChannel.connection.playFile('./');

                                    dispatcher4.on('end', end => {
                                        let dispatcher5 = voiceChannel.connection.playFile('./');

                                        dispatcher5.on('end', end => {
                                            voiceChannel.leave();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })*/
            }
    }
})

//Playlist 0 above




//Playlist Minecraft below

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'playPlaylist':
            if (args[1] == 'Minecraft') {
                if (!message.member.voiceChannel) {
                    message.channel.send('`Cannot play this playlist because you are not in a voice channel!`');
                    console.log(`Attempt made by ${message.member.user.username} for command 'playPlaylist Minecraft'. Their corresponding discriminator is ${message.member.user.discriminator}`);
                    return;
                } else {
                    let voiceChannel = message.member.voiceChannel

                    let dispatcher001 = voiceChannel.connection.playFile('./Revenge.mp3');

                    dispatcher001.setVolume(0.14);

                    dispatcher001.on('end', end => {
                        let dispatcher = voiceChannel.connection.playFile('./calm1.ogg');

                        dispatcher.setVolume(0.14);

                        dispatcher.on('start', start => {
                            console.log(`Command 'playPlaylist Minecraft' run by user ${message.member.user.username}. Thier corresponding discriminator is ${message.member.user.discriminator}`);
                        })

                        dispatcher.on('end', end => {
                            let dispatcher1 = voiceChannel.connection.playFile('./');

                            dispatcher1.setVolume(0.14);

                            dispatcher1.on('start', start => {
                                console.log(`Skipping Soundtrack 'calm2.ogg'`);
                                message.channel.send('`Error playing track \'calm2\'`');
                                message.channel.send('`Skipping track \'calm2\'`');
                            })

                            dispatcher1.on('end', end => {
                                let dispatcher2 = voiceChannel.connection.playFile('./calm3.ogg');

                                dispatcher2.setVolume(0.14);

                                let dispatcher3 = voiceChannel.connection.playFile('./creative1.ogg');

                                dispatcher3.setVolume(0.14);


                                dispatcher3.on('start', start => {
                                    console.log(`Playing Soundtrack 'creative1.ogg'`);
                                    message.channel.send('`Playing track \'creative1.ogg\'`').then(message.delete(bot.user.lastMessage, 5000));
                                })


                                dispatcher3.on('end', end => {
                                    setTimeout(() => {
                                        let dispatcher4 = voiceChannel.connection.playFile('./creative2.ogg');

                                        dispatcher4.setVolume(0.14);


                                        dispatcher4.on('start', start => {
                                            console.log(`Playing Soundtrack 'creative2.ogg'`);
                                            message.channel.send('`Playing track \'creative2.ogg\'`').then(message.delete(bot.user.lastMessage, 5000));
                                        })


                                        dispatcher4.on('end', end => {
                                            let dispatcher5 = voiceChannel.connection.playFile('./creative3.ogg');

                                            dispatcher5.setVolume(0.14);

                                            dispatcher5.on('start', start => {
                                                console.log(`Playing Soundtrack 'creative3.ogg'`);
                                                message.channel.send('`Playing track \'creative3.ogg\'`')
                                            })



                                            dispatcher5.on('end', end => {
                                                setTimeout(() => {
                                                    let dispatcher6 = voiceChannel.connection.playFile('./creative4.ogg');

                                                    dispatcher6.setVolume(0.14);

                                                    dispatcher6.on('start', start => {
                                                        console.log(`Playing Soundtrack 'creative4.ogg'`);
                                                        message.channel.send('`Playing track \'creative4.ogg\'`').then(message.delete(bot.user.lastMessage, 5000));
                                                    })



                                                    dispatcher6.on('end', end => {
                                                        let dispatcher7 = voiceChannel.connection.playFile('./creative5.ogg');

                                                        dispatcher7.setVolume(0.14);

                                                        dispatcher7.on('start', start => {
                                                            console.log(`Playing Soundtrack 'creative5.ogg'`);
                                                            message.channel.send('`Playing track \'creative5.ogg\'`').then(message.delete(bot.user.lastMessage, 5000));
                                                        })



                                                        dispatcher7.on('end', end => {
                                                            setTimeout(() => {
                                                                let dispatcher8 = voiceChannel.connection.playFile('./creative6.ogg');

                                                                dispatcher8.setVolume(0.14);

                                                                dispatcher8.on('start', start => {
                                                                    console.log(`Playing Soundtrack 'creative6.ogg'`);
                                                                    message.channel.send('`Playing track \'creative6.ogg\'`').then(message.delete(bot.user.lastMessage, 5000));
                                                                })



                                                                dispatcher8.on('end', end => {
                                                                    voiceChannel.leave();
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }, 10000);
                                })

                            })
                        })
                    })
                }
            }
    }
})


//Playlist 'Minecraft' above




bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'playPlaylist':
            if (args[1] == "doki" && (args[2]) == "doki") {
                if (message.member.voiceChannel) {
                    if (!message.member.voiceChannel.connection) {
                        message.member.voiceChannel.join();
                    } else {
                        if (usedCommandRecently.has(message.author.id)) return message.channel.send('`You are currently in a cooldown, please wait 15 minutes to use this command!`');
                        let voiceChannel = message.member.voiceChannel
                        let dispatcher = voiceChannel.connection.playFile('./');

                        dispatcher.on('start', start => {
                            usedCommandRecently.add(message.author.id);
                            console.log(`Command 'playPlaylist doki doki' ran by ${message.member.user.username}. Their corresponding discriminator is ${message.member.user.discriminator}`);
                            setTimeout(() => {
                                usedCommandRecently.delete(message.author.id);
                            }, 900000);
                        })

                        dispatcher.on('end', end => {
                            let dispatcher0 = voiceChannel.connection.playFile('./01 Doki Doki Literature Club!.mp3');

                            dispatcher0.on('start', start => {
                                dispatcher0.setVolume(0.14);
                                message.channel.send('`Playing track \'Doki Doki Literature Club!\'`')
                                console.log('Playing track \'Doki Doki Literature Club!\'');
                            })

                            dispatcher0.on('end', end => {
                                let dispatcher1 = voiceChannel.connection.playFile('./Ohayou Sayori!');

                                message.channel.send('`Skipping track \'Ohayu Sayori!\'`')
                                console.log('Skipping track \'Ohayu Sayori!\'');

                                dispatcher1.setVolume(0.14);
                                dispatcher1.on('end', end => {
                                    let dispatcher2 = voiceChannel.connection.playFile('./03 Dreams Of Love and Literature.mp3');

                                    message.channel.send('`Playing track \'Dreams Of Love and Literature\'`')
                                    console.log('Playing track \'Dreams Of Love and Literature\'');

                                    dispatcher2.setVolume(0.14);
                                    dispatcher2.on('end', end => {
                                        setTimeout(() => {
                                            let dispatcher3 = voiceChannel.connection.playFile('./04 Okay, Everyone!.mp3');

                                            message.channel.send('`Playing track \'Okay, Everyone!\'`')
                                            console.log('Playing track \'Okay, Everyone!\'');

                                            dispatcher3.setVolume(0.14);
                                            dispatcher3.on('end', end => {
                                                let dispatcher4 = voiceChannel.connection.playFile('./05 Play With Me.mp3');

                                                message.channel.send('`Playing track \'Play With Me\'`')
                                                console.log('Playing track \'Play With Me\'');

                                                dispatcher4.setVolume(0.14);
                                                dispatcher4.on('end', end => {
                                                    let dispatcher5 = voiceChannel.connection.playFile('./06 Poem Panic!.mp3');

                                                    message.channel.send('`Playing track \'Poem Panic\'`')
                                                    console.log('Playing track \'Poem Panic\'');

                                                    dispatcher5.setVolume(0.14);
                                                    dispatcher5.on('end', end => {
                                                        let dispatcher6 = voiceChannel.connection.playFile('./07 Daijoubu!.mp3');

                                                        message.channel.send('`Playing track \'Daijoubu!\'`')
                                                        console.log('Playing track \'Daijoubu!\'');

                                                        dispatcher6.setVolume(0.14);
                                                        dispatcher6.on('end', end => {
                                                            let dispatcher7 = voiceChannel.connection.playFile('./08 My Feelings.mp3');

                                                            message.channel.send('`Playing track \'My Feelings\'`')
                                                            console.log('Playing track \'My Feelings\'');

                                                            dispatcher7.setVolume(0.14);
                                                            dispatcher7.on('end', end => {
                                                                let dispatcher8 = voiceChannel.connection.playFile('./09 My Confession.mp3');

                                                                message.channel.send('`Playing track \'My Confession\'`')
                                                                console.log('Playing track \'My Confession\'');

                                                                dispatcher8.setVolume(0.14);
                                                                dispatcher8.on('end', end => {
                                                                    let dispatcher9 = voiceChannel.connection.playFile('./10 Sayo-nara.mp3');

                                                                    message.channel.send('`Playing track \'Sayo-nara\'`')
                                                                    console.log('Playing track \'Sayo-nara\'');

                                                                    dispatcher9.setVolume(0.14);
                                                                    dispatcher9.on('end', end => {
                                                                        let dispatcher10 = voiceChannel.connection.playFile('./');

                                                                        message.channel.send('`Skipping track \'Just Monika\'`')
                                                                        console.log('Skipping track \'Just Monika\'');

                                                                        dispatcher10.setVolume(0.14);
                                                                        dispatcher10.on('end', end => {
                                                                            voiceChannel.leave();
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })

                                            //Continue code from here
                                        }, 10000);
                                    })
                                })
                            })
                        })
                    }

                }
            }


    }
})





bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'playPlaylist':
            if (args[1] == "earrape") {
                if (!message.member.voiceChannel.connection) {
                    if (!message.member.voiceChannel) return;
                } else {
                    let voiceChannel = message.member.voiceChannel
                    let dispatcher = voiceChannel.connection.playFile('./Yeet.ogg');

                    dispatcher.on('start', start => {
                        console.log(`Command 'playPlaylist earrape' ran by user ${message.member.user.username}. Their corresponding discriminator is ${message.member.user.discriminator}`);
                        message.channel.send('`Playing track \'Yeet\'`');
                        console.log('Playing track \'Yeet\'');
                    })

                    dispatcher.on('end', end => {
                        let dispatcher1 = voiceChannel.connection.playFile('./Jake Screaming.ogg');

                        dispatcher1.on('start', start => {
                            message.channel.send('`Playing track \'Jake Screaming\'`');
                            console.log('Playing track \'Jake Screaming\'');
                        })

                        dispatcher1.on('end', end => {
                            //Continue the loop here.
                            message.channel.send('`Playing track \'egg\'`');
                            console.log('Playing track \'egg\'');
                            let dispatcher2 = voiceChannel.connection.playFile('./Hungry Man Earrape Slow');

                            dispatcher2.on('end', end => {
                                message.channel.send('`Playing track \'Hungry Man Earrape Slow\'`');
                                console.log('Playing track \'Hungry Man Earrape Slow\'');

                                let dispatcher3 = voiceChannel.connection.playFile('./');

                                dispatcher3.on('end', end => {
                                    message.channel.send('`Playing track \'Gav Pineapples But Cool\'`');
                                    console.log('Playing track \'Gav Pineapples But Cool\'');

                                    let dispatcher4 = voiceChannel.connection.playFile('./Gav Pineapples But Cool.ogg');

                                    dispatcher4.on('end', end => {
                                        message.channel.send('`Playing track \'DORITOS\'`');
                                        console.log('Playing track \'DORITOS\'');

                                        let dispatcher5 = voiceChannel.connection.playFile('./DORITOS.ogg');

                                        dispatcher5.on('end', end => {
                                            message.channel.send('`Playing track \'I CANT STOP\'`');
                                            console.log('Playing track \'I CANT STOP\'');

                                            let dispatcher6 = voiceChannel.connection.playFile('./I CANT STOP.ogg');

                                            dispatcher6.on('end', end => {
                                                message.channel.send('`Playing track \'Dying\'`');
                                                console.log('Playing track \'Dying\'');

                                                let dispatcher7 = voiceChannel.connection.playFile('./Dying.mp3');

                                                dispatcher7.on('end', end => {
                                                    message.channel.send('`Playing track \'Clop\'`');
                                                    console.log('Playing track \'Clop\'');

                                                    let dispatcher8 = voiceChannel.connection.playFile('./Clop.ogg');

                                                    dispatcher8.on('end', end => {
                                                        message.channel.send('`Playing track \'S T O R A G E\'`');
                                                        console.log('Playing track \'S T O R A G E\'');

                                                        let dispatcher9 = voiceChannel.connection.playFile('./S T O R A G E.mp3');

                                                        dispatcher9.on('end', end => {
                                                            message.channel.send('`Playing track \'Cody Croak\'`');
                                                            console.log('Playing track \'Cody Croak\'');

                                                            let dispatcher10 = voiceChannel.connection.playFile('./Cody Croak.ogg');

                                                            dispatcher10.on('end', end => {
                                                                message.channel.send('`Playlist Finished. Leaving voice channel`');
                                                                voiceChannel.leave();
                                                                message.channel.send('`You can make me rejoin at any time by using the \'!join\' command!`');
                                                                console.log('---------------------------------------------------------------End of playlist log');
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
            }
    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'speak':
            if (bot.voiceConnections.first) {
                let voiceChannel = message.member.voiceChannel

                voiceChannel.connection.setSpeaking();
                console.log(`Command 'speak' ran by ${message.member.user.username}. Their corresponding discriminator is ${message.member.user.discriminator}`);

                let dispatcher = voiceChannel.connection.playFile('./ME SPEAK.mp3');

                dispatcher.setVolume(0.50);

                dispatcher.on('end', end => {
                    return;
                })


                setTimeout(() => {
                    voiceChannel.connection.setSpeaking(false);
                }, 5000);
            }
    }
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'lock':
            if (message.author.discriminator === 3633) return message.channel.send('`You do not have valid permissions for this command`');
            let lockedUser = message.mentions.users.first();
            let lockUser = message.mentions.members.first();

            if (lockedUser) {
                message.delete(10000);
                bot.on('message', message => {
                    if (message.author == lockedUser) {
                        message.delete();
                        if (lockUser.voiceChannel) {
                            lockUser.setMute();
                        }
                    }
                })
            }
    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'leaveServer':
            if (!message.author == message.guild.owner) return;
            message.channel.send('Goodbye, fellow server members...');
            message.guild.leave();
    }
})


bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");



    switch (args[0]) {
        case 'leave':
            if (message.member.voiceChannel) {
                if (!message.member.roles.find(r => r.name === "T H E  G A V") || message.author == message.guild.owner) return message.channel.send('`You do not have valid permissions for this command!`');
                message.member.voiceChannel.leave();
                message.channel.send('Fine...');
            }


    }

})




//////////////////////////////////////////////////////////////////////////////////////////

bot.on('guildMemberRemove', member => {
    member.send('Why did you leave the server? If you want then you can DM Gavin and he may improve on the things you specify in the future! If you were kicked, and you think the action was done unfairly - fill out this form below! https://forms.gle/E9e5kLp2xMHSKRtJ8');

    /*interval = 10
    setInterval(function(check) {
        if (!member.lastMessage == null) {
            var message = member.lastMessage
            bot.user.createDM('T H E G A V#3633');
            bot.user.send(message);
        }

    }, interval)
    */
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");


    switch (args[0]) {
        case 'move':
            let user = message.mentions.members.first();
            if (user) {
                if (!(args[1]) && (args[2])) return;
                if (user.voiceChannel) {
                    user.setVoiceChannel((args[2])).catch(console.error);
                    if (message.member.voiceChannel == (args[2])) return message.channel.send('Successfully moved')
                } else {
                    return message.channel.send('`User must be connected to a voice channel to make this action!`');
                }
            }
    }

})



bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    let reason = args.join(" ").slice(22);

    let rUser = message.mentions.users.first();

    switch (args[0]) {
        case 'report':
            if (!rUser) return message.author.send('You must specify a user to report!');

            message.delete();
            console.log(`Report made by ${message.author.username} at ${message.createdAt}. The reason specified states... ${reason}`);

            let report = new Discord.RichEmbed()
                .setTitle('Report')
                .setDescription('Report made by ' + message.author.username)
                .setColor('#ff0000')
                .addField('User Reported', `${rUser.username} with a discriminator of ${rUser.discriminator} and ID of ${rUser.id}.`)
                .addField('Report created by', `${message.author.username}`)
                .addField('Reason', reason);


            message.channel.send(report);
            message.guild.owner.send(`A report has been made by ${message.author.username} for actions to be taken on ${rUser}, and his/her reason states ${reason}`);




    }

})



/*bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case 'terminate':
            if (!message.author.discriminator === 3633) return message.author.send('`This command is restricted to only those who own this bot.`');
            

    }
})*/


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'playlistContent':
            if (args[1] == 'doki' && (args[2]) == 'doki') {
                message.author.send('`These are the playlist contents of the Doki Doki Literature Club! Soundtrack`');
                message.author.send('> 01 Doki Doki Literature Club!');
                message.author.send('> 02 Ohayou Sayori!');
                message.author.send('> 03 Dreams Of Love and Literature');
                message.author.send('> 04 Okay, Everyone!');
                message.author.send('> 05 Play With Me');
                message.author.send('> 06 Poem Panic');
                message.author.send('> 07 Daijoubu!');
                message.author.send('> 08 My Feelings');
                message.author.send('> 09 My Confession');
                message.author.send('> 10 Sayo-nara');
                message.author.send('> 11 Just Monika');
            }
    }
})



bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'lockAll':
            if (!message.author == message.guild.owner) return message.channel.send('`You do not have the valid permisssions for this command!`')
            let lockedUser = message.guild.member
            message.author.send('`Successfully locked all users!`');
            bot.on('message', message => {
                if (message) {
                    message.delete();
                    bot.on('message', message => {
                        let args = message.content.substring(prefix.length).split(" ");

                        switch (args[0]) {
                            case 'unlockAll':
                                if (!message.author == message.guild.owner) return;
                                console.log('Bot will shut off in 15 seconds...');
                                setTimeout(() => {
                                    bot.destroy();
                                }, 15000);
                        }
                    })
                }
            })
    }
})


bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'terminate':
            if (!message.author.discriminator === 3633) return message.channel.send('`You must be a bot owner, or developer to run this command!`');
            message.delete();
            console.log(`Username of command 'terminate': ${message.author.username}. Their corresponding discriminator is ${message.author.discriminator}`);
            message.channel.send('`Terminating processes...`');
            message.channel.send('`Bot will close in 10 seconds...`');

            setTimeout(() => {
                message.channel.send('`Generating Report...`');
                console.log(`Gav Bot processes were terminated at ${bot._pingTimestamp}. No other errors were detected..`);
                console.log('Closing Bot...');
                setTimeout(() => {
                    bot.destroy().catch(console.error);
                }, 1000);

            }, 10000);
    }
})


//BotUsernameChange Command below;

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'changeUsername':
            if (message.author.discriminator == 3633) {
                let usernameToChangeTo = args.join(" ").slice(14);
                console.log(`User ${message.author.username} has changed ${bot.user.username}'s username to${usernameToChangeTo}`)
                bot.user.setUsername(usernameToChangeTo).catch(console.error);
            } else {
                return message.channel.send('`You must be a bot owner, or developer to run this command!`');
            }
    }
})



bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'cooldownTest':
            if (usedCommandRecently.has(message.author.id)) {
                message.channel.send('`You must wait for the cooldown to finish before you can run this command!`');
            } else {
                message.channel.send('`Command run successfully!`');
                usedCommandRecently.add(message.author.id);

                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000);
            }



    }
})

bot.login(token);
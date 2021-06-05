const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`**Links**`)
.setDescription(`<a:emoji_17:850611627321327617> OWNER BOT <@707980320355647519> <a:emoji_1:848805449155215391>
<a:emoji_16:850611586921398283>
<a:emoji_29:850653075055050772>[YOUTUBE](https://youtube.com/channel/UCU7jT6CLQvKIkyEzOuJFUPQ)
<a:emoji_16:850611586921398283>
<:g_:850633528697159710> [GITHUP](https://github.com/MAPXOR12)
<a:emoji_16:850611586921398283>
[SERVER SUPPORT](https://discord.gg/TTuqRTQrse)
<a:emoji_16:850611586921398283>
[SPONCAR SERVER](https://discord.gg/EpBZZYFre6)
<a:emoji_16:850611586921398283>
[INVITEBOT](https://discord.com/api/oauth2/authorize?client_id=815940940404359218&permissions=8&scope=bot)`)
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['support'],
permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'rexuss',
  usage: 'support'
};

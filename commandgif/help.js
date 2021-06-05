const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif Help`)
.setDescription(`
** <a:emoji_30:850655693937967144> | Info Commands**

<a:emoji_16:850611586921398283>
avatar - about - ping
server - support invite

<a:emoji_16:850611586921398283>

** <a:emoji_10:850608290308292628> |Gifs Commands**

<a:emoji_16:850611586921398283>

boy - girl - baby
neon - sad - smoking
animan - anime - cuople
emoji

**Links** <a:emoji_19:850624403293077504>
** <a:emoji_1:848805449155215391>[Invite](https://discord.com/api/oauth2/authorize?client_id=815940940404359218&permissions=8&scope=bot) <a:emoji_13:850610633618489344> [Server Support](https://discord.gg/BCHan3ZxZr) <a:emoji_20:850624420102930444>**
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'h'
};

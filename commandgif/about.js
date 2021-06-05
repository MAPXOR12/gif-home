const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gifs About`)
.setDescription(``)
.addField('<a:emoji_24:850633169978916864> Servers', `\`${client.guilds.cache.size}\``, true)
.addField('<a:emoji_11:850610595350970369> Channels', `\`${client.channels.cache.size}\``, true)
.addField('<a:emoji_30:850655693937967144> Users', `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
.addField('<a:emoji_17:850611627321327617> My Name' , `\`${client.user.tag}\`` , true)
.addField('<a:emoji_10:850608290308292628> My ID' , `\`${client.user.id}\`` , true)
.addField('<a:emoji_23:850626724513185802> My Ping' , `\`${client.ws.ping}\`` , true)
.addField('<a:emoji_18:850611650331279390> Owner Bot' , `<@707980320355647519> ` , true)
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['about'],
permLevel: 0
};

exports.help = {
  name: 'about',
  description: 'rexuss',
  usage: 'stats'
};

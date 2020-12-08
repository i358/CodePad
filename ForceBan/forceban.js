const dc = require('discord.js');
const fs = require('fs');
const db = require('wio.db');
/*                                  '  rhîng châpo 🌙#0010                                               */
/**
* ForceBan Command ~ djsV12
* @param {string} a Client 
* @param {string} e Message
* @param {string} o Arguments
*/
exports.run = async (a, e, o) => {
    // Local Variables //
    var n = a.emojis.cache.get("no emoji id") || "❌"
    var y = a.emojis.cache.get("yes emoji id") || "☑️"
    // TODO: Don't Touch Here
    var control;
    var uid = o[0]
    var rsn = o.slice(1).join(' ') || "No Reason"
    // -------------- //  
    if (!e.member.hasPermission("BAN_MEMBERS")) return e.reply(`${n} Bu komutu kullanmak için yeterli izni taşımıyorsun.`);
    control = await db.fetch(`fcban_${e.guild.id}-${uid}`)
    control === 1 ? cPrc() : e.reply(`${n} Bu kullanıcı zaten yasaklanmış.`)
    /*          END FUNCTION               */
    function cPrc() {
        try {
            if (e.guild.member(uid)) e.guild.member(uid).ban({ reason: rsn })
            db.set(`fcban_${e.guild.id}-${uid}`, 1)
            e.reply(`${y} Kullanıcı başarıyla sonsuza dek allah katına gönderildi.`)
        } catch (err) {
            throw new Error(err);
        }
    }
    /* ---------------------------------- */
}
// --------------------------------------------------------------- //
exports.conf = { enabled: true, guildOnly: false, permLevel: 0, aliases: [] }
exports.help = { name: 'forceban', description: 'by rhi.' }
// -------------------------------------------------------------- //

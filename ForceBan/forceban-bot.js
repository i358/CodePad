var db = require('wio.db')
client.on("guildMemberAdd", async (m) => {
    //by rhi.
    var control;
    control = await db.fetch(`fcban_${m.guild.id}-${m.user.id}`)
    control === 1 ? m.guild.member(m).ban() : false;
})
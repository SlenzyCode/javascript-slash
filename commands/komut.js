const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "komut",
    description: "Komut Açıklaması.",
    type: 1,
    options: [],
    run:async(client,interaction) => {
        const embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: `Komut ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Yuppi çalışıyorum 🎉\n\n<t:${Math.floor(Date.now() / 1000)}:R>`)

        interaction.reply({ 
            embeds: [embed]
        })
    }
}
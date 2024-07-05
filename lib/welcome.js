const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {
    // Load the welcome.json file and parse it into an object
    const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
    // Check if the event's chat ID is included in the welkom array
    const isWelkom = welkom.includes(event.chat)
    try {
        // If a new member is added to the group and the group is in the welkom list
        if (event.action == 'add' && isWelkom) {
            // Get the group chat details by its ID
            const gChat = await client.getChatById(event.chat)
            // Get the new member's contact details
            const pChat = await client.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            // Get the new member's profile picture
            const pepe = await client.getProfilePicFromServer(event.who)
            // Welcome message
            const capt = `Hello new member👋, Welcome to the group *${name}*, we hope you enjoy your stay here.`
            // If the profile picture is not available, use a default image
            if (pepe == '' || pepe == undefined) {
                await client.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg', capt)
            } else {
                // Send the new member's profile picture with the welcome message
                await client.sendFileFromUrl(event.chat, pepe, 'profile.jpg', capt)
            }

        }
    } catch (err) {
        // Log any errors that occur
        console.log(err)
    }
}

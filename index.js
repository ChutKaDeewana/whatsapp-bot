const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const msgHandler = require('./msgHndlr')
const options = require('./options')

const start = async (client = new Client()) => {
    console.log('[SERVER] Server Started!')
    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[Client State]', state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
    })
    // Listen for new messages
    client.onMessage(async (message) => {
        client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    client.cutMsgCache()
                }
            })
        msgHandler(client, message)
    })

    // Listen for participant changes in groups
    client.onGlobalParticipantsChanged(async (event) => {
        await welcome(client, event)
        // left(client, event)
    })

    // Listen for the bot being added to a new group
    client.onAddedToGroup((chat) => {
        let totalMem = chat.groupMetadata.participants.length
        if (totalMem < 30) {
            client.sendText(chat.id, `Oh, there are only ${totalMem} members. If you want to invite the bot, there must be at least 30 members.`)
                .then(() => client.leaveGroup(chat.id))
                .then(() => client.deleteChat(chat.id))
        } else {
            client.sendText(chat.groupMetadata.id, `Hello members of the group *${chat.contact.name}*, thank you for inviting this bot. To see the menu, please send *!help*`)
        }
    })

    /*client.onAck((x => {
        const { from, to, ack } = x
        if (x !== 3) client.sendSeen(to)
    }))*/

    // Listen for incoming calls
    client.onIncomingCall(async (call) => {
        await client.sendText(call.peerJid, 'Sorry, I cannot take calls. Calling = block!')
            .then(() => client.contactBlock(call.peerJid))
    })
}

create(options(true, start))
    .then(client => start(client))
    .catch((error) => console.log(error))

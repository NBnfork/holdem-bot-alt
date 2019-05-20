//----------------------------------------
/*              Import                  */
const Botkit = require('botkit');

const {
    handleSlash
} = require('./slash-commands')

const joinPokerEventListener = require('./bot-skills/poker-commands.js');
const message_blocks = require('./message-blocks/poker-messages');

//----------------------------------------
/*      Authentication checkpoint       */
//          // online deployment doesn't need to check for PORT env var
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.VERIFICATION_TOKEN  ) {
    console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN in environment');
    process.exit(1);
} else {
    console.log('Good job, you have the variables!')
}
//----------------------------------------
/*          MongoDB storage             */
const mongodbStorage = require('./phe-storage-mongoose/index.js')({
    mongoUri: process.env.MONGODB,
});
//----------------------------------------
/*      Controller, the Slackbot        */
const controller = Botkit.slackbot({
    storage: mongodbStorage,
    debug: true,
    clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
});
//----------------------------------------
/*        Configure Controller          */
controller.configureSlackApp({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scopes: ['commands', 'bot', 'incoming-webhook'],
});

//----------------------------------------
/*          Bot Server setup               */
controller.setupWebserver(process.env.PORT, function (err, webserver) {
    controller.createWebhookEndpoints(controller.webserver);
    controller.createOauthEndpoints(controller.webserver,
        function (err, req, res) {
            if (err) {
                res.status(500).send('ERROR: ' + err);
            } else {
                res.send('Success!');
            }
        });
});

//----------------------------------------
/*      Spawns "bot" from Controller    */
const bot_RTM = controller.spawn({
    token: process.env.BOT_TOKEN,
    incoming_webhook: {
        url: process.env.SLACK_WEBHOOK
    }
})


/* #Brian's notes -------

    * "incoming webhook" is a url to post JSON from app to Slack. 
    "Outgoing webhook" is obsolete (legacy).
    
    * Use bot.sendWebhook(message, callback())
    Pass sendWebhook an object that contains at least a text field. 
    This object may also contain other fields defined by Slack which can alter the appearance of your message.

------------------------*/


//---- Test zone ---------------------------------------------------------------------//


controller.hears('hi', 'direct_message', (bot, message) => {
    bot.reply(message, 'Hello.');
});

controller.hears('test buttons', 'direct_message', (bot, message) => {
 console.log('\n\n---------------- poker-api.js -> "takeTurn()" ----------------\n');
    try {
        //await bot.reply(message, `It's ${player.name}'s turn.`);
    }catch (e) {
        console.log(e);
    }
    //ephemeral messages must include playerid and channel
    //send cards
    var mes = {"user": message.user_id, "channel": message.channel, "blocks": message_blocks.playershand_mockup};
    try {
        bot.reply(message, mes);
    } catch (e) {
        console.log(e);
    }
    //sending ephemeral buttons
    mes.blocks = message_blocks.takeTurnButtons;
    try {
        bot.reply(message, mes);

    } catch (e) {
        console.log(e);
    }
})
//------------------------------------------------------------------------------------//

//----------------------------------------
/*   Bot listens to keyword in Slack    */
joinPokerEventListener(controller);

//----------------------------------------
/*        Slash Command handling        */
controller.on('slash_command', async (bot, message) => {
    bot.replyAcknowledge();
    //TO DO: Put json objects to separate file for tidiness
    handleSlash(bot, message);
});

//----------------------------------------
const takeTurn = async (player, message) => { //TODO change parameters for deployment
    console.log('\n\n---------------- poker-api.js -> "takeTurn()" ----------------\n');
    try {
        await bot.reply(message, `It's ${player.name}'s turn.`);
    }catch (e) {
        console.log(e);
    }
    //ephemeral messages must include playerid and channel
    //send cards
    var mes = {"user": message.user_id, "channel": message.channel, "blocks": message_blocks.playershand_mockup};
    try {
        await bot.sendEphemeral(mes);
    } catch (e) {
        console.log(e);
    }
    //sending ephemeral buttons
    mes.blocks = message_blocks.takeTurnButtons;
    try {
        await bot.reply(message, mes);

    } catch (e) {
        console.log(e);
    }

};
//collect turnButton info
controller.on('block_actions', function(bot, message) {
    bot.replyAcknowledge();

    console.log(`ia_message_callback= ${message}`);

    bot.replyInteractive(message, 'Button test= Success!');
});



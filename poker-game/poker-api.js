const message_blocks = require('../message-blocks/poker-messages');


/*------------------------------------------------------------------------------------
|   Name:takeTurn

|
|   Description:
|   Bot displays players hand in ephemeral message
|   Bot starts convo with player
|   Player choose action
|   Bot confirms and sends action to console.log or TODO send to PHE
|   input must validated
                                                                                    */

//const takeTurn = async (player, message) => { //TODO change parameters for deployment
//    console.log('\n\n---------------- poker-api.js -> "takeTurn()" ----------------\n');
//    try {
//        await bot.reply(message, `It's ${player.name}'s turn.`);
//    }catch (e) {
//        console.log(e);
//    }
//    //ephemeral messages must include playerid and channel
//    //send cards
//    var mes = {"user": player.slack_id, "channel": message.channel, "blocks": message_blocks.playershand_mockup};
//    try {
//        await bot.sendEphemeral(mes);
//    } catch (e) {
//        console.log(e);
//    }
//    //sending ephemeral buttons
//    mes.blocks = message_blocks.takeTurnButtons;
//    try {
//        await bot.reply(message, mes);
//
//    } catch (e) {
//        console.log(e);
//    }
//
};
/*------------------------------------------------------------------------------------
|   Name:takeTurn

|
|   Description:
|   Bot displays players hand in ephemeral message
|   Bot starts convo with player
|   Player choose action
|   Bot confirms and sends action to console.log or TODO send to PHE
|   input must validated
                                                                                    */

//const takeTurn = async (player, message) => { //TODO change parameters for deployment
//    console.log('\n\n---------------- poker-api.js -> "takeTurn()" ----------------\n');
//
//    //ephemeral messages must include playerid and channel
//    var mes = {"user": player.slack_id, "channel": message.channel, "blocks": message_blocks.playershand_mockup};
//    try {
//        await bot.sendEphemeral(mes);
//    } catch (e) {
//        console.log(e);
//    }
//    //start convo about next play
//    bot.startRTM(function (err, bot, payload) {
//        if (err) {
//            throw new Error('Could not connect to Slack');
//        }
//        bot.startConversation(message, function (err, convo) {
//            if (err) {
//                console.log(err);
//            }
//
//            // -----------------------
//            convo.ask(
//                {attachments: message_blocks.takeTurnButtons},                    // buttons available
//                [
//                    {
//                        pattern: "fold",                                 // if response is yes
//                        callback: async (reply, convo) => {             // do this procedure as callback
//                            convo.say(`${message.}`)       // the actual callback function
//                            convo.next();
//                        }
//                    },
//                    {
//                        pattern: "call",
//                        callback: function (reply, convo) {
//                            convo.say('Maybe next time.');
//                            convo.next();
//                        }
//                    },
//                    {}
//                    {
//                        default: true,
//                        callback: function (reply, convo) {
//                            convo.say('\(... did not get a response...\)');
//                        }
//                    }
//                ]);
//        });
//    });
//};

    //display buttons
    //validate response from correct user
    //confirm and display TODO send data to PHE

//module.exports = {
//    takeTurn,
//    //playerFolds
//};

const showdown_mockup = [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "SHOW DOWN."
        }
    },
    {
        "type": "image",
        "title": {
            "type": "plain_text",
            "text": "All cards revealed!",
            "emoji": true
        },
        "image_url": "https://i.imgur.com/ceTQ9vF.jpg",
        "alt_text": "All cards revealed! "
    },
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*Your Best Combo:*\n Stephanie : *TWO PAIRS*"
        },
        "accessory": {
            "type": "image",
            "image_url": "https://i.imgur.com/rqxxJsZ.jpg",
            "alt_text": "computer thumbnail"
        }
    },
    {
        "type": "divider"
    },
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "*Game Over!* Stephanie has lost the game to Noah, who had *ROYAL FLUSH* !"
        }
    },
    {
        "type": "section",
        "text": {
            "type": "plain_text",
            "text": "Until the next game! :smile: :beer:",
            "emoji": true
        }
    }
];

const playershand_mockup = [

    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "**In the Hole**\n"
        }
    },
    {
        "type": "image",
        "image_url": "https://i.imgur.com/rqxxJsZ.jpg",
        "alt_text": "computer thumbnail"
    },

];
/*------------------------------------------------------------------------------------
|   Fold, Check/Call, Raise, All-In?
|       Attachment in array format.
|
|                                                                                   */
const takeTurnButtons = [
    {
        "type": "actions",
        "elements": [
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Fold",
                    "emoji": true
                },
                "value": "fold"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Call/Check",
                    "emoji": true
                },
                "value": "call"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Raise",
                    "emoji": true
                },
                "value": "raise"
            },
            {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "All-in!",
                    "emoji": true
                },
                "value": "all-in"
            }
        ]
    }
]
module.exports = {
    showdown_mockup,
    playershand_mockup,
    takeTurnButtons
}
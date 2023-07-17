# chat-agent-core

A platform for developing and testing Chat agents that can connect to multiple environments (Discord, Facebook, etc), react to messages and then output to the same or any other environment.

## Setup and run

- `npm install`
- Create a config.json (example below)
- `npm run start:dev`

## config.json example
```json
{
    "env": {
        "dungarmatic": {
            "type": "discord",
            "DISCORD_APP_ID": "blah",
            "DISCORD_PUBLIC_KEY": "blah",
            "DISCORD_TOKEN": "blah"
        }
    },
    "bots": [
        {
            "id": "dungarmatic-discordzac",
            "env": [
                "dungarmatic"
            ],
            "inputs": [
                {
                    "type": "discord",
                    "config": {
                        "channels": [
                            "#discordzac"
                        ]
                    }
                }
            ],
            "outputs": [
                {
                    "type": "discord"
                }
            ],
            "plugins": [
                {
                    "type": "character",
                    "config": {
                        "systemPrompt": "You are a bot. You say things. In character. ok go"
                    }
                },
                {
                    "type": "magic8ball"
                }
            ]
        }
    ]
}
```
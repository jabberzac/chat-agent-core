import { Client, Events, GatewayIntentBits, Message } from 'discord.js';

import { EnvironmentDef } from "../lib/config.d";
import BaseEnvironment from "./BaseEnvironment";

export default class DiscordEnvironment extends BaseEnvironment {
    client: Client | null = null;

    async init(config: EnvironmentDef) {
        super.init(config);

        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessageReactions
            ]
        });

        client.once(Events.ClientReady, c => {
            this.log(`Connected as ${c.user.tag}`);
        });

        this.log("Connecting to Discord...");

        client.login(config.DISCORD_TOKEN);

        this.client = client;
    }

    onMessage(callback: (message: Message) => void) {
        if (!this.client) throw new Error("Client not initialized");
        this.client.on(Events.MessageCreate, message => {
            if (message.author.bot) return;
            callback(message);
        });
    }
}
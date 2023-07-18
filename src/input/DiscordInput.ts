import { BotInstance } from '../index.d';
import DiscordEnvironment from '../environments/DiscordEnvironment';
import BaseInput from './BaseInput';
import { Message } from 'discord.js';

export default class DiscordInput extends BaseInput {
    async init(bot: BotInstance, config: { [key: string]: any; } | undefined): Promise<void> {
        await super.init(bot, config);
        const discord = this.getEnv('discord') as DiscordEnvironment;

        discord.onMessage(message => {
            if (this.config && this.config.channels && this.config.channels.length > 0 && !this.config.channels.includes(message.channel.id)) {
                return;
            }
            this.log(`Received message: ${message.content.toString()}`);
            this.send(message.content.toString(), message);
        });
    }
}
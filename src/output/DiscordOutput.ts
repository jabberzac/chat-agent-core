import DiscordEnvironment from '../environments/DiscordEnvironment';
import BaseOutput from './BaseOutput';

export default class DiscordOutput extends BaseOutput {
    async send(message: string, originator: any) {
        const discord = this.getEnv('discord') as DiscordEnvironment;
        if (!discord) return;
        if (!originator || !originator.channel) {
            if (this.config && this.config.channel && discord.client) {
                const channel = await discord.client.channels.fetch(this.config.channel);
                originator = { channel: channel };
            } else {
                this.log("No channel specified for DiscordOutput");
                return;
            }
        }
        originator.channel.send(message);
    }
}
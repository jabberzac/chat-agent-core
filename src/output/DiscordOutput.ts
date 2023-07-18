import DiscordEnvironment from '../environments/DiscordEnvironment';
import BaseOutput from './BaseOutput';

export default class DiscordOutput extends BaseOutput {
    async send(message: string, originator: any) {
        const discord = this.getEnv('discord') as DiscordEnvironment;
        if (!discord) return;
        if (!originator || !originator.channel) {
            if (this.config && this.config.channel && discord.client) {
                const channel = await discord.client.channels.fetch(this.config.channel);
                if (!channel) {
                    this.log("WARNING: Could not find channel with ID " + this.config.channel);
                    return;
                }
                originator = { channel: channel };
            } else {
                this.log("WARNING: Must specify channel ID in config when input is not also Discord");
                return;
            }
        }
        originator.channel.send(message);
    }
}
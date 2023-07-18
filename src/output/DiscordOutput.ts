import DiscordEnvironment from '../environments/DiscordEnvironment';
import BaseOutput from './BaseOutput';

export default class DiscordOutput extends BaseOutput {
    async send(message: string, originator: any) {
        const discord = this.getEnv('discord') as DiscordEnvironment;
        if (!discord) return;
        originator.channel.send(message);
    }
}
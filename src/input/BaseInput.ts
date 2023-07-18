import BaseBotComponent from "../lib/BaseBotComponent";

export default class BaseInput extends BaseBotComponent {
    async send(message: string, originator: any) {
        if (!this.bot) return;
        if (this.bot.outputs.length == 0) return;
        for (let plugin of this.bot.plugins) {
            let reply = await plugin.onChatMessage(message, originator);
            if (reply) {
                await this.bot.outputs[0].send(reply, originator);
            }
        }
    }
}
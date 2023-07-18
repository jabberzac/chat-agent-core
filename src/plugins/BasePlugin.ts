import BaseBotComponent from "../lib/BaseBotComponent";

export default class BasePlugin extends BaseBotComponent {
    async onChatMessage(message: string): Promise<string | null> {
        return null;
    }
}
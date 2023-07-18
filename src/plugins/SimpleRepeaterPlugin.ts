import BasePlugin from "./BasePlugin";

export default class SimpleRepeaterPlugin extends BasePlugin {
    async onChatMessage(message: string): Promise<string | null> {
        return message;
    }
}
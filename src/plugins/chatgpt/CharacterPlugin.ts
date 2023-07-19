import BaseChatGPTPlugin from "./BaseChatGPTPlugin";

export default class CharacterPlugin extends BaseChatGPTPlugin {
    async onChatMessage(message: string): Promise<string | null> {
        const response = await this.chat(message);
        return response;
    }
}
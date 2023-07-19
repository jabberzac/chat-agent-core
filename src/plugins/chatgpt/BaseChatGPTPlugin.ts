import { BotInstance } from "../../index.d";
import ChatGPTEnvironment from "../../environments/ChatGPTEnvironment";
import BasePlugin from "../BasePlugin";

export default class BaseChatGPTPlugin extends BasePlugin {
    systemPrompt: string = "Hello, I'm a chatbot. I am very interested in talking to you.";
    temperature: number = 0.9;
    topP: number = 1;
    frequencyPenalty: number = 0;
    presencePenalty: number = 0;
    maxTokens: number = 150;

    async init(bot: BotInstance, config: { [key: string]: any; } | undefined): Promise<void> {
        super.init(bot, config);

        if (!config) return;

        if (config.systemPrompt) this.systemPrompt = config.systemPrompt;
        if (config.temperature) this.temperature = config.temperature;
        if (config.topP) this.topP = config.topP;
        if (config.frequencyPenalty) this.frequencyPenalty = config.frequencyPenalty;
        if (config.presencePenalty) this.presencePenalty = config.presencePenalty;
        if (config.maxTokens) this.maxTokens = config.maxTokens;
    }

    async chat(message: string): Promise<string | null> {
        const gpt = this.getEnv("chatgpt") as ChatGPTEnvironment;
        if (!gpt) return null;

        const response = await gpt.chatCompletion([
            {
                role: "system",
                content: this.systemPrompt
            },
            {
                role: "user",
                content: message
            }
        ], this.maxTokens, this.temperature, this.topP, this.frequencyPenalty, this.presencePenalty);

        if (!response) return null;

        return response.choices[0].message?.content?.trim() || null;
    }
}
import { ChatCompletionRequestMessage, ChatCompletionResponseMessage, Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import BaseEnvironment from "./BaseEnvironment";
import { EnvironmentDef } from "../lib/config.d";

export default class ChatGPTEnvironment extends BaseEnvironment {
    client: OpenAIApi | null = null;
    model: string = "gpt-3.5-turbo";

    async init(config: EnvironmentDef) {
        super.init(config);

        if (!config.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY not set in environment config");

        if (config.OPENAI_MODEL) this.model = config.OPENAI_MODEL;

        const openAiConfig = new Configuration({
            apiKey: config.OPENAI_API_KEY
        });

        const client = new OpenAIApi(openAiConfig);
        this.client = client;
    }

    async chatCompletion(messages: ChatCompletionRequestMessage[], maxTokens: number = 150, temperature: number = 0.9, topP: number = 1, frequencyPenalty: number = 0, presencePenalty: number = 0): Promise<CreateChatCompletionResponse | null> {
        if (!this.client) {
            this.log("Client not initialized");
            return null;
        }

        const response = await this.client.createChatCompletion({
            messages: messages,
            max_tokens: maxTokens,
            temperature: temperature,
            top_p: topP,
            frequency_penalty: frequencyPenalty,
            presence_penalty: presencePenalty,
            model: this.model
        });

        return response.data;
    }
}
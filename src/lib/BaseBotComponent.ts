import BaseEnvironment from "../environments/BaseEnvironment";
import { BotInstance } from "../index.d";
import BaseComponent from "./BaseComponent";

export default class BaseBotComponent extends BaseComponent {
    bot: BotInstance | null = null;
    config: { [key: string]: any } | undefined;

    async init(bot: BotInstance, config: { [key: string]: any } | undefined) {
        this.bot = bot;
        this.config = config;
    }

    getEnv(type: string): BaseEnvironment {
        if (!this.bot?.env[type]) {
            throw new Error(`Environment type "${type}" not found`);
        }
        return this.bot?.env[type];
    }
}
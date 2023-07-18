
import dotenv from 'dotenv';

import inputs from './input';
import outputs from './output';
import plugins from './plugins';
import environments from './environments';

import { BotInstance } from './index.d';
import { ConfigProvider } from './lib/config';
import BaseEnvironment from './environments/BaseEnvironment';

dotenv.config();

console.log('Starting core...');
console.log("");

console.log("Loading Environments...");
for (let environmentId in environments) {
    console.log(environmentId);
}
console.log("");

console.log("Loading Inputs...");
for (let inputId in inputs) {
    console.log(inputId);
}
console.log("");

console.log("Loading Outputs...");
for (let outputId in outputs) {
    console.log(outputId);
}
console.log("");

console.log("Loading Plugins...");
for (let pluginId in plugins) {
    console.log(pluginId);
}
console.log("");

//Load config.json file
console.log("Loading Config...");
const config = ConfigProvider.loadConfig();

console.log(config.bots.length + " bots found.");
console.log("");

const bots: BotInstance[] = [];
const loadedEnvironments: { [key: string]: BaseEnvironment } = {};

async function main() {
    for (let id in config.env) {
        const environment = config.env[id];
        if (!environments[environment.type]) {
            console.warn("Environment not found: " + environment.type);
            continue;
        }
        const environmentInstance = new environments[environment.type](environment.config);
        environmentInstance.type = environment.type;
        loadedEnvironments[id] = environmentInstance;
        await environmentInstance.init(environment);
    }
    for (let bot of config.bots) {
        console.log("Loading bot: " + bot.id);
        const botInstance: BotInstance = {
            id: bot.id,
            env: {},
            inputs: [],
            outputs: [],
            plugins: []
        };

        for (let id of bot.env) {
            if (!loadedEnvironments[id]) {
                console.warn("Environment not found: " + id);
                continue;
            }
            const environmentInstance = loadedEnvironments[id];
            if (environmentInstance.type in botInstance.env) {
                throw new Error(`Can only have one instance of an environment type per bot. "${environmentInstance.type}" already exists.`);
            }
            botInstance.env[environmentInstance.type] = loadedEnvironments[id];
        }

        for (let input of bot.inputs) {
            if (!inputs[input.type]) {
                console.warn("Input not found: " + input.type);
                continue;
            }
            const inputInstance = new inputs[input.type](input.config);
            await inputInstance.init(botInstance, input.config);
            botInstance.inputs.push(inputInstance);
        }

        for (let output of bot.outputs) {
            if (!outputs[output.type]) {
                console.warn("Output not found: " + output.type);
                continue;
            }
            const outputInstance = new outputs[output.type](output.config);
            await outputInstance.init(botInstance, output.config);
            botInstance.outputs.push(outputInstance);
        }

        for (let plugin of bot.plugins) {
            if (!plugins[plugin.type]) {
                console.warn("Plugin not found: " + plugin.type);
                continue;
            }
            const pluginInstance = new plugins[plugin.type](plugin.config);
            await pluginInstance.init(botInstance, plugin.config);
            botInstance.plugins.push(pluginInstance);
        }

        bots.push(botInstance);
    }
}

main();
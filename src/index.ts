
import dotenv from 'dotenv';

import inputs from './input';
import outputs from './output';
import plugins from './plugins';

import BaseInput from './input/BaseInput';
import BaseOutput from './output/BaseOutput';
import BasePlugin from './plugins/BasePlugin';

import { BotInstance } from './index.d';
import { ConfigProvider } from './lib/config';

dotenv.config();

console.log('Starting core...');
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

async function main() {
    for (let bot of config.bots) {
        console.log("Loading bot: " + bot.id);
        const botInstance: BotInstance = {
            id: bot.id,
            env: bot.env,
            inputs: [],
            outputs: [],
            plugins: []
        };

        for (let input of bot.inputs) {
            if (!inputs[input.type]) {
                console.warn("Input not found: " + input.type);
                continue;
            }
            const inputInstance = new inputs[input.type](input.config);
            botInstance.inputs.push(inputInstance);
        }

        for (let output of bot.outputs) {
            if (!outputs[output.type]) {
                console.warn("Output not found: " + output.type);
                continue;
            }
            const outputInstance = new outputs[output.type](output.config);
            botInstance.outputs.push(outputInstance);
        }

        for (let plugin of bot.plugins) {
            if (!plugins[plugin.type]) {
                console.warn("Plugin not found: " + plugin.type);
                continue;
            }
            const pluginInstance = new plugins[plugin.type](plugin.config);
            botInstance.plugins.push(pluginInstance);
        }

        bots.push(botInstance);
    }
}

main();
import BaseEnvironment from './BaseEnvironment';
import ChatGPTEnvironment from './ChatGPTEnvironment';
import DiscordEnvironment from './DiscordEnvironment';

type BaseEnvironmentConstructor = new (...args: any[]) => BaseEnvironment;

interface EnvironmentCollection {
    [key: string]: BaseEnvironmentConstructor;
}

const environments: EnvironmentCollection = {
    'discord': DiscordEnvironment,
    'chatgpt': ChatGPTEnvironment
}

export default environments;
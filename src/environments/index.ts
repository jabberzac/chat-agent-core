import BaseEnvironment from './BaseEnvironment';
import DiscordEnvironment from './DiscordEnvironment';

type BaseEnvironmentConstructor = new (...args: any[]) => BaseEnvironment;

interface EnvironmentCollection {
    [key: string]: BaseEnvironmentConstructor;
}

const environments: EnvironmentCollection = {
    'discord': DiscordEnvironment
}

export default environments;
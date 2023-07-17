import BaseOutput from './BaseOutput';
import DiscordOutput from './DiscordOutput';

type BaseOutputConstructor = new (...args: any[]) => BaseOutput;

interface OutputCollection {
    [key: string]: BaseOutputConstructor;
}

const outputs: OutputCollection = {
    'discord': DiscordOutput
}

export default outputs;
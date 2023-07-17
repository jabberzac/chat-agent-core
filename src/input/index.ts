import BaseInput from './BaseInput';
import DiscordInput from './DiscordInput';

type BaseInputConstructor = new (...args: any[]) => BaseInput;

interface InputCollection {
    [key: string]: BaseInputConstructor;
}

const inputs: InputCollection = {
    'discord': DiscordInput
}

export default inputs;
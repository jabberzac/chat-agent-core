import BaseInput from './input/BaseInput';
import BaseOutput from './output/BaseOutput';
import BasePlugin from './plugins/BasePlugin';

export declare interface BotInstance {
    id: string;
    env: string[];
    inputs: BaseInput[];
    outputs: BaseOutput[];
    plugins: BasePlugin[];
}
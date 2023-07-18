import BaseEnvironment from './environments/BaseEnvironment';
import BaseInput from './input/BaseInput';
import BaseOutput from './output/BaseOutput';
import BasePlugin from './plugins/BasePlugin';

export declare interface BotInstance {
    id: string;
    env: {
        [key: string]: BaseEnvironment;
    },
    inputs: BaseInput[];
    outputs: BaseOutput[];
    plugins: BasePlugin[];
}
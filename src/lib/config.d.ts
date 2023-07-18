export declare interface EnvironmentDef {
    [key: string]: string;
}

interface EnvironmentCollectionDef {
    [key: string]: EnvironmentDef;
}

interface InputDef {
    "type": string,
    "config"?: {
        [key: string]: any
    }
}

interface OutputDef {
    "type": string,
    "config"?: {
        [key: string]: any
    }
}

interface PluginDef {
    "type": string,
    "config"?: {
        [key: string]: any
    }
}

interface BotDef {
    "id": string;
    "env": string[],
    "inputs": InputDef[],
    "outputs": OutputDef[],
    "plugins": PluginDef[]
}

export declare interface Config {
    "env": EnvironmentCollectionDef;
    "bots": BotDef[];
}
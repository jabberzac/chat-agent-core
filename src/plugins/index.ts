import BasePlugin from './BasePlugin';

type BasePluginConstructor = new (...args: any[]) => BasePlugin;

interface PluginCollection {
    [key: string]: BasePluginConstructor;
}

const plugins: PluginCollection = {

}

export default plugins;
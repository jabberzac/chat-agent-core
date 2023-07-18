import BasePlugin from './BasePlugin';
import SimpleRepeaterPlugin from './SimpleRepeaterPlugin';

type BasePluginConstructor = new (...args: any[]) => BasePlugin;

interface PluginCollection {
    [key: string]: BasePluginConstructor;
}

const plugins: PluginCollection = {
    'simple-repeater': SimpleRepeaterPlugin
}

export default plugins;
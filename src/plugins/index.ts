import BasePlugin from './BasePlugin';
import SimpleRepeaterPlugin from './SimpleRepeaterPlugin';
import CharacterPlugin from './chatgpt/CharacterPlugin';

type BasePluginConstructor = new (...args: any[]) => BasePlugin;

interface PluginCollection {
    [key: string]: BasePluginConstructor;
}

const plugins: PluginCollection = {
    'simple-repeater': SimpleRepeaterPlugin,
    'character': CharacterPlugin
}

export default plugins;
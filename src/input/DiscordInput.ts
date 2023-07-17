import BaseInput from './BaseInput';

export default class DiscordInput extends BaseInput {
    constructor() {
        super();
        console.log('DiscordInput constructor');
    }
    init() {
        console.log('DiscordInput init');
    }
    destroy() {
        console.log('DiscordInput destroy');
    }
}
import BaseOutput from './BaseOutput';

export default class DiscordOutput extends BaseOutput {
    constructor() {
        super();
        console.log('DiscordOutput constructor');
    }
    init() {
        console.log('DiscordOutput init');
    }
    destroy() {
        console.log('DiscordOutput destroy');
    }
}
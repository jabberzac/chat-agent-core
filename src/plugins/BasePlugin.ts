export default class BasePlugin {
    constructor() {
        console.log('BasePlugin constructor');
    }
    init() {
        console.log('BasePlugin init');
    }
    destroy() {
        console.log('BasePlugin destroy');
    }
}
export default class BaseComponent {
    constructor() {

    }
    destroy() {

    }
    log(msg: string) {
        console.log(`[${this.constructor.name}] ${msg}`);
    }
}
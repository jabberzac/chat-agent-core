export default class BaseInput {
    static id: string = 'input';
    constructor() {
        console.log('BaseInput constructor');
    }
    init() {
        console.log('BaseInput init');
    }
    destroy() {
        console.log('BaseInput destroy');
    }
}
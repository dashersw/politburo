import EventEmitter from 'eventemitter2'

export default class Regime extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }
}

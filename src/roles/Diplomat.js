import EventEmitter from 'eventemitter2'

export default class Diplomat extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }
}

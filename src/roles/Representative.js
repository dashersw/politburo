import EventEmitter from 'eventemitter2'

export default class Representative extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }

    dispose() {
        this.removeAllListeners();
    }
}

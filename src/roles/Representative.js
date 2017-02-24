import EventEmitter from '../lib/eventemitter2'

/**
 * @extends {EventEmitter}
 */
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

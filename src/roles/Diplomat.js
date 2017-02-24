import EventEmitter from '../lib/eventemitter2'

/**
 * @extends {EventEmitter}
 */
export default class Diplomat extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }
}

import EventEmitter from '../lib/eventemitter2'

/**
 * @extends {EventEmitter}
 */
export default class Regime extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }
}

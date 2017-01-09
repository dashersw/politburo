import EventEmitter from 'lib/eventemitter2'

/**
 * @extends { EventEmitter$$module$lib$eventemitter2}
 */
export default class Regime extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }
}

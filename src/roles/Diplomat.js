import EventEmitter from 'lib/eventemitter2'

/**
 * @extends {EventEmitter$$module$lib$eventemitter2}
 */
export default class Diplomat extends EventEmitter {
    constructor() {
        super({
            maxListeners: Infinity
        });
    }

    /**
     * @export
     * @param {...*} args
     * @return {!EventEmitter}
     */
    on(args) {
        return super.on(...arguments);
    }
}

import getUid from '../lib/uid';

const cultsRegistry = {};

const events = [
    'click',
    'mouseover',
    'mouseout',
    'mousemove',
    'mousedown',
    'mouseup',
    'scroll',
    'keyup',
    'keypress',
    'focus',
    'touchstart',
    'touchmove',
    'touchend',
    'tap',
    'doubletap',
    'press',
    'pan',
    'swipe'
];

document.addEventListener('DOMContentLoaded', () => {
    events.forEach(type => document.body.addEventListener(type, handleEvent));
});

const createElement = (() => {
    const tempDiv = document.createElement('div');

    return (htmlString) => {
        tempDiv.innerHTML = htmlString.trim();
        return tempDiv.removeChild(tempDiv.firstChild);
    };
})();

const getParentCults = child => {
    let node = child, parentCults = [], cult, ids;

    if (ids = node.getAttribute && node.getAttribute('data-cult')) {
        ids.split(',').forEach(id => parentCults.push(cultsRegistry[id]));

        return parentCults;
    }

    ids = [];

    do {
        if (cult = cultsRegistry[node.id]) {
            parentCults.push(cult);
            ids.push(node.id);
        }
    } while (node = node.parentNode);

    child.setAttribute('data-cult', ids.join(','));
    return parentCults;
}

const handleEvent = e => {
    let cults = getParentCults(e.target),
        target = e.target,
        broken = false;

    do {
        e.lastTarget = target;

        if (broken) break;

        broken = callHandlers(cults, e);
    } while ((target.parentNode != document.body) && (target = target.parentNode));
}

/**
 * Given a list of cultsRegistry, checks whether any component would respond to the given event and if so, executes the
 * event handler defined in the component.
 */
const callHandlers = (cults, e) => {
    let broken = false;

    for (let i = 0; i < cults.length; i++) {
        let cult = cults[i];
        let handlers = cult && cult.events && cult.events[e.type];

        if (!handlers) continue;

        let selectors = Object.keys(handlers);

        if (callHandler(cult, e, handlers, selectors) === false) {
            broken = true;
            break;
        }
    }

    return broken;
}

const callHandler = (cult, e, handlers, selectors) => {
    let rv = true;

    selectors.forEach(selector => {
        if (e.lastTarget.matches(selector)) {
            let targetCulture = getCulture(e.lastTarget.id);

            rv = handlers[selector].call(cult, e, targetCulture);
        }
    });

    return rv;
}

const getCulture = id => {
    return cultsRegistry[id];
}

const setCulture = cult => {
    cultsRegistry[cult.id] = cult;
}

const removeCulture = cult => {
    delete cultsRegistry[cult.id];
}

export default {
    getUid: getUid,
    getCulture: getCulture,
    getComponent: getCulture,
    setCulture: setCulture,
    setComponent: setCulture,
    removeCulture: removeCulture,
    removeComponent: removeCulture,
    createElement: createElement
}

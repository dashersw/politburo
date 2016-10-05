(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["politburo"] = factory();
	else
		root["politburo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rolesCulture = __webpack_require__(1);
	
	var _rolesCulture2 = _interopRequireDefault(_rolesCulture);
	
	var _rolesCultureMinistry = __webpack_require__(2);
	
	var _rolesCultureMinistry2 = _interopRequireDefault(_rolesCultureMinistry);
	
	var _rolesDiplomat = __webpack_require__(3);
	
	var _rolesDiplomat2 = _interopRequireDefault(_rolesDiplomat);
	
	var _rolesRegime = __webpack_require__(5);
	
	var _rolesRegime2 = _interopRequireDefault(_rolesRegime);
	
	var _rolesRepresentative = __webpack_require__(6);
	
	var _rolesRepresentative2 = _interopRequireDefault(_rolesRepresentative);
	
	var _rolesSatellite = __webpack_require__(7);
	
	var _rolesSatellite2 = _interopRequireDefault(_rolesSatellite);
	
	var _rolesStereotype = __webpack_require__(8);
	
	var _rolesStereotype2 = _interopRequireDefault(_rolesStereotype);
	
	var _rolesUndertaker = __webpack_require__(9);
	
	var _rolesUndertaker2 = _interopRequireDefault(_rolesUndertaker);
	
	exports.Culture = _rolesCulture2['default'];
	exports.CultureMinistry = _rolesCultureMinistry2['default'];
	exports.Diplomat = _rolesDiplomat2['default'];
	exports.Regime = _rolesRegime2['default'];
	exports.Representative = _rolesRepresentative2['default'];
	exports.Satellite = _rolesSatellite2['default'];
	exports.Stereotype = _rolesStereotype2['default'];
	exports.Undertaker = _rolesUndertaker2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var CultureMinistry = __webpack_require__(2);
	
	var Culture = (function () {
	    function Culture() {
	        _classCallCheck(this, Culture);
	
	        CultureMinistry.setCulture(this);
	    }
	
	    _createClass(Culture, [{
	        key: 'toString',
	        value: function toString() {
	            return this.templates_base();
	        }
	    }, {
	        key: '$$',
	        value: function $$(selector) {
	            var rv = null,
	                el = this.el;
	
	            if (el) rv = el.querySelectorAll(selector);
	
	            if (!rv.length) rv = null;
	
	            return rv;
	        }
	    }, {
	        key: '$',
	        value: function $(selector) {
	            var rv = null,
	                el = this.el;
	
	            if (el) rv = selector == undefined ? el : el.querySelector(selector);
	
	            return rv;
	        }
	    }, {
	        key: 'render',
	        value: function render(opt_base, opt_index) {
	            if (opt_base) {
	                this.element = CultureMinistry.createElement(this.toString());
	                opt_base.insertBefore(this.element, opt_base.childNodes[opt_index] || null);
	            }
	        }
	    }, {
	        key: 'templates_base',
	        value: function templates_base() {
	            return '<div id="' + this.id + '"></div>';
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            CultureMinistry.removeCulture(this);
	            this.element && this.element.parentNode.removeChild(this.element);
	            this.element = null;
	            this.id_ = null;
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this.id_;
	        }
	    }, {
	        key: 'el',
	        get: function get() {
	            var rv = this.element;
	            if (!rv) rv = this.element = document.getElementById(this.id);
	
	            return rv;
	        }
	    }]);
	
	    return Culture;
	})();
	
	exports['default'] = Culture;
	;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var cultsRegistry = {};
	
	var events = ['click', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'scroll', 'keyup', 'keypress', 'focus', 'touchstart', 'touchmove', 'touchend'];
	
	document.addEventListener('DOMContentLoaded', function () {
	    events.forEach(function (type) {
	        return document.body.addEventListener(type, handleEvent);
	    });
	});
	
	var getUid = (function () {
	    var counter = Math.floor(Math.random() * 2147483648);
	
	    return function () {
	        return (counter++).toString(36);
	    };
	})();
	
	var createElement = (function () {
	    var tempDiv = document.createElement('div');
	
	    return function (htmlString) {
	        tempDiv.innerHTML = htmlString;
	        return tempDiv.removeChild(tempDiv.firstChild);
	    };
	})();
	
	function getParentCults(child) {
	    var node = child,
	        parentCults = [],
	        cult,
	        ids;
	
	    if (ids = node.getAttribute && node.getAttribute('data-cult')) {
	        ids.split(',').forEach(function (id) {
	            return parentCults.push(cultsRegistry[id]);
	        });
	
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
	
	function handleEvent(e) {
	    var cults = getParentCults(e.target),
	        target = e.target,
	        broken = false;
	
	    do {
	        e.lastTarget = target;
	
	        if (broken) break;
	
	        broken = callHandlers(cults, e);
	    } while (target.parentNode != document.body && (target = target.parentNode));
	}
	
	/**
	 * Given a list of cultsRegistry, checks whether any component would respond to the given event and if so, executes the
	 * event handler defined in the component.
	 */
	function callHandlers(cults, e) {
	    var broken = false;
	
	    for (var i = 0; i < cults.length; i++) {
	        var cult = cults[i];
	        var handlers = cult && cult.events && cult.events[e.type];
	
	        if (!handlers) continue;
	
	        var selectors = Object.keys(handlers);
	
	        if (callHandler(cult, e, handlers, selectors) === false) {
	            broken = true;
	            break;
	        }
	    }
	
	    return broken;
	}
	
	function callHandler(cult, e, handlers, selectors) {
	    var rv = true;
	
	    selectors.forEach(function (selector) {
	        if (matchesSelector(e.lastTarget, selector)) {
	            var targetCulture = getCulture(e.lastTarget.id);
	
	            rv = handlers[selector].call(cult, e, targetCulture);
	        }
	    });
	
	    return rv;
	}
	
	function matchesSelector(el, selector) {
	    return [].indexOf.call(document.querySelectorAll(selector), el) >= 0;
	}
	
	function getCulture(id) {
	    return cultsRegistry[id];
	}
	
	function setCulture(cult) {
	    cult.id_ = getUid();
	
	    cultsRegistry[cult.id] = cult;
	}
	
	function removeCulture(cult) {
	    delete cultsRegistry[cult.id];
	}
	
	exports['default'] = {
	    getUid: getUid,
	    getCulture: getCulture,
	    setCulture: setCulture,
	    removeCulture: removeCulture,
	    createElement: createElement
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eventemitter2 = __webpack_require__(4);
	
	var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
	var Diplomat = (function (_EventEmitter) {
	    _inherits(Diplomat, _EventEmitter);
	
	    function Diplomat() {
	        _classCallCheck(this, Diplomat);
	
	        _get(Object.getPrototypeOf(Diplomat.prototype), 'constructor', this).call(this, {
	            maxListeners: Infinity
	        });
	    }
	
	    return Diplomat;
	})(_eventemitter22['default']);
	
	exports['default'] = Diplomat;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	'use strict';
	
	;!(function (undefined) {
	
	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;
	
	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }
	
	  function configure(conf) {
	    if (conf) {
	
	      this._conf = conf;
	
	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);
	
	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }
	
	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	
	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners = [],
	        leaf,
	        len,
	        branch,
	        xTree,
	        xxTree,
	        isolatedBranch,
	        endReached,
	        typeLength = type.length,
	        currentType = type[i],
	        nextType = type[i + 1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }
	
	    if (currentType === '*' || currentType === '**' || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 1));
	          }
	        }
	        return listeners;
	      } else if (currentType === '**') {
	        endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
	        if (endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }
	
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if (branch === '*' || branch === '**') {
	              if (tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if (branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i + 2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }
	
	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i + 1));
	    }
	
	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i + 1);
	    }
	
	    xxTree = tree['**'];
	    if (xxTree) {
	      if (i < typeLength) {
	        if (xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }
	
	        // Build arrays of matching next branches and others.
	        for (branch in xxTree) {
	          if (branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if (branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i + 2);
	            } else if (branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i + 1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i + 1);
	            }
	          }
	        }
	      } else if (xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if (xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }
	
	    return listeners;
	  }
	
	  function growListenerTree(type, listener) {
	
	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for (var i = 0, len = type.length; i + 1 < len; i++) {
	      if (type[i] === '**' && type[i + 1] === '**') {
	        return;
	      }
	    }
	
	    var tree = this.listenerTree;
	    var name = type.shift();
	
	    while (name) {
	
	      if (!tree[name]) {
	        tree[name] = {};
	      }
	
	      tree = tree[name];
	
	      if (type.length === 0) {
	
	        if (!tree._listeners) {
	          tree._listeners = listener;
	        } else if (typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        } else if (isArray(tree._listeners)) {
	
	          tree._listeners.push(listener);
	
	          if (!tree._listeners.warned) {
	
	            var m = defaultMaxListeners;
	
	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }
	
	            if (m > 0 && tree._listeners.length > m) {
	
	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', tree._listeners.length);
	              console.trace();
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }
	
	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.
	
	  EventEmitter.prototype.delimiter = '.';
	
	  EventEmitter.prototype.setMaxListeners = function (n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };
	
	  EventEmitter.prototype.event = '';
	
	  EventEmitter.prototype.once = function (event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };
	
	  EventEmitter.prototype.many = function (event, ttl, fn) {
	    var self = this;
	
	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }
	
	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }
	
	    listener._origin = fn;
	
	    this.on(event, listener);
	
	    return self;
	  };
	
	  EventEmitter.prototype.emit = function () {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }
	
	    // Loop through the *_all* functions and invoke them.
	    if (this._all) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        this._all[i].apply(this, args);
	      }
	    }
	
	    // If there is no 'error' event listener then throw.
	    if (type === 'error') {
	
	      if (!this._all && !this._events.error && !(this.wildcard && this.listenerTree.error)) {
	
	        if (arguments[1] instanceof Error) {
	          throw arguments[1]; // Unhandled 'error' event
	        } else {
	            throw new Error("Uncaught, unspecified 'error' event.");
	          }
	        return false;
	      }
	    }
	
	    var handler;
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }
	
	    if (typeof handler === 'function') {
	      this.event = type;
	      if (arguments.length === 1) {
	        handler.call(this);
	      } else if (arguments.length > 1) switch (arguments.length) {
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        // slower
	        default:
	          var l = arguments.length;
	          var args = new Array(l - 1);
	          for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	          handler.apply(this, args);
	      }
	      return true;
	    } else if (handler) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	
	      var listeners = handler.slice();
	      for (var i = 0, l = listeners.length; i < l; i++) {
	        this.event = type;
	        listeners[i].apply(this, args);
	      }
	      return listeners.length > 0 || !!this._all;
	    } else {
	      return !!this._all;
	    }
	  };
	
	  EventEmitter.prototype.on = function (type, listener) {
	
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }
	
	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);
	
	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);
	
	    if (this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }
	
	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    } else if (typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    } else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);
	
	      // Check for listener leak
	      if (!this._events[type].warned) {
	
	        var m = defaultMaxListeners;
	
	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }
	
	        if (m > 0 && this._events[type].length > m) {
	
	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	          console.trace();
	        }
	      }
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.onAny = function (fn) {
	
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }
	
	    if (!this._all) {
	      this._all = [];
	    }
	
	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };
	
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	  EventEmitter.prototype.off = function (type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }
	
	    var handlers,
	        leafs = [];
	
	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    } else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({ _listeners: handlers });
	    }
	
	    for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {
	
	        var position = -1;
	
	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
	            position = i;
	            break;
	          }
	        }
	
	        if (position < 0) {
	          continue;
	        }
	
	        if (this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        } else {
	          this._events[type].splice(position, 1);
	        }
	
	        if (handlers.length === 0) {
	          if (this.wildcard) {
	            delete leaf._listeners;
	          } else {
	            delete this._events[type];
	          }
	        }
	        return this;
	      } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
	        if (this.wildcard) {
	          delete leaf._listeners;
	        } else {
	          delete this._events[type];
	        }
	      }
	    }
	
	    return this;
	  };
	
	  EventEmitter.prototype.offAny = function (fn) {
	    var i = 0,
	        l = 0,
	        fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for (i = 0, l = fns.length; i < l; i++) {
	        if (fn === fns[i]) {
	          fns.splice(i, 1);
	          return this;
	        }
	      }
	    } else {
	      this._all = [];
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
	  EventEmitter.prototype.removeAllListeners = function (type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }
	
	    if (this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
	      for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    } else {
	      if (!this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.listeners = function (type) {
	    if (this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }
	
	    this._events || init.call(this);
	
	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };
	
	  EventEmitter.prototype.listenersAny = function () {
	
	    if (this._all) {
	      return this._all;
	    } else {
	      return [];
	    }
	  };
	
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    exports.EventEmitter2 = EventEmitter;
	  } else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eventemitter2 = __webpack_require__(4);
	
	var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
	var Regime = (function (_EventEmitter) {
	    _inherits(Regime, _EventEmitter);
	
	    function Regime() {
	        _classCallCheck(this, Regime);
	
	        _get(Object.getPrototypeOf(Regime.prototype), 'constructor', this).call(this, {
	            maxListeners: Infinity
	        });
	    }
	
	    return Regime;
	})(_eventemitter22['default']);
	
	exports['default'] = Regime;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _eventemitter2 = __webpack_require__(4);
	
	var _eventemitter22 = _interopRequireDefault(_eventemitter2);
	
	var Representative = (function (_EventEmitter) {
	    _inherits(Representative, _EventEmitter);
	
	    function Representative() {
	        _classCallCheck(this, Representative);
	
	        _get(Object.getPrototypeOf(Representative.prototype), 'constructor', this).call(this, {
	            maxListeners: Infinity
	        });
	    }
	
	    _createClass(Representative, [{
	        key: 'dispose',
	        value: function dispose() {
	            this.removeAllListeners();
	        }
	    }]);
	
	    return Representative;
	})(_eventemitter22['default']);
	
	exports['default'] = Representative;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Satellite = function Satellite() {
	  _classCallCheck(this, Satellite);
	};
	
	exports["default"] = Satellite;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Stereotype = function Stereotype() {
	  _classCallCheck(this, Stereotype);
	};
	
	exports["default"] = Stereotype;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Undertaker = function Undertaker() {
	  _classCallCheck(this, Undertaker);
	};
	
	exports["default"] = Undertaker;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=politburo.js.map
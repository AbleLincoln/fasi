/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/themes/fasi/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! exports provided: CountUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountUp\", function() { return CountUp; });\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version=\"2.0.7\",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:\",\",decimal:\".\",prefix:\"\",suffix:\"\"},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error=\"\",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?\"-\":\"\";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+=\"\").split(\".\"))[0],e=a.length>1?s.options.decimal+a[1]:\"\",s.options.useGrouping){r=\"\";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign(__assign({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,\"\"===this.options.separator&&(this.options.useGrouping=!1),this.el=\"string\"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error=\"[CountUp] target is null or undefined\"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);\"INPUT\"===this.el.tagName?this.el.value=i:\"text\"===this.el.tagName||\"tspan\"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return\"number\"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error=\"[CountUp] invalid start or end value: \"+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();\n\n//# sourceURL=webpack:///./node_modules/countup.js/dist/countUp.min.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/lodash/debounce.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/throttle.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__header/MobileHeader.js":
/*!*********************************************************!*\
  !*** ./src/app/themes/fasi/js/__header/MobileHeader.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\n\nclass MobileHeader {\n    constructor(trigger = '.btn-hamburger', pbody = 'body', listParent = '.menu-item-has-children > a') {\n        this.trigger = trigger;\n        this.pbody = pbody;\n        this.listParent = listParent;\n    }\n    init() {\n        $(this.trigger).on('click', this.setNavState);\n        $(this.listParent).on('click', this.setListState);\n    }\n    setNavState(e) {\n        e.preventDefault();\n        const body = $('body');\n\n        if ($(this).hasClass('open')) {\n            MobileHeader.hideWrapper(this, body);\n        } else {\n            MobileHeader.showWrapper(this, body);\n        }\n    }\n    setListState(e) {\n        if (!$(this).hasClass('open') && window.innerWidth < 992) {\n            e.preventDefault();\n            $(this).addClass('open');\n        }\n    }\n    static hideWrapper(el, body) {\n        $(el).removeClass('open');\n        body.removeClass('overlayed');\n        $(el).next().removeClass('active');\n    }\n    static showWrapper(el, body) {\n        $(el).addClass('open');\n        body.addClass('overlayed');\n        $(el).next().addClass('active');\n    }\n    resized() {\n        if (!$(this.trigger).is(':visible') && $(this.trigger).hasClass('open')) {\n            MobileHeader.hideWrapper(this.trigger, $(this.pbody));\n        }\n    }\n    hideOutsideClick(e) {\n        if ($(this.trigger).length > 0 && $(this.trigger).hasClass('open')) {\n            const container = $('.main-header');\n            if (!container.is(e.target) && container.has(e.target).length === 0) {\n                MobileHeader.hideWrapper(this.trigger, $(this.pbody));\n            }\n        }\n    }\n    scroll(){\n\t\tif(document.documentElement.scrollTop > 0){\n            $('.main-header').addClass('scrolled');\n\t\t} else {\n            $('.main-header').removeClass('scrolled');\n\t\t}\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new MobileHeader());\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__header/MobileHeader.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__header/alertBar.js":
/*!*****************************************************!*\
  !*** ./src/app/themes/fasi/js/__header/alertBar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable import/no-default-export */\nconst $ = jQuery.noConflict();\n\nconst localVar = document.body.classList.contains('home')\n    ? 'veracross-home-alertbar-close-date'\n    : 'veracross-alertbar-close-date';\n\nconst headerAlertBar = {\n    close: $('.js-alert-bar-close'),\n    bar: $('.js-alert-bar'),\n    header: $('.main-header'),\n\n    showAlertBar() {\n        const closeDate = localStorage.getItem(localVar);\n        if (closeDate) {\n            const date = new Date(parseInt(closeDate));\n            const actualDate = new Date();\n            const diff = actualDate - date;\n            const hoursDiff = Math.floor((diff / (1000 * 60 * 60)) % 24);\n\n            if (hoursDiff >= 24) {\n                localStorage.removeItem(localVar);\n                this.bar.show();\n                this.header.addClass('alertbar-visible');\n            } else {\n                this.bar.hide();\n                this.header.removeClass('alertbar-visible');\n            }\n        } else {\n            this.bar.show();\n            this.header.addClass('alertbar-visible');\n        }\n    },\n\n    closeAlertBar() {\n        this.bar.hide();\n        this.header.removeClass('alertbar-visible');\n        const date = new Date();\n        localStorage.setItem(localVar, date.getTime());\n    },\n\n    init() {\n        this.showAlertBar();\n        this.close.on('click', () => this.closeAlertBar());\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerAlertBar);\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__header/alertBar.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__init/controller.js":
/*!*****************************************************!*\
  !*** ./src/app/themes/fasi/js/__init/controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_alertBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__header/alertBar */ \"./src/app/themes/fasi/js/__header/alertBar.js\");\n/* harmony import */ var _header_MobileHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__header/MobileHeader */ \"./src/app/themes/fasi/js/__header/MobileHeader.js\");\n/* harmony import */ var _shortcodes_Accordions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__shortcodes/Accordions */ \"./src/app/themes/fasi/js/__shortcodes/Accordions.js\");\n/* harmony import */ var _page_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__page/Accordion */ \"./src/app/themes/fasi/js/__page/Accordion.js\");\n/* harmony import */ var _page_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__page/Tabs */ \"./src/app/themes/fasi/js/__page/Tabs.js\");\n/* harmony import */ var _page_LightboxGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../__page/LightboxGallery */ \"./src/app/themes/fasi/js/__page/LightboxGallery.js\");\n/* harmony import */ var _utils_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../__utils/video */ \"./src/app/themes/fasi/js/__utils/video.js\");\n/* harmony import */ var _utils_Sliders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../__utils/Sliders */ \"./src/app/themes/fasi/js/__utils/Sliders.js\");\n/* harmony import */ var _page_StatCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../__page/StatCounter */ \"./src/app/themes/fasi/js/__page/StatCounter.js\");\n/* harmony import */ var _page_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../__page/BackgroundVideo */ \"./src/app/themes/fasi/js/__page/BackgroundVideo.js\");\n/* harmony import */ var _utils_smoothScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../__utils/smoothScroll */ \"./src/app/themes/fasi/js/__utils/smoothScroll.js\");\n/* harmony import */ var _utils_Tables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../__utils/Tables */ \"./src/app/themes/fasi/js/__utils/Tables.js\");\n/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../__utils/forms */ \"./src/app/themes/fasi/js/__utils/forms.js\");\n/* harmony import */ var _utils_vhUnit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../__utils/vhUnit */ \"./src/app/themes/fasi/js/__utils/vhUnit.js\");\n// import MegaMenu from '../__header/MegaMenu';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// GLOBAL APP CONTROLLER\r\nconst controller = {\r\n    init() {\r\n        document.querySelector('html').classList.remove('no-js');\r\n        // MegaMenu.init();\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scroll();\r\n        _header_alertBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n        _shortcodes_Accordions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n        _page_Tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\r\n        _utils_video__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\r\n        _utils_Sliders__WEBPACK_IMPORTED_MODULE_7__[\"SimpleSlider\"].init();\r\n        _utils_Sliders__WEBPACK_IMPORTED_MODULE_7__[\"LightboxSlider\"].init();\r\n        _utils_Sliders__WEBPACK_IMPORTED_MODULE_7__[\"NewsBarSlider\"].init();\r\n        Object(_utils_Sliders__WEBPACK_IMPORTED_MODULE_7__[\"watchNewsBarChange\"])();\r\n        _page_LightboxGallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\r\n        Object(_utils_smoothScroll__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n        _utils_Tables__WEBPACK_IMPORTED_MODULE_11__[\"default\"].init();\r\n        _page_Accordion__WEBPACK_IMPORTED_MODULE_3__[\"ImageAccordion\"].init();\r\n        _page_Accordion__WEBPACK_IMPORTED_MODULE_3__[\"SimpleAccordion\"].init();\r\n        Object(_utils_vhUnit__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\r\n    },\r\n    loaded() {\r\n        document.querySelector('body').classList.add('page-has-loaded');\r\n        Object(_utils_forms__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n        // StatCounter.setStatWidth();\r\n        _page_StatCounter__WEBPACK_IMPORTED_MODULE_8__[\"default\"].positionCounters();\r\n        Object(_utils_vhUnit__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\r\n        _page_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__[\"default\"].loaded();\r\n    },\r\n    resized() {\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resized();\r\n        _utils_Tables__WEBPACK_IMPORTED_MODULE_11__[\"default\"].toggleShadow();\r\n        _page_LightboxGallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"].refreshSlider();\r\n        // StatCounter.setStatWidth();\r\n        _page_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__[\"default\"].sizeVideo();\r\n        Object(_utils_vhUnit__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\r\n    },\r\n    scrolled() {\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scroll();\r\n        _page_StatCounter__WEBPACK_IMPORTED_MODULE_8__[\"default\"].positionCounters();\r\n    },\r\n    keyDown(e){\r\n\r\n    },\r\n    mouseUp(e) {\r\n        // MobileHeader.hideOutsideClick(e);\r\n    },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\r\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__init/controller.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__page/Accordion.js":
/*!****************************************************!*\
  !*** ./src/app/themes/fasi/js/__page/Accordion.js ***!
  \****************************************************/
/*! exports provided: ImageAccordion, SimpleAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageAccordion\", function() { return ImageAccordion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleAccordion\", function() { return SimpleAccordion; });\nconst $ = jQuery.noConflict();\n\nclass Accordion {\n    constructor(accWrapper, accButton, prefix) {\n        this.prefix = prefix;\n        this.accWrapper = $(accWrapper);\n        this.accButton = $(accButton);\n    }\n    init() {\n        this.accButton.on('click', (e) => this.toggleTab(e));\n    }\n    toggleTab(e) {\n        e.preventDefault();\n        let itemClass = this.prefix + '__accordion-item';\n        let $item = $(e.target).closest(itemClass);\n        let imageId = $(e.target).data('image');\n        let $overlayImage;\n        let $baseImage;\n        if ( imageId ) {\n            $overlayImage = $('#image-overlay-' + imageId);\n            $baseImage = $('.block-image-accordion__image--original');\n        }\n\n        if ( $item.hasClass('open') ) {\n            $item.removeClass('open');\n            if ( imageId ) {\n                $overlayImage.removeClass('open');\n                $baseImage.css('opacity', '1');\n            }\n        } else {\n            $(itemClass).removeClass('open');\n            $item.addClass('open');\n            if ( imageId ) {\n                $(this.prefix + '__image-overlay').removeClass('open');\n                $overlayImage.addClass('open');\n                $baseImage.css('opacity', '0');\n            }\n        }\n    }\n}\n\nconst ImageAccordion = new Accordion('.block-image-accordion__accordion', '.block-image-accordion__accordion-item-title button', '.block-image-accordion');\nconst SimpleAccordion = new Accordion('.block-accordion__accordion', '.block-accordion__accordion-item-title button', '.block-accordion');\n\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__page/Accordion.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__page/BackgroundVideo.js":
/*!**********************************************************!*\
  !*** ./src/app/themes/fasi/js/__page/BackgroundVideo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\n\nclass BackgroundVideo {\n\tloaded() {\n    if ( $('.Vidage').length ) {\n      this.sizeVideo();\n      var isIOS = /iPad|iPhone|iPod|Android/.test(navigator.platform);\n    \n      if (isIOS) {\n        var canvasVideo = new CanvasVideoPlayer({\n          videoSelector: '.Vidage__video',\n          canvasSelector: '.Vidage__canvas',\n          timelineSelector: false,\n          autoplay: true,\n          makeLoop: true,\n          pauseOnClick: false,\n          audio: false\n        });\n      } else {\n        document.querySelectorAll('.Vidage__canvas')[0].style.display = 'none';\n        new Vidage('#VidageVideo');\n      }\n    }\n\t}\n  sizeVideo() {\n    if ( $('.Vidage').length ) {\n      $('.Vidage__canvas').removeClass('sized');\n      let videoWidth = $('.Vidage__canvas').outerWidth();\n      let videoHeight = $('.Vidage__canvas').outerHeight();\n      let containerWidth = $('.Vidage').outerWidth();\n      let containerHeight = $('.Vidage').outerHeight();\n\n      let aspectRatio = videoWidth / videoHeight;\n\n      if (videoWidth < containerWidth) {\n        videoWidth = containerWidth;\n        videoHeight = containerWidth / aspectRatio;\n      }\n\n      if (videoHeight < containerHeight) {\n        videoHeight = containerHeight;\n        videoWidth = containerHeight * aspectRatio;\n      }\n\n      $('.Vidage__canvas').outerWidth(videoWidth).outerHeight(videoHeight);\n      $('.Vidage__canvas').addClass('sized');\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new BackgroundVideo());\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__page/BackgroundVideo.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__page/LightboxGallery.js":
/*!**********************************************************!*\
  !*** ./src/app/themes/fasi/js/__page/LightboxGallery.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_lockScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__utils/lockScroll */ \"./src/app/themes/fasi/js/__utils/lockScroll.js\");\n\n\nconst $ = jQuery.noConflict();\n\nclass LightboxGallery {\n    constructor() {\n        this.lightboxes = $('.lightbox-gallery__slider');\n        this.lightboxOpen = $('.lightbox-gallery__single-thumb');\n        this.lightboxClose = $('.lightbox-gallery__close');\n    }\n    init() {\n        this.bindEvents();\n    }\n    bindEvents() {\n        this.lightboxOpen.on('click', this.openLightbox);\n        this.lightboxClose.on('click', this.closeLightbox);\n    }\n    openLightbox(e) {\n        e.preventDefault();\n        const slideNum = parseInt(this.hash.slice(1), 10);\n        const lightboxBlock = $(this).closest('.block-gallery-lightbox');\n\n        lightboxBlock.find('.lightbox-gallery__gallery-wrapper').addClass('active');\n        lightboxBlock.find('.lightbox-gallery__slider').slick('slickGoTo', slideNum, true);\n        _utils_lockScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lock();\n    }\n    refreshSlider() {\n        this.lightboxes.slick('refresh');\n    }\n    closeLightbox() {\n        const lightboxWrapper = $(this).parent('.lightbox-gallery__gallery-wrapper');\n        lightboxWrapper.removeClass('active');\n        _utils_lockScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unlock();\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new LightboxGallery());\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__page/LightboxGallery.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__page/StatCounter.js":
/*!******************************************************!*\
  !*** ./src/app/themes/fasi/js/__page/StatCounter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ \"./node_modules/countup.js/dist/countUp.min.js\");\nconst $ = jQuery.noConflict();\n\n\n\nclass StatCounter {\n\tconstructor(stat) {\n\t\tthis.stat = $(stat);\n\t}\n\tsetStatWidth() {\n\t\t$('.block-challenge__stat .stat-container').each(function() {\n\t\t\t$(this).removeClass('sized');\n\t\t\t$(this).css('width', 'auto');\n\t\t\t$(this).css('flex-basis', 'auto');\n\t\t\tlet width = $(this).find('.stat-full').outerWidth();\n\t\t\t$(this).css('width', width);\n\t\t\t$(this).css('flex-basis', width);\n\t\t\t$(this).addClass('sized');\n\t\t});\n\t}\n\tpositionCounters() {\n\t\tconst thisClass = this;\n\t\tthis.stat.each(function() {\n\t\t\tlet scrollTop = $(window).scrollTop();\n\t\t\tlet windowHeight = $(window).height();\n\t\t\tlet thisPosition = $(this).offset().top;\n\n\t\t\tif (scrollTop + windowHeight >= thisPosition) {\n\t\t\t\tif (!$(this).hasClass('animate')){\n\t\t\t\t\t$(this).addClass('animate');\n\t\t\t\t\tthisClass.countStat($(this).attr('id'));\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\tcountStat(el) {\n\t\tconst countTo = $('#' + el).data('count-to');\n\t\tconst easingFn = function (t, b, c, d) {\n\t\t\tvar ts = (t /= d) * t;\n\t\t\tvar tc = ts * t;\n\t\t\treturn b + c * (tc + -3 * ts + 3 * t);\n\t\t}\n\t\tconst options = {\n\t\t\tduration: 4,\n\t\t\tstartVal: $('#' + el).data('count-from'),\n\t\t  easingFn,\n\t\t};\n\t\tlet count = new countup_js__WEBPACK_IMPORTED_MODULE_0__[\"CountUp\"](el, countTo, options);\n\t\tif (!count.error) {\n\t\t\tcount.start();\n\t\t} else {\n\t\t\tconsole.error(count.error);\n\t\t}\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new StatCounter( '.js-stat-counter' ));\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__page/StatCounter.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__page/Tabs.js":
/*!***********************************************!*\
  !*** ./src/app/themes/fasi/js/__page/Tabs.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\n\nclass Tabs {\n    constructor(wrapper, tabsLink, tabsControls) {\n        this.tabsWrapper = $(wrapper);\n        this.tabsLink = $(tabsLink);\n        this.tabsControls = this.tabsWrapper.find(tabsControls);\n    }\n    init() {\n        this.tabsLink.on('click', this.toggleTab);\n        this.mobileTabsNav();\n    }\n    mobileTabsNav() {\n        const list = $('.tabs__link-list');\n        function shadowFunc() {\n            const el = $(this);\n            const parent = el.parents('.tab-head-wrap');\n            if ( el[0].offsetWidth < el[0].scrollWidth) {\n                parent.addClass('has-scroll');\n            } else {\n               parent.removeClass('has-scroll');\n            }\n        }\n        list.each(shadowFunc);\n    }\n    toggleTab(e) {\n        e.preventDefault();\n\n        const el = $(this);\n        const targetId = this.hash;\n        const wrapper = el.closest('.block-tabs');\n        const parentList = el.parents('.tabs__link-list');\n\n        const target = wrapper.find(`.tabs__tab-content[data-tab-id=\"${targetId}\"]`);\n\n        wrapper.find('.tabs__tab-content').removeClass('active');\n        wrapper.find('.tabs__link').removeClass('active');\n\n        el.parent().addClass('active');\n        target.addClass('active');\n\n       /* if (window.matchMedia('(max-width: 767px)').matches && !parentList.hasClass('slick-initialized')) {\n            const childNum = parentList[0].childElementCount;\n            let middle = Math.ceil(childNum / 2);\n            const listActive = parentList.children('li.active');\n            const elIndex = el.parent().index() + 1;\n            if (elIndex > middle) {\n                middle = Math.floor(childNum / 2);\n            }\n            parentList.find(`li:nth-child(${middle})`).after(listActive);\n        }*/\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Tabs('.tabs__link-list-wrapper', '.tabs__link a', '.tab-nav-button'));\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__page/Tabs.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__shortcodes/Accordions.js":
/*!***********************************************************!*\
  !*** ./src/app/themes/fasi/js/__shortcodes/Accordions.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\n\nclass Accordions {\n    constructor(trigger) {\n        this.trigger = $(trigger);\n    }\n    init() {\n        this.bindEvents();\n    }\n    bindEvents() {\n        this.trigger.on('click', this.toggleAccordion);\n    }\n    toggleAccordion() {\n        $(this).parent().toggleClass('active');\n        $(this).next().stop().slideToggle(250);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Accordions('.single-accordion__title'));\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__shortcodes/Accordions.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/Sliders.js":
/*!***************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/Sliders.js ***!
  \***************************************************/
/*! exports provided: SimpleSlider, LightboxSlider, NewsBarSlider, watchNewsBarChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleSlider\", function() { return SimpleSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightboxSlider\", function() { return LightboxSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsBarSlider\", function() { return NewsBarSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchNewsBarChange\", function() { return watchNewsBarChange; });\nconst $ = jQuery.noConflict();\n\nclass Slider {\n    constructor( selector, args = {} ) {\n        this.selector = selector;\n        this.args = args;\n    }\n\n    getDefaultSlickSettings() {\n        return {\n            dots: false,\n            arrows: true,\n            infinite: true,\n            slidesToShow: 1,\n            slidesToScroll: 1,\n            pauseOnHover: false,\n            speed: 600,\n        }\n    }\n\n    /**\n     * Override our default slick settings with args provided to the class.\n     */\n    getSlickSettings() {\n        return Object.assign( {}, this.getDefaultSlickSettings(), this.args );\n    }\n\n    init() {\n        let settings = this.getSlickSettings();\n\n        $( this.selector ).slick( settings );\n    }\n}\nconst SimpleSlider = new Slider('.bc-gallery__slider');\nconst LightboxSlider = new Slider('.lightbox-gallery__slider');\nconst NewsBarSlider = new Slider(\n    '.js-news-bar-slider',\n    {\n        appendArrows: '.js-news-bar-arrows'\n    }\n);\n\nfunction watchNewsBarChange() {\n    let slideNum;\n    $('.js-news-bar-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {\n        slideNum = (nextSlide + 1).toString();\n        slideNum = 1 === slideNum.length ? '0' + slideNum : slideNum;\n        $('.js-news-bar-slide-count').html(slideNum);\n    });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/Sliders.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/Tables.js":
/*!**************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/Tables.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\n\nclass Tables {\n    constructor() {\n        this.tables = $('table.tablepress');\n    }\n\n    init() {\n        this.toggleShadow();\n    }\n\n    toggleShadow() {\n        this.tables.each((i, el) => {\n            const item = $(el);\n            const scrollWrapper = item.closest('.tablepress-scroll-wrapper');\n\n            scrollWrapper.removeClass('has-scroll');\n            if (item[0].offsetWidth > scrollWrapper.width()) {\n                scrollWrapper.addClass('has-scroll');\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Tables());\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/Tables.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/detectTabNav.js":
/*!********************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/detectTabNav.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst detectTabNav = (e) => {\n    if (e.keyCode === 9) {\n        document.querySelector('html').classList.add('user-tab-nav');\n\n        window.removeEventListener('keydown', detectTabNav);\n        window.addEventListener('mousedown', detectMouseNav);\n    }\n}\n\nconst detectMouseNav = () => {\n    document.querySelector('html').classList.remove('user-tab-nav');\n\n    window.removeEventListener('mousedown', detectMouseNav);\n    window.addEventListener('keydown', detectTabNav);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (detectTabNav);\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/detectTabNav.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/forms.js":
/*!*************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/forms.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Forms = () => {\n  const hubspotForm = document.querySelectorAll('.hbspt-form form.hs-custom-style');\n\n  //Remove hubspot's styling from forms\n  if (hubspotForm) {\n    hubspotForm.forEach(function(form) {\n      form.classList.remove('hs-custom-style');\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forms);\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/forms.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/lockScroll.js":
/*!******************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/lockScroll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * --------------------------------------------------------------------------\r\n * Lock screen\r\n * Function locking screen scrolling, e.g for modals, menus or other\r\n * --------------------------------------------------------------------------\r\n */\r\n\r\nconst lockScroll = {\r\n    isLocked: false,\r\n    lock() {\r\n        if (this.isLocked) {\r\n            return;\r\n        }\r\n        this.isLocked = true;\r\n\r\n        document.body.style.overflow = 'hidden';\r\n    },\r\n    unlock() {\r\n        if (!this.isLocked) {\r\n            return;\r\n        }\r\n        this.isLocked = false;\r\n\r\n        document.body.style.overflow = '';\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (lockScroll);\r\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/lockScroll.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/smoothScroll.js":
/*!********************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/smoothScroll.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_MobileHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__header/MobileHeader */ \"./src/app/themes/fasi/js/__header/MobileHeader.js\");\n\r\n\r\nconst $ = jQuery.noConflict();\r\nfunction scrollFunc(e) {\r\n    e.preventDefault();\r\n    const header = $('.main-header');\r\n    const stickyClass = 'main-header--sticky';\r\n    const target = $($(this).attr('href'));\r\n    let stickyHeight = 115;\r\n    if (header.hasClass(stickyClass)) {\r\n        stickyHeight = header.outerHeight();\r\n    }\r\n    if ($(this).attr('href') === '#next' && $(this).parents('section').next().length > 0) {\r\n        // Smooth Scroll to next section\r\n        $('html, body').animate({\r\n            scrollTop: $(this).parents('section').next().offset().top - stickyHeight,\r\n        }, 600);\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideWrapper('.btn-hamburger', $('body'));\r\n    } else if (target.length) {\r\n        $('html, body').animate({\r\n            scrollTop: target.offset().top - stickyHeight,\r\n        }, 600);\r\n        _header_MobileHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideWrapper('.btn-hamburger', $('body'));\r\n    }\r\n}\r\nfunction pageLoadScrollFunc(target) {\r\n    const header = $('.main-header');\r\n    const stickyClass = 'main-header--sticky';\r\n    let stickyHeight = 115;\r\n    if (header.hasClass(stickyClass)) {\r\n        stickyHeight = header.outerHeight();\r\n    }\r\n    $('html, body').animate({\r\n        scrollTop: target.offset().top - stickyHeight,\r\n    }, 600);\r\n}\r\nfunction setPageForInternalSmoothScroll() {\r\n    $('a[href]').each( function() {\r\n        let thisLocation = $(this).attr('href');\r\n        if ( \r\n            thisLocation === window.location.pathname + window.location.hash ||\r\n            thisLocation.includes(window.location.pathname + '#')\r\n        ) {\r\n            $(this).attr('href', thisLocation.replace( window.location.pathname, '' ));\r\n        }\r\n    } );\r\n}\r\nfunction smoothScroll() {\r\n    // to top right away\r\n    if ( window.location.hash ) scroll(0,0);\r\n    // void some browsers issue\r\n    setTimeout( function() { scroll(0,0); }, 1);\r\n    console.log('file js');\r\n\r\n    setPageForInternalSmoothScroll();\r\n\r\n    if ( window.location.hash ) {\r\n        pageLoadScrollFunc($(window.location.hash));\r\n    }\r\n\r\n    $('a[href^=\"#\"]:not([href=\"#\"])').on('click', scrollFunc);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/smoothScroll.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/vhUnit.js":
/*!**************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/vhUnit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst vhUnit = () => {\n\tdocument.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vhUnit);\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/vhUnit.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/__utils/video.js":
/*!*************************************************!*\
  !*** ./src/app/themes/fasi/js/__utils/video.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $ = jQuery.noConflict();\r\n\r\nconst video = {\r\n    iframeWrapper: $('.iframe-wrapper'),\r\n    init() {\r\n        const overlay = video.iframeWrapper.find('.iframe-wrapper__overlay');\r\n        overlay.on('click', this.hideOverlay);\r\n    },\r\n    hideOverlay(e) {\r\n        e.preventDefault();\r\n        video.iframeWrapper.each((i ,el)=>{\r\n            const iframeSrc = $(el).find('iframe').attr('src');\r\n            if(iframeSrc) {\r\n                $(el).find('iframe')[0].src = '';\r\n            }\r\n            const imageUrl = $(el).data('image-src');\r\n            $(el).find('.iframe-wrapper__overlay').css('background-image', 'url(' + imageUrl + ')').show();\r\n        });\r\n\r\n        const parent = $(this).parents('.iframe-wrapper');\r\n        let source = parent.find('iframe')[0].dataset.src;\r\n        if (!parent.hasClass('wistia')) {\r\n            source += '&autoplay=1&loop=1&rel=0&wmode=transparent';\r\n        } else {\r\n            source = `https://fast.wistia.net/embed/iframe/${parent.data('video-id')}?autoplay=1&silentAutoPlay=false`;\r\n        }\r\n        parent.find('iframe')[0].src = source;\r\n        $(this).delay(300).fadeOut();\r\n\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (video);\r\n\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/__utils/video.js?");

/***/ }),

/***/ "./src/app/themes/fasi/js/script.js":
/*!******************************************!*\
  !*** ./src/app/themes/fasi/js/script.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__init/controller */ \"./src/app/themes/fasi/js/__init/controller.js\");\n/* harmony import */ var _utils_detectTabNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__utils/detectTabNav */ \"./src/app/themes/fasi/js/__utils/detectTabNav.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nlet handled = false;\r\n\r\n_init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n\r\nwindow.addEventListener('load', _init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loaded);\r\nwindow.addEventListener('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(_init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scrolled, 100), { passive: true });\r\nwindow.addEventListener('resize', lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(_init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resized, 100));\r\nwindow.addEventListener('keydown', e => {\r\n    Object(_utils_detectTabNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e);\r\n    _init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyDown(e);\r\n});\r\n\r\nconst handleMouseAndTouchEvents = (e) => {\r\n\tif (e.type === \"touchend\") {\r\n\t\thandled = true;\r\n\t\t_init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouseUp(e);\r\n\t} else if (e.type === \"mouseup\" && !handled) {\r\n\t\t_init_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mouseUp(e);\r\n\t} else {\r\n\t\thandled = false;\r\n\t}\r\n};\r\n\r\ndocument.addEventListener('mouseup', handleMouseAndTouchEvents);\r\ndocument.addEventListener('touchend', handleMouseAndTouchEvents);\n\n//# sourceURL=webpack:///./src/app/themes/fasi/js/script.js?");

/***/ })

/******/ });
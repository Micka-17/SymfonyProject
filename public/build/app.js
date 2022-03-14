(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/dist/alert */ "./node_modules/bootstrap/js/dist/alert.js");
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var r6operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! r6operators */ "./node_modules/r6operators/dist/index.mjs");
/* harmony import */ var _assets_images_noBrain_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/noBrain.png */ "./assets/images/noBrain.png");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application


 // or, specify which plugins you need:




var defender = [r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].alibi, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].aruni, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].bandit, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].castle, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].caveira, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].clash, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].doc, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].echo, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].ela, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].frost, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].goyo, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].jager, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].kaid, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].kapkan, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].lesion, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].maestro, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].melusi, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].mira, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].mozzie, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].mute, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].oryx, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].pulse, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].rook, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].smoke, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].tachanka, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].thorn, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].thunderbird, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].valkyrie, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].vigil, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].wamai, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].warden];
var attacker = [r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].ace, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].amaru, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].ash, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].blackbeard, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].blitz, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].buck, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].capitao, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].dokkaebi, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].finka, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].flores, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].fuze, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].glaz, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].gridlock, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].hibana, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].iana, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].iq, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].jackal, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].kali, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].lion, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].maverick, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].montagne, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].nokk, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].nomad, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].osa, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].sledge, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].thatcher, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].thermite, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].twitch, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].ying, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].zero, r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].zofia];
var url = window.location.href;
var fetchAttack;

function fetchAttacker() {
  return _fetchAttacker.apply(this, arguments);
}

function _fetchAttacker() {
  _fetchAttacker = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetchAttack = [];
            _context.next = 3;
            return fetch("".concat(url, "challengeAttack")).then(function (res) {
              return res.json();
            }).then(function (data) {
              return fetchAttack = data;
            })["catch"](function (error) {
              return Promise.reject();
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAttacker.apply(this, arguments);
}

;
fetchAttacker();
var fetchDefense;

function fetchDefender() {
  return _fetchDefender.apply(this, arguments);
}

function _fetchDefender() {
  _fetchDefender = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fetchDefense = [];
            _context2.next = 3;
            return fetch("".concat(url, "challengeDefense")).then(function (res) {
              return res.json();
            }).then(function (data) {
              return fetchDefense = data;
            })["catch"](function (error) {
              return Promise.reject();
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchDefender.apply(this, arguments);
}

;
fetchDefender(); //H5 Random

var idDefender = document.getElementById('idDefender');
idDefender.innerHTML = "Random";
var idAttacker = document.getElementById('idAttacker');
idAttacker.innerHTML = "Random"; ////

var html = "<img class=\"w-100 d-flex align-items-center\" src=\"".concat(_assets_images_noBrain_png__WEBPACK_IMPORTED_MODULE_10__, "\" alt=\"ACME logo\">");
var defend = document.getElementById('defenderSVG');
defend.innerHTML = "".concat(html);
var attack = document.getElementById('attackerSVG');
attack.innerHTML = "".concat(html); // BTN Defender
//ADD random SVG Defender

var btnDefender = document.getElementById('btnDefender');
btnDefender.addEventListener("click", function () {
  var defenderOperators = defender[Math.floor(Math.random() * defender.length)];
  var defenderSVG = defenderOperators.toSVG();
  var defend = document.getElementById('defenderSVG');
  defend.innerHTML = defenderSVG; //
  //Name of operator

  var idDefender = document.getElementById('idDefender');
  idDefender.innerHTML = defenderOperators.id; //
  //Challenge

  var defenderChallenge = fetchDefense[Math.floor(Math.random() * fetchDefense.length)];
  var tacticalDefender = document.getElementById('tacticalDefender');
  tacticalDefender.innerHTML = defenderChallenge;

  if (defenderChallenge === "SMG" || defenderChallenge === "Light Machine Guns" || defenderChallenge === "Shield" || defenderChallenge === "Marksman Rifles" || defenderChallenge === "Shotgun !") {
    defend.innerHTML = r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].recruit_blue.toSVG();
    idDefender.innerHTML = "Choose a character!";
  } //

}); /////////////
//BTN Attacker
//ADD random SVG Attacker

var btnAttacker = document.getElementById('btnAttacker');
btnAttacker.addEventListener("click", function () {
  var attackerOperators = attacker[Math.floor(Math.random() * attacker.length)];
  var attackerSVG = attackerOperators.toSVG();
  var attack = document.getElementById('attackerSVG');
  attack.innerHTML = attackerSVG; //
  //Name of operator

  var idAttacker = document.getElementById('idAttacker');
  idAttacker.innerHTML = attackerOperators.id; //
  //Challenge

  var attackerChallenge = fetchAttack[Math.floor(Math.random() * fetchAttack.length)];
  var tacticalAttacker = document.getElementById('tacticalAttacker');
  tacticalAttacker.innerHTML = attackerChallenge;

  if (attackerChallenge === "SMG" || attackerChallenge === "Light Machine Guns" || attackerChallenge === "Shield" || attackerChallenge === "Marksman Rifles" || attackerChallenge === "Shotgun !") {
    attack.innerHTML = r6operators__WEBPACK_IMPORTED_MODULE_9__["default"].recruit_blue.toSVG();
    idAttacker.innerHTML = "Choose a character!";
  } //

}); ////////////
// Dark-Mode

var darkMode = document.getElementById('darkMode');
darkMode.addEventListener("click", function () {
  var white = document.querySelectorAll('.tWhite, #idAttacker, #idDefender, #tacticalAttacker, #tacticalDefender');
  white.forEach(function (x) {
    return x.classList.toggle('text-white');
  });
  /* const nav = document.querySelector('nav');
  nav.classList.toggle('bg-secondary !important'); */

  var body = document.querySelector('body');
  body.classList.toggle('bg-dark');
  var btn = document.querySelector('button');
  btn.classList.toggle('btn-outline-dark');
}); //

/* const challengeAttacker = [
    "Play with controller",
    "Attack from a window !",
    "Only knife",
    "No aim",
    "Rush !",
    "Forbidden to lean and run! !",
    "Secondary only !",
    "No scop !",
    "No accessories",
    "Suppressor !",
    "No gadgets !",
    "TK act like you didn't do it on purpose !!!!!!",
    "SMG",
    "Light Machine Guns",
    "Marksman Rifles",
    "Shield",
    "Shotgun !"
];

const challengeDefender = [
    "Play with controller",
    "Full run !",
    "Only knife",
    "No aim",
    "Forbidden to lean and run! !",
    "SpawnKill !",
    "Reinforcement of walls is prohibited !",
    "Open walls and windows !",
    "Secondary only !",
    "No scop !",
    "No accessories",
    "Suppressor !",
    "No gadgets !",
    "Hide and seek ! (You can take Mira...)",
    "TK act like you didn't do it on purpose !!!!!!",
    "SMG",
    "Light Machine Guns",
    "Marksman Rifles",
    "Shield",
    "Shotgun !"
]; */

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/noBrain.png":
/*!***********************************!*\
  !*** ./assets/images/noBrain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/noBrain.7ec42cb7.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-8442a4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJ2Jvb3RzdHJhcC9qcy9kaXN0L2FsZXJ0JztcblxuLy8gb3IsIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZDpcbmltcG9ydCB7IFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyIH0gZnJvbSAnYm9vdHN0cmFwJztcblxuaW1wb3J0IHI2b3BlcmF0b3JzIGZyb20gXCJyNm9wZXJhdG9yc1wiXG5pbXBvcnQgbm9CcmFpbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL25vQnJhaW4ucG5nJztcblxuY29uc3QgZGVmZW5kZXIgPSBbXG4gICAgcjZvcGVyYXRvcnMuYWxpYmksIFxuICAgIHI2b3BlcmF0b3JzLmFydW5pLCBcbiAgICByNm9wZXJhdG9ycy5iYW5kaXQsIFxuICAgIHI2b3BlcmF0b3JzLmNhc3RsZSwgXG4gICAgcjZvcGVyYXRvcnMuY2F2ZWlyYSwgXG4gICAgcjZvcGVyYXRvcnMuY2xhc2gsIFxuICAgIHI2b3BlcmF0b3JzLmRvYywgXG4gICAgcjZvcGVyYXRvcnMuZWNobywgXG4gICAgcjZvcGVyYXRvcnMuZWxhLFxuICAgIHI2b3BlcmF0b3JzLmZyb3N0LCBcbiAgICByNm9wZXJhdG9ycy5nb3lvLCBcbiAgICByNm9wZXJhdG9ycy5qYWdlciwgXG4gICAgcjZvcGVyYXRvcnMua2FpZCwgXG4gICAgcjZvcGVyYXRvcnMua2Fwa2FuLCBcbiAgICByNm9wZXJhdG9ycy5sZXNpb24sIFxuICAgIHI2b3BlcmF0b3JzLm1hZXN0cm8sIFxuICAgIHI2b3BlcmF0b3JzLm1lbHVzaSwgXG4gICAgcjZvcGVyYXRvcnMubWlyYSxcbiAgICByNm9wZXJhdG9ycy5tb3p6aWUsIFxuICAgIHI2b3BlcmF0b3JzLm11dGUsIFxuICAgIHI2b3BlcmF0b3JzLm9yeXgsIFxuICAgIHI2b3BlcmF0b3JzLnB1bHNlLCBcbiAgICByNm9wZXJhdG9ycy5yb29rLCBcbiAgICByNm9wZXJhdG9ycy5zbW9rZSwgXG4gICAgcjZvcGVyYXRvcnMudGFjaGFua2EsIFxuICAgIHI2b3BlcmF0b3JzLnRob3JuLCBcbiAgICByNm9wZXJhdG9ycy50aHVuZGVyYmlyZCxcbiAgICByNm9wZXJhdG9ycy52YWxreXJpZSwgXG4gICAgcjZvcGVyYXRvcnMudmlnaWwsIFxuICAgIHI2b3BlcmF0b3JzLndhbWFpLCBcbiAgICByNm9wZXJhdG9ycy53YXJkZW5cbl07XG5jb25zdCBhdHRhY2tlciA9IFtcbiAgICByNm9wZXJhdG9ycy5hY2UsIFxuICAgIHI2b3BlcmF0b3JzLmFtYXJ1LCBcbiAgICByNm9wZXJhdG9ycy5hc2gsIFxuICAgIHI2b3BlcmF0b3JzLmJsYWNrYmVhcmQsIFxuICAgIHI2b3BlcmF0b3JzLmJsaXR6LCBcbiAgICByNm9wZXJhdG9ycy5idWNrLCBcbiAgICByNm9wZXJhdG9ycy5jYXBpdGFvLCBcbiAgICByNm9wZXJhdG9ycy5kb2trYWViaSwgXG4gICAgcjZvcGVyYXRvcnMuZmlua2EsXG4gICAgcjZvcGVyYXRvcnMuZmxvcmVzLCBcbiAgICByNm9wZXJhdG9ycy5mdXplLCBcbiAgICByNm9wZXJhdG9ycy5nbGF6LCBcbiAgICByNm9wZXJhdG9ycy5ncmlkbG9jaywgXG4gICAgcjZvcGVyYXRvcnMuaGliYW5hLCBcbiAgICByNm9wZXJhdG9ycy5pYW5hLCBcbiAgICByNm9wZXJhdG9ycy5pcSwgXG4gICAgcjZvcGVyYXRvcnMuamFja2FsLCBcbiAgICByNm9wZXJhdG9ycy5rYWxpLFxuICAgIHI2b3BlcmF0b3JzLmxpb24sIFxuICAgIHI2b3BlcmF0b3JzLm1hdmVyaWNrLCBcbiAgICByNm9wZXJhdG9ycy5tb250YWduZSwgXG4gICAgcjZvcGVyYXRvcnMubm9raywgXG4gICAgcjZvcGVyYXRvcnMubm9tYWQsIFxuICAgIHI2b3BlcmF0b3JzLm9zYSwgXG4gICAgcjZvcGVyYXRvcnMuc2xlZGdlLCBcbiAgICByNm9wZXJhdG9ycy50aGF0Y2hlciwgXG4gICAgcjZvcGVyYXRvcnMudGhlcm1pdGUsXG4gICAgcjZvcGVyYXRvcnMudHdpdGNoLCBcbiAgICByNm9wZXJhdG9ycy55aW5nLCBcbiAgICByNm9wZXJhdG9ycy56ZXJvLCBcbiAgICByNm9wZXJhdG9ycy56b2ZpYVxuXTtcblxubGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG5sZXQgZmV0Y2hBdHRhY2s7XG5hc3luYyBmdW5jdGlvbiBmZXRjaEF0dGFja2VyKCkge1xuICAgIGZldGNoQXR0YWNrID0gW107XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfWNoYWxsZW5nZUF0dGFja2ApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oZGF0YSA9PiBmZXRjaEF0dGFjayA9IGRhdGEpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KClcbiAgICB9KTtcbn07XG5mZXRjaEF0dGFja2VyKClcblxubGV0IGZldGNoRGVmZW5zZTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGVmZW5kZXIoKSB7XG4gICAgZmV0Y2hEZWZlbnNlID0gW107XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfWNoYWxsZW5nZURlZmVuc2VgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGRhdGEgPT4gZmV0Y2hEZWZlbnNlID0gZGF0YSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKVxuICAgIH0pO1xufTtcbmZldGNoRGVmZW5kZXIoKVxuXG4vL0g1IFJhbmRvbVxuY29uc3QgaWREZWZlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZERlZmVuZGVyJyk7XG5pZERlZmVuZGVyLmlubmVySFRNTCA9IFwiUmFuZG9tXCI7XG5cbmNvbnN0IGlkQXR0YWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRBdHRhY2tlcicpO1xuaWRBdHRhY2tlci5pbm5lckhUTUwgPSBcIlJhbmRvbVwiO1xuLy8vL1xuXG5sZXQgaHRtbCA9IGA8aW1nIGNsYXNzPVwidy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIHNyYz1cIiR7bm9CcmFpbn1cIiBhbHQ9XCJBQ01FIGxvZ29cIj5gO1xuY29uc3QgZGVmZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmVuZGVyU1ZHJyk7XG5kZWZlbmQuaW5uZXJIVE1MID0gYCR7aHRtbH1gO1xuY29uc3QgYXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja2VyU1ZHJyk7XG5hdHRhY2suaW5uZXJIVE1MID0gYCR7aHRtbH1gO1xuXG4vLyBCVE4gRGVmZW5kZXJcbi8vQUREIHJhbmRvbSBTVkcgRGVmZW5kZXJcbmNvbnN0IGJ0bkRlZmVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRlZmVuZGVyJyk7XG5idG5EZWZlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuY29uc3QgZGVmZW5kZXJPcGVyYXRvcnMgPSBkZWZlbmRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGVmZW5kZXIubGVuZ3RoKV07XG5jb25zdCBkZWZlbmRlclNWRyA9IGRlZmVuZGVyT3BlcmF0b3JzLnRvU1ZHKCk7XG5jb25zdCBkZWZlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmZW5kZXJTVkcnKTtcbmRlZmVuZC5pbm5lckhUTUwgPSBkZWZlbmRlclNWRztcbi8vXG4vL05hbWUgb2Ygb3BlcmF0b3JcbmNvbnN0IGlkRGVmZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWREZWZlbmRlcicpO1xuaWREZWZlbmRlci5pbm5lckhUTUwgPSBkZWZlbmRlck9wZXJhdG9ycy5pZDtcbi8vXG4vL0NoYWxsZW5nZVxuY29uc3QgZGVmZW5kZXJDaGFsbGVuZ2UgPSBmZXRjaERlZmVuc2VbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmZldGNoRGVmZW5zZS5sZW5ndGgpXTtcbmNvbnN0IHRhY3RpY2FsRGVmZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjdGljYWxEZWZlbmRlcicpO1xudGFjdGljYWxEZWZlbmRlci5pbm5lckhUTUwgPSBkZWZlbmRlckNoYWxsZW5nZTtcbmlmKGRlZmVuZGVyQ2hhbGxlbmdlID09PSBcIlNNR1wiIHx8IGRlZmVuZGVyQ2hhbGxlbmdlID09PSBcIkxpZ2h0IE1hY2hpbmUgR3Vuc1wiIHx8IGRlZmVuZGVyQ2hhbGxlbmdlID09PSBcIlNoaWVsZFwiIHx8IGRlZmVuZGVyQ2hhbGxlbmdlID09PSBcIk1hcmtzbWFuIFJpZmxlc1wiIHx8IGRlZmVuZGVyQ2hhbGxlbmdlID09PSBcIlNob3RndW4gIVwiKSB7XG4gICAgZGVmZW5kLmlubmVySFRNTCA9IHI2b3BlcmF0b3JzLnJlY3J1aXRfYmx1ZS50b1NWRygpO1xuICAgIGlkRGVmZW5kZXIuaW5uZXJIVE1MID0gXCJDaG9vc2UgYSBjaGFyYWN0ZXIhXCI7XG59XG5cbi8vXG59KVxuLy8vLy8vLy8vLy8vL1xuXG4vL0JUTiBBdHRhY2tlclxuLy9BREQgcmFuZG9tIFNWRyBBdHRhY2tlclxuY29uc3QgYnRuQXR0YWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQXR0YWNrZXInKTtcbmJ0bkF0dGFja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5jb25zdCBhdHRhY2tlck9wZXJhdG9ycyA9IGF0dGFja2VyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphdHRhY2tlci5sZW5ndGgpXTtcbmNvbnN0IGF0dGFja2VyU1ZHID0gYXR0YWNrZXJPcGVyYXRvcnMudG9TVkcoKTtcbmNvbnN0IGF0dGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tlclNWRycpO1xuYXR0YWNrLmlubmVySFRNTCA9IGF0dGFja2VyU1ZHO1xuLy9cbi8vTmFtZSBvZiBvcGVyYXRvclxuY29uc3QgaWRBdHRhY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZEF0dGFja2VyJyk7XG5pZEF0dGFja2VyLmlubmVySFRNTCA9IGF0dGFja2VyT3BlcmF0b3JzLmlkO1xuLy9cbi8vQ2hhbGxlbmdlXG5jb25zdCBhdHRhY2tlckNoYWxsZW5nZSA9IGZldGNoQXR0YWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpmZXRjaEF0dGFjay5sZW5ndGgpXTtcbmNvbnN0IHRhY3RpY2FsQXR0YWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjdGljYWxBdHRhY2tlcicpO1xudGFjdGljYWxBdHRhY2tlci5pbm5lckhUTUwgPSBhdHRhY2tlckNoYWxsZW5nZTtcbmlmKGF0dGFja2VyQ2hhbGxlbmdlID09PSBcIlNNR1wiIHx8IGF0dGFja2VyQ2hhbGxlbmdlID09PSBcIkxpZ2h0IE1hY2hpbmUgR3Vuc1wiIHx8IGF0dGFja2VyQ2hhbGxlbmdlID09PSBcIlNoaWVsZFwiIHx8IGF0dGFja2VyQ2hhbGxlbmdlID09PSBcIk1hcmtzbWFuIFJpZmxlc1wiIHx8IGF0dGFja2VyQ2hhbGxlbmdlID09PSBcIlNob3RndW4gIVwiKSB7XG4gICAgYXR0YWNrLmlubmVySFRNTCA9IHI2b3BlcmF0b3JzLnJlY3J1aXRfYmx1ZS50b1NWRygpO1xuICAgIGlkQXR0YWNrZXIuaW5uZXJIVE1MID0gXCJDaG9vc2UgYSBjaGFyYWN0ZXIhXCI7XG59XG4vL1xufSlcbi8vLy8vLy8vLy8vL1xuLy8gRGFyay1Nb2RlXG5jb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrTW9kZScpO1xuZGFya01vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbmNvbnN0IHdoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRXaGl0ZSwgI2lkQXR0YWNrZXIsICNpZERlZmVuZGVyLCAjdGFjdGljYWxBdHRhY2tlciwgI3RhY3RpY2FsRGVmZW5kZXInKTtcbndoaXRlLmZvckVhY2goeCA9PiB4LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtd2hpdGUnKSk7XG4vKiBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbm5hdi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1zZWNvbmRhcnkgIWltcG9ydGFudCcpOyAqL1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYmctZGFyaycpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5idG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLW91dGxpbmUtZGFyaycpO1xufSlcbi8vXG5cblxuXG5cblxuXG5cblxuXG4vKiBjb25zdCBjaGFsbGVuZ2VBdHRhY2tlciA9IFtcbiAgICBcIlBsYXkgd2l0aCBjb250cm9sbGVyXCIsXG4gICAgXCJBdHRhY2sgZnJvbSBhIHdpbmRvdyAhXCIsXG4gICAgXCJPbmx5IGtuaWZlXCIsXG4gICAgXCJObyBhaW1cIixcbiAgICBcIlJ1c2ggIVwiLFxuICAgIFwiRm9yYmlkZGVuIHRvIGxlYW4gYW5kIHJ1biEgIVwiLFxuICAgIFwiU2Vjb25kYXJ5IG9ubHkgIVwiLFxuICAgIFwiTm8gc2NvcCAhXCIsXG4gICAgXCJObyBhY2Nlc3Nvcmllc1wiLFxuICAgIFwiU3VwcHJlc3NvciAhXCIsXG4gICAgXCJObyBnYWRnZXRzICFcIixcbiAgICBcIlRLIGFjdCBsaWtlIHlvdSBkaWRuJ3QgZG8gaXQgb24gcHVycG9zZSAhISEhISFcIixcbiAgICBcIlNNR1wiLFxuICAgIFwiTGlnaHQgTWFjaGluZSBHdW5zXCIsXG4gICAgXCJNYXJrc21hbiBSaWZsZXNcIixcbiAgICBcIlNoaWVsZFwiLFxuICAgIFwiU2hvdGd1biAhXCJcbl07XG5cbmNvbnN0IGNoYWxsZW5nZURlZmVuZGVyID0gW1xuICAgIFwiUGxheSB3aXRoIGNvbnRyb2xsZXJcIixcbiAgICBcIkZ1bGwgcnVuICFcIixcbiAgICBcIk9ubHkga25pZmVcIixcbiAgICBcIk5vIGFpbVwiLFxuICAgIFwiRm9yYmlkZGVuIHRvIGxlYW4gYW5kIHJ1biEgIVwiLFxuICAgIFwiU3Bhd25LaWxsICFcIixcbiAgICBcIlJlaW5mb3JjZW1lbnQgb2Ygd2FsbHMgaXMgcHJvaGliaXRlZCAhXCIsXG4gICAgXCJPcGVuIHdhbGxzIGFuZCB3aW5kb3dzICFcIixcbiAgICBcIlNlY29uZGFyeSBvbmx5ICFcIixcbiAgICBcIk5vIHNjb3AgIVwiLFxuICAgIFwiTm8gYWNjZXNzb3JpZXNcIixcbiAgICBcIlN1cHByZXNzb3IgIVwiLFxuICAgIFwiTm8gZ2FkZ2V0cyAhXCIsXG4gICAgXCJIaWRlIGFuZCBzZWVrICEgKFlvdSBjYW4gdGFrZSBNaXJhLi4uKVwiLFxuICAgIFwiVEsgYWN0IGxpa2UgeW91IGRpZG4ndCBkbyBpdCBvbiBwdXJwb3NlICEhISEhIVwiLFxuICAgIFwiU01HXCIsXG4gICAgXCJMaWdodCBNYWNoaW5lIEd1bnNcIixcbiAgICBcIk1hcmtzbWFuIFJpZmxlc1wiLFxuICAgIFwiU2hpZWxkXCIsXG4gICAgXCJTaG90Z3VuICFcIlxuXTsgKi8iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiQWxlcnQiLCJUb29sdGlwIiwiVG9hc3QiLCJQb3BvdmVyIiwicjZvcGVyYXRvcnMiLCJub0JyYWluIiwiZGVmZW5kZXIiLCJhbGliaSIsImFydW5pIiwiYmFuZGl0IiwiY2FzdGxlIiwiY2F2ZWlyYSIsImNsYXNoIiwiZG9jIiwiZWNobyIsImVsYSIsImZyb3N0IiwiZ295byIsImphZ2VyIiwia2FpZCIsImthcGthbiIsImxlc2lvbiIsIm1hZXN0cm8iLCJtZWx1c2kiLCJtaXJhIiwibW96emllIiwibXV0ZSIsIm9yeXgiLCJwdWxzZSIsInJvb2siLCJzbW9rZSIsInRhY2hhbmthIiwidGhvcm4iLCJ0aHVuZGVyYmlyZCIsInZhbGt5cmllIiwidmlnaWwiLCJ3YW1haSIsIndhcmRlbiIsImF0dGFja2VyIiwiYWNlIiwiYW1hcnUiLCJhc2giLCJibGFja2JlYXJkIiwiYmxpdHoiLCJidWNrIiwiY2FwaXRhbyIsImRva2thZWJpIiwiZmlua2EiLCJmbG9yZXMiLCJmdXplIiwiZ2xheiIsImdyaWRsb2NrIiwiaGliYW5hIiwiaWFuYSIsImlxIiwiamFja2FsIiwia2FsaSIsImxpb24iLCJtYXZlcmljayIsIm1vbnRhZ25lIiwibm9rayIsIm5vbWFkIiwib3NhIiwic2xlZGdlIiwidGhhdGNoZXIiLCJ0aGVybWl0ZSIsInR3aXRjaCIsInlpbmciLCJ6ZXJvIiwiem9maWEiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJmZXRjaEF0dGFjayIsImZldGNoQXR0YWNrZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoRGVmZW5zZSIsImZldGNoRGVmZW5kZXIiLCJpZERlZmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImlkQXR0YWNrZXIiLCJodG1sIiwiZGVmZW5kIiwiYXR0YWNrIiwiYnRuRGVmZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVmZW5kZXJPcGVyYXRvcnMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJkZWZlbmRlclNWRyIsInRvU1ZHIiwiaWQiLCJkZWZlbmRlckNoYWxsZW5nZSIsInRhY3RpY2FsRGVmZW5kZXIiLCJyZWNydWl0X2JsdWUiLCJidG5BdHRhY2tlciIsImF0dGFja2VyT3BlcmF0b3JzIiwiYXR0YWNrZXJTVkciLCJhdHRhY2tlckNoYWxsZW5nZSIsInRhY3RpY2FsQXR0YWNrZXIiLCJkYXJrTW9kZSIsIndoaXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJidG4iLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9
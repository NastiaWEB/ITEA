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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/defineProperty.js":
/*!***************************************!*\
  !*** ./application/defineProperty.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tСинтаксис:\n\tObject.defineProperty(obj, prop, descriptor)\n\n\tobj - Объект, в котором объявляется свойство.\n\tprop - Имя свойства, которое нужно объявить или модифицировать.\n\tdescriptor - Дескриптор – объект, который описывает поведение свойства\n\n*/\nvar MyObj = {};\nMyObj.title = \"Super Animal\";\nMyObj._ObjHeight = 0;\n\nMyObj.func = function () {\n  return this.name;\n};\n\nObject.defineProperty(MyObj, \"cuteness\", {\n  // value – значение свойства, по умолчанию undefined\n  value: \"max\" // configurable – если true, то свойство можно удалять, а также менять его\n  // в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.\n  // configurable: true,\n  // writable – значение свойства можно менять, если true. По умолчанию false.\n  // writable: true,\n  // enumerable – если true, то свойство просматривается в цикле for..in и\n  // методе Object.keys(). По умолчанию false.\n  // enumerable: true,\n  // get – функция, которая возвращает значение свойства. По умолчанию undefined.\n  // get: () => { console.log( 'getter'); },\n  // // set – функция, которая записывает значение свойства. По умолчанию undefined.\n  // set: () => { console.log( 'setter'); }\n\n}); //writable demo ->\n// MyObj.name = 10;\n// MyObj.name\n// configurable demo ->\n// delete MyObj.name;\n// enumerable demo ->\n\nObject.defineProperty(MyObj, \"func\", {\n  enumerable: false\n}); // Можно добавить уже после обьявления\n//  console.log('name demo:', MyObj);\n// for(let key in MyObj) console.log(key);\n// console.log( Object.keys(MyObj) );\n// - - - - - - - - - - - - - -\n// Object.defineProperty(MyObj, \"fullName\", {\n//   get: function() {\n//     return `${this.title} ${this.name}`;\n//   }\n// });\n// console.log('FullName getter:', MyObj.fullName );\n// console.log( MyObj );\n//\n\nObject.defineProperty(MyObj, \"height\", {\n  get: function get() {\n    return \"\".concat(this._ObjHeight, \" cm\");\n  },\n  set: function set(value) {\n    this._ObjHeight = value;\n    console.log('ObjHeight setter:', this._ObjHeight);\n  }\n});\nMyObj.height = 20;\nconsole.log(MyObj.height);\nconsole.log(MyObj, MyObj.ObjHeight);\n\n//# sourceURL=webpack:///./application/defineProperty.js?");

/***/ }),

/***/ "./application/fn-class.js":
/*!*********************************!*\
  !*** ./application/fn-class.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n    Live demo:\n\n\n    binding \n\n    Fn\n    Class\n    - super\n    - static\n\n*/\nvar FunctionsAndClasses = function FunctionsAndClasses() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionsAndClasses);\n\n//# sourceURL=webpack:///./application/fn-class.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fn_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn-class */ \"./application/fn-class.js\");\n/* harmony import */ var _set_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_get */ \"./application/set_get.js\");\n/* harmony import */ var _set_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_set_get__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defineProperty */ \"./application/defineProperty.js\");\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {// setGet();\n  // fncl();\n  // defineProps();\n});\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/set_get.js":
/*!********************************!*\
  !*** ./application/set_get.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\nПример использование сеттера и геттера из es6\n*/\nvar gettersAndSettersInClass = function gettersAndSettersInClass() {\n  var Person =\n  /*#__PURE__*/\n  function () {\n    function Person(name, age) {\n      _classCallCheck(this, Person);\n\n      Object.defineProperty(this, '_name', {\n        enumerable: false,\n        value: name\n      });\n      Object.defineProperty(this, '_age', {\n        enumerable: false,\n        value: age\n      });\n    }\n\n    _createClass(Person, [{\n      key: \"walk\",\n      value: function walk() {\n        console.log(this._name + ' is walking.');\n      }\n    }, {\n      key: \"name\",\n      get: function get() {\n        return this._name.toUpperCase();\n      },\n      set: function set(newName) {\n        this._name = \"Validated \".concat(newName);\n        console.log('new name:', this._name);\n      }\n    }, {\n      key: \"age\",\n      get: function get() {\n        console.log('get age:', this._age);\n        return this._age;\n      },\n      set: function set(newAge) {\n        console.log('set age:', newAge);\n\n        if (this._age <= newAge) {\n          this._age = newAge;\n        } else {\n          throw new Error('Возраст не может быть меньше предыдущего');\n        }\n      }\n    }]);\n\n    return Person;\n  }();\n\n  var Bunny = new Person('Bunny', 22);\n  Bunny.name = 'Sunny';\n  console.log(Petya);\n  Bunny.age = 23;\n};\n\n//# sourceURL=webpack:///./application/set_get.js?");

/***/ })

/******/ });
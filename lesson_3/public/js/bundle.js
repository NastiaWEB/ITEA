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

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleton */ \"./application/singleton/index.js\");\n/*\n  npm run cli -> Для запуска сборки\n*/\n\n\n\nObject(_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/singleton/index.js":
/*!****************************************!*\
  !*** ./application/singleton/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object_freeze */ \"./application/singleton/object_freeze.js\");\n/* harmony import */ var _old_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old-singleton */ \"./application/singleton/old-singleton.js\");\n/* harmony import */ var _new_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-singleton */ \"./application/singleton/new-singleton.js\");\n/* harmony import */ var _oop_singleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oop-singleton */ \"./application/singleton/oop-singleton.js\");\n\n\n\n\n// FreezeDemo();\n\n\nconst SingletonDemo = () => {\n/*\n    Singleton (он же одиночка)— это паттерн проектирования,\n    который гарантирует, что у класса есть только один экземпляр,\n    и предоставляет к нему глобальную точку доступа.\n\n    Про паттерн: https://refactoring.guru/ru/design-patterns/singleton\n\n    Рассмотрим три реализации синглтона в JS:\n*/\n\n\n/*\n\tПервая -- классический ООП паттерн. Который актуален для большинства объектно ориентированых языков.\n*/\n// \tconst store1 = new Single('test');\n// \tstore1.addToData();\n// \tconsole.log('first instance:', store1 );\n\n// \tconst store2 = new Single('test2');\n// \tstore2.addToData();\n// \tconsole.log('second instanse:', store2 );\n\n// \tconsole.log('is same Object?', store1 === store2 );\n\n/*\n\tВторая, старая реализация объектного синглтона через замыкания.\n*/\n  // oldSingletonDemo();\n/*\n\tТретья, новая реализация объектного синглтона через модули и метод Object.freeze();\n*/\n  // newSingetonDemo();\n\n};  \n\nconst oldSingletonDemo = () => {\n    // Смотрим реализацию в файле old-singleton.js  \n\n    console.log( _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"] );\n    _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add({id: 0, language: 'js'});\n    _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add({id: 1, language: 'phyton'});\n    _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add({id: 2, language: 'php'});\n    _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add({id: 3, language: 'ruby'});\n\n    console.log('OldSingleton', _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showData() );\n    let myLang = _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(0);\n    let myLang2 = _old_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(3);\n    console.log('OldSingleton -> myLang', myLang);\n    console.log('OldSingleton -> myLang', myLang2);\n};\n//\nconst newSingetonDemo = () => {\n  // Как и все в js в 2019 меньше, быстрее, чище!\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add({id: 0, language: 'js'});\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add({id: 1, language: 'phyton'});\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add({id: 2, language: 'php'});\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add({id: 3, language: 'ruby'});\n\t//\n\tconsole.log('NewSingleton', _new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\tlet myLang = _new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(2);\n\tconsole.log('NewSingleton -> myLang', myLang);\n\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addCounter(20);\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addCounter(20);\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addCounter(20);\n\t_new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addCounter(20);\n\tconsole.log( _new_singleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCounter() );\n\n\t/*\n\t\tДемо усложнить синглтон\n\t*/\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingletonDemo);\n\n\n//# sourceURL=webpack:///./application/singleton/index.js?");

/***/ }),

/***/ "./application/singleton/new-singleton.js":
/*!************************************************!*\
  !*** ./application/singleton/new-singleton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Так как является константой, не может быть измененно\nconst _data = {\n  store: [],\n  counter: 0\n};\n\n// Создаем обьект и методы\nconst Store = {\n  add: item => _data.store.push(item),\n  get: id => _data.store.find( d => d.id === id ),\n  showAllLang: () => [ ..._data.store ],\n  getCounter: () => _data.counter,\n  addCounter: (num) => _data.counter += num\n};\n// Замораживаем\nObject.freeze(Store);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\n\n//# sourceURL=webpack:///./application/singleton/new-singleton.js?");

/***/ }),

/***/ "./application/singleton/object_freeze.js":
/*!************************************************!*\
  !*** ./application/singleton/object_freeze.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ObjectFreezeDemo = () => {\n/*\n\tРазберемся вначале с Object.freeze. ->\n\thttps://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze\n*/\n\nconst myObj = {\n\tname: 'Dexter',\n\tprop: () => {\n\t\tconsole.log(`${undefined.name} woohoo!`);\n\t}\n};\n\nconsole.log( myObj );\nmyObj.name = \"Debra\";\nconsole.log( myObj );\n\n/*\n    Заморозка обьекта, это необратимый процесс.\n    Единожды заомроженный обьект уже не может быть разморожен!\n    Заморозим обьект\n*/\nlet frozen = Object.freeze(myObj);\n//Попробуем изменить или добавить значение\n// myObj.name = 'name';\n// frozen.name = \"Vince\";\n// frozen.secondName = 'Morgan';\n\n// Проверим сам обьект и его идентичность с тем,\n// что мы создали в самом начале функции\n// console.log( 'frozen', frozen, 'equal?', frozen === myObj);\n\n/*\n\tТак же, метод работает для массивов\n*/\nlet frozenArray = Object.freeze(['froze', 'inside', 'of', 'array']);\n\n// Попробуем добавить новое значение\n// frozenArray[0] = 'Noooooo!';\n\n// Попробуем использовать методы\nlet sliceOfColdAndSadArray = frozenArray.slice(0, 1);\nsliceOfColdAndSadArray.map( item => console.log( item ) );\nconsole.log(frozenArray, sliceOfColdAndSadArray);\n\n// Метоы для проверки\n// Object.isFrozen( obj ) -> Вернет true если обьект заморожен\nconsole.log(\n    'is myObj frozen?', Object.isFrozen( myObj ),\n    '\\nis frozen frozen?', Object.isFrozen( frozen ),\n    '\\nis array frozen', Object.isFrozen( frozenArray )\n);\n\n/*\n\tЗаморозка в обьектах является не глубокой\n*/\n\n\tlet universe = {\n\t\tinfinity: Infinity,\n\t\tgood: ['cats', 'love', 'rock-n-roll'],\n\t\tevil: {\n\t\t\tbonuses: ['cookies', 'great look']\n\t\t}\n\t};\n\tlet frozenUniverse = Object.freeze(universe);\n\tfrozenUniverse.humans = [];\n\tfrozenUniverse.evil.humans = [];\n\tconsole.log(frozenUniverse);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ObjectFreezeDemo);\n\n\n//# sourceURL=webpack:///./application/singleton/object_freeze.js?");

/***/ }),

/***/ "./application/singleton/old-singleton.js":
/*!************************************************!*\
  !*** ./application/singleton/old-singleton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n\tIIFE - Immediately Invoked Function Expression\n\t( function(){\n\n\t})();\n*/\n\n\nconst OldSingleton = ( function(){\n\tvar _data = [];\n\n\tfunction add(item){\n\t\t_data.push(item);\n\t}\n\n\tfunction showData(){\n\t\treturn [..._data];\n\t}\n\n\tfunction get(id){\n\t\treturn _data.find((d) => {\n\t\t\treturn d.id === id;\n\t\t});\n\t}\n\n\treturn {\n\t\tadd: add,\n\t\tget: get,\n\t\tshowData: showData\n\t};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OldSingleton);\n\n\n//# sourceURL=webpack:///./application/singleton/old-singleton.js?");

/***/ }),

/***/ "./application/singleton/oop-singleton.js":
/*!************************************************!*\
  !*** ./application/singleton/oop-singleton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Single {\n    constructor( name ){\n        if( Single.instance === null){\n            this.name = name;\n            this.data = [];\n            Single.instance = this;\n        }\n        return Single.instance;\n    }\n\n    addToData(){\n        this.data.push(1);\n    }\n}\n\nSingle.instance = null;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Single);\n\n//# sourceURL=webpack:///./application/singleton/oop-singleton.js?");

/***/ })

/******/ });
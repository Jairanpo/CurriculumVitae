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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var content = {\r\n    experience: {\r\n        title: {\r\n            en: `<div class=\"title\">Experience</div>`,\r\n            sp: \"Experiencía\"\r\n        },\r\n        places: [\r\n\r\n            {\r\n                place: `<div class=\"company\">\r\n                Ool Digital: VFX Studio\r\n                </div>`,\r\n\r\n                position: `\r\n                <div class=\"position\">\r\n                    Tecnical Director & SysAdmin\r\n                </div>\r\n            `,\r\n                description: `<div class=\"parragraph\">\r\n                    I was in charge of creating the data flow among\r\n                    all the deparments involved on the creation of CG\r\n                    content as well as hardware maintenance, network\r\n                    security, comunication and documentation.\r\n                    </div>\r\n                `,\r\n                tecnologies: [\"Python\", \"Javascript\", \"Webpack\", \"Qt\", \"Mikrotic\", \"Houdini\", \"Maya\", \"Redshift\"]\r\n            },\r\n\r\n\r\n            {\r\n                place: `\r\n                    <div class=\"company\">\r\n                        Talent Network: Technology Events\r\n                    </div>`,\r\n                position: `\r\n                    <div class=\"position\">\r\n                        Fullstack Developer\r\n                    </div>\r\n                `,\r\n                description: `<div class=\"parragraph\">\r\n                    I develop the backend side of a RestAPI service,\r\n                    and deploy the database designed for it. \r\n                    This service provide information about articles, \r\n                    courses and events related with technology as well\r\n                    as services like authentication, registration, security.<br>\r\n                    On the frontend side, I help the team with the frontend\r\n                    architecture, client side requests and security protocols.\r\n                    </div>\r\n                `,\r\n                tecnologies: [\"Python\", \"Javascript\", \"Webpack\", \"Qt\", \"Mikrotic\", \"Houdini\", \"Maya\", \"Redshift\"]\r\n            },\r\n\r\n\r\n            {\r\n                place: `\r\n                    <div class=\"company\">\r\n                        Huevocartoon: CG Film\r\n                    </div>`,\r\n                position: `\r\n                    <div class=\"position\">\r\n                        Layout Technical Director\r\n                    </div>\r\n                `,\r\n                description: `\r\n                <div class=\"parragraph\">\r\n                    <ul style=\"margin-top:0\">\r\n                        <li>Creating tools for the cinematography team and using several CG and VFX APIs.</li>\r\n                        <li>Cloth simulation system on top of nCloth system to improve delivery times for the VFX department.</li>\r\n                        <li>Use of linear algebra to solve problems in the 3D environments.</li>\r\n                        <li>Verify and automate data transference from the cinematography department.</li>\r\n                        <li>Automatic rigging with focus on performance to help the staging and ease the task of analazing the\r\n                        <li>flow of the editing process.</li>\r\n                        <li>Stage and camera artist.</li>\r\n                        <li>Environment concept artist & Graphic designer.</li>\r\n                    <ul>\r\n                </div>\r\n                `,\r\n                tecnologies: [\"Python\", \"Qt\", \"JSON\", \"Mel\", \"Maya\", \"Softimage\", \"Photoshop\", \"Illustrator\"]\r\n            },\r\n        ]\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nvar html = /*html*/ `\r\n<div class=\"main\">\r\n    <div class=\"c-name\">\r\n        <div class=\"circle\">\r\n            <div class=\"name\">\r\n                Jair <br> Anguiano\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"c-quadrants\">\r\n        <div class=\"t-left\">\r\n            <div class=\"content\">\r\n                ${content.experience.title.en}\r\n                ${experience(content.experience.places)}\r\n            </div>\r\n        </div>\r\n        <div class=\"t-right\">\r\n            <div class=\"content\">\r\n                ${content.experience.title.en}\r\n                ${experience(content.experience.places)}\r\n            </div>\r\n        </div>\r\n        <div class=\"b-left\">\r\n            <div class=\"content\">\r\n            ${content.experience.title.en}\r\n            ${experience(content.experience.places)}\r\n            </div>\r\n        </div>\r\n        <div class=\"b-right\">\r\n            <div class=\"content\">\r\n                ${content.experience.title.en}\r\n                ${experience(content.experience.places)}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n`\r\n\r\n\r\nfunction experience(list_of_places) {\r\n    result = ''\r\n\r\n    list_of_places.forEach(function append(element) {\r\n        result +=\r\n            `<div class=\"place\">\r\n                ${element.place}\r\n                ${element.position}\r\n                ${element.description}\r\n                ${tecnologies(element.tecnologies, \"div\", \"tecnologies\")}\r\n            </div>\r\n        `\r\n    })\r\n    return result\r\n}\r\n\r\n\r\nfunction tecnologies(list_of_strings, tag, class_name) {\r\n    result = '<div class=\"horizontal-list\">'\r\n    list_of_strings.forEach(function(element, index) {\r\n        if (index != list_of_strings.length - 1) {\r\n            result += `\r\n            <${tag} class=\\\"${class_name}\\\">\r\n            ${element + '&nbsp|&nbsp'}\r\n            </${tag}>\r\n        `\r\n        } else {\r\n            result += `\r\n            <${tag} class=${class_name}>\r\n            ${element}\r\n            </${tag}>\r\n        `\r\n        }\r\n    });\r\n    result += '</div>'\r\n    return result\r\n}\r\n\r\n\r\n\r\nconsole.log(html)\r\nvar div = document.createElement(\"div\")\r\ndiv.innerHTML = html\r\nmodule.exports = div\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_home__WEBPACK_IMPORTED_MODULE_1___default.a)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ })

/******/ });
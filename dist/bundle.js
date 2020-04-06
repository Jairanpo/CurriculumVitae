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

/***/ "./src/components/code_samples.js":
/*!****************************************!*\
  !*** ./src/components/code_samples.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar code_samples = {\r\n  title: \"Code samples\",\r\n  list_of_samples: [\r\n    {\r\n      link: \"https://github.com/Jairanpo/CGToolkits/\",\r\n      description: `\r\n      This is the full proyect for the software created for the generation\r\n      of computer graphics content. From filesystem organization, video\r\n      transcoding and toolkits using APIs that software like Houdini, Blender \r\n      and Maya share.\r\n    `\r\n    },\r\n    {\r\n      link: \"https://github.com/Jairanpo/OolBrainFrontend\",\r\n      description: `\r\n      Nuxt.js configuration for a site that contain the pipeline\r\n      documentation for a VFX Studio.\r\n    `\r\n    },\r\n    {\r\n      link: \"https://github.com/Jairanpo/CGAgnostics\",\r\n      description: `\r\n      A set of UI creation utilities that allow me to quickly create\r\n      apps with Python and Qt.\r\n    `\r\n    },\r\n    {\r\n      link: \"https://github.com/Jairanpo/CurriculumVitae\",\r\n      description: `\r\n      Showcase of a the quick configuration of Webpack I did for this\r\n      CV.\r\n    `\r\n    }\r\n  ]\r\n};\r\n\r\nvar html = `\r\n  <div class=\"content\">\r\n    <div class=\"title\">${code_samples.title}</div>\r\n    <div class=\"codes\">${code_samples_html(code_samples.list_of_samples)}</div>\r\n  </div>\r\n`;\r\n\r\nmodule.exports = html;\r\n\r\n/* ===================================================================== */\r\n\r\nfunction code_samples_html(list_of_codes) {\r\n  var result = \"\";\r\n  list_of_codes.forEach(function create(code) {\r\n    result += `\r\n      <div class=\"code\">\r\n        <div class=\"link\"><a href=${code.link} target=\"_blank\" rel=\"noopener noreferrer\">${code.link}</a></div>\r\n        <div class=\"description\">${code.description}</div>\r\n      </div>\r\n    `;\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/code_samples.js?");

/***/ }),

/***/ "./src/components/education.js":
/*!*************************************!*\
  !*** ./src/components/education.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar education = {\r\n  title: \"Education\",\r\n  courses: [\r\n    {\r\n      title:\r\n        \"Technical Support Fundamentals. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT\",\r\n      link: \"https://coursera.org/share/0043ca93cf2c4e2e43a819235e339e72\",\r\n      academy: \"Google\",\r\n      location: \"Coursera.com\"\r\n    },\r\n    {\r\n      title:\r\n        \"The Bits and Bytes of Computer Networking. Certificate earned at Tuesday, July 23, 2019 4:36 AM GMT\",\r\n      link: \"https://coursera.org/share/eb426a1e622626b1bc9e6a378ffec2df\",\r\n      academy: \"Google\",\r\n      location: \"Coursera.com\"\r\n    },\r\n    {\r\n      title:\r\n        \"Operating Systems and You: Becoming a Power User. Certificate earned at Saturday, September 14, 2019 5:48 PM GMT\",\r\n      link: \"https://coursera.org/share/e993a83fa423d16ad7745f6aa3696a9a\",\r\n      academy: \"Google\",\r\n      location: \"Coursera.com\"\r\n    },\r\n    {\r\n      title:\r\n        \"System Administration and IT Infrastructure Services. Certificate earned at Wednesday, November 13, 2019 10:36 PM GMT\",\r\n      link: \"https://coursera.org/share/da628e9dc52003d936b5f52a9ec0090f\",\r\n      academy: \"Google\",\r\n      location: \"Coursera.com\"\r\n    },\r\n    {\r\n      title:\r\n        \"IT Security: Defense against the digital dark arts. Certificate earned at Monday, January 20, 2020 11:19 PM GMT\",\r\n      link: \"https://coursera.org/share/ffb842a802ac0f9f64b812fac15576f2\",\r\n      academy: \"Google\",\r\n      location: \"Coursera.com\"\r\n    },\r\n    {\r\n      title: \"Animation\",\r\n      link: \"http://uartesdigitales.edu.mx/\",\r\n      academy: \"Universidad de Artes Digitales\",\r\n      location: \"Guadalajara. Jalisco. Mexico\"\r\n    }\r\n  ]\r\n};\r\n\r\nvar html = /*html*/ `\r\n  <div class=\"title\">${education.title}</div>\r\n  <div class=\"courses\">${education_html(education.courses)}</div>\r\n`;\r\n\r\nmodule.exports = html;\r\n\r\n/* ======================================================================== */\r\n\r\nfunction education_html(list_of_courses) {\r\n  var result = \"\";\r\n\r\n  list_of_courses.forEach(function create(course) {\r\n    result += /*html*/ `\r\n    <div class=\"course\">\r\n      <div class=\"title\">${course.title}\r\n        <div class=\"academy\">${course.academy}</div>\r\n        <div class=\"location\">${course.location}</div>\r\n        <div class=\"link\"><a href=${course.link} target=\"_blank\" rel=\"noopener noreferrer\">${course.link}</a></div>\r\n      </div>\r\n    </div>\r\n    `;\r\n  });\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/education.js?");

/***/ }),

/***/ "./src/components/experience.js":
/*!**************************************!*\
  !*** ./src/components/experience.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar content = {\r\n  experience: {\r\n    title: {\r\n      en: `<div class=\"title\">Experience</div>`,\r\n      sp: \"Experiencía\"\r\n    },\r\n    places: [\r\n      {\r\n        place: `<div class=\"company\">\r\n                Ool Digital: VFX Studio\r\n                </div>`,\r\n\r\n        position: `\r\n                <div class=\"position\">\r\n                    Technical Director & SysAdmin\r\n                </div>\r\n            `,\r\n        description: `<div class=\"parragraph\">\r\n                    I was in charge of creating the data flow among\r\n                    all the deparments involved on the creation of CG\r\n                    content as well as hardware maintenance, network\r\n                    security, comunication and documentation.\r\n                        <ul style=\"margin:0\">\r\n                            <li><a href=https://ooldigital.com  target=\"_blank\" rel=\"noopener noreferrer\"/>Ool Digital</a></li>\r\n                            <li><a href=https://oolbrain.netlify.app target=\"_blank\" rel=\"noopener noreferrer\"/>Ool Brain</a></li>\r\n                        </ul>\r\n                    </div>\r\n                `,\r\n        tecnologies: [\r\n          \"Python\",\r\n          \"Javascript\",\r\n          \"Webpack\",\r\n          \"Qt\",\r\n          \"MikroTik\",\r\n          \"Houdini\",\r\n          \"Maya\",\r\n          \"Redshift\"\r\n        ]\r\n      },\r\n\r\n      {\r\n        place: `<div class=\"company\">\r\n                Freelancer: \r\n                </div>`,\r\n\r\n        position: `\r\n                <div class=\"position\">\r\n                    Software Developer & CG Artist\r\n                </div>\r\n            `,\r\n        description: `<div class=\"parragraph\">\r\n                    Since the beguining of my carrer I have been working on very distinct projects that\r\n                    range from web|app|videogames development and as a CG artist. <br>\r\n                    <ul style=\"margin:0\">\r\n                    <li><a href=https://laepocafilm.com target=\"_blank\" rel=\"noopener noreferrer\"/>La Epoca</a></li> \r\n                    <li><a href=https://www.youtube.com/watch?v=RevcANUqVBg target=\"_blank\" rel=\"noopener noreferrer\">Ghost Apocalypse</a></li>\r\n                    <li><a href=https://josuemastroianni.com/ target=\"_blank\" rel=\"noopener noreferrer\">Josue Mastroianni</a></li>\r\n                    </ul>\r\n                    </div>\r\n                `,\r\n        tecnologies: [\r\n          \"Unity\",\r\n          \"Python\",\r\n          \"Javascript\",\r\n          \"Webpack\",\r\n          \"Vue\",\r\n          \"React\",\r\n          \"Houdini\",\r\n          \"Blender\",\r\n          \"Wordpress\"\r\n        ]\r\n      },\r\n\r\n      {\r\n        place: `\r\n                    <div class=\"company\">\r\n                        Talent Network: Technology Events\r\n                    </div>`,\r\n        position: `\r\n                    <div class=\"position\">\r\n                        Fullstack Developer\r\n                    </div>\r\n                `,\r\n        description: `<div class=\"parragraph\">\r\n                    I develop the backend side of a RestAPI service,\r\n                    and deploy the database designed for it. \r\n                    This service provide information about articles, \r\n                    courses and events related with technology as well\r\n                    as services like authentication, registration, security.<br>\r\n                    On the frontend side, I help the team with the frontend\r\n                    architecture, client side requests and security protocols.\r\n                    <ul style=\"margin:0\">\r\n                     <li><a href=https://apps.apple.com/us/app/talent-republic/id1450277102 target=\"_blank\" rel=\"noopener noreferrer\">Republic</a></li>\r\n                    </ul>\r\n                    </div>\r\n                `,\r\n        tecnologies: [\r\n          \"Python\",\r\n          \"Javascript\",\r\n          \"Houdini\",\r\n          \"Webpack\",\r\n          \"Qt\",\r\n          \"Mikrotic\",\r\n          \"Maya\",\r\n          \"Redshift\"\r\n        ]\r\n      },\r\n\r\n      {\r\n        place: `\r\n                    <div class=\"company\">\r\n                        Huevocartoon: CG Film\r\n                    </div>`,\r\n        position: `\r\n                    <div class=\"position\">\r\n                        Layout Technical Director\r\n                    </div>\r\n                `,\r\n        description: `\r\n                <div class=\"parragraph\">\r\n                    <ul style=\"margin-top:0\">\r\n                        <li>Creating tools for the cinematography team and using several CG and VFX APIs.</li>\r\n                        <li>Cloth simulation system on top of nCloth system to improve delivery times for the VFX department.</li>\r\n                        <li>Use of linear algebra to solve problems in the 3D environments.</li>\r\n                        <li>Verify and automate data transference from the cinematography department.</li>\r\n                        <li>Automatic rigging with focus on performance to help the staging and ease the task of analazing the flow of the editing process.</li>\r\n                        <li>Stage and camera artist.</li>\r\n                        <li>Environment concept artist & Graphic designer.</li>\r\n                        <li><a href=https://www.youtube.com/watch?v=iF6hiytfto0 target=\"_blank\" rel=\"noopener noreferrer\">Trailer</a></li>\r\n                    <ul>\r\n                </div>\r\n                `,\r\n        tecnologies: [\r\n          \"Python\",\r\n          \"Qt\",\r\n          \"JSON\",\r\n          \"Mel\",\r\n          \"Maya\",\r\n          \"Softimage\",\r\n          \"Photoshop\",\r\n          \"Illustrator\"\r\n        ]\r\n      },\r\n      {\r\n        place: `\r\n                    <div class=\"company\">\r\n                        Metacube: CG Film\r\n                    </div>`,\r\n        position: `\r\n                    <div class=\"position\">\r\n                        Layout and Technical Artist\r\n                    </div>\r\n                `,\r\n        description: `<div class=\"parragraph\">\r\n                    I collaborate as an artist working on the ciematography for the film Salma's Big Wish,\r\n                    also develop scripts that automate processes for the team.\r\n                    <ul style=\"margin:0\">\r\n                     <li><a href=https://www.youtube.com/watch?v=Mrmf6DsNzqA target=\"_blank\" rel=\"noopener noreferrer\">Salma's Big Wish</a></li>\r\n                    </ul>\r\n                    </div>\r\n                `,\r\n        tecnologies: [\"Python\", \"Maya\", \"Hiero\"]\r\n      }\r\n    ]\r\n  }\r\n};\r\n\r\nvar html = /*html*/ `\r\n<div class=\"content\">\r\n    ${content.experience.title.en}\r\n    ${experience(content.experience.places)}\r\n</div>\r\n`;\r\n\r\nmodule.exports = html;\r\n\r\n/* ====================================================================================== */\r\n\r\nfunction experience(list_of_places) {\r\n  var result = \"\";\r\n\r\n  list_of_places.forEach(function append(element) {\r\n    result += `<div class=\"experience\">\r\n                ${element.place}\r\n                ${element.position}\r\n                ${element.description}\r\n                ${tecnologies(element.tecnologies, \"div\", \"tecnologies\")}\r\n            </div>\r\n        `;\r\n  });\r\n  return result;\r\n}\r\n\r\nfunction tecnologies(list_of_strings, tag, class_name) {\r\n  var result = '<div class=\"horizontal-list\">';\r\n  list_of_strings.forEach(function(element, index) {\r\n    if (index != list_of_strings.length - 1) {\r\n      result += `\r\n            <${tag} class=\\\"${class_name}\\\">\r\n            ${element + \"&nbsp|&nbsp\"}\r\n            </${tag}>\r\n        `;\r\n    } else {\r\n      result += `\r\n            <${tag} class=${class_name}>\r\n            ${element}\r\n            </${tag}>\r\n        `;\r\n    }\r\n  });\r\n  result += \"</div>\";\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/experience.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var personal = {\r\n  name: \"Jair Anguiano\",\r\n  email: \"jairanpo@gmail.com\",\r\n  cel: \"+52 3325366927\",\r\n  location: \"Guadalajara. Jalisco. Mexico\",\r\n  linkedin: \"https://www.linkedin.com/in/jair-anguiano/\",\r\n  git: \"https://github.com/Jairanpo\",\r\n  artstation: \"https://www.artstation.com/jairanpo\"\r\n};\r\n\r\nvar html = /*html*/ `\r\n<div class=\"header\">\r\n  <!--<div class=\"language-btn\">\r\n    English\r\n  </div>-->\r\n  <div class=\"circle\">\r\n    <div class=\"name\">\r\n    Jair<br>Anguiano\r\n  </div>\r\n  <!--<div class=\"language-btn\">\r\n    Spanish\r\n  </div>-->\r\n</div>\r\n  <div class=\"personal-info\">\r\n    <div class=\"email\">${personal.email}</div>\r\n    <div class=\"cel\">${personal.cel}</div>\r\n    <div class=\"location\">${personal.location}</div>\r\n    <div class=\"git\"><a href=${personal.linkedin} target=\"_blank\" rel=\"noopener noreferrer\">${personal.linkedin}</a></div>\r\n    <div class=\"git\"><a href=${personal.git} target=\"_blank\" rel=\"noopener noreferrer\">${personal.git}</a></div>\r\n    <div class=\"artstation\"><a href=${personal.artstation} target=\"_blank\" rel=\"noopener noreferrer\">${personal.artstation}</a></div>\r\n  </div>\r\n</div>\r\n`;\r\n\r\nmodule.exports = html;\r\n\r\n/* ============================================================ */\r\n\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/skills.js":
/*!**********************************!*\
  !*** ./src/components/skills.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar icons = [\r\n  __webpack_require__(/*! ../static/images/techologies/js.png */ \"./src/static/images/techologies/js.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/python.png */ \"./src/static/images/techologies/python.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/csharp.png */ \"./src/static/images/techologies/csharp.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/webpack.png */ \"./src/static/images/techologies/webpack.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/css.png */ \"./src/static/images/techologies/css.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/sass.png */ \"./src/static/images/techologies/sass.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/html.png */ \"./src/static/images/techologies/html.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/vue.png */ \"./src/static/images/techologies/vue.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/react.png */ \"./src/static/images/techologies/react.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/graphql.png */ \"./src/static/images/techologies/graphql.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/node.png */ \"./src/static/images/techologies/node.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/postgresql.png */ \"./src/static/images/techologies/postgresql.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/restapi.png */ \"./src/static/images/techologies/restapi.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/bash.png */ \"./src/static/images/techologies/bash.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/powershell.png */ \"./src/static/images/techologies/powershell.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/git.png */ \"./src/static/images/techologies/git.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/unity.png */ \"./src/static/images/techologies/unity.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/houdini.png */ \"./src/static/images/techologies/houdini.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/blender.png */ \"./src/static/images/techologies/blender.png\"),\r\n  __webpack_require__(/*! ../static/images/techologies/Qt.png */ \"./src/static/images/techologies/Qt.png\")\r\n];\r\n\r\nvar skills = {\r\n  title: '<div class=\"title\">Skills</div>',\r\n  description: `\r\n    <div class=\"parragraph\">\r\n      For over seven years I been working with several programming languages,\r\n      I always push myself to understand every subject at a deeper level in\r\n      order to improve at my job and become a better problem solver.\r\n    </div>\r\n  `,\r\n  technologies: [\r\n    {\r\n      name: \"Javascript\",\r\n      frameworks: [\"Webpack\", \"Vue\", \"React\", \"JQuery\"]\r\n    },\r\n    {\r\n      name: \"Node\",\r\n      frameworks: [\"Express\", \"Koa\", \"Knex\"]\r\n    },\r\n    {\r\n      name: \"Python\",\r\n      frameworks: [\"Qt\", \"PySide2\", \"Django\"]\r\n    },\r\n    {\r\n      name: \"C#\",\r\n      frameworks: [\"Dotnet\", \"Unity\"]\r\n    },\r\n    {\r\n      name: \"C++\",\r\n      frameworks: [\"Qt\"]\r\n    },\r\n    {\r\n      name: \"SQL\",\r\n      frameworks: [\"PostgreSQL\", \"MySQL\"]\r\n    },\r\n    {\r\n      name: \"API\",\r\n      frameworks: [\"GraphQL\", \"RestAPI\"]\r\n    },\r\n    {\r\n      name: \"Git\",\r\n      frameworks: []\r\n    },\r\n    {\r\n      name: \"Command-line Shell\",\r\n      frameworks: [\"Bash\", \"Powershell\"]\r\n    },\r\n    {\r\n      name: \"PHP\",\r\n      frameworks: [\"Wordpress\"]\r\n    },\r\n    {\r\n      name: \"CSS | SASS\",\r\n      frameworks: [\"Bootstrap\"]\r\n    },\r\n    {\r\n      name: \"HTML\",\r\n      frameworks: []\r\n    },\r\n    {\r\n      name: \"Computer Graphics\",\r\n      frameworks: [\"Houdini\", \"Blender\", \"Maya\"]\r\n    }\r\n  ]\r\n};\r\n\r\nvar code_samples = [\r\n  {\r\n    link: \"https://github.com/Jairanpo/CGToolkits/\",\r\n    description: `\r\n      This is the full proyect for the software created for the generation\r\n      of computer graphics content. From filesystem organization, video\r\n      transcoding and toolkits using APIs that software like Houdini, Blender \r\n      and Maya share.\r\n    `\r\n  },\r\n  {\r\n    link: \"https://github.com/Jairanpo/OolBrainFrontend\",\r\n    description: `\r\n      Nuxt.js configuration for a site that contain the pipeline\r\n      documentation for a VFX Studio.\r\n    `\r\n  },\r\n  {\r\n    link: \"https://github.com/Jairanpo/CGAgnostics\",\r\n    description: `\r\n      A set of UI creation utilities that allow me to quickly create\r\n      apps with Python and Qt.\r\n    `\r\n  },\r\n  {\r\n    link: \"https://github.com/Jairanpo/CurriculumVitae\",\r\n    description: `\r\n      Showcase of a the quick configuration of Webpack I did for this\r\n      CV.\r\n    `\r\n  }\r\n];\r\n\r\nvar html = `\r\n  <div class=\"content\">\r\n    <div>${skills.title}</div>\r\n    <div class=\"icons\">${image_tag(icons)}</div>\r\n    <div class=\"technologies\">${technologies_html(skills.technologies)}</div>\r\n  </div>\r\n`;\r\n\r\nmodule.exports = html;\r\n\r\n/* ============================================================= */\r\n\r\nfunction technologies_html(list_of_technologies) {\r\n  var result = \"\";\r\n  list_of_technologies.forEach(function format(technology) {\r\n    result += `\r\n    <div class=\"technology\">\r\n          ${technology.name}\r\n      `;\r\n    if (technology.frameworks.length > 0) {\r\n      technology.frameworks.forEach(function format_frameworks(framework) {\r\n        result += `\r\n            <div class=\"framework\">\r\n              ${framework}\r\n            </div>\r\n          `;\r\n      });\r\n    }\r\n    result += \"</div>\";\r\n  });\r\n  return result;\r\n}\r\n\r\nfunction image_tag(list_of_images) {\r\n  var result = \"\";\r\n  for (var i = 0; i < list_of_images.length; i++) {\r\n    console.log(\"Current: \", list_of_images[i]);\r\n    result += `<img class=\"icon\" src=\"${list_of_images[i]}\"/>`;\r\n  }\r\n  console.log(\"Tags: \", result);\r\n  return result;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/skills.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience */ \"./src/components/experience.js\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_experience__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/skills */ \"./src/components/skills.js\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_skills__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/education */ \"./src/components/education.js\");\n/* harmony import */ var _components_education__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_education__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_code_samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/code_samples */ \"./src/components/code_samples.js\");\n/* harmony import */ var _components_code_samples__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_code_samples__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar html = /*html*/ `\r\n  <!--------------> \r\n  \r\n  ${_components_header__WEBPACK_IMPORTED_MODULE_1___default.a} \r\n  \r\n  <!-------------->\r\n\r\n  <div class=\"c-quadrants\">\r\n  <div class=\"t-left\">\r\n    ${_components_experience__WEBPACK_IMPORTED_MODULE_2___default.a}\r\n  </div>\r\n  <div class=\"t-right\">\r\n    ${_components_skills__WEBPACK_IMPORTED_MODULE_3___default.a}\r\n  </div>\r\n  <div class=\"b-right\">\r\n    ${_components_education__WEBPACK_IMPORTED_MODULE_4___default.a}\r\n  </div>\r\n  <div class=\"b-left\">\r\n  ${_components_code_samples__WEBPACK_IMPORTED_MODULE_5___default.a}\r\n</div>\r\n`;\r\n\r\nvar div = document.createElement(\"div\");\r\ndiv.innerHTML = html;\r\ndocument.body.appendChild(div);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ }),

/***/ "./src/static/images/techologies/Qt.png":
/*!**********************************************!*\
  !*** ./src/static/images/techologies/Qt.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Qt.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/Qt.png?");

/***/ }),

/***/ "./src/static/images/techologies/bash.png":
/*!************************************************!*\
  !*** ./src/static/images/techologies/bash.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/bash.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/bash.png?");

/***/ }),

/***/ "./src/static/images/techologies/blender.png":
/*!***************************************************!*\
  !*** ./src/static/images/techologies/blender.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/blender.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/blender.png?");

/***/ }),

/***/ "./src/static/images/techologies/csharp.png":
/*!**************************************************!*\
  !*** ./src/static/images/techologies/csharp.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/csharp.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/csharp.png?");

/***/ }),

/***/ "./src/static/images/techologies/css.png":
/*!***********************************************!*\
  !*** ./src/static/images/techologies/css.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/css.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/css.png?");

/***/ }),

/***/ "./src/static/images/techologies/git.png":
/*!***********************************************!*\
  !*** ./src/static/images/techologies/git.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/git.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/git.png?");

/***/ }),

/***/ "./src/static/images/techologies/graphql.png":
/*!***************************************************!*\
  !*** ./src/static/images/techologies/graphql.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/graphql.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/graphql.png?");

/***/ }),

/***/ "./src/static/images/techologies/houdini.png":
/*!***************************************************!*\
  !*** ./src/static/images/techologies/houdini.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/houdini.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/houdini.png?");

/***/ }),

/***/ "./src/static/images/techologies/html.png":
/*!************************************************!*\
  !*** ./src/static/images/techologies/html.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/html.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/html.png?");

/***/ }),

/***/ "./src/static/images/techologies/js.png":
/*!**********************************************!*\
  !*** ./src/static/images/techologies/js.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/js.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/js.png?");

/***/ }),

/***/ "./src/static/images/techologies/node.png":
/*!************************************************!*\
  !*** ./src/static/images/techologies/node.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/node.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/node.png?");

/***/ }),

/***/ "./src/static/images/techologies/postgresql.png":
/*!******************************************************!*\
  !*** ./src/static/images/techologies/postgresql.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/postgresql.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/postgresql.png?");

/***/ }),

/***/ "./src/static/images/techologies/powershell.png":
/*!******************************************************!*\
  !*** ./src/static/images/techologies/powershell.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/powershell.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/powershell.png?");

/***/ }),

/***/ "./src/static/images/techologies/python.png":
/*!**************************************************!*\
  !*** ./src/static/images/techologies/python.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/python.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/python.png?");

/***/ }),

/***/ "./src/static/images/techologies/react.png":
/*!*************************************************!*\
  !*** ./src/static/images/techologies/react.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/react.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/react.png?");

/***/ }),

/***/ "./src/static/images/techologies/restapi.png":
/*!***************************************************!*\
  !*** ./src/static/images/techologies/restapi.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/restapi.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/restapi.png?");

/***/ }),

/***/ "./src/static/images/techologies/sass.png":
/*!************************************************!*\
  !*** ./src/static/images/techologies/sass.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/sass.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/sass.png?");

/***/ }),

/***/ "./src/static/images/techologies/unity.png":
/*!*************************************************!*\
  !*** ./src/static/images/techologies/unity.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/unity.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/unity.png?");

/***/ }),

/***/ "./src/static/images/techologies/vue.png":
/*!***********************************************!*\
  !*** ./src/static/images/techologies/vue.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/vue.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/vue.png?");

/***/ }),

/***/ "./src/static/images/techologies/webpack.png":
/*!***************************************************!*\
  !*** ./src/static/images/techologies/webpack.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/webpack.png\";\n\n//# sourceURL=webpack:///./src/static/images/techologies/webpack.png?");

/***/ })

/******/ });
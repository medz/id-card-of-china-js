(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gb-t-2260"));
	else if(typeof define === 'function' && define.amd)
		define(["gb-t-2260"], factory);
	else if(typeof exports === 'object')
		exports["identityCardChina"] = factory(require("gb-t-2260"));
	else
		root["identityCardChina"] = factory(root["gb-t-2260"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_gb_t_2260__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/identity.ts":
/*!*************************!*\
  !*** ./src/identity.ts ***!
  \*************************/
/*! exports provided: Identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony import */ var _utils_validate_check_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/validate-check-code */ "./src/utils/validate-check-code.ts");
/* harmony import */ var _utils_validate_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/validate-date */ "./src/utils/validate-date.ts");
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region */ "./src/region.ts");



var Identity = /** @class */ (function () {
    /**
     * Create the Identity instance.
     * @param identityCardNumber People identity card number
     * @author Seven Du <shiweidu@outlook.com>
     */
    function Identity(identityCardNumber) {
        this.identityCardNumber = identityCardNumber.replace(/[\_|\-|\\s+]/, '');
    }
    /**
     * Check The ID Card is legal.
     *
     * @return boolean
     * @author Seven Du <shiweidu@outlook.com>
     */
    Identity.prototype.legal = function () {
        var regionCode = parseInt(this.identityCardNumber.substr(0, 6));
        return (regionCode >= 110000
            && regionCode <= 820000
            && Object(_utils_validate_date__WEBPACK_IMPORTED_MODULE_1__["default"])(this.birthday().replace('-', ''))
            && Object(_utils_validate_check_code__WEBPACK_IMPORTED_MODULE_0__["default"])(this.identityCardNumber));
    };
    /**
     * Get The ID Card People Birthday.
     *
     * @return string
     * @author Seven Du <shiweidu@outlook.com>
     */
    Identity.prototype.birthday = function () {
        var yaer = this.identityCardNumber.substr(6, 4);
        var month = this.identityCardNumber.substr(10, 2);
        var day = this.identityCardNumber.substr(12, 2);
        return yaer + "-" + month + "-" + day;
    };
    /**
     * Get the ID Card People Gender.
     *
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Identity.prototype.gender = function () {
        return (parseInt(this.identityCardNumber.substr(16, 1)) % 2) === 0 ? '女' : '男';
    };
    /**
     * Get region.
     * @author Seven Du <shiweidu@outlook.com>
     */
    Identity.prototype.region = function () {
        return new _region__WEBPACK_IMPORTED_MODULE_2__["Region"](this.identityCardNumber.substr(0, 6));
    };
    return Identity;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./src/identity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _identity__WEBPACK_IMPORTED_MODULE_0__["Identity"]; });




/***/ }),

/***/ "./src/region.ts":
/*!***********************!*\
  !*** ./src/region.ts ***!
  \***********************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var _resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/gb-t-2260 */ "./src/resources/gb-t-2260.js");
/* harmony import */ var _resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0__);

var Region = /** @class */ (function () {
    /**
     * Create the region instance.
     * @param {string} code
     * @author Seven Du <shiweidu@outlook.com>
     */
    function Region(code) {
        this.regionCode = code;
    }
    /**
     * Get region code.
     *
     * @return {number}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.code = function () {
        return parseInt(this.regionCode);
    };
    /**
     * Get region province.
     *
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.province = function () {
        var provinceCode = this.regionCode.substr(0, 2) + '0000';
        return _resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0__[provinceCode];
    };
    /**
     * Get city for region.
     *
     * @return {?string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.city = function () {
        var cityCode = this.regionCode.substr(0, 4) + '00';
        return _resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0__[cityCode];
    };
    /**
     * Get count of the region.
     *
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.county = function () {
        return _resources_gb_t_2260__WEBPACK_IMPORTED_MODULE_0__[this.regionCode];
    };
    /**
     * Get the region tree.
     *
     * @return {string[]}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.tree = function () {
        return [
            this.province(),
            this.city(),
            this.county(),
        ].filter(function (item) {
            return item;
        });
    };
    /**
     * Get The Region Tree String.
     *
     * @param {string} glue Join Array Elements With A Glue String
     * @return {string}
     * @author Seven Du <shiweidu@outlook.com>
     */
    Region.prototype.treeString = function (glue) {
        if (glue === void 0) { glue = ""; }
        return this.tree().join(glue);
    };
    return Region;
}());



/***/ }),

/***/ "./src/resources/gb-t-2260.js":
/*!************************************!*\
  !*** ./src/resources/gb-t-2260.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! gb-t-2260 */ "gb-t-2260");


/***/ }),

/***/ "./src/utils/validate-check-code.ts":
/*!******************************************!*\
  !*** ./src/utils/validate-check-code.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateCheckCode; });
/**
 * Validate people identity card number.
 * @param identityCardNumber People identity card number
 * @author Seven Du <shiweidu@outlook.com>
 */
function validateCheckCode(identityCardNumber) {
    var sum = 0;
    // 计算 sum 的值
    for (var index = 0; index < 17; index++) {
        sum += ((1 << (17 - index) % 11)) * parseInt(identityCardNumber[index]);
    }
    // 计算出最终的校验码
    var quotiety = (12 - (sum % 11)) % 11;
    // 如果校验码小于 10 进行直接判断
    if (quotiety < 10) {
        return parseInt(identityCardNumber[17]) === quotiety;
    }
    // 判断校验码是否是 X
    return (identityCardNumber[17]).toUpperCase() === "X";
}


/***/ }),

/***/ "./src/utils/validate-date.ts":
/*!************************************!*\
  !*** ./src/utils/validate-date.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateDate; });
/**
 * Validate date string.
 * @param dateString
 */
function validateDate(dateString) {
    var year = parseInt(dateString.substr(0, 4));
    var month = parseInt(dateString.substr(4, 2));
    var day = parseInt(dateString.substr(6, 2));
    var tempDate = new Date(year, month, day);
    return tempDate.getFullYear() === year && (tempDate.getMonth() + 1) === month && tempDate.getDate() === day;
}


/***/ }),

/***/ "gb-t-2260":
/*!****************************!*\
  !*** external "gb-t-2260" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_gb_t_2260__;

/***/ })

/******/ });
});
//# sourceMappingURL=id-card-china.js.map
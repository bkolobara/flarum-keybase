module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./img/keybase_logo.svg":
/*!******************************!*\
  !*** ./img/keybase_logo.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjIzLjMzMzMzIDIwNC44OTkwNiIgaGVpZ2h0PSIyMDQuODk5MDYiIHdpZHRoPSIyMjMuMzMzMzMiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJzdmc0NTA0IiB2ZXJzaW9uPSIxLjEiPjxtZXRhZGF0YSBpZD0ibWV0YWRhdGE0NTEwIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPjxkYzp0aXRsZS8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzIGlkPSJkZWZzNDUwOCI+PGNsaXBQYXRoIGlkPSJjbGlwUGF0aDQ1MjAiIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBpZD0icGF0aDQ1MTgiIGQ9Ik0gMCw2MDAgSCA2MDAgViAwIEggMCBaIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLC0yODguMzMzMzMsNTAyLjQ0OTMyKSIgaWQ9Imc0NTEyIj48ZyBpZD0iZzQ1MTQiPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDQ1MjApIiBpZD0iZzQ1MTYiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMCwzNjIuNDI4NykiIGlkPSJnNDUyMiI+PHBhdGggaWQ9InBhdGg0NTI0IiBzdHlsZT0iZmlsbDojMzNhMGZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIC00NC4xODMsMCAtODAsLTM1LjgxNyAtODAsLTgwIDAsLTE1LjI1NCA0LjI3MSwtMjkuNTA5IDExLjY3OSwtNDEuNjM5IGwgMjAuOSwyMi4xOTEgMTA1Ljc4MywtMC42NjEgLTAuNzY2LC0zNS40MDcgQyA3MS40NjcsLTEyMS4xMjkgODAsLTEwMS41NjIgODAsLTgwIDgwLC0zNS44MTcgNDQuMTgzLDAgMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2My44MzYzLDMzOS42Mjc0KSIgaWQ9Imc0NTI2Ij48cGF0aCBpZD0icGF0aDQ1MjgiIHN0eWxlPSJmaWxsOiMzZGNjOGU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTMuODk5LDAuMjM5IC02Ljg4NywzLjYwOCAtNi42Niw3LjUxMSBsIDAuNTI5LDguNTQ3IGMgMC4yMzIsMy43MzkgMy4zNSw2LjY2OSA3LjA5Nyw2LjY2OSAwLjE0LDAgMC4yODEsLTAuMDA0IDAuNDIyLC0wLjAxMyBMIDkuOTMsMjIuMTg1IGMgMS44OSwtMC4xMTUgMy42MjcsLTAuOTYyIDQuODg1LC0yLjM4NiAxLjI2LC0xLjQyNCAxLjg4OCwtMy4yNTYgMS43NjcsLTUuMTU2IEwgMTYuMDU4LDYuMTI5IEMgMTYuMDI3LDUuNjM3IDE1LjkyOCw1LjI0NyAxNS44NjcsNS4wMzQgTCAxNS41NjMsMy41NDcgOS45NDIsLTAuNjE1IFoiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY0LjgwMjUsMzY2LjY0NjgpIiBpZD0iZzQ1MzAiPjxwYXRoIGlkPSJwYXRoNDUzMiIgc3R5bGU9ImZpbGw6IzI4MjgyODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtNi4wMSwwIC0xMS4wMDksLTQuNjk4IC0xMS4zODEsLTEwLjY5NiBsIC0wLjUyOSwtOC41MzIgLTEwZS00LC0wLjAxNiAtMC4wMDEsLTAuMDE1IGMgLTAuMzY0LC02LjI1OSA0LjQzLC0xMS42NjIgMTAuNjg2LC0xMi4wNDUgbCA4LjM3NSwtMC41MTggMy4xMjMsLTAuMTkzIDIuNTE1LDEuODYyIDMuMDQyLDIuMjUxIDIuNjQzLDEuOTU3IDAuNjA3LDIuOTY3IGMgMC4xMiwwLjQ1NSAwLjI1LDEuMDY4IDAuMjk3LDEuODE4IGwgMC41MjQsOC41MjIgYyAwLjE5MiwzLjA0NSAtMC44MTcsNS45OCAtMi44MzksOC4yNjYgLTIuMDEzLDIuMjc4IC00LjgsMy42MzggLTcuODQzLDMuODIzIEwgMC43LC0wLjAyMSBIIDAuNjg4IEwgMC42NzUsLTAuMDIgQyAwLjQ1MSwtMC4wMDcgMC4yMjQsMCAwLDAgbSA2LjM3OCwtMTguNjIxIDAuMzE0LDUuMDc1IC01LjA3NiwwLjMxNCAtMC4zMTUsLTUuMDc2IDUuMDc3LC0wLjMxMyBNIDAsLTguNTg1IGMgMC4wNTYsMCAwLjExMywtMC4wMDIgMC4xNywtMC4wMDUgbCA4LjUyOCwtMC41MjkgYyAwLjc0NywtMC4wNDUgMS40MzYsLTAuMzggMS45MzMsLTAuOTQzIDAuNSwtMC41NjUgMC43NDksLTEuMjkgMC43MDEsLTIuMDQxIGwgLTAuNTI1LC04LjUyNCBjIC0wLjAwOCwtMC4xMzIgLTAuMDYxLC0wLjI0OCAtMC4wODYsLTAuMzc0IGwgLTMuMDQyLC0yLjI1MiAtOC4zOCwwLjUxOCBjIC0xLjU0NiwwLjA5NSAtMi43MywxLjQzIC0yLjY0LDIuOTc3IGwgMC41MjksOC41MzEgYyAwLjA5MiwxLjQ4OSAxLjMyNywyLjY0MiAyLjgxMiwyLjY0MiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAsMzIwLjk2MjMpIiBpZD0iZzQ1MzQiPjxwYXRoIGlkPSJwYXRoNDUzNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMzMuNDAyLDAgLTYwLjQ4LC0yNy4wNzggLTYwLjQ4LC02MC40OCAwLC0xMi40MjEgMy43NDYsLTIzLjk2NSAxMC4xNjcsLTMzLjU2OSBIIDUyLjc0MiBjIDUuNDI0LDkuOTA3IDcuNzM4LDIxLjYzNyA3LjczOCwzMy41NjkgQyA2MC40OCwtMjkuNTY2IDMzLjQwMiwwIDAsMCIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTkuOTk5OSwzMjUuMjU1KSIgaWQ9Imc0NTM4Ij48cGF0aCBpZD0icGF0aDQ1NDAiIHN0eWxlPSJmaWxsOiMyODI4Mjc7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTM1LjcxNiwwIC02NC43NzMsLTI5LjA1NyAtNjQuNzczLC02NC43NzMgMCwtMTIuMjggMy40MzYsLTIzLjc3NCA5LjM5NiwtMzMuNTY5IGggMTAuMzQ3IGMgLTcuMDA1LDkuMzcyIC0xMS4xNTcsMjAuOTk1IC0xMS4xNTcsMzMuNTY5IDAsMzAuOTgyIDI1LjIwNSw1Ni4xODggNTYuMTg3LDU2LjE4OCAxNC43MTYsMCAyOC44MTEsLTYuMTYxIDM5LjY4OCwtMTcuMzQ4IDEwLjQ4NiwtMTAuNzgzIDE2LjUsLTI0Ljk0IDE2LjUsLTM4Ljg0IDAsLTkuNTE3IC0xLjU3MiwtMjIuNDUgLTguNDA1LC0zMy41NjkgaCA5Ljc5OSBjIDQuNzI5LDkuNTE5IDcuMTkxLDIwLjkgNy4xOTEsMzMuNTY5IDAsMTYuMTE2IC02Ljg5OSwzMi40NTQgLTE4LjkyOSw0NC44MjYgQyAzMy4zMzYsLTcuMDg0IDE3LjA1NSwwIDAsMCIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODcuNzg5MSwyNDIuOTI1NCkiIGlkPSJnNDU0MiI+PHBhdGggaWQ9InBhdGg0NTQ0IiBzdHlsZT0iZmlsbDojMjgyODI3O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIDAsLTMuMjA3IC0yLjU5OSwtNS44MDYgLTUuODA2LC01LjgwNiAtMy4yMDcsMCAtNS44MDYsMi41OTkgLTUuODA2LDUuODA2IDAsMy4yMDcgMi41OTksNS44MDYgNS44MDYsNS44MDYgQyAtMi41OTksNS44MDYgMCwzLjIwNyAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIzLjgyMjgsMjQyLjkyNTQpIiBpZD0iZzQ1NDYiPjxwYXRoIGlkPSJwYXRoNDU0OCIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAwLC0zLjIwNyAtMi41OTksLTUuODA2IC01LjgwNiwtNS44MDYgLTMuMjA3LDAgLTUuODA2LDIuNTk5IC01LjgwNiw1LjgwNiAwLDMuMjA3IDIuNTk5LDUuODA2IDUuODA2LDUuODA2IEMgLTIuNTk5LDUuODA2IDAsMy4yMDcgMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNC4wMTE3LDI0NS4yMjg3KSIgaWQ9Imc0NTUwIj48cGF0aCBpZD0icGF0aDQ1NTIiIHN0eWxlPSJmaWxsOiNmZjZmMjE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Ik0gMCwwIDMyLjIyOCwzNC4xOCAyNC40NzEsOS44NjEgYyAyNS4xNjEsMTguMzEgNTEuNTc1LDE1LjQxNSA3MC4xNzQsOS45NTMgMTkuNzQxLC01Ljc5NiAzMy41NjIsMTEuNjM5IDIwLjAzMiwzMC4yMzggQyAxMDguMjQ4LDU4Ljg5MSA5OS40MjksNjYuMjMgODkuNDEyLDcwLjY4MSA2My4xMzksODIuMzUyIDM2LjcyNCw3NS41NDcgMTguOTA1LDU3LjU0NyAwLjAyOSwzOC40NzkgMCwxNy4zMyAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk2Ljk3MTYsMzE3LjM4ODYpIiBpZD0iZzQ1NTQiPjxwYXRoIGlkPSJwYXRoNDU1NiIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMy43NDEsMCAtNy40NTYsLTAuMzczIC0xMS4xMDcsLTEuMTI0IC0xMS4xMzUsLTIuMjkgLTIxLjQ3MywtNy45OTkgLTI5Ljg5NywtMTYuNTA5IC0xMy45OTMsLTE0LjEzNSAtMTYuOTAxLC0yOS4zMDYgLTE3LjUwNSwtNDMuNTQ5IGwgMzcuNjAzLDM5Ljg4MSAtOS45NTUsLTMxLjIwOCBjIDE4LjcwOCw5Ljc4MSA0MC4wOTksMTEuMjI4IDYzLjc1NSw0LjI4MiA3LjUyOCwtMi4yMSAxNC4zNTEsLTAuNTM1IDE3LjgwOCw0LjM3MSAzLjU1MSw1LjA0MSAyLjYzMywxMi4yMjcgLTIuNDU2LDE5LjIyMyAtNi4wODEsOC4zNiAtMTQuNDQsMTUuMTg5IC0yMy41MzcsMTkuMjMxIEMgMTYuNjQxLC0xLjgxOCA4LjI1OSwwIDAsMCBtIC02Ny4yNTIsLTgyLjk3IHYgMTAuODEgYyAwLDE3LjkxNyAwLDQwLjIxNSAyMC4xNDYsNjAuNTY3IDkuNjIsOS43MTcgMjEuNDcsMTYuMjQ1IDM0LjI2OSwxOC44NzggMTMuNDc0LDIuNzcyIDI3LjY2MiwxLjA5OCA0MS4wMzIsLTQuODQxIDEwLjQ1MywtNC42NDQgMjAuMDQsLTEyLjQ2NyAyNi45OTQsLTIyLjAyNiA3LjI0MywtOS45NTggOC4yMTMsLTIxLjE1NCAyLjUzMSwtMjkuMjE4IC01LjU1NSwtNy44ODUgLTE2LjI0NywtMTAuODkyIC0yNy4yNDUsLTcuNjY0IC0yNS4zNjQsNy40NDggLTQ3LjcxOCw0LjMxNyAtNjYuNDM4LC05LjMwNiBsIC0xMC42LC03LjcxMyA2LjAwNSwxOC44MjUgeiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTUuNDM5NSwzMjQuMTgzNSkiIGlkPSJnNDU1OCI+PHBhdGggaWQ9InBhdGg0NTYwIiBzdHlsZT0iZmlsbDojZmY2ZjIxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIC0zLjgyMSwtOS45NTYgLTE0LjkwMSwtMTUuNTE1IC0yNS4xNjcsLTEyLjYyNSAtMTEuNTY2LDMuMjU3IC0xNy42NzMsMTIuNTUyIC0xNi4yMDcsMjQuMzQyIDEuNDU5LDExLjcyNSA5LjM4MiwyMi4wMDUgMTguNTE1LDM0LjY3NyAtNy41MDIsLTE1Ljk2OSAtMS4xMjksLTE3LjQ2NSAwLjg4NywtMTcuMzg1IDEuOTkyLDAuMDc5IDQuOSwtMC4yNjEgOS4wMzksLTEuNjM0IEMgLTEuNjU2LDIzLjYzMiA0LjMwNSwxMS4yMTggMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4NS44Mjk0LDM1My40NjUpIiBpZD0iZzQ1NjIiPjxwYXRoIGlkPSJwYXRoNDU2NCIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMy45NjIsLTYuMjEyIC02Ljc0NCwtMTEuOTg2IC03LjUwNCwtMTguMDk0IC0xLjIwMywtOS42NzMgMy42OTgsLTE3LjAzIDEzLjExMSwtMTkuNjggOC4xNzIsLTIuMzAxIDE2Ljk1NCwyLjEwNSAxOS45OTYsMTAuMDMgMS42NDksNC4yOTggMS40NzcsOC45NDcgLTAuNDg0LDEzLjA5MSAtMS45NjMsNC4xNDggLTUuNDQxLDcuMjI4IC05Ljc5NCw4LjY3MiAtMy44MiwxLjI2OCAtNi4xOTgsMS40NjkgLTcuNTE2LDEuNDE5IEMgNC44NSwtNC42NzggMi4xMTksLTMuMyAwLjUwOSwtMC44NzIgMC4zMjMsLTAuNTkyIDAuMTUzLC0wLjMwMiAwLDAgbSA5Ljk3NywtNDYuOTYzIGMgLTIuMjI2LDAgLTQuNDc1LDAuMjk5IC02LjY5NywwLjkyNSAtNi42NjYsMS44NzcgLTExLjk5Myw1LjU4NyAtMTUuNDA0LDEwLjcyOSAtMy40MDEsNS4xMjYgLTQuNzQ5LDExLjQ0NSAtMy45LDE4LjI3NSAxLjUsMTIuMDU3IDguOTMxLDIyLjMyOSAxNy41MzUsMzQuMjIzIDAuNTgsMC44MDIgMS4xNjYsMS42MTIgMS43NTgsMi40MzMgbCA3LjM2NywtNC4zMzUgQyA3LDcuNTQ2IDcuNDE3LDQuNjggNy42MDgsNC4wMjYgYyAyLjkyNSwwLjA4OSA2LjQzMSwtMC41MzQgMTAuNDIxLC0xLjg1OCA2LjYwMSwtMi4xOTEgMTEuODc1LC02Ljg2IDE0Ljg1LC0xMy4xNDkgMi45NzQsLTYuMjg0IDMuMjM2LC0xMy4zMyAwLjczOSwtMTkuODM5IEMgMjkuODMsLTQwLjY4OSAyMC4xNzIsLTQ2Ljk2MyA5Ljk3NywtNDYuOTYzIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwNC41OTE2LDI4Ni4xNjEzKSIgaWQ9Imc0NTY2Ij48cGF0aCBpZD0icGF0aDQ1NjgiIHN0eWxlPSJmaWxsOiMzZGNjOGU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTEuNTAzLDAgLTIuOTExLDAuNjY4IC0zLjg2MSwxLjgzMiBsIC0yLjg4OCwzLjUzNyBjIC0xLjY3NCwyLjA1IC0xLjQzNCw1LjA0OSAwLjUwMSw2LjgxMSAtMC42MjUsMC4zMDYgLTEuMTg0LDAuNzQ3IC0xLjYzOCwxLjMwMyBsIC0wLjY1OSwwLjgwNyBjIC0xLjczNCwyLjEyMyAtMS40MTcsNS4yNiAwLjcwNSw2Ljk5MyBsIDAuNDE1LDAuMzM5IC00LjIzLDUuMTkyIGMgLTEuODgxLDIuMzA0IC0xLjUzNiw1LjcxMyAwLjc3LDcuNTk3IDAuOTY3LDAuNzg4IDIuMTc5LDEuMjE5IDMuNDE3LDEuMjE5IDEuNjI2LDAgMy4xNTEsLTAuNzIyIDQuMTgyLC0xLjk4MiBMIDE0Ljc1NywxMS40NDEgQyAxNi42MzUsOS4xNCAxNi4yOSw1LjczMSAxMy45ODQsMy44NDcgMTMuMzQ4LDMuMzI3IDEyLjU4NiwyLjk1MyAxMS43ODQsMi43NjggMTEuMzg2LDIuNjc2IDEwLjk3NiwyLjYzIDEwLjU2NywyLjYzIHYgMCBDIDkuMTYxLDIuNjMgNy44MzIsMy4xNjkgNi44MzEsNC4xMjggTCAzLjE1LDEuMTIzIEMgMi4yNjMsMC4zOTkgMS4xNDQsMCAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA0LjAyMjksMzIyLjAzNDUpIiBpZD0iZzQ1NzAiPjxwYXRoIGlkPSJwYXRoNDU3MiIgc3R5bGU9ImZpbGw6IzI4MjgyODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMS43MDEsMi4wNzggLTQuMjE2LDMuMjY5IC02Ljg5OSwzLjI2OSAtMi4wNDQsMCAtNC4wNDQsLTAuNzEyIC01LjYzMSwtMi4wMDQgLTMuODE0LC0zLjExNiAtNC4zODIsLTguNzQxIC0xLjI3NSwtMTIuNTQ3IGwgMi4zNSwtMi44ODUgYyAtMS43MjYsLTIuOTY4IC0xLjUzOSwtNi44MjQgMC43NTgsLTkuNjM3IGwgMC40NDIsLTAuNTQyIGMgLTEuMDM5LC0yLjc0MSAtMC42MywtNS45NSAxLjM1NCwtOC4zNzkgbCAyLjg4OCwtMy41MzggYyAxLjYxOSwtMS45ODQgNC4wMTgsLTMuMTIyIDYuNTgxLC0zLjEyMiAxLjk1MiwwIDMuODYsMC42NzkgNS4zNzIsMS45MTQgbCAxLjczLDEuNDEyIGMgMS4wODIsLTAuNDU1IDIuMjU3LC0wLjY5NyAzLjQ2NiwtMC42OTcgMC42NzQsMCAxLjM0OSwwLjA3NyAyLjAwNiwwLjIyOSAxLjMyNCwwLjMwNSAyLjU4LDAuOTIxIDMuNjMzLDEuNzgxIDMuODA1LDMuMTA5IDQuMzczLDguNzM0IDEuMjY3LDEyLjU0IEwgMC4wMTcsLTAuMDIxIFogbSAtNi44OTksLTMuNzU1IGMgMC41NDcsMCAxLjA5LC0wLjIzOCAxLjQ2NCwtMC42OTYgTCAxMi42LC0yNi42NDcgYyAwLjY2LC0wLjgwOSAwLjUzOSwtMS45OTkgLTAuMjY5LC0yLjY1OSAtMC4yMzMsLTAuMTkgLTAuNDk2LC0wLjMxNCAtMC43NjksLTAuMzc3IC0wLjE0LC0wLjAzMyAtMC4yODMsLTAuMDQ5IC0wLjQyNiwtMC4wNDkgLTAuNTQ4LDAgLTEuMDkxLDAuMjM3IC0xLjQ2NSwwLjY5NSBsIC0xLjc5NiwyLjIxMyAtNi4zNzcsLTUuMjA1IGMgLTAuMjczLC0wLjIyNCAtMC42MDIsLTAuMzMyIC0wLjkzLC0wLjMzMiAtMC40MjYsMCAtMC44NDksMC4xODUgLTEuMTQsMC41NDEgbCAtMi44ODgsMy41MzcgYyAtMC41MDgsMC42MjIgLTAuNDE1LDEuNTM4IDAuMjA3LDIuMDQ2IGwgNi40MDgsNS4yMzEgLTIuNjE4LDMuMjI4IC0zLjE3LC0yLjU5IGMgLTAuMjYsLTAuMjExIC0wLjU3MiwtMC4zMTQgLTAuODgyLC0wLjMxNCAtMC40MDQsMCAtMC44MDUsMC4xNzUgLTEuMDgxLDAuNTEyIGwgLTAuNjYsMC44MDkgYyAtMC41MDksMC42MjMgLTAuNDE3LDEuNTQxIDAuMjA2LDIuMDUgbCAzLjEzMywyLjU1OCAtNi40NDcsNy45MTMgYyAtMC42NiwwLjgwOCAtMC41MzksMS45OTggMC4yNjksMi42NTggMC4zNTMsMC4yODcgMC43NzYsMC40MjcgMS4xOTYsMC40MjciLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/forum/components/KeybasePage.js":
/*!*********************************************!*\
  !*** ./src/forum/components/KeybasePage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_keybase_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../img/keybase_logo.svg */ "./img/keybase_logo.svg");
/* harmony import */ var _img_keybase_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_keybase_logo_svg__WEBPACK_IMPORTED_MODULE_6__);








var LoginPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginPage, _Page);

  function LoginPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = LoginPage.prototype;

  _proto.init =
  /*#__PURE__*/
  function () {
    var _init = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var urlParams, keybaseValidator;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _Page.prototype.init.call(this);

              this.loggedIn = true;

              if (flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user) {
                _context.next = 7;
                break;
              }

              this.loggedIn = false;
              flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a());
              _context.next = 17;
              break;

            case 7:
              urlParams = new URLSearchParams(window.location.search);
              this.kbUsername = urlParams.get("kb_username");
              this.username = urlParams.get("username");
              this.kbUa = urlParams.get("kb_ua");
              this.token = urlParams.get("token");
              _context.next = 14;
              return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find("keybase-validate", {
                kb_username: this.kbUsername,
                username: this.username,
                kb_ua: this.kbUa,
                token: this.token
              });

            case 14:
              keybaseValidator = _context.sent;
              this.proofValid = keybaseValidator.proofValid();

              if (this.proofValid) {
                this.proofId = keybaseValidator.proofId();
              }

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.authorise =
  /*#__PURE__*/
  function () {
    var _authorise = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/keybase-activate/" + this.proofId);

            case 2:
              result = _context2.sent;
              window.location.replace("https://keybase.io/_/proof_creation_success?domain=galactictalk.org" + ("&kb_username=" + this.kbUsername + "&username=" + this.username) + ("&sig_hash=" + this.token + "&kb_ua=" + this.kbUa));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function authorise(_x) {
      return _authorise.apply(this, arguments);
    }

    return authorise;
  }();

  _proto.view = function view() {
    if (!this.loggedIn) {
      return m("div", {
        "class": "keybase"
      }, m("div", {
        "class": "authorize-window"
      }, m("h3", null, "You must be logged in to link your accounts.", m("a", {
        onclick: function onclick(e) {
          return flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a());
        }
      }, "Click here to log in."))));
    }

    if (this.proofValid) {
      return m("div", {
        "class": "keybase"
      }, m("div", {
        "class": "authorize-window"
      }, m("h3", null, "Invalid signature check.")));
    }

    var localAvatarUrl = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user.avatarUrl();
    return m("div", {
      "class": "keybase"
    }, m("div", {
      "class": "authorize-window"
    }, m("h3", null, "Authoriz this cryptographic connection?"), m("div", {
      "class": "accounts"
    }, m("div", {
      "class": "forum"
    }, !localAvatarUrl ? m("span", {
      "class": "Avatar no-avatar",
      style: "background: #aaa;"
    }, " ") : m("img", {
      src: localAvatarUrl
    }), m("p", null, "I am ", m("b", null, this.username), " on Galactictalk.")), m("div", null, m("img", {
      "class": "keybase",
      src: _img_keybase_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a
    }), m("p", null, "I am ", m("b", null, this.kbUsername), " on Keybase."))), m("button", {
      "class": "yes",
      onclick: this.authorise.bind(this)
    }, "Yes, authorize"), m("button", {
      onclick: function onclick(e) {
        return m.route("/");
      }
    }, "No")));
  };

  return LoginPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/extendUserCard.js":
/*!*************************************!*\
  !*** ./src/forum/extendUserCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extendUserCard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);







function deactivate(_x) {
  return _deactivate.apply(this, arguments);
}

function _deactivate() {
  _deactivate = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var url, success;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "/api/keybase-deactivate/" + id;
            _context.next = 3;
            return fetch(url);

          case 3:
            _context.next = 5;
            return _context.sent.json();

          case 5:
            success = _context.sent;

            if (success) {
              // Delete the model instead
              window.location.reload();
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deactivate.apply(this, arguments);
}

function extendUserCard() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, "infoItems", function (items) {
    // TODO: Write a model for the access
    var proofs = this.props.user.data.attributes.proofs; // TODO: Change language from deactivate to delink?

    var canDeactivate = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user && flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.session.user.id() == this.props.user.id();

    var _loop2 = function _loop2() {
      if (_isArray) {
        if (_i >= _iterator.length) return "break";
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) return "break";
        _ref = _i.value;
      }

      var proof = _ref;
      var profileUrl = "https://keybase.io/" + proof.kb_username + "/sigs/" + proof.sig_hash;

      if (!proof.active) {
        return "continue";
      } // TODO: Add only one element and sort them nicely inside of it.


      items.add("keybase-" + proof.id, m("div", {
        className: "keybase-badge-container"
      }, m("a", {
        href: profileUrl
      }, m("div", {
        className: "keybase-badge"
      }, "@", proof.kb_username, " on keybase")), canDeactivate ? m("a", {
        onclick: function onclick(e) {
          return deactivate(proof.id);
        },
        className: "keybase-badge"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()("fas fa-trash-alt")) : ""));
    };

    _loop: for (var _iterator = proofs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      var _ret = _loop2();

      switch (_ret) {
        case "break":
          break _loop;

        case "continue":
          continue;
      }
    }
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeybaseValidator; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_KeybasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/KeybasePage */ "./src/forum/components/KeybasePage.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _extendUserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendUserCard */ "./src/forum/extendUserCard.js");








var KeybaseValidator =
/*#__PURE__*/
function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(KeybaseValidator, _Model);

  function KeybaseValidator() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Model.call.apply(_Model, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "proofValid", flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute("proof_valid"));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "proofId", flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute("proof_id"));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "status", flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute("status"));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "error", flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute("error"));

    return _this;
  }

  return KeybaseValidator;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a);


flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializers.add("keybase-link-page", function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.models.keybaseValidator = KeybaseValidator;
  flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.routes.keybaseProfileProof = {
    path: "/keybase-new-profile-proof",
    component: _components_KeybasePage__WEBPACK_IMPORTED_MODULE_4__["default"].component()
  };
  Object(_extendUserCard__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map
module.exports=function(t){var M={};function e(r){if(M[r])return M[r].exports;var n=M[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=M,e.d=function(t,M,r){e.o(t,M)||Object.defineProperty(t,M,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,M){if(1&M&&(t=e(t)),8&M)return t;if(4&M&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&M&&"string"!=typeof t)for(var n in t)e.d(r,n,function(M){return t[M]}.bind(null,n));return r},e.n=function(t){var M=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(M,"a",M),M},e.o=function(t,M){return Object.prototype.hasOwnProperty.call(t,M)},e.p="",e(e.s=22)}([function(t,M){t.exports=flarum.core.compat.app},function(t,M,e){"use strict";function r(t,M){t.prototype=Object.create(M.prototype),t.prototype.constructor=t,t.__proto__=M}e.d(M,"a",function(){return r})},function(t,M){t.exports=flarum.core.compat["components/Button"]},function(t,M,e){t.exports=e(21)},function(t,M){t.exports=flarum.core.compat.Model},,function(t,M){t.exports=flarum.core.compat["components/Page"]},function(t,M){t.exports=flarum.core.compat.extend},function(t,M){t.exports=flarum.core.compat["components/SelectDropdown"]},,,function(t,M){t.exports=flarum.core.compat["components/LogInModal"]},,function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjIzLjMzMzMzIDIwNC44OTkwNiIgaGVpZ2h0PSIyMDQuODk5MDYiIHdpZHRoPSIyMjMuMzMzMzMiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJzdmc0NTA0IiB2ZXJzaW9uPSIxLjEiPjxtZXRhZGF0YSBpZD0ibWV0YWRhdGE0NTEwIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPjxkYzp0aXRsZS8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzIGlkPSJkZWZzNDUwOCI+PGNsaXBQYXRoIGlkPSJjbGlwUGF0aDQ1MjAiIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBpZD0icGF0aDQ1MTgiIGQ9Ik0gMCw2MDAgSCA2MDAgViAwIEggMCBaIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4zMzMzMzMzLDAsMCwtMS4zMzMzMzMzLC0yODguMzMzMzMsNTAyLjQ0OTMyKSIgaWQ9Imc0NTEyIj48ZyBpZD0iZzQ1MTQiPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDQ1MjApIiBpZD0iZzQ1MTYiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMCwzNjIuNDI4NykiIGlkPSJnNDUyMiI+PHBhdGggaWQ9InBhdGg0NTI0IiBzdHlsZT0iZmlsbDojMzNhMGZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIC00NC4xODMsMCAtODAsLTM1LjgxNyAtODAsLTgwIDAsLTE1LjI1NCA0LjI3MSwtMjkuNTA5IDExLjY3OSwtNDEuNjM5IGwgMjAuOSwyMi4xOTEgMTA1Ljc4MywtMC42NjEgLTAuNzY2LC0zNS40MDcgQyA3MS40NjcsLTEyMS4xMjkgODAsLTEwMS41NjIgODAsLTgwIDgwLC0zNS44MTcgNDQuMTgzLDAgMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2My44MzYzLDMzOS42Mjc0KSIgaWQ9Imc0NTI2Ij48cGF0aCBpZD0icGF0aDQ1MjgiIHN0eWxlPSJmaWxsOiMzZGNjOGU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTMuODk5LDAuMjM5IC02Ljg4NywzLjYwOCAtNi42Niw3LjUxMSBsIDAuNTI5LDguNTQ3IGMgMC4yMzIsMy43MzkgMy4zNSw2LjY2OSA3LjA5Nyw2LjY2OSAwLjE0LDAgMC4yODEsLTAuMDA0IDAuNDIyLC0wLjAxMyBMIDkuOTMsMjIuMTg1IGMgMS44OSwtMC4xMTUgMy42MjcsLTAuOTYyIDQuODg1LC0yLjM4NiAxLjI2LC0xLjQyNCAxLjg4OCwtMy4yNTYgMS43NjcsLTUuMTU2IEwgMTYuMDU4LDYuMTI5IEMgMTYuMDI3LDUuNjM3IDE1LjkyOCw1LjI0NyAxNS44NjcsNS4wMzQgTCAxNS41NjMsMy41NDcgOS45NDIsLTAuNjE1IFoiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY0LjgwMjUsMzY2LjY0NjgpIiBpZD0iZzQ1MzAiPjxwYXRoIGlkPSJwYXRoNDUzMiIgc3R5bGU9ImZpbGw6IzI4MjgyODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtNi4wMSwwIC0xMS4wMDksLTQuNjk4IC0xMS4zODEsLTEwLjY5NiBsIC0wLjUyOSwtOC41MzIgLTEwZS00LC0wLjAxNiAtMC4wMDEsLTAuMDE1IGMgLTAuMzY0LC02LjI1OSA0LjQzLC0xMS42NjIgMTAuNjg2LC0xMi4wNDUgbCA4LjM3NSwtMC41MTggMy4xMjMsLTAuMTkzIDIuNTE1LDEuODYyIDMuMDQyLDIuMjUxIDIuNjQzLDEuOTU3IDAuNjA3LDIuOTY3IGMgMC4xMiwwLjQ1NSAwLjI1LDEuMDY4IDAuMjk3LDEuODE4IGwgMC41MjQsOC41MjIgYyAwLjE5MiwzLjA0NSAtMC44MTcsNS45OCAtMi44MzksOC4yNjYgLTIuMDEzLDIuMjc4IC00LjgsMy42MzggLTcuODQzLDMuODIzIEwgMC43LC0wLjAyMSBIIDAuNjg4IEwgMC42NzUsLTAuMDIgQyAwLjQ1MSwtMC4wMDcgMC4yMjQsMCAwLDAgbSA2LjM3OCwtMTguNjIxIDAuMzE0LDUuMDc1IC01LjA3NiwwLjMxNCAtMC4zMTUsLTUuMDc2IDUuMDc3LC0wLjMxMyBNIDAsLTguNTg1IGMgMC4wNTYsMCAwLjExMywtMC4wMDIgMC4xNywtMC4wMDUgbCA4LjUyOCwtMC41MjkgYyAwLjc0NywtMC4wNDUgMS40MzYsLTAuMzggMS45MzMsLTAuOTQzIDAuNSwtMC41NjUgMC43NDksLTEuMjkgMC43MDEsLTIuMDQxIGwgLTAuNTI1LC04LjUyNCBjIC0wLjAwOCwtMC4xMzIgLTAuMDYxLC0wLjI0OCAtMC4wODYsLTAuMzc0IGwgLTMuMDQyLC0yLjI1MiAtOC4zOCwwLjUxOCBjIC0xLjU0NiwwLjA5NSAtMi43MywxLjQzIC0yLjY0LDIuOTc3IGwgMC41MjksOC41MzEgYyAwLjA5MiwxLjQ4OSAxLjMyNywyLjY0MiAyLjgxMiwyLjY0MiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAsMzIwLjk2MjMpIiBpZD0iZzQ1MzQiPjxwYXRoIGlkPSJwYXRoNDUzNiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMzMuNDAyLDAgLTYwLjQ4LC0yNy4wNzggLTYwLjQ4LC02MC40OCAwLC0xMi40MjEgMy43NDYsLTIzLjk2NSAxMC4xNjcsLTMzLjU2OSBIIDUyLjc0MiBjIDUuNDI0LDkuOTA3IDcuNzM4LDIxLjYzNyA3LjczOCwzMy41NjkgQyA2MC40OCwtMjkuNTY2IDMzLjQwMiwwIDAsMCIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTkuOTk5OSwzMjUuMjU1KSIgaWQ9Imc0NTM4Ij48cGF0aCBpZD0icGF0aDQ1NDAiIHN0eWxlPSJmaWxsOiMyODI4Mjc7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTM1LjcxNiwwIC02NC43NzMsLTI5LjA1NyAtNjQuNzczLC02NC43NzMgMCwtMTIuMjggMy40MzYsLTIzLjc3NCA5LjM5NiwtMzMuNTY5IGggMTAuMzQ3IGMgLTcuMDA1LDkuMzcyIC0xMS4xNTcsMjAuOTk1IC0xMS4xNTcsMzMuNTY5IDAsMzAuOTgyIDI1LjIwNSw1Ni4xODggNTYuMTg3LDU2LjE4OCAxNC43MTYsMCAyOC44MTEsLTYuMTYxIDM5LjY4OCwtMTcuMzQ4IDEwLjQ4NiwtMTAuNzgzIDE2LjUsLTI0Ljk0IDE2LjUsLTM4Ljg0IDAsLTkuNTE3IC0xLjU3MiwtMjIuNDUgLTguNDA1LC0zMy41NjkgaCA5Ljc5OSBjIDQuNzI5LDkuNTE5IDcuMTkxLDIwLjkgNy4xOTEsMzMuNTY5IDAsMTYuMTE2IC02Ljg5OSwzMi40NTQgLTE4LjkyOSw0NC44MjYgQyAzMy4zMzYsLTcuMDg0IDE3LjA1NSwwIDAsMCIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODcuNzg5MSwyNDIuOTI1NCkiIGlkPSJnNDU0MiI+PHBhdGggaWQ9InBhdGg0NTQ0IiBzdHlsZT0iZmlsbDojMjgyODI3O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIDAsLTMuMjA3IC0yLjU5OSwtNS44MDYgLTUuODA2LC01LjgwNiAtMy4yMDcsMCAtNS44MDYsMi41OTkgLTUuODA2LDUuODA2IDAsMy4yMDcgMi41OTksNS44MDYgNS44MDYsNS44MDYgQyAtMi41OTksNS44MDYgMCwzLjIwNyAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIzLjgyMjgsMjQyLjkyNTQpIiBpZD0iZzQ1NDYiPjxwYXRoIGlkPSJwYXRoNDU0OCIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAwLC0zLjIwNyAtMi41OTksLTUuODA2IC01LjgwNiwtNS44MDYgLTMuMjA3LDAgLTUuODA2LDIuNTk5IC01LjgwNiw1LjgwNiAwLDMuMjA3IDIuNTk5LDUuODA2IDUuODA2LDUuODA2IEMgLTIuNTk5LDUuODA2IDAsMy4yMDcgMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNC4wMTE3LDI0NS4yMjg3KSIgaWQ9Imc0NTUwIj48cGF0aCBpZD0icGF0aDQ1NTIiIHN0eWxlPSJmaWxsOiNmZjZmMjE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Ik0gMCwwIDMyLjIyOCwzNC4xOCAyNC40NzEsOS44NjEgYyAyNS4xNjEsMTguMzEgNTEuNTc1LDE1LjQxNSA3MC4xNzQsOS45NTMgMTkuNzQxLC01Ljc5NiAzMy41NjIsMTEuNjM5IDIwLjAzMiwzMC4yMzggQyAxMDguMjQ4LDU4Ljg5MSA5OS40MjksNjYuMjMgODkuNDEyLDcwLjY4MSA2My4xMzksODIuMzUyIDM2LjcyNCw3NS41NDcgMTguOTA1LDU3LjU0NyAwLjAyOSwzOC40NzkgMCwxNy4zMyAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk2Ljk3MTYsMzE3LjM4ODYpIiBpZD0iZzQ1NTQiPjxwYXRoIGlkPSJwYXRoNDU1NiIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMy43NDEsMCAtNy40NTYsLTAuMzczIC0xMS4xMDcsLTEuMTI0IC0xMS4xMzUsLTIuMjkgLTIxLjQ3MywtNy45OTkgLTI5Ljg5NywtMTYuNTA5IC0xMy45OTMsLTE0LjEzNSAtMTYuOTAxLC0yOS4zMDYgLTE3LjUwNSwtNDMuNTQ5IGwgMzcuNjAzLDM5Ljg4MSAtOS45NTUsLTMxLjIwOCBjIDE4LjcwOCw5Ljc4MSA0MC4wOTksMTEuMjI4IDYzLjc1NSw0LjI4MiA3LjUyOCwtMi4yMSAxNC4zNTEsLTAuNTM1IDE3LjgwOCw0LjM3MSAzLjU1MSw1LjA0MSAyLjYzMywxMi4yMjcgLTIuNDU2LDE5LjIyMyAtNi4wODEsOC4zNiAtMTQuNDQsMTUuMTg5IC0yMy41MzcsMTkuMjMxIEMgMTYuNjQxLC0xLjgxOCA4LjI1OSwwIDAsMCBtIC02Ny4yNTIsLTgyLjk3IHYgMTAuODEgYyAwLDE3LjkxNyAwLDQwLjIxNSAyMC4xNDYsNjAuNTY3IDkuNjIsOS43MTcgMjEuNDcsMTYuMjQ1IDM0LjI2OSwxOC44NzggMTMuNDc0LDIuNzcyIDI3LjY2MiwxLjA5OCA0MS4wMzIsLTQuODQxIDEwLjQ1MywtNC42NDQgMjAuMDQsLTEyLjQ2NyAyNi45OTQsLTIyLjAyNiA3LjI0MywtOS45NTggOC4yMTMsLTIxLjE1NCAyLjUzMSwtMjkuMjE4IC01LjU1NSwtNy44ODUgLTE2LjI0NywtMTAuODkyIC0yNy4yNDUsLTcuNjY0IC0yNS4zNjQsNy40NDggLTQ3LjcxOCw0LjMxNyAtNjYuNDM4LC05LjMwNiBsIC0xMC42LC03LjcxMyA2LjAwNSwxOC44MjUgeiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTUuNDM5NSwzMjQuMTgzNSkiIGlkPSJnNDU1OCI+PHBhdGggaWQ9InBhdGg0NTYwIiBzdHlsZT0iZmlsbDojZmY2ZjIxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBkPSJtIDAsMCBjIC0zLjgyMSwtOS45NTYgLTE0LjkwMSwtMTUuNTE1IC0yNS4xNjcsLTEyLjYyNSAtMTEuNTY2LDMuMjU3IC0xNy42NzMsMTIuNTUyIC0xNi4yMDcsMjQuMzQyIDEuNDU5LDExLjcyNSA5LjM4MiwyMi4wMDUgMTguNTE1LDM0LjY3NyAtNy41MDIsLTE1Ljk2OSAtMS4xMjksLTE3LjQ2NSAwLjg4NywtMTcuMzg1IDEuOTkyLDAuMDc5IDQuOSwtMC4yNjEgOS4wMzksLTEuNjM0IEMgLTEuNjU2LDIzLjYzMiA0LjMwNSwxMS4yMTggMCwwIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4NS44Mjk0LDM1My40NjUpIiBpZD0iZzQ1NjIiPjxwYXRoIGlkPSJwYXRoNDU2NCIgc3R5bGU9ImZpbGw6IzI4MjgyNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMy45NjIsLTYuMjEyIC02Ljc0NCwtMTEuOTg2IC03LjUwNCwtMTguMDk0IC0xLjIwMywtOS42NzMgMy42OTgsLTE3LjAzIDEzLjExMSwtMTkuNjggOC4xNzIsLTIuMzAxIDE2Ljk1NCwyLjEwNSAxOS45OTYsMTAuMDMgMS42NDksNC4yOTggMS40NzcsOC45NDcgLTAuNDg0LDEzLjA5MSAtMS45NjMsNC4xNDggLTUuNDQxLDcuMjI4IC05Ljc5NCw4LjY3MiAtMy44MiwxLjI2OCAtNi4xOTgsMS40NjkgLTcuNTE2LDEuNDE5IEMgNC44NSwtNC42NzggMi4xMTksLTMuMyAwLjUwOSwtMC44NzIgMC4zMjMsLTAuNTkyIDAuMTUzLC0wLjMwMiAwLDAgbSA5Ljk3NywtNDYuOTYzIGMgLTIuMjI2LDAgLTQuNDc1LDAuMjk5IC02LjY5NywwLjkyNSAtNi42NjYsMS44NzcgLTExLjk5Myw1LjU4NyAtMTUuNDA0LDEwLjcyOSAtMy40MDEsNS4xMjYgLTQuNzQ5LDExLjQ0NSAtMy45LDE4LjI3NSAxLjUsMTIuMDU3IDguOTMxLDIyLjMyOSAxNy41MzUsMzQuMjIzIDAuNTgsMC44MDIgMS4xNjYsMS42MTIgMS43NTgsMi40MzMgbCA3LjM2NywtNC4zMzUgQyA3LDcuNTQ2IDcuNDE3LDQuNjggNy42MDgsNC4wMjYgYyAyLjkyNSwwLjA4OSA2LjQzMSwtMC41MzQgMTAuNDIxLC0xLjg1OCA2LjYwMSwtMi4xOTEgMTEuODc1LC02Ljg2IDE0Ljg1LC0xMy4xNDkgMi45NzQsLTYuMjg0IDMuMjM2LC0xMy4zMyAwLjczOSwtMTkuODM5IEMgMjkuODMsLTQwLjY4OSAyMC4xNzIsLTQ2Ljk2MyA5Ljk3NywtNDYuOTYzIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwNC41OTE2LDI4Ni4xNjEzKSIgaWQ9Imc0NTY2Ij48cGF0aCBpZD0icGF0aDQ1NjgiIHN0eWxlPSJmaWxsOiMzZGNjOGU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGQ9Im0gMCwwIGMgLTEuNTAzLDAgLTIuOTExLDAuNjY4IC0zLjg2MSwxLjgzMiBsIC0yLjg4OCwzLjUzNyBjIC0xLjY3NCwyLjA1IC0xLjQzNCw1LjA0OSAwLjUwMSw2LjgxMSAtMC42MjUsMC4zMDYgLTEuMTg0LDAuNzQ3IC0xLjYzOCwxLjMwMyBsIC0wLjY1OSwwLjgwNyBjIC0xLjczNCwyLjEyMyAtMS40MTcsNS4yNiAwLjcwNSw2Ljk5MyBsIDAuNDE1LDAuMzM5IC00LjIzLDUuMTkyIGMgLTEuODgxLDIuMzA0IC0xLjUzNiw1LjcxMyAwLjc3LDcuNTk3IDAuOTY3LDAuNzg4IDIuMTc5LDEuMjE5IDMuNDE3LDEuMjE5IDEuNjI2LDAgMy4xNTEsLTAuNzIyIDQuMTgyLC0xLjk4MiBMIDE0Ljc1NywxMS40NDEgQyAxNi42MzUsOS4xNCAxNi4yOSw1LjczMSAxMy45ODQsMy44NDcgMTMuMzQ4LDMuMzI3IDEyLjU4NiwyLjk1MyAxMS43ODQsMi43NjggMTEuMzg2LDIuNjc2IDEwLjk3NiwyLjYzIDEwLjU2NywyLjYzIHYgMCBDIDkuMTYxLDIuNjMgNy44MzIsMy4xNjkgNi44MzEsNC4xMjggTCAzLjE1LDEuMTIzIEMgMi4yNjMsMC4zOTkgMS4xNDQsMCAwLDAiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA0LjAyMjksMzIyLjAzNDUpIiBpZD0iZzQ1NzAiPjxwYXRoIGlkPSJwYXRoNDU3MiIgc3R5bGU9ImZpbGw6IzI4MjgyODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgZD0ibSAwLDAgYyAtMS43MDEsMi4wNzggLTQuMjE2LDMuMjY5IC02Ljg5OSwzLjI2OSAtMi4wNDQsMCAtNC4wNDQsLTAuNzEyIC01LjYzMSwtMi4wMDQgLTMuODE0LC0zLjExNiAtNC4zODIsLTguNzQxIC0xLjI3NSwtMTIuNTQ3IGwgMi4zNSwtMi44ODUgYyAtMS43MjYsLTIuOTY4IC0xLjUzOSwtNi44MjQgMC43NTgsLTkuNjM3IGwgMC40NDIsLTAuNTQyIGMgLTEuMDM5LC0yLjc0MSAtMC42MywtNS45NSAxLjM1NCwtOC4zNzkgbCAyLjg4OCwtMy41MzggYyAxLjYxOSwtMS45ODQgNC4wMTgsLTMuMTIyIDYuNTgxLC0zLjEyMiAxLjk1MiwwIDMuODYsMC42NzkgNS4zNzIsMS45MTQgbCAxLjczLDEuNDEyIGMgMS4wODIsLTAuNDU1IDIuMjU3LC0wLjY5NyAzLjQ2NiwtMC42OTcgMC42NzQsMCAxLjM0OSwwLjA3NyAyLjAwNiwwLjIyOSAxLjMyNCwwLjMwNSAyLjU4LDAuOTIxIDMuNjMzLDEuNzgxIDMuODA1LDMuMTA5IDQuMzczLDguNzM0IDEuMjY3LDEyLjU0IEwgMC4wMTcsLTAuMDIxIFogbSAtNi44OTksLTMuNzU1IGMgMC41NDcsMCAxLjA5LC0wLjIzOCAxLjQ2NCwtMC42OTYgTCAxMi42LC0yNi42NDcgYyAwLjY2LC0wLjgwOSAwLjUzOSwtMS45OTkgLTAuMjY5LC0yLjY1OSAtMC4yMzMsLTAuMTkgLTAuNDk2LC0wLjMxNCAtMC43NjksLTAuMzc3IC0wLjE0LC0wLjAzMyAtMC4yODMsLTAuMDQ5IC0wLjQyNiwtMC4wNDkgLTAuNTQ4LDAgLTEuMDkxLDAuMjM3IC0xLjQ2NSwwLjY5NSBsIC0xLjc5NiwyLjIxMyAtNi4zNzcsLTUuMjA1IGMgLTAuMjczLC0wLjIyNCAtMC42MDIsLTAuMzMyIC0wLjkzLC0wLjMzMiAtMC40MjYsMCAtMC44NDksMC4xODUgLTEuMTQsMC41NDEgbCAtMi44ODgsMy41MzcgYyAtMC41MDgsMC42MjIgLTAuNDE1LDEuNTM4IDAuMjA3LDIuMDQ2IGwgNi40MDgsNS4yMzEgLTIuNjE4LDMuMjI4IC0zLjE3LC0yLjU5IGMgLTAuMjYsLTAuMjExIC0wLjU3MiwtMC4zMTQgLTAuODgyLC0wLjMxNCAtMC40MDQsMCAtMC44MDUsMC4xNzUgLTEuMDgxLDAuNTEyIGwgLTAuNjYsMC44MDkgYyAtMC41MDksMC42MjMgLTAuNDE3LDEuNTQxIDAuMjA2LDIuMDUgbCAzLjEzMywyLjU1OCAtNi40NDcsNy45MTMgYyAtMC42NiwwLjgwOCAtMC41MzksMS45OTggMC4yNjksMi42NTggMC4zNTMsMC4yODcgMC43NzYsMC40MjcgMS4xOTYsMC40MjciLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"},function(t,M){t.exports=flarum.core.compat["components/UserCard"]},,,,,,,function(t,M,e){var r=function(t){"use strict";var M,e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",u=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function L(t,M,e,r){var n=M&&M.prototype instanceof y?M:y,i=Object.create(n.prototype),u=new h(r||[]);return i._invoke=function(t,M,e){var r=a;return function(n,i){if(r===j)throw new Error("Generator is already running");if(r===N){if("throw"===n)throw i;return f()}for(e.method=n,e.arg=i;;){var u=e.delegate;if(u){var o=m(u,e);if(o){if(o===I)continue;return o}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===a)throw r=N,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=j;var L=s(t,M,e);if("normal"===L.type){if(r=e.done?N:c,L.arg===I)continue;return{value:L.arg,done:e.done}}"throw"===L.type&&(r=N,e.method="throw",e.arg=L.arg)}}}(t,e,u),i}function s(t,M,e){try{return{type:"normal",arg:t.call(M,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=L;var a="suspendedStart",c="suspendedYield",j="executing",N="completed",I={};function y(){}function g(){}function w(){}var D={};D[i]=function(){return this};var T=Object.getPrototypeOf,A=T&&T(T(O([])));A&&A!==e&&r.call(A,i)&&(D=A);var C=w.prototype=y.prototype=Object.create(D);function l(t){["next","throw","return"].forEach(function(M){t[M]=function(t){return this._invoke(M,t)}})}function z(t){var M;this._invoke=function(e,n){function i(){return new Promise(function(M,i){!function M(e,n,i,u){var o=s(t[e],t,n);if("throw"!==o.type){var L=o.arg,a=L.value;return a&&"object"==typeof a&&r.call(a,"__await")?Promise.resolve(a.__await).then(function(t){M("next",t,i,u)},function(t){M("throw",t,i,u)}):Promise.resolve(a).then(function(t){L.value=t,i(L)},function(t){return M("throw",t,i,u)})}u(o.arg)}(e,n,M,i)})}return M=M?M.then(i,i):i()}}function m(t,e){var r=t.iterator[e.method];if(r===M){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=M,m(t,e),"throw"===e.method))return I;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return I}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,I;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=M),e.delegate=null,I):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,I)}function p(t){var M={tryLoc:t[0]};1 in t&&(M.catchLoc=t[1]),2 in t&&(M.finallyLoc=t[2],M.afterLoc=t[3]),this.tryEntries.push(M)}function x(t){var M=t.completion||{};M.type="normal",delete M.arg,t.completion=M}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,u=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=M,e.done=!0,e};return u.next=u}}return{next:f}}function f(){return{value:M,done:!0}}return g.prototype=C.constructor=w,w.constructor=g,w[o]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var M="function"==typeof t&&t.constructor;return!!M&&(M===g||"GeneratorFunction"===(M.displayName||M.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},l(z.prototype),z.prototype[u]=function(){return this},t.AsyncIterator=z,t.async=function(M,e,r,n){var i=new z(L(M,e,r,n));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},l(C),C[o]="Generator",C[i]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var M=[];for(var e in t)M.push(e);return M.reverse(),function e(){for(;M.length;){var r=M.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=M,this.done=!1,this.delegate=null,this.method="next",this.arg=M,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=M)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=M),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],o=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var L=r.call(u,"catchLoc"),s=r.call(u,"finallyLoc");if(L&&s){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(L){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,M){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=M&&M<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=M,i?(this.method="next",this.next=i.finallyLoc,I):this.complete(u)},complete:function(t,M){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&M&&(this.next=M),I},finish:function(t){for(var M=this.tryEntries.length-1;M>=0;--M){var e=this.tryEntries[M];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),I}},catch:function(t){for(var M=this.tryEntries.length-1;M>=0;--M){var e=this.tryEntries[M];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var n=r.arg;x(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=M),I}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,M,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.r(M);var n=e(1);function i(t,M,e){return M in t?Object.defineProperty(t,M,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[M]=e,t}var u=e(0),o=e.n(u),L=e(3),s=e.n(L);function a(t,M,e,r,n,i,u){try{var o=t[i](u),L=o.value}catch(t){return void e(t)}o.done?M(L):Promise.resolve(L).then(r,n)}function c(t){return function(){var M=this,e=arguments;return new Promise(function(r,n){var i=t.apply(M,e);function u(t){a(i,r,n,u,o,"next",t)}function o(t){a(i,r,n,u,o,"throw",t)}u(void 0)})}}var j=e(6),N=e.n(j),I=e(11),y=e.n(I),g=e(13),w=e.n(g),D=function(t){function M(){return t.apply(this,arguments)||this}Object(n.a)(M,t);var e=M.prototype;return e.init=function(){var M=c(s.a.mark(function M(){var e,r;return s.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(t.prototype.init.call(this),this.loggedIn=!0,o.a.session.user){M.next=7;break}this.loggedIn=!1,o.a.modal.show(new y.a),M.next=18;break;case 7:return e=new URLSearchParams(window.location.search),this.kbUsername=e.get("kbUsername"),this.username=e.get("username"),this.kbUa=e.get("kbUa"),this.sigHash=e.get("sigHash"),M.next=14,o.a.store.find("keybase-validate",{kb_username:this.kbUsername,username:this.username,kb_ua:this.kbUa,sig_hash:this.sigHash});case 14:r=M.sent,this.proofValid=r.proofValid(),this.proofValid?this.proofId=r.proofId():this.error=r.error(),m.redraw();case 18:case"end":return M.stop()}},M,this)}));return function(){return M.apply(this,arguments)}}(),e.authorise=function(){var t=c(s.a.mark(function t(M){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.request({method:"GET",url:"/api/keybase-activate/"+this.proofId});case 2:t.sent&&window.location.replace("https://keybase.io/_/proof_creation_success?domain=galactictalk.org&kb_username="+this.kbUsername+"&username="+this.username+"&sig_hash="+this.sigHash+"&kb_ua="+this.kbUa);case 4:case"end":return t.stop()}},t,this)}));return function(M){return t.apply(this,arguments)}}(),e.view=function(){if(!this.loggedIn)return m("div",{class:"keybase"},m("div",{class:"authorize-window"},m("h3",null,"You must be logged in to prove your identity.",m("a",{onclick:function(t){return o.a.modal.show(new y.a)}}," ","Click here to log in."))));if(this.error)return m("div",{class:"keybase"},m("div",{class:"authorize-window"},m("h3",null,this.error)));if(void 0===this.proofValid)return m("div",{class:"keybase"},m("div",{class:"authorize-window"},m("h3",null,"Checking signature.")));if(!this.proofValid)return m("div",{class:"keybase"},m("div",{class:"authorize-window"},m("h3",null,"Invalid signature check.")));var t=o.a.session.user.avatarUrl();return m("div",{class:"keybase"},m("div",{class:"authorize-window"},m("h3",null,"Authorize this cryptographic connection?"),m("div",{class:"accounts"},m("div",{class:"forum"},t?m("img",{src:t}):m("span",{class:"Avatar no-avatar",style:"background: #aaa;"}," "),m("p",null,"I am ",m("b",null,this.username)," on Galactictalk.")),m("div",null,m("img",{class:"keybase",src:w.a}),m("p",null,"I am ",m("b",null,this.kbUsername)," on Keybase."))),m("button",{class:"yes",onclick:this.authorise.bind(this)},"Yes, authorize"),m("button",{onclick:function(t){return m.route("/")}},"No")))},M}(N.a),T=e(4),A=e.n(T),C=e(7),l=e(14),z=e.n(l),p=e(8),x=e.n(p),h=e(2),O=e.n(h),f=function(t){function M(){return t.apply(this,arguments)||this}return Object(n.a)(M,t),M.initProps=function(M){t.initProps.call(this,M),M.className="keybase-badge",M.buttonClassName="Button Button--text",M.caretIcon="fas fa-caret-down",M.defaultLabel=M.kbUsername+" on keybase",M.children=[O.a.component({children:["Show proof on Keybase"],icon:"far fa-eye",onclick:function(t){return window.open(M.proofUrl,"_blank")}})],M.canRevoke&&M.children.push(O.a.component({children:["Revoke proof"],icon:"fas fa-trash-alt",onclick:function(t){return function(t){return S.apply(this,arguments)}(M.id)}}))},M}(x.a);function S(){return(S=c(s.a.mark(function t(M){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.request({method:"GET",url:"/api/keybase-deactivate/"+M});case 2:t.sent&&window.location.reload();case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}var b=function(t){function M(){for(var M,e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return i(r(M=t.call.apply(t,[this].concat(n))||this),"proofValid",A.a.attribute("proof_valid")),i(r(M),"proofId",A.a.attribute("proof_id")),i(r(M),"status",A.a.attribute("status")),i(r(M),"error",A.a.attribute("error")),M}return Object(n.a)(M,t),M}(A.a);o.a.initializers.add("keybase-link-page",function(){o.a.store.models.keybaseValidator=b,o.a.routes.keybaseProfileProof={path:"/new-keybase-profile-proof",component:D.component()},Object(C.extend)(z.a.prototype,"infoItems",function(t){var M=this.props.user.data.attributes.proofs,e=o.a.session.user&&o.a.session.user.id()==this.props.user.id(),r=M,n=Array.isArray(r),i=0;for(r=n?r:r[Symbol.iterator]();;){var u;if(n){if(i>=r.length)break;u=r[i++]}else{if((i=r.next()).done)break;u=i.value}var L=u,s="https://keybase.io/"+L.kb_username+"/sigs/"+L.sig_hash;L.active&&t.add("keybase-"+L.id,m(f,{id:L.id,kbUsername:L.kb_username,canRevoke:e,proofUrl:s}))}})})}]);
//# sourceMappingURL=forum.js.map
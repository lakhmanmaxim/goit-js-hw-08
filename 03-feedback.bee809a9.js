function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=g();if(O(e))return T(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function h(){var e=g(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector('.feedback-form [name="email"]'),S=document.querySelector('[name="message"]'),O=document.querySelector(".feedback-form");let j,T={};!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);t.email&&(y.value=t.email),t.message&&(S.value=t.message)}}(),O.addEventListener("input",e(t)((function(e){if(j=localStorage.getItem("feedback-form-state"),j){const t=JSON.parse(j);""!==t.email&&(T.email=t.email),""!==t.message&&(T.message=t.message),T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))})),500),O.addEventListener("submit",(function(e){e.preventDefault(),console.log("FINAL FORM DATA ",T),O.reset(),localStorage.removeItem("feedback-form-state"),T={}}));
//# sourceMappingURL=03-feedback.bee809a9.js.map

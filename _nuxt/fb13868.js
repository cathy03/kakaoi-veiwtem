(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,6,7,8],{232:function(t,e,o){"use strict";o.r(e);var n=o(233),r=o.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},233:function(t,e){},234:function(t,e,o){var content=o(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("d76d5c26",content,!0,{sourceMap:!1})},235:function(t,e,o){"use strict";o(234)},236:function(t,e,o){var n=o(53)(!1);n.push([t.i,".header[data-v-2aac52b0]{position:fixed;top:0;z-index:10000;width:100%;background-color:#000;overflow:hidden}.titleSection[data-v-2aac52b0]{float:left;padding-left:20px;padding-top:16px;padding-bottom:16px;color:#fff}.titleSection img[data-v-2aac52b0]{float:left;width:auto;height:16px}.titleSection h1[data-v-2aac52b0]{float:left;font-weight:800;padding-left:8px;font-size:14px;line-height:16px}.addJsonContainer[data-v-2aac52b0]{float:right;background-color:var(--primary-color);width:120px;height:48px}.addJsonBtn[data-v-2aac52b0]{display:block;text-align:center;color:#fff;padding-top:14px;font-size:14px;line-height:20px}",""]),t.exports=n},237:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("div",{staticClass:"titleSection"},[o("nuxt-link",{attrs:{to:"/"}},[o("h1",[t._v("View Template Generator")])])],1),t._v(" "),t._m(0)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addJsonContainer"},[o("span",{staticClass:"addJsonBtn"},[t._v("Add Json")])])}]},238:function(t,e,o){(function(n){var r,l,c,d=o(241);o(16),o(28),o(74),o(130),function(o,n){"use strict";l=[],void 0===(c="function"==typeof(r=function(){var t={alignVert:!1,alignHoriz:!1,multiLine:!1,detectMultiLine:!0,minFontSize:6,maxFontSize:80,reProcess:!0,widthOnly:!1,alignVertWithFlexbox:!1};return function(o,n){n||(n={});var r={};for(var l in t)n.hasOwnProperty(l)?r[l]=n[l]:r[l]=t[l];"function"==typeof o.toArray&&(o=o.toArray());var c=Object.prototype.toString.call(o);"[object Array]"!==c&&"[object NodeList]"!==c&&"[object HTMLCollection]"!==c&&(o=[o]);for(var i=0;i<o.length;i++)e(o[i],r)};function e(t,e){if(!r(t)||!e.reProcess&&t.getAttribute("textFitted"))return!1;var d,A,m,v,x,f,h;if(e.reProcess||t.setAttribute("textFitted",1),m=t.innerHTML,v=n(t),A=o(t),!v||!e.widthOnly&&!A)throw e.widthOnly?new Error("Set a static width on the target element "+t.outerHTML+" before using textFit!"):new Error("Set a static height and width on the target element "+t.outerHTML+" before using textFit!");-1===m.indexOf("textFitted")?((d=document.createElement("span")).className="textFitted",d.style.display="inline-block",d.innerHTML=m,t.innerHTML="",t.appendChild(d)):l(d=t.querySelector("span.textFitted"),"textFitAlignVert")&&(d.className=d.className.replace("textFitAlignVert",""),d.style.height="",t.className.replace("textFitAlignVertFlex","")),e.alignHoriz&&(t.style["text-align"]="center",d.style["text-align"]="center");var y=e.multiLine;e.detectMultiLine&&!y&&d.scrollHeight>=2*parseInt(window.getComputedStyle(d)["font-size"],10)&&(y=!0),y||(t.style["white-space"]="nowrap"),x=e.minFontSize,h=e.maxFontSize;for(var C=x;x<=h;)f=h+x>>1,d.style.fontSize=f+"px",d.scrollWidth<=v&&(e.widthOnly||d.scrollHeight<=A)?(C=f,x=f+1):h=f-1;if(d.style.fontSize!=C+"px"&&(d.style.fontSize=C+"px"),e.alignVert){c();var _=d.scrollHeight;"static"===window.getComputedStyle(t).position&&(t.style.position="relative"),l(d,"textFitAlignVert")||(d.className=d.className+" textFitAlignVert"),d.style.height=_+"px",e.alignVertWithFlexbox&&!l(t,"textFitAlignVertFlex")&&(t.className=t.className+" textFitAlignVertFlex")}}function o(t){var style=window.getComputedStyle(t,null);return t.clientHeight-parseInt(style.getPropertyValue("padding-top"),10)-parseInt(style.getPropertyValue("padding-bottom"),10)}function n(t){var style=window.getComputedStyle(t,null);return t.clientWidth-parseInt(style.getPropertyValue("padding-left"),10)-parseInt(style.getPropertyValue("padding-right"),10)}function r(t){return"object"===("undefined"==typeof HTMLElement?"undefined":d(HTMLElement))?t instanceof HTMLElement:t&&"object"===d(t)&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function l(element,t){return(" "+element.className+" ").indexOf(" "+t+" ")>-1}function c(){if(!document.getElementById("textFitStyleSheet")){var style=[".textFitAlignVert{","position: absolute;","top: 0; right: 0; bottom: 0; left: 0;","margin: auto;","display: flex;","justify-content: center;","flex-direction: column;","}",".textFitAlignVertFlex{","display: flex;","}",".textFitAlignVertFlex .textFitAlignVert{","position: static;","}"].join(""),t=document.createElement("style");t.type="text/css",t.id="textFitStyleSheet",t.innerHTML=style,document.body.appendChild(t)}}})?r.apply(e,l):r)||(t.exports=c)}(void 0===n||d(n))}).call(this,o(27))},239:function(t,e,o){"use strict";o.r(e);var n=o(237),r=o(232);for(var l in r)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(l);o(235);var c=o(42),component=Object(c.a)(r.default,n.a,n.b,!1,null,"2aac52b0",null);e.default=component.exports},240:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAAeklEQVRYCe2Q0QmAMAxEa0YpHVAn0QEzS5X7EEpAjFDw5xUCzXHJhVcKDwIQgAAEIACBjwRaa7sqjj3p0Rd7i0Km772v4xH6S8vMRs8ShUx/B5rZIb/C9Xf3LTM/xaMjaq2naqQxZXl2iYJ/C88eiQ8CEIAABCDwRuACeo8fcD3waosAAAAASUVORK5CYII="},241:function(t,e){function o(e){return t.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,o(e)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},242:function(t,e,o){t.exports=o.p+"img/device_kiosk.9d27fb0.png"},243:function(t,e,o){t.exports=o.p+"img/device_kiosk_dark.c9ad99f.png"},244:function(t,e,o){t.exports=o.p+"img/device_kiosk_select.7a22e22.png"},245:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAAB60lEQVR4Ae3bQUrDUBAA0KgHcK1L9yKKnsUzehZF8QIudas7N6IzaGiQloJpM7/xfRiS1piZvOlPRX66ziBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJiLwN7EF3IQ+c4iLiOOJ869Lt1zHHAX8Rjxse7gXfz5aRR9H/HZeGSNWeusRl7Qe0Tr+H19WeskTZjiFpS3nduI84gcbxE3ES/5oqFxFLVcRxz+1PQQ26uInb8dXcRF9J+s19g/iWh1ZG1ZY19v1r7Vsb/Vs3+fPL9w+5Gf/Kf+RYPbrC1r7Mew9v69jW6naMDwr53WbjvLMIc1Dmtfduzo96ZowOgi53wCDSjurgZoQLFAcXozQAOKBYrTmwEaUCxQnN4M0IBigeL0ZoAGFAsUpzcDNKBYoDi9GaABxQLF6c0ADSgWKE5vBmhAsUBxejNAA4oFitObAf+gAbnquB+5/K/1MaxxWHvrda+sz9LElTRdZ3HuAme2i3PzEi1PXzS6bC+b4AGNX/xT3IKGKT2iNNSwT4AAAQL/WmDqL+G/YOfzWmNG09fof0FjWruB39WADSA6BQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg0JPAFg6jVmJ6smP8AAAAASUVORK5CYII="},246:function(t,e,o){t.exports=o.p+"img/device_pc_dark.fd46c6f.png"},247:function(t,e,o){t.exports=o.p+"img/device_pc_select.8796339.png"},248:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAAB00lEQVR4Ae3cTS4FURAG0MYCjBmaixDWYo3WQogNGDJlZiJUhU7uwLT78/S5SeX9RPq779SrZnJNk0WAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPBfBPb+yAc5qH2cVV1WHS+8p+e6/l3VY9XHwlk7cfnT2uV91efK1ZmdvenVAO9Va+PPeZ0dbULyFtS3nduq86peb1U3VS/9YsF1VNe+rjr8yXiox6uqzd2OLupDz9/E13p+UrXW6qzOnPN7L5G1H0n9Du1fuPPqb/7T/GKFx87qzHmNe5nfW+Ux2YDxr52lbzu/YY6Z415++9nF3ks2YLEPtUsX1oBwtzRAA8IC4XgToAFhgXC8CdCAsEA43gRoQFggHG8CNCAsEI43ARoQFgjHmwANCAuE402ABoQFwvEmQAPCAuF4E6ABYYFwvAnQgLBAON4EaEBYIBxvAjQgLBCONwEaEBYIx5uADTegTyvOq48Nrb3GzHEva+8jlueIUtE7pDdNmz2k16O3+WOqsfvPENxN2OxB7eQtaOjB5F8VjBqeEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCw0wJfv36k08vgKPoAAAAASUVORK5CYII="},249:function(t,e,o){t.exports=o.p+"img/device_tablet_dark.42e2107.png"},250:function(t,e,o){t.exports=o.p+"img/device_tablet_select.5be2130.png"},251:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAAB2ElEQVR4Ae3bMU7DUAwA0AIHYIaRHSEQnIUzchYQiAswwgobCwJb9KM/VCxJ61/lfclKWoidPseBoVmtLAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGDfBQ4G/QBHcV4XEdcRpxPP8TWOf4h4jviamGsRh5/Hp3yM+J45Mmfmtv4RSKDPiLnxW77MPVQTRroF5W3nPuIyItdHxF3EW76YsE7i2NuI43WOp9jeRLgdrUHa5ip22pX6Hvtn7QczbDNX5mz5s9YQ63CIs/g9ifyD21Ze+S/txQzbzJU52+prtfdKtiM1oP9vZ+ptZxNmn7Ovtel3d/beSA3Y2YceqZAGFHdDAzSgWKC4vAnQgGKB4vImQAOKBYrLmwANKBYoLm8CNKBYoLi8CdCAYoHi8iZAA4oFisubAA0oFigubwI0oFiguLwJ0IBigeLyJkADigWKy5sADSgWKC5vAjTgTyCfZGkrv1I+9+pz9rXmrrO3+Rb59XQPaOzt9bqdE1/cI0rbYZyWNZuwmIf0RroF9W3zmGqvYZ8AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgb0S+AEPe4TrhlhGRQAAAABJRU5ErkJggg=="},252:function(t,e,o){t.exports=o.p+"img/device_mobile_dark.c1df747.png"},253:function(t,e,o){t.exports=o.p+"img/device_mobile_select.e6f8f24.png"},254:function(t,e,o){var content=o(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("9daa1162",content,!0,{sourceMap:!1})},255:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("e9349284",content,!0,{sourceMap:!1})},256:function(t,e,o){var content=o(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("3787c10f",content,!0,{sourceMap:!1})},258:function(t,e,o){"use strict";o(254)},259:function(t,e,o){var n=o(53)(!1);n.push([t.i,".view-tem[data-v-325e02dc]{margin:24px 28px 28px;color:var(--view-text-color)}.multimedia-section[data-v-325e02dc]{background:#49397f;box-sizing:border-box;width:100%;height:166px;border-radius:8px;margin-bottom:24px;overflow:hidden}.multimedia-section img[data-v-325e02dc]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;vertical-align:bottom}.title-section[data-v-325e02dc]{margin-bottom:16px}.title[data-v-325e02dc]{font-size:20px;font-weight:700;letter-spacing:0;line-height:28px}.subtitle[data-v-325e02dc]{opacity:.6;font-size:12px;letter-spacing:0;line-height:16px}.primary-text[data-v-325e02dc]{height:58px;font-size:24px;font-weight:800;letter-spacing:-.5px;overflow:hidden;margin-bottom:4px}.secondary-text[data-v-325e02dc]{opacity:.6;font-size:16px;letter-spacing:0;line-height:24px}.source-text[data-v-325e02dc]{opacity:.4;font-size:12px;letter-spacing:0;line-height:16px;margin-top:12px}.button-section[data-v-325e02dc]{margin-top:24px;height:48px;font-size:14px;line-height:48px;text-align:center;background-color:var(--button-color);border-radius:8px;display:flex}.button[data-v-325e02dc]{width:100%}.button[data-v-325e02dc],.button_two[data-v-325e02dc]{padding:0 12px;overflow:hidden}.button_two[data-v-325e02dc]{width:50%}.button_divider[data-v-325e02dc]{border-left:1px solid var(--background-color-primary)}",""]),t.exports=n},260:function(t,e,o){"use strict";o(255)},261:function(t,e,o){var n=o(53)(!1);n.push([t.i,".view-tem-container.vertical[data-v-db376072]{display:flex;align-items:center}.view-tem[data-v-db376072]{margin:28px auto;max-width:450px;min-height:200px;color:var(--view-text-color)}.view-tem-content-section[data-v-db376072]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:0 28px}.multimedia-section[data-v-db376072]{box-sizing:border-box;width:calc(35% - 4px);height:100%}.multimedia[data-v-db376072]{float:right;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.multimedia-item[data-v-db376072]{box-sizing:border-box;border-radius:4px;overflow:hidden}.multimedia-item img[data-v-db376072]{width:100%;height:auto;vertical-align:bottom}.content-section[data-v-db376072]{width:calc(65% - 4px);display:flex;flex-direction:column;justify-content:center}.noImg[data-v-db376072]{width:100%}.title-section[data-v-db376072]{margin-bottom:16px}.title[data-v-db376072]{font-size:20px;font-weight:700;letter-spacing:0;line-height:28px}.subtitle[data-v-db376072]{opacity:.6;font-size:12px;letter-spacing:0;line-height:16px}.primary-text[data-v-db376072]{height:58px;font-size:24px;font-weight:800;letter-spacing:-.5px;overflow:hidden;margin-bottom:4px}.secondary-text[data-v-db376072]{opacity:.6;font-size:16px;letter-spacing:0;line-height:24px}.source-text[data-v-db376072]{opacity:.4;font-size:12px;letter-spacing:0;line-height:16px;margin-top:12px}.button-section[data-v-db376072]{width:calc(100% - 56px);max-width:450px;margin:24px auto 0;height:48px;font-size:14px;line-height:48px;text-align:center;background-color:var(--button-color);border-radius:8px;display:flex}.button[data-v-db376072]{width:100%}.button[data-v-db376072],.button_two[data-v-db376072]{padding:0 12px;overflow:hidden}.button_two[data-v-db376072]{width:50%}.button_divider[data-v-db376072]{border-left:1px solid var(--background-color-primary)}",""]),t.exports=n},262:function(t,e,o){"use strict";o(256)},263:function(t,e,o){var n=o(53)(!1);n.push([t.i,".view-tem[data-v-1587a383]{margin:24px;color:var(--view-text-color)}.multimedia-section[data-v-1587a383]{background:#49397f;border-radius:8px;box-sizing:border-box;width:100%;height:104px;margin-bottom:16px;overflow:hidden}.multimedia-section img[data-v-1587a383]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;vertical-align:bottom}.title-section[data-v-1587a383]{margin-bottom:16px}.title[data-v-1587a383]{font-size:20px;font-weight:700;letter-spacing:0;line-height:28px}.subtitle[data-v-1587a383]{opacity:.6;font-size:12px;letter-spacing:0;line-height:16px}.primary-text[data-v-1587a383]{height:58px;font-size:24px;font-weight:800;letter-spacing:-.5px;overflow:hidden;margin-bottom:4px}.secondary-text[data-v-1587a383]{opacity:.6;font-size:16px;letter-spacing:0;line-height:24px}.source-text[data-v-1587a383]{opacity:.4;font-size:12px;letter-spacing:0;line-height:16px;margin-top:12px}.button-section[data-v-1587a383]{margin-top:24px;height:48px;font-size:14px;line-height:48px;text-align:center;background-color:var(--button-color);border-radius:8px;display:flex}.button[data-v-1587a383]{width:100%}.button[data-v-1587a383],.button_two[data-v-1587a383]{padding:0 12px;overflow:hidden}.button_two[data-v-1587a383]{width:50%}.button_divider[data-v-1587a383]{border-left:1px solid var(--background-color-primary)}",""]),t.exports=n},279:function(t,e,o){"use strict";o.r(e);var n=o(238),r=o.n(n),l={props:["parentDevice","parentLayout","titleText","subtitleText","primaryText","secondaryText","sourceText","imgUrl","buttonFirst","buttonSecond","bgColor"],watch:{primaryText:function(){r()(document.getElementsByClassName("primary-text"),{minFontSize:24,maxFontSize:64,multiLine:!0,alignVert:!0})}}},c=(o(258),o(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"display-container",class:{port:"Portrait"===t.parentLayout,land:"Landscape"===t.parentLayout,card:"Card"===t.parentLayout}},[o("div",{staticClass:"view-tem-container",style:{backgroundColor:t.bgColor}},[o("div",{staticClass:"view-tem"},[o("div",{staticClass:"view-tem-content-section"},[o("div",{staticClass:"title-section"},[o("div",{staticClass:"title"},[t._v(t._s(t.titleText))]),t._v(" "),o("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitleText))])]),t._v(" "),""!==t.imgUrl?o("div",{staticClass:"multimedia-section"},[o("img",{attrs:{src:t.imgUrl}})]):t._e(),t._v(" "),o("div",{staticClass:"content-section"},[""!==t.primaryText?o("div",{staticClass:"primary-text",staticStyle:{width:"100%",height:"60px"}},[o("span",{staticClass:"textFitted",staticStyle:{display:"block"}},[t._v("\n              "+t._s(t.primaryText))])]):t._e(),t._v(" "),o("div",{staticClass:"secondary-text"},[t._v(t._s(t.secondaryText))]),t._v(" "),o("div",{staticClass:"source-text"},[t._v(t._s(t.sourceText))])])]),t._v(" "),""!==t.buttonFirst?o("div",{staticClass:"button-section"},[o("div",{class:{button:""!==t.buttonFirst,button_two:""!==t.buttonSecond}},[t._v("\n          "+t._s(t.buttonFirst)+"\n        ")]),t._v(" "),o("div",{class:{button_two:""!==t.buttonSecond,button_divider:""!==t.buttonSecond},style:{borderColor:t.bgColor}},[t._v("\n          "+t._s(t.buttonSecond)+"\n        ")])]):t._e()])])])}),[],!1,null,"325e02dc",null);e.default=component.exports},280:function(t,e,o){"use strict";o.r(e);var n=o(238),r=o.n(n),l={props:["parentDevice","parentLayout","titleText","subtitleText","primaryText","secondaryText","sourceText","imgUrl","buttonFirst","buttonSecond","bgColor"],data:function(){return{height:"",containerHeight:""}},created:function(){this.height="24",this.containerHeight="120"},watch:{primaryText:function(){this.height=this.$refs.view_content_height.scrollHeight,this.containerHeight=this.$refs.view_tem_height.scrollHeight,r()(document.getElementsByClassName("primary-text"),{minFontSize:24,maxFontSize:64,multiLine:!0,alignVert:!0})},secondaryText:function(){this.height=this.$refs.view_content_height.scrollHeight,this.containerHeight=this.$refs.view_tem_height.scrollHeight}}},c=(o(260),o(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"display-container",class:{port:"Portrait"===t.parentLayout,land:"Landscape"===t.parentLayout,card:"Card"===t.parentLayout}},[o("div",{ref:"view_tem_height",staticClass:"view-tem-container",class:{vertical:t.height<t.containerHeight-56},style:{backgroundColor:t.bgColor}},[o("div",{ref:"view_content_height",staticClass:"view-tem"},[o("div",{staticClass:"view-tem-content-section"},[""!==t.imgUrl?o("div",{staticClass:"multimedia-section"},[o("div",{staticClass:"multimedia"},[o("div",{staticClass:"multimedia-item"},[o("img",{attrs:{src:t.imgUrl}})])])]):t._e(),t._v(" "),o("div",{staticClass:"content-section",class:{noImg:""===t.imgUrl}},[o("div",{staticClass:"title-section"},[o("div",{staticClass:"title"},[t._v("\n              "+t._s(t.titleText)+"\n            ")]),t._v(" "),o("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitleText))])]),t._v(" "),""!==t.primaryText?o("div",{staticClass:"primary-text",staticStyle:{width:"100%",height:"60px"}},[o("span",{staticClass:"textFitted",staticStyle:{display:"block"}},[t._v("\n              "+t._s(t.primaryText))])]):t._e(),t._v(" "),o("div",{staticClass:"secondary-text"},[t._v(t._s(t.secondaryText))]),t._v(" "),o("div",{staticClass:"source-text"},[t._v(t._s(t.sourceText))])])]),t._v(" "),""!==t.buttonFirst?o("div",{staticClass:"button-section"},[o("div",{class:{button:""!==t.buttonFirst,button_two:""!==t.buttonSecond}},[t._v("\n          "+t._s(t.buttonFirst)+"\n        ")]),t._v(" "),o("div",{class:{button_two:""!==t.buttonSecond,button_divider:""!==t.buttonSecond},style:{borderColor:t.bgColor}},[t._v("\n          "+t._s(t.buttonSecond)+"\n        ")])]):t._e()])])])}),[],!1,null,"db376072",null);e.default=component.exports},281:function(t,e,o){"use strict";o.r(e);var n=o(238),r=o.n(n),l={props:["parentDevice","parentLayout","titleText","subtitleText","primaryText","secondaryText","sourceText","imgUrl","buttonFirst","buttonSecond","bgColor"],watch:{primaryText:function(){r()(document.getElementsByClassName("primary-text"),{minFontSize:24,maxFontSize:64,multiLine:!0,alignVert:!0})}}},c=(o(262),o(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"display-container",class:{port:"Portrait"===t.parentLayout,land:"Landscape"===t.parentLayout,card:"Card"===t.parentLayout}},[o("div",{staticClass:"view-tem-container",style:{backgroundColor:t.bgColor}},[o("div",{staticClass:"view-tem"},[o("div",{staticClass:"view-tem-content-section"},[o("div",{staticClass:"title-section"},[o("div",{staticClass:"title"},[t._v(t._s(t.titleText))]),t._v(" "),o("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitleText))])]),t._v(" "),""!==t.imgUrl?o("div",{staticClass:"multimedia-section"},[o("img",{attrs:{src:t.imgUrl}})]):t._e(),t._v(" "),o("div",{staticClass:"content-section"},[""!==t.primaryText?o("div",{staticClass:"primary-text",staticStyle:{width:"100%",height:"60px"}},[o("span",{staticClass:"textFitted",staticStyle:{display:"block"}},[t._v("\n              "+t._s(t.primaryText))])]):t._e(),t._v(" "),o("div",{staticClass:"secondary-text"},[t._v(t._s(t.secondaryText))]),t._v(" "),o("div",{staticClass:"source-text"},[t._v(t._s(t.sourceText))])])]),t._v(" "),""!==t.buttonFirst?o("div",{staticClass:"button-section"},[o("div",{class:{button:""!==t.buttonFirst,button_two:""!==t.buttonSecond}},[t._v("\n          "+t._s(t.buttonFirst)+"\n        ")]),t._v(" "),o("div",{class:{button_two:""!==t.buttonSecond,button_divider:""!==t.buttonSecond},style:{borderColor:t.bgColor}},[t._v("\n          "+t._s(t.buttonSecond)+"\n        ")])]):t._e()])])])}),[],!1,null,"1587a383",null);e.default=component.exports},338:function(t,e,o){"use strict";o.r(e);var n=o(238),r=o.n(n),l={created:function(){this.selectedTab=this.deviceTabs[3],this.selectLayoutTab=this.layoutTabs[0],this.color="#ffffff"},data:function(){return{state:this.$store.getters.getTheme,dropdownState:!1,color:"",landViewHeight:"",landViewContentHeight:"",selectedTab:"",deviceTabs:[{idx:1,thumbmail:o(242),thumbmail_dark:o(243),thumbmail_select:o(244)},{idx:2,thumbmail:o(245),thumbmail_dark:o(246),thumbmail_select:o(247)},{idx:3,thumbmail:o(248),thumbmail_dark:o(249),thumbmail_select:o(250)},{idx:4,thumbmail:o(251),thumbmail_dark:o(252),thumbmail_select:o(253)}],selectLayoutTab:"",layoutTabs:["Portrait","Landscape","Card"],titleText:"어벤져스: 엔드게임",subtitleText:"2019년 4월 24일 개봉",primaryText:"",secondaryText:"인피니티 워 이후 절반만 살아남은 지구 마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다! 위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!",sourceText:"Daum검색",imgUrl:"https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",buttonFirst:"자세히보기",buttonSecond:""}},methods:{onClickTheme:function(t){this.state=t,this.$store.dispatch("setTheme",t),this.color=t?"#222222":"#ffffff"},onClickTabs:function(t){this.selectedTab=t},onClickLayoutTabs:function(t){this.selectLayoutTab=t,r()(document.getElementsByClassName("primary-text"),{minFontSize:24,maxFontSize:64,multiLine:!0,alignVert:!0})}},watch:{color:function(){var t=this.color.substring(1),e=parseInt(t,16);.2126*(e>>16&255)+.7152*(e>>8&255)+.0722*(e>>0&255)<127.5?(document.documentElement.style.setProperty("--view-text-color","#ffffff"),document.documentElement.style.setProperty("--button-color","rgba(255, 255, 255, 0.3)")):(document.documentElement.style.setProperty("--view-text-color","#000000"),document.documentElement.style.setProperty("--button-color","rgba(0, 0, 0, 0.05)"))}}},c=o(42),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",class:{dark:t.state}},[n("ViewHeader"),t._v(" "),n("div",{staticClass:"inputSection"},[n("div",{staticClass:"selectView",on:{click:function(e){t.dropdownState=!t.dropdownState}}},[t._v("\n      Basic Type\n      "),n("img",{class:{changed:t.dropdownState},attrs:{src:o(240)}})]),t._v(" "),t.dropdownState?n("ul",{staticClass:"selectDropdown"},[n("nuxt-link",{staticClass:"viewOption",attrs:{to:"/basic"}},[t._v("Basic")]),t._v(" "),n("nuxt-link",{staticClass:"viewOption",attrs:{to:"/custom"}},[t._v("Custom")]),t._v(" "),n("nuxt-link",{staticClass:"viewOption",attrs:{to:"/list"},nativeOn:{click:function(e){return t.$store.dispatch("setListType",!0)}}},[t._v("List Horizontal")]),t._v(" "),n("nuxt-link",{staticClass:"viewOption",attrs:{to:"/list"},nativeOn:{click:function(e){return t.$store.dispatch("setListType",!1)}}},[t._v("List Vertical")]),t._v(" "),n("nuxt-link",{staticClass:"viewOption",attrs:{to:"/carousel"}},[t._v("Carousel")])],1):t._e(),t._v(" "),n("div",{staticClass:"basicTitle sectionContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],attrs:{placeholder:"title"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitleText,expression:"subtitleText"}],attrs:{placeholder:"subtitle"},domProps:{value:t.subtitleText},on:{input:function(e){e.target.composing||(t.subtitleText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"basicContent sectionContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.imgUrl,expression:"imgUrl"}],attrs:{placeholder:"imgURL"},domProps:{value:t.imgUrl},on:{input:function(e){e.target.composing||(t.imgUrl=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.primaryText,expression:"primaryText"}],attrs:{placeholder:"primary text"},domProps:{value:t.primaryText},on:{input:function(e){e.target.composing||(t.primaryText=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.secondaryText,expression:"secondaryText"}],attrs:{placeholder:"secondary text"},domProps:{value:t.secondaryText},on:{input:function(e){e.target.composing||(t.secondaryText=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sourceText,expression:"sourceText"}],attrs:{placeholder:"source text"},domProps:{value:t.sourceText},on:{input:function(e){e.target.composing||(t.sourceText=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"basicButton sectionContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonFirst,expression:"buttonFirst"}],attrs:{placeholder:"action button1"},domProps:{value:t.buttonFirst},on:{input:function(e){e.target.composing||(t.buttonFirst=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonSecond,expression:"buttonSecond"}],attrs:{placeholder:"action button2"},domProps:{value:t.buttonSecond},on:{input:function(e){e.target.composing||(t.buttonSecond=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"sectionContainer"},[n("div",{staticClass:"colorBtn"},[t._v("\n        "+t._s(t.color)+"\n        "),n("v-input-colorpicker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])]),t._v(" "),n("div",{staticClass:"viewContent"},[n("div",{staticClass:"optionSection"},[n("ul",{staticClass:"layoutOption"},t._l(t.layoutTabs,(function(e,o){return n("li",{key:o,class:{select:e===t.selectLayoutTab},on:{click:function(o){return t.onClickLayoutTabs(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("ul",{staticClass:"deviceOption"},t._l(t.deviceTabs,(function(e,o){return n("li",{key:o,class:{select:e===t.selectedTab},on:{click:function(o){return t.onClickTabs(e)}}},[e===t.selectedTab?n("img",{attrs:{src:t.selectedTab.thumbmail_select}}):!0===t.state?n("img",{attrs:{src:e.thumbmail_dark}}):!1===t.state?n("img",{attrs:{src:e.thumbmail}}):t._e()])})),0)]),t._v(" "),n("div",{staticClass:"menuTheme",on:{click:function(e){return t.onClickTheme(!t.state)}}},[n("span",{staticClass:"theme_text"},[n("span",{staticClass:"theme_text__mask"},[n("span",{class:{change_theme:!0===t.state}},[t._v("Dark")]),t._v(" "),n("span",{class:{change_theme:!0===t.state}},[t._v("Light")])]),t._v("\n        Mode\n      ")]),t._v(" "),n("div",{staticClass:"theme_icon",class:{change_theme:!0===t.state}},[t._m(0)])]),t._v(" "),n("div",{staticClass:"contentSection"},[n("div",{staticClass:"deviceFrame",class:{kiosk:1===t.selectedTab.idx,tv:2===t.selectedTab.idx,tablet:3===t.selectedTab.idx,mobile:4===t.selectedTab.idx}},["Portrait"===t.selectLayoutTab?n("ViewTemplateBasic",{attrs:{parentDevice:t.selectedTab,parentLayout:t.selectLayoutTab,titleText:t.titleText,subtitleText:t.subtitleText,primaryText:t.primaryText,secondaryText:t.secondaryText,sourceText:t.sourceText,imgUrl:t.imgUrl,buttonFirst:t.buttonFirst,buttonSecond:t.buttonSecond,bgColor:t.color}}):"Landscape"===t.selectLayoutTab?n("view-template-basic-land",{attrs:{parentDevice:t.selectedTab,parentLayout:t.selectLayoutTab,titleText:t.titleText,subtitleText:t.subtitleText,primaryText:t.primaryText,secondaryText:t.secondaryText,sourceText:t.sourceText,imgUrl:t.imgUrl,buttonFirst:t.buttonFirst,buttonSecond:t.buttonSecond,bgColor:t.color}}):t._e(),t._v(" "),"Card"===t.selectLayoutTab?n("view-template-basic-card",{attrs:{parentDevice:t.selectedTab,parentLayout:t.selectLayoutTab,titleText:t.titleText,subtitleText:t.subtitleText,primaryText:t.primaryText,secondaryText:t.secondaryText,sourceText:t.sourceText,imgUrl:t.imgUrl,buttonFirst:t.buttonFirst,buttonSecond:t.buttonSecond,bgColor:t.color}}):t._e()],1)])])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"theme_sunandmoon"},[o("span",{staticClass:"theme_icon_sun"}),t._v(" "),o("span",{staticClass:"theme_icon_moon"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ViewHeader:o(239).default,ViewTemplateBasic:o(279).default,ViewTemplateBasicLand:o(280).default,ViewTemplateBasicCard:o(281).default})}}]);
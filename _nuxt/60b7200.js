(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,r){"use strict";r.r(e);r(23);var n=r(6),o=(r(64),r(13),r(36),r(49),r(146),"http://api.timezonedb.com"),l="26H3ZTU1RPAB",c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data,r,n,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=l.length>1&&void 0!==l[1]?l[1]:{},r=new URLSearchParams(data),n=new URL("".concat(o,"/").concat("v2.1","/").concat(e,"?").concat(r)),t.next=5,fetch(n);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"Asia/Manila",r=n.length>1&&void 0!==n[1]?n[1]:"Australia/Melbourne",t.next=4,c("convert-time-zone",{key:l,format:"json",from:e,to:r}).then((function(t){return t.json()})).catch((function(t){return new Error("No Api response ".concat(t))}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d={props:{name:{type:String,default:""}},data:function(){return{from:null,to:null,result:{}}},computed:{fromStr:function(){return this.from?this.from.toDateString():""},toStr:function(){return this.from?this.to.toDateString():""}},beforeMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:r=e.sent,n=new Date(1e3*r.fromTimestamp),o=new Date(1e3*r.toTimestamp),t.from=n,t.to=o,t.result=r;case 8:case"end":return e.stop()}}),e)})))()},methods:{formatAMPM:function(t){if(!t)return"";var e=t.getHours(),r=t.getMinutes(),n=e>=12?"pm":"am";return(e=(e%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+n},again:function(){window.location.reload()}}},f=r(33),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"},[r("header",{staticClass:"flex items-center justify-between"},[r("h2",{staticClass:"text-2xl leading-6 font-medium text-black"},[t._v("\n      Hi, "+t._s(t.name)+"\n    ")]),t._v(" "),r("button",{staticClass:"hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2",on:{click:t.again}},[r("svg",{staticClass:"group-hover:text-light-blue-600 text-light-blue-500 mr-2",attrs:{width:"12",height:"20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"}})]),t._v("\n      Try Again\n    ")])]),t._v(" "),r("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4"},[r("li",[r("a",{staticClass:"hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200",attrs:{href:"#"}},[r("dl",{staticClass:"grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"},[r("div",[r("dd",{staticClass:"leading-6 text-4xl text-black"},[t._v("\n              "+t._s(t.formatAMPM(t.from))+"\n            ")])]),t._v(" "),r("div",{staticClass:"mt-5"},[r("dd",{staticClass:"group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"},[r("p",[t._v("\n                "+t._s(t.fromStr)+"\n              ")]),t._v(" "),r("span",[t._v("\n                Time in the Philippines\n              ")])])])])])]),t._v(" "),r("li",[r("a",{staticClass:"hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200",attrs:{href:"#"}},[r("dl",{staticClass:"grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"},[r("div",[r("dd",{staticClass:"leading-6 text-4xl text-black"},[t._v("\n              "+t._s(t.formatAMPM(t.to))+"\n            ")])]),t._v(" "),r("div",{staticClass:"mt-5"},[r("dd",{staticClass:"group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"},[r("p",[t._v("\n                "+t._s(t.toStr)+"\n              ")]),t._v(" "),r("span",[t._v("\n                Time in the Melbourne, Australia\n              ")])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{form:{name:""}}},methods:{onProceed:function(){this.$emit("proceed",this.form)}}},o=r(33),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto"},[r("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[t._m(0),t._v(" "),r("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),r("div",{staticClass:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[r("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[r("div",{staticClass:"sm:flex sm:items-start"},[r("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[r("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),t._v(" "),r("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900",attrs:{id:"modal-headline"}},[t._v("\n              Hi, I need your name.\n            ")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onProceed(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md my-2 py-2 pl-2",attrs:{type:"text","aria-label":"Name",placeholder:"Your name here."},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[r("button",{staticClass:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:t.onProceed}},[t._v("\n          Proceed\n        ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"}},[e("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-2"},[e("p",{staticClass:"text-sm text-gray-500"},[this._v("\n                Hi, before we proceed i just need your name, kindly fill the field above. Thank you\n              ")])])}],!1,null,null,null);e.default=component.exports},200:function(t,e,r){"use strict";r.r(e);r(48);var n=r(199),o=r(198),l={components:{Prompt:n.default,Result:o.default},data:function(){return{showPrompt:!0,name:""}},methods:{onProceed:function(t){var e=t.name;this.name=e,this.showPrompt=!1}}},c=r(33),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("prompt",{directives:[{name:"show",rawName:"v-show",value:this.showPrompt,expression:"showPrompt"}],on:{proceed:this.onProceed}}),this._v(" "),e("result",{attrs:{name:this.name}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Prompt:r(199).default,Result:r(198).default})}}]);
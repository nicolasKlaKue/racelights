(function(t){function e(e){for(var i,a,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)a=c[f],s[a]&&d.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"031c":function(t,e,n){"use strict";var i=n("6f5b"),s=n.n(i);s.a},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=n("2f62"),r=(n("4989"),n("ab8b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullscreen d-flex justify-content-center align-items-center",attrs:{id:"app"}},[t.ack?n("div",[n("Racelight")],1):n("div",{},[n("div",{},[n("h1",{staticClass:"title"},[t._v("Julius joviale Startübungen")]),n("div",{staticClass:"card"},[n("HowManyLights")],1),t.getNumberOfLights>0?n("div",{staticClass:"card"},[n("WhatTimes")],1):t._e()])])])}),a=[],c=n("cebc"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"card-title"},[t._v("Wie viele Lampen?")]),n("div",{staticClass:"form-inline card-body justify-content-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.lightscount,expression:"lightscount"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.lightscount},on:{input:function(e){e.target.composing||(t.lightscount=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-primary",on:{click:t.save}},[t._v("Save")])])])},l=[],u={name:"HowManyLights",data:function(){return{lightscount:0}},methods:{save:function(){this.$store.commit("setNumberOfLights",this.lightscount)}},computed:Object(c["a"])({},Object(s["c"])(["count"]),{count:function(){return this.$store.getters.getNumberOfLights}})},f=u,d=n("2877"),g=Object(d["a"])(f,o,l,!1,null,null,null),h=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h3",[t._v("Verzögerung für jede Lampe")]),t._l(t.lights,function(e,i){return n("div",{key:e.key,staticClass:"form-inline text-center card-body card-text justify-content-center"},[n("label",{attrs:{for:"val+light.id"}},[t._v("Lampe "+t._s(i+1)+".")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"light.time"}],staticClass:"form-control ",attrs:{type:"",name:"light.id",id:"val+light.id"},domProps:{value:e.time},on:{input:function(n){n.target.composing||t.$set(e,"time",n.target.value)}}})])}),n("button",{staticClass:"btn btn-success btn-lg btn-block",on:{click:t.ack}},[t._v("Start")])],2)},v=[],p={name:"WhatTimes",methods:{ack:function(){this.$store.commit("acknowledge")}},computed:Object(c["a"])({},Object(s["c"])(["lights"]))},b=p,y=Object(d["a"])(b,m,v,!1,null,null,null),_=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" "},["prestart"===t.state?n("div",[n("div",{},[n("button",{staticClass:"btn btn-outline-danger btn-lg",on:{click:t.start}},[t._v("Start")])])]):t._e(),"running"===t.state?n("div",[n("div",{staticClass:"d-flex flex-row dyn-col"},t._l(t.lights,function(e,i){return n("div",{key:e.key,staticClass:"d-flex flex-column "},[n("div",{staticClass:"light red glass",class:{red:t.counter<=i,green:t.counter>i}}),n("div",{staticClass:"light red glass",class:{red:t.counter<=i,green:t.counter>i}})])}),0)]):t._e(),"done"===t.state?n("div",[n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-outline-danger btn-lg",on:{click:t.restart}},[t._v("Restart")]),n("button",{staticClass:"btn btn-outline-warning btn-lg",on:{click:t.reset}},[t._v("Reset")])])]):t._e()])},j=[],k=(n("c5f6"),n("5118")),w={name:"Racelight",data:function(){return{state:"prestart",counter:0,time:0}},methods:{reset:function(){this.$store.commit("reset")},restart:function(){this.state="prestart",this.counter=0,this.time=0},start:function(){var t=this;this.state="running";for(var e=0;e<this.lights.length;e++)this.time+=Number(this.lights[e].time),Object(k["setTimeout"])(function(){t.counter++,t.counter==t.lights.length&&(t.state="done")},1e3*this.time)}},computed:Object(c["a"])({},Object(s["c"])(["lights"]))},x=w,C=(n("031c"),Object(d["a"])(x,O,j,!1,null,null,null)),L=C.exports,S={name:"app",components:{HowManyLights:h,WhatTimes:_,Racelight:L},computed:Object(c["a"])({},Object(s["c"])(["lights","ack"]),Object(s["b"])(["getNumberOfLights"]))},$=S,N=(n("034f"),Object(d["a"])($,r,a,!1,null,null,null)),P=N.exports;i["a"].config.productionTip=!1,i["a"].use(s["a"]);var M=new s["a"].Store({state:{ack:!1,lights:[]},mutations:{setNumberOfLights:function(t,e){t.lights=[];for(var n=0;n<e;n++){var i={};i.id=n,i.time=0,t.lights.push(i)}},acknowledge:function(t){t.ack=!0},reset:function(t){t.ack=!1}},getters:{getNumberOfLights:function(t){return t.lights.length}}});new i["a"]({render:function(t){return t(P)},store:M}).$mount("#app")},"64a9":function(t,e,n){},"6f5b":function(t,e,n){}});
//# sourceMappingURL=app.4b046aac.js.map
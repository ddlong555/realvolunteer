(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b0a80a9"],{"159b":function(t,a,e){var n=e("da84"),o=e("fdbc"),c=e("17c2"),r=e("9112");for(var i in o){var s=n[i],l=s&&s.prototype;if(l&&l.forEach!==c)try{r(l,"forEach",c)}catch(u){l.forEach=c}}},"17c2":function(t,a,e){"use strict";var n=e("b727").forEach,o=e("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"32fa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"pages"},[n("div",{directives:[{name:"show",rawName:"v-show",value:""==t.videoSrc,expression:"videoSrc == ''"}],staticClass:"vadioBox"},[n("van-uploader",{ref:"upload",attrs:{"after-read":t.afterRead,uploadIcon:e("b9b4"),"upload-text":"上传视频",accept:"video/*"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.videoSrc,expression:"videoSrc != ''"}],staticClass:"vadioBox"},[n("div",{staticClass:"tag",on:{click:t.checkVadio}},[n("van-tag",{attrs:{type:"primary"}},[t._v("修改视频")])],1),n("video",{staticClass:"video",attrs:{src:t.videoSrc,controls:"controls"}})]),n("van-field",{attrs:{rows:"2",autosize:"",label:"标题*",type:"textarea",maxlength:"80",placeholder:"请填写标题","show-word-limit":""},model:{value:t.titles,callback:function(a){t.titles=a},expression:"titles"}}),n("van-cell",{attrs:{title:"标签*","is-link":"",value:t.tags},on:{click:t.selTag}}),n("van-popup",{attrs:{position:"bottom",round:""},model:{value:t.tagShow,callback:function(a){t.tagShow=a},expression:"tagShow"}},[n("div",{staticClass:"tagBtn"},[n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.saveTag}},[t._v("确 定")])],1),n("div",{staticClass:"bottomTag"},t._l(t.tagData,(function(a,e){return n("van-tag",{key:e,attrs:{type:"primary",plain:!a.check,color:a.check?"#1989fa":"#666"},on:{click:function(t){a.check=!a.check}}},[t._v(t._s(a.name))])})),1)]),n("van-field",{attrs:{rows:"6",autosize:"",label:"发表动态",type:"textarea",maxlength:"233",placeholder:"请填写动态内容","show-word-limit":""},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}}),n("div",{staticClass:"sendBtn"},[n("van-button",{attrs:{type:"info",round:""},on:{click:t.send}},[t._v("发 布")]),n("van-button",{attrs:{type:"info",round:"",plain:""}},[t._v("存草稿")])],1)],1)},o=[],c=(e("159b"),e("b0c0"),{name:"score",data:function(){return{videoSrc:"",titles:"",content:"",tags:"",tagData:[],tagShow:!1}},mounted:function(){document.title="发布";for(var t=0;t<20;t++)this.tagData.push({name:"标签"+t,check:!1})},watch:{tagShow:function(){var t=this;this.tags="",this.tagData.forEach((function(a){a.check&&(t.tags=t.tags+a.name+",")}))}},methods:{afterRead:function(t){console.log(t),this.videoSrc=t.content},checkVadio:function(){this.$refs.upload.chooseFile()},selTag:function(){this.tagShow=!0},saveTag:function(){this.tagShow=!1},send:function(){}}}),r=c,i=(e("cc80"),e("2877")),s=Object(i["a"])(r,n,o,!1,null,"4da59908",null);a["default"]=s.exports},"47ed":function(t,a,e){},"65f0":function(t,a,e){var n=e("861d"),o=e("e8b5"),c=e("b622"),r=c("species");t.exports=function(t,a){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?n(e)&&(e=e[r],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},a640:function(t,a,e){"use strict";var n=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&n((function(){e.call(null,a||function(){throw 1},1)}))}},b0c0:function(t,a,e){var n=e("83ab"),o=e("9bf2").f,c=Function.prototype,r=c.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in c)&&o(c,s,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},b727:function(t,a,e){var n=e("0366"),o=e("44ad"),c=e("7b0b"),r=e("50c4"),i=e("65f0"),s=[].push,l=function(t){var a=1==t,e=2==t,l=3==t,u=4==t,f=6==t,d=7==t,v=5==t||f;return function(h,p,g,b){for(var m,w,y=c(h),k=o(y),x=n(p,g,3),S=r(k.length),E=0,_=b||i,C=a?_(h,S):e||d?_(h,0):void 0;S>E;E++)if((v||E in k)&&(m=k[E],w=x(m,E,y),t))if(a)C[E]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:s.call(C,m)}else switch(t){case 4:return!1;case 7:s.call(C,m)}return f?-1:l||u?u:C}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},b9b4:function(t,a,e){t.exports=e.p+"img/vadio.013c58bd.svg"},cc80:function(t,a,e){"use strict";e("47ed")},e8b5:function(t,a,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-2b0a80a9.5e9b5d11.js.map
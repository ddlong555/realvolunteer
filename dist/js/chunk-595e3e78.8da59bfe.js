(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595e3e78"],{2316:function(a,t,s){a.exports=s.p+"img/xingzuo.d36aad75.svg"},"61b9":function(a,t,s){},"67bc":function(a,t,s){a.exports=s.p+"img/return.2b9474d9.svg"},"6ab2":function(a,t,s){a.exports=s.p+"img/share.2142e27f.svg"},81195:function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"top3"},[i("div",{staticClass:"top"},[i("div",{staticClass:"top3-img1"},[i("img",{attrs:{src:s("67bc"),alt:""},on:{click:a.back}})]),i("div",{staticClass:"top3-img2"},[i("img",{attrs:{src:s("6ab2"),alt:""},on:{click:function(t){a.dialogVisible=!0}}}),i("el-dialog",{attrs:{title:"分享至",visible:a.dialogVisible},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("el-table",{attrs:{data:a.app}},[i("el-table-column",{attrs:{property:"way",label:"方式"}})],1)],1)],1)]),i("div",{staticClass:"circle"},[i("img",{attrs:{src:a.avatar,alt:""}})]),i("div",{staticClass:"nickname"},[i("p",{domProps:{textContent:a._s(a.nickname)}})]),i("div",{staticClass:"below"},[i("ul",{staticClass:"sexual"},[i("li",[a._v(a._s(a.sexual))])]),i("ul",{staticClass:"age"},[i("li",[a._v(a._s(a.month)+"月"+a._s(a.day)+"日（公历）")])]),i("ul",{staticClass:"plain",style:{"list-style":"url("+a.plainLink+")"}},[i("li",[a._v(a._s(a.plain)+" ")])]),i("ul",{staticClass:"blood"},[i("li",[a._v(a._s(a.blood)+"型 ")])]),i("ul",{staticClass:"place"},[i("li",[a._v(a._s(a.place))])]),i("ul",{staticClass:"major"},[i("li",[a._v(a._s(a.major))])]),i("ul",{staticClass:"declaration"},[i("li",[a._v(a._s(a.declaration))])]),i("ul",{staticClass:"point"},[i("li",[a._v("积分："+a._s(a.point))])])])])},l=[],e=(s("5319"),s("ac1f"),{name:"personalInformation",data:function(){return{app:[{way:"微信"},{way:"微信朋友圈"},{way:"qq"},{way:"qq空间"},{way:"微博"}],dialogVisible:!1,nickname:"student123",declaration:"快乐每一天!今天也要成为比昨天更好的人！！不知道该说什么了就先随便乱打几个字凑一下版面吧",sexual:"男",month:12,day:7,place:"中国-上海",plain:"射手座",major:"软件工程",blood:"B",avatar:s("918e"),plainLink:s("2316"),point:3,msg:{}}},created:function(){var a=this;this.$axios.get("/api/volunteer/userInfo/getUserInfoByUserId",{params:{userId:1}}).then((function(t){null!=t&&(a.msg=t),console.log(a.msg)})).catch((function(a){console.log(a)}))},methods:{back:function(){this.$router.replace("/firstpage")}}}),n=e,o=(s("b7b0"),s("2877")),c=Object(o["a"])(n,i,l,!1,null,"57f17e2a",null);t["default"]=c.exports},"918e":function(a,t,s){a.exports=s.p+"img/avatar.3dafedd0.jpg"},b7b0:function(a,t,s){"use strict";s("61b9")}}]);
//# sourceMappingURL=chunk-595e3e78.8da59bfe.js.map
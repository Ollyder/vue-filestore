(function(e){function t(t){for(var a,o,l=t[0],i=t[1],u=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"1e3b":function(e,t,r){"use strict";var a=r("b3f8"),n=r.n(a);n.a},"245a":function(e,t,r){const a=r("96eb");a.mock("/login",/post/i,(function(e){let t=JSON.parse(e.body);return"admin"==t.username&&"123"==t.password?{status:!0}:{status:!1,reason:"密码错误"}}))},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={},l=o,i=(r("034f"),r("2877")),u=Object(i["a"])(l,n,s,!1,null,null,null),c=u.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"min-percent"},[r("el-header",{staticClass:"header"},[r("el-row",{staticStyle:{height:"100%",display:"flex","align-items":"center"}},[r("el-col",{attrs:{span:18,offset:3}},[r("i",{staticClass:"head_title"},[e._v("Vue And Go File Website")])])],1)],1),r("el-main",{staticClass:"main"},[r("el-row",[r("el-col",{attrs:{span:18,offset:3}},[r("el-card",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.paths,(function(t,a){return r("el-breadcrumb-item",{attrs:{to:t.completeUrl}},[e._v(e._s(t.path)+" ")])})),1)],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:1}},[r("UploadButton")],1),r("el-col",{attrs:{span:1}},[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:e.hidden}},[r("i",{staticClass:"far",class:e.eyeClass})])],1)],1)],1),r("Directory",{staticStyle:{"margin-bottom":"50px"}}),r("File")],1)],1)],1),r("iframe",{attrs:{src:"https://zhanyuzhang.github.io/lovely-cat/cat.html",border:"0",id:"catIframe"}}),r("el-footer",{staticClass:"footer"},[r("el-row",{staticStyle:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[r("i",{staticStyle:{color:"gray","font-size":"smaller"}},[e._v("Vue And Go File Website.And Others Information hahaha")])])],1)],1)},m=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{attrs:{shadow:"always"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.files}},[r("el-table-column",{attrs:{prop:"date",label:"Name",width:"180"}}),r("el-table-column",{attrs:{prop:"name",label:"Size",width:"180"}}),r("el-table-column",{attrs:{prop:"address",label:"ModTime"}}),r("el-table-column",{attrs:{label:"Actions"}})],1)],1)},h=[],b={name:"directory",props:["files"],data(){}},g=b,v=Object(i["a"])(g,p,h,!1,null,null,null),y=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{attrs:{shadow:"always"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("卡片名称")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),r("mavon-editor",{attrs:{value:e.markdown,editable:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"}})],1)},$=[],_={name:"file",components:{},data(){return{fileName:"fileName",fileSize:"125 KB",markdown:"```javascript\nexports default {\n    methods: {\n        // 绑定@imgAdd event\n        $imgAdd(pos, $file){\n            // 第一步.将图片上传到服务器.\n           var formdata = new FormData();\n           formdata.append('image', $file);\n           axios({\n               url: 'server url',\n               method: 'post',\n               data: formdata,\n               headers: { 'Content-Type': 'multipart/form-data' },\n           }).then((url) => {\n               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)\n               /**\n               * $vm 指为mavonEditor实例，可以通过如下两种方式获取\n               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`\n               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`\n               */\n               $vm.$img2Url(pos, url);\n           })\n        }\n    }\n}\n```"}}},x=_,j=Object(i["a"])(x,w,$,!1,null,null,null),O=j.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{attrs:{action:"这里写地址",multiple:"","show-file-list":!1,"on-success":e.success,"on-error":e.error,"on-progress":e.progress}},[r("el-button",{attrs:{size:"mini",type:"danger"}},[r("i",{staticClass:"el-icon-upload"})])],1)},F=[],C={name:"UploadButton",data(){return{data:{},success:function(e,t,r){},error:function(e,t,r){},progress:function(e,t,r){}}},methods:{}},k=C,E=Object(i["a"])(k,S,F,!1,null,"1fde075c",null),P=E.exports,z={name:"home",components:{Directory:y,File:O,UploadButton:P},data(){return{hiddenFile:!0,directory:{},fileName:"",fileContent:""}},computed:{paths(){let e=[],t="";for(let r of this.$store.state.urls.split("/"))t+="/"+r,e.push({path:r,completeUrl:t});return e},eyeClass(){return{"fa-mavon-eye":this.hiddenFile,"fa-mavon-eye-slash":!this.hiddenFile}}},methods:{hidden(){this.hiddenFile=!this.hiddenFile}}},U=z,A=(r("1e3b"),Object(i["a"])(U,f,m,!1,null,null,null)),M=A.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"bg"},[r("el-card",{staticClass:"login"},[r("el-form",{ref:"elform",attrs:{model:e.user,rules:e.rules}},[r("el-form-item",{attrs:{label:"Username",prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("elform")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("elform")}}},[e._v("重置")])],1)],1)],1)],1)},T=[],B={name:"login",data(){return{user:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},methods:{submitForm(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$ajax.post("/login",{username:t.user.username,password:t.user.password}).then((function(e){e.data.status?(t.$message.success("登录成功"),t.$store.commit("loginSucessful"),t.$router.push("home")):t.$message.error(`${e.data.reason}`)})).catch((function(e){t.$message.warning("内部错误"+e)}))})},resetForm(e){this.$refs[e].resetFields()}}},q=B,D=(r("d6db"),Object(i["a"])(q,N,T,!1,null,null,null)),J=D.exports,G=r("323e"),I=r.n(G),V=r("2f62");a["default"].use(V["a"]);var W=new V["a"].Store({state:{urls:"home/dir1/dir2",logined:!1},mutations:{loginSucessful(){this.state.logined=!0}},actions:{},modules:{}});a["default"].use(d["a"]);const K=[{path:"/login",name:"login",component:J},{path:"/",name:"home",component:M,alias:"/home"}],H=new d["a"]({routes:K});H.beforeEach((e,t,r)=>{I.a.start(),"login"===e.name||"register"===e.name?r():W.state.logined?r():(r("login"),I.a.done())}),H.afterEach((e,t,r)=>{I.a.done()});var L=H,Q=r("5c96"),R=r.n(Q),X=(r("0fae"),r("b2d8")),Y=r.n(X),Z=(r("64e1"),r("bc3a")),ee=r.n(Z),te=(r("245a"),r("a5d8"),r("ecee")),re=r("c074"),ae=r("b702"),ne=r("f2d1"),se=r("ad3d");te["c"].add(re["a"],ae["a"],ne["a"]),I.a.inc(.2),I.a.configure({easing:"ease",speed:500,showSpinner:!1}),a["default"].prototype.$ajax=ee.a,a["default"].component("font-awesome-icon",se["a"]),a["default"].component("font-awesome-layers",se["b"]),a["default"].component("font-awesome-layers-text",se["c"]),ee.a.interceptors.request.use((function(e){return I.a.start(),e}),(function(e){return Promise.reject(e)})),ee.a.interceptors.response.use((function(e){return I.a.done(),e}),(function(e){return I.a.done(),Promise.reject(e)})),a["default"].use(Y.a),a["default"].config.productionTip=!1,a["default"].use(R.a),new a["default"]({router:L,store:W,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){},b3f8:function(e,t,r){},d6db:function(e,t,r){"use strict";var a=r("e67a"),n=r.n(a);n.a},e67a:function(e,t,r){}});
//# sourceMappingURL=app.eda3ff0d.js.map
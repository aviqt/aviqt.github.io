(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(e,t,o){e.exports=o.p+"img/login-bg.4c6b628.png"},389:function(e,t,o){e.exports=o.p+"img/logo.5e9952d.png"},449:function(e,t,o){var content=o(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(22).default)("4e06bb36",content,!0,{sourceMap:!1})},553:function(e,t,o){"use strict";o(449)},554:function(e,t,o){var n=o(21),c=o(157),r=o(381),l=n(!1),d=c(r);l.push([e.i,"body{background:url("+d+") no-repeat;background-size:cover}",""]),e.exports=l},580:function(e,t,o){"use strict";o.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("img",{attrs:{src:o(389)}}),e._v("实验室管理系统后台")])}],c=o(228),r={components:{},data:function(){return{roleList:[{name:"教师",type:"3",path:"/admin/teacher"},{name:"管理员",type:"1",path:"/admin/staff/class"}],selectedRoleIndex:0,form:{username:"",password:""},checked:!1}},mounted:function(){this.form.username=c.a.cookie.get("username"),this.form.password=c.a.cookie.get("password"),c.a.cookie.get("password")&&(this.checked=!0),this.selectedRoleIndex="0"===this.$route.params.roleIndex?0:1,console.log(this.$route.params)},methods:{login:function(){var e=this;console.log(),c.a.cookie.delete("username"),c.a.cookie.delete("password"),this.checked&&(c.a.cookie.set("username",this.form.username,7),c.a.cookie.set("password",this.form.password,7)),this.$store.dispatch("admin/LOGIN",{data:{loginName:this.form.username,password:this.form.password,logintType:this.roleList[this.selectedRoleIndex].type},cb:function(t){if(console.log(t),t.succ){e.$message.success("登录成功");var o=e.roleList[e.selectedRoleIndex].path;window.location.href=o}}})}},head:function(){return{title:"后台登录-实验室管理系统"}}},l=(o(553),o(13)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"login-box"},[e._m(0),e._v(" "),o("div",{staticClass:"role-title"},[e._v(e._s(e.roleList[e.selectedRoleIndex].name)+"登录")]),e._v(" "),o("div",{staticClass:"form"},[o("div",{staticClass:"form-item"},[o("i",{staticClass:"iconfont icon-user"}),e._v(" "),o("el-input",{attrs:{placeholder:"请输入账号",maxlength:"20"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),o("div",{staticClass:"form-item"},[o("i",{staticClass:"iconfont icon-mima"}),e._v(" "),o("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),o("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住用户名和密码")]),e._v(" "),o("div",{staticClass:"button",on:{click:function(t){return e.login()}}},[e._v("登 录")])],1)])])}),n,!1,null,null,null);t.default=component.exports}}]);
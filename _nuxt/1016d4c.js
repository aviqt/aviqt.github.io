(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{516:function(t,n,e){var content=e(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("0f37d765",content,!0,{sourceMap:!1})},552:function(t,n,e){"use strict";e(516)},553:function(t,n,e){var o=e(19)(!1);o.push([t.i,".md-edit-view[data-v-fdfd3238]{bottom:0;right:0;top:0;left:0;overflow:auto;position:fixed;background:#fff}.md-edit-view>div[data-v-fdfd3238]{top:0;bottom:0;position:absolute;padding:20px;overflow:auto;width:49%}",""]),t.exports=o},624:function(t,n,e){"use strict";e.r(n);e(57);var o={data:function(){return{content:'\n<div class="workSheet">\n  <table>\n    <tr>\n      <td colspan="10" align="center" class="gray">\n        <h3>\n          学员作业工单 单元编号：<br>\n          L03点燃式发动机系统、组件和工作原理\n        </h3>\n      </td>\n    </tr>\n    <tr>\n      <td colspan="10" align="center">\n        <h4>\n          汽油发动机气缸盖的拆卸和装复\n        </h4>\n      </td>\n    </tr>\n    <tr>\n      <td colspan="6">\n        学员姓名（拼音）：<span contenteditable="true" class="dom-input"></span>\n      </td>\n      <td  colspan="4">\n        工作日期：<span contenteditable="true" class="dom-input"></span>\n      </td>\n    </tr>\n    <tr>\n      <td colspan="10">\n          评估单元包括：单元 L103 - AC 4.1\n      </td>\n    </tr>\n    <tr>\n      <td colspan="10" class="gray">\n          车辆细节\n      </td>\n    </tr>\n    <tr>\n      <td colspan="2" class="gray">车辆注册号牌：</td>\n      <td colspan="3"  contenteditable="true" class="dom-input"></td>\n      <td colspan="2" class="gray">车辆识别号：</td>\n      <td colspan="3"  contenteditable="true" class="dom-input"></td>\n    </tr>\n    <tr>\n      <td colspan="2" class="gray">品牌制造商：</td>\n      <td colspan="3"  contenteditable="true" class="dom-input"></td>\n      <td colspan="2" class="gray">车型：</td>\n      <td colspan="3"  contenteditable="true" class="dom-input"></td>\n    </tr>\n    <tr>\n      <td colspan="10">\n          任务要求：<br>\n          1、拆卸并装复一个基本的点燃式发动机气缸盖至一静态的发动机上（需包含配气正时的知识点）\n      </td>\n    </tr>\n    <tr>\n      <td colspan="10">\n          详细写出实施的工作：\n          <div contenteditable="true" class="dom-input" style="min-height: 100px;"></div>\n      </td>\n    </tr>\n    <tr>\n      <td colspan="4">\n          个人防护设备：\n          <div contenteditable="true" class="dom-input" style="min-height: 50px;"></div>\n      </td>\n      <td  colspan="6">\n          专用工具使用：\n          <div contenteditable="true" class="dom-input" style="min-height: 50px;"></div>\n      </td>\n    </tr>\n    <tr>\n      <td colspan="4" class="gray">\n          技术数据明细：\n      </td>\n      <td  colspan="6"  class="gray">\n          发现其他问题：\n      </td>\n    </tr>\n    <tr>\n      <td colspan="2" class="gray">\n          缸盖螺栓的拧紧顺序：\n      </td>\n      <td colspan="2" contenteditable="true" class="dom-input"></td>\n      <td  colspan="6" rowspan="3"  contenteditable="true" class="dom-input"></td>\n    </tr>\n    <tr>\n      <td colspan="2" class="gray">\n          缸盖螺栓的拧紧力矩：\n      </td>\n      <td colspan="2" contenteditable="true" class="dom-input"></td>\n    </tr>\n    <tr>\n      <td colspan="2" class="gray">\n          机油的型号和容量：\n      </td>\n      <td colspan="2" contenteditable="true" class="dom-input"></td>\n    </tr>\n    <tr>\n      <td colspan="2" rowspan="2" class="gray">\n          兹证明，本数据采集单上所实施过的作业符合标准要求：\n      </td>\n      <td colspan="3" class="gray" align="center">\n          考评员姓名（拼音）：\n      </td>\n      <td colspan="3" class="gray" align="center">\n         考评员PIN：\n      </td>\n      <td colspan="2" class="gray" align="center">\n          日期：\n      </td>\n    </tr>\n    <tr>\n      <td colspan="3" contenteditable="true" class="dom-input"></td>\n      <td colspan="3" contenteditable="true" class="dom-input"></td>\n      <td colspan="2" contenteditable="true" class="dom-input"></td>\n    </tr>\n  </table>\n</div>\n<style>\n.workSheet{font-size: 16px;}\n.workSheet table {background:black;border-spacing: 1px;width: 100%;table-layout:fixed ;}\n.workSheet table td{background:white;padding: 10px;}\n.workSheet table td.gray{background:#ddd;}\n.workSheet .dom-input{color: blue;}\n.workSheet *{outline: none;}\n</style>\n\n          ',placeholder:"hello\n world !\n"}},mounted:function(){console.log(this.content),this.handleInput()},computed:{contentView:function(){return this.content.replace(/contenteditable/g,"contenteditableX")}},methods:{viewContent:function(){console.log(this.$refs.htmlContent.innerHTML)},handleInput:function(){var t=this.$refs.MdTextarea,n=this.$refs.MdTextareaBox,e=n.scrollTop;console.log(e),t.style.height="auto",t.style.height=t.scrollHeight+100+"px",n.scrollTop=e}}},d=(e(552),e(10)),l={components:{ComTest:Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"md-edit-view"},[e("div",{ref:"MdTextareaBox",staticStyle:{left:"0",width:"40%"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"MdTextarea",staticStyle:{height:"100%",width:"100%",padding:"10px",resize:"none"},attrs:{placeholder:t.placeholder},domProps:{value:t.content},on:{input:[function(n){n.target.composing||(t.content=n.target.value)},t.handleInput]}}),t._v(" "),e("el-button",{on:{click:t.viewContent}},[t._v("show")])],1),t._v(" "),e("div",{staticStyle:{right:"0",width:"59%"}},[e("div",{ref:"htmlContent",domProps:{innerHTML:t._s(t.content)}})])])}),[],!1,null,"fdfd3238",null).exports},data:function(){return{qrText:"1624512918787-23-13"}},mounted:function(){},methods:{}},c=Object(d.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{padding:"20px"}},[n("ComTest")],1)}),[],!1,null,null,null);n.default=c.exports}}]);
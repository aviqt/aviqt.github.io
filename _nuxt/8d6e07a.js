(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{471:function(t,e,n){t.exports=n.p+"img/Hanamaru_id_card.872b8a5.png"},472:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3dfacc5c",content,!0,{sourceMap:!1})},473:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("39a875af",content,!0,{sourceMap:!1})},474:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("d502f3a0",content,!0,{sourceMap:!1})},475:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("657c1fc2",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("c0007154",content,!0,{sourceMap:!1})},482:function(t,e,n){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%",overflow:"auto",position:"relative"}},[e("div",{staticClass:"mid-center",staticStyle:{width:"75%"}},[e("img",{staticStyle:{"max-width":"100%"},attrs:{src:n(471),alt:""}})])])}],o={data:function(){return{}}},c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.a=component.exports},487:function(t,e,n){"use strict";n(472)},488:function(t,e,n){var r=n(22)(!1);r.push([t.i,"#myCanvas{height:100%;width:100%}",""]),t.exports=r},489:function(t,e,n){"use strict";n(473)},490:function(t,e,n){var r=n(22)(!1);r.push([t.i,".edit-paper>div{margin-bottom:10px}.ql-editor{height:100px}.selfEditor{padding:10px;border:1px solid #ddd}",""]),t.exports=r},491:function(t,e,n){"use strict";n(474)},492:function(t,e,n){var r=n(22)(!1);r.push([t.i,".view-paper>div[data-v-19046802]{overflow:hidden;margin-bottom:10px;line-height:1.8}.view-paper>div>span[data-v-19046802]{float:left;width:80px;text-align:right}.view-paper>div>div[data-v-19046802]{margin-left:80px}.step input[data-v-19046802]{outline:none;border:none;border-bottom:1px solid #333;text-align:center;font-size:16px;min-width:80px;color:#2e75fa;background:none}",""]),t.exports=r},493:function(t,e,n){"use strict";n(475)},494:function(t,e,n){var r=n(22)(!1);r.push([t.i,".experiment[data-v-45d377e2]{height:100%;width:200%;overflow:auto;background:#fff}.experiment-inner[data-v-45d377e2]{height:100%;width:50%;padding:20px}",""]),t.exports=r},495:function(t,e,n){"use strict";n(476)},496:function(t,e,n){var r=n(22)(!1);r.push([t.i,".signature-box{height:100%;width:100%;overflow:auto;background:#fff}#signature{height:300px;width:600px;background:#fff;border:1px solid #ddd}",""]),t.exports=r},500:function(t,e,n){"use strict";var r=n(504),o=n.n(r),c={props:["paper"],data:function(){return{editor:null,lastEditRange:null}},mounted:function(){var t=this;this.editor=new o.a(this.$refs.editor),this.editor.customConfig.onchange=function(html){t.paper.content=html},this.editor.create()},methods:{getContent:function(){alert(this.paper.content)},editorClick:function(){this.lastEditRange=getSelection().getRangeAt(0)},divChange:function(){this.paper.content=this.$refs.xfjs.innerHTML}}},l=(n(489),n(10)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-paper"},[n("el-input",{attrs:{placeholder:"请输入实验名称"},model:{value:t.paper.name,callback:function(e){t.$set(t.paper,"name",e)},expression:"paper.name"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入实验所需要的器材",type:"textarea",rows:"2"},model:{value:t.paper.equipments,callback:function(e){t.$set(t.paper,"equipments",e)},expression:"paper.equipments"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入具体的实验步骤",type:"textarea",rows:"8"},model:{value:t.paper.steps,callback:function(e){t.$set(t.paper,"steps",e)},expression:"paper.steps"}}),t._v(" "),n("div",{ref:"xfjs",staticClass:"selfEditor",attrs:{contenteditable:"false"},domProps:{innerHTML:t._s(t.paper.content)},on:{blur:t.divChange}}),t._v(" "),n("div",[n("div",{ref:"editor",staticStyle:{"text-align":"left"},on:{click:t.editorClick}}),t._v(" "),n("button",{on:{click:t.getContent}},[t._v("查看内容")])])],1)}),[],!1,null,null,null).exports,f=(n(57),n(485),n(116),{props:["paper"],data:function(){return{answers:[],stepsHtml:"",stepsStr:""}},created:function(){this.stepsHtml=this.paper.steps.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," "),this.answers=new Array(this.stepsHtml.split("__________").length-1).fill("")}}),h=(n(491),{components:{PaperEdit:d,PaperView:Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-paper",attrs:{id:"paper"}},[n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("实验名称：")]),t._v(" "),n("div",{staticStyle:{"font-weight":"bold"},domProps:{innerHTML:t._s(t.paper.name)}})]),t._v(" "),n("div",[n("span",[t._v("实验器材：")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.paper.equipments)}})]),t._v(" "),n("div",[n("span",[t._v("实验步骤：")]),t._v(" "),n("div",{staticClass:"step"},t._l(t.stepsHtml.split("__________"),(function(e,r){return n("span",[r>0?n("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[r-1],expression:"answers[index-1]"}],style:{width:16*t.answers[r-1].length+20+"px"},attrs:{type:"text"},domProps:{value:t.answers[r-1]},on:{input:function(e){e.target.composing||t.$set(t.answers,r-1,e.target.value)}}}):t._e(),t._v(" "),n("span",{domProps:{innerHTML:t._s(e)}})])})),0)]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.paper.content)}}),t._v(" "),0!==t.stepsStr.length?n("el-input",{attrs:{placeholder:"请输入具体的实验步骤",type:"textarea",rows:"8"},model:{value:t.stepsStr,callback:function(e){t.stepsStr=e},expression:"stepsStr"}}):t._e()],1)}),[],!1,null,"19046802",null).exports},data:function(){return{editing:!0,paper:{name:"",equipments:"",content:"",steps:""}}}}),m=(n(493),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experiment"},[n("div",{staticClass:"experiment-inner"},[n("paper-edit",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],attrs:{paper:t.paper}}),t._v(" "),t.editing?t._e():n("paper-view",{attrs:{paper:t.paper}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editing=!t.editing}}},[t._v(t._s(t.editing?"查看试卷":"编辑试卷"))]),t._v(" "),n("div",{staticStyle:{height:"30px"}})],1)])}),[],!1,null,"45d377e2",null));e.a=m.exports},501:function(t,e,n){"use strict";var r={data:function(){return{ctx:null,animationID:null}},mounted:function(){this._initCanvas(),window.addEventListener("resize",this._initCanvas,!1)},destroyed:function(){window.removeEventListener("resize",this._initCanvas,!1),cancelAnimationFrame(this.animationID)},methods:{_initCanvas:function(){var t=document.getElementById("myCanvas");t.width=t.clientWidth,t.height=t.clientHeight,this.ctx=t.getContext("2d"),this.ctx.translate(.5*t.clientWidth,.5*t.clientHeight),this._draw()},_draw:function(){this.ctx.save();var time=new Date;this.ctx.rotate(2*Math.PI*(time.getMilliseconds()/1e3+time.getSeconds())/60),this.ctx.clearRect(0,0,this.ctx.canvas.clientWidth,this.ctx.canvas.clientHeight),this.ctx.strokeStyle="rgba(22,0,255,0.5)",this.ctx.lineWidth=10,this.ctx.lineJoin="miter",this.ctx.beginPath(),this.ctx.moveTo(40,100),this.ctx.quadraticCurveTo(40,50,180,100),this.ctx.bezierCurveTo(50,100,100,120,40,100),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore(),this.animationID=requestAnimationFrame(this._draw)}}},o=(n(487),n(10)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"myCanvas"}})}),[],!1,null,null,null);e.a=component.exports},502:function(t,e,n){"use strict";var r=function(t){t.preventDefault()},o={data:function(){return{url:"",canvas:null,cxt:null,status:0,platform:"",eventStr:{PC:{start:"mousedown",end:"mouseup",drawing:"mousemove"},MOBILE:{start:"touchstart",end:"touchend",drawing:"touchmove"}}}},mounted:function(){this.canvas=document.getElementById("signature"),this.cxt=this.canvas.getContext("2d"),this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.initDraw(),this.clear()},destroyed:function(){},methods:{initDraw:function(){var t=this;this.platform=-1!=navigator.platform.indexOf("Win32")?"PC":"MOBILE",this.canvas.addEventListener(this.eventStr[this.platform].start,(function(e){t.status=1,t.drawBegin(e),document.addEventListener(t.eventStr[t.platform].start,r,!1)})),this.canvas.addEventListener(this.eventStr[this.platform].drawing,(function(e){t.drawing(e),document.addEventListener(t.eventStr[t.platform].drawing,r,!1)})),document.addEventListener(this.eventStr[this.platform].end,(function(e){t.drawEnd(e)}))},drawBegin:function(t){this.cxt.strokeStyle="#f00",this.cxt.beginPath();var e="PC"===this.platform?t.clientX:t.changedTouches[0].clientX,n="PC"===this.platform?t.clientY:t.changedTouches[0].clientY;this.cxt.moveTo(e-this.canvas.getBoundingClientRect().left,n-this.canvas.getBoundingClientRect().top)},drawing:function(t){if(0!==this.status){var e="PC"===this.platform?t.clientX:t.changedTouches[0].clientX,n="PC"===this.platform?t.clientY:t.changedTouches[0].clientY;this.cxt.lineTo(e-this.canvas.getBoundingClientRect().left,n-this.canvas.getBoundingClientRect().top),this.cxt.stroke()}},drawEnd:function(){this.status=0,document.removeEventListener(this.eventStr[this.platform].start,r,!1),document.removeEventListener(this.eventStr[this.platform].drawing,r,!1)},clear:function(){this.cxt.clearRect(0,0,this.cxt.canvas.clientWidth,this.cxt.canvas.clientHeight),this.url=this.canvas.toDataURL("image/png")},save:function(){this.url=this.canvas.toDataURL("image/png")}}},c=(n(495),n(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signature-box"},[n("canvas",{attrs:{id:"signature"}}),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.clear}},[t._v("清除")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),n("span",[t._v(t._s(t.platform))]),t._v(" "),n("span",[t._v(t._s(t.status))]),t._v(" "),n("img",{attrs:{src:t.url,alt:""}})],1)}),[],!1,null,null,null);e.a=component.exports},507:function(t,e,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b9d8f5b8",content,!0,{sourceMap:!1})},508:function(t,e,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("d09d56fa",content,!0,{sourceMap:!1})},542:function(t,e,n){"use strict";n(507)},543:function(t,e,n){var r=n(22)(!1);r.push([t.i,".map{height:110%;width:110%}",""]),t.exports=r},544:function(t,e,n){"use strict";n(508)},545:function(t,e,n){var r=n(22)(!1);r.push([t.i,'body{background-size:cover}.board{position:fixed;left:10%;right:10%;top:8%;bottom:8%;background:hsla(0,0%,100%,.3);box-shadow:0 0 30px #fff;-webkit-animation:boardEntry 1s;animation:boardEntry 1s}.board:before{content:"";left:-2%;right:-2%;top:-3%;bottom:-3%;box-shadow:inset 0 0 30px #fff}.board .item,.board:before{position:absolute;border-radius:1%}.board .item{width:75%;height:75%;background:rgba(0,0,0,.2);box-shadow:inset 0 0 20px #f0fff0;transition:all .3s;overflow:hidden}.board .item:hover{box-shadow:inset 0 0 50px #fff;transition:all .1s}.board .item:before{content:attr(item-code);font-size:150px;line-height:1;color:#fff;position:absolute;right:20px;bottom:10px;opacity:.2}',""]),t.exports=r},609:function(t,e,n){"use strict";n.r(e);var r=n(482),o=(n(59),{data:function(){return{center:{lng:0,lat:0},zoom:4,mapStyle:{styleJson:[{featureType:"all",elementType:"geometry",stylers:{hue:"#007fff",saturation:89}},{featureType:"water",elementType:"all",stylers:{color:"#ffffff"}}]}}},mounted:function(){},methods:{handlerMapReady:function(t){t.BMap,t.map;this.center.lng=116.404,this.center.lat=39.915,this.zoom=15}}}),c=(n(542),n(10)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("baidu-map",{staticClass:"map",attrs:{center:t.center,zoom:t.zoom,mapStyle:t.mapStyle},on:{ready:t.handlerMapReady}},[n("bm-marker",{attrs:{position:{lng:116.404,lat:39.915},dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"}},[n("bm-label",{attrs:{content:"北京天安门",labelStyle:{color:"red",fontSize:"24px"},offset:{width:-35,height:30}}})],1)],1)}),[],!1,null,null,null).exports,d=n(501),f=n(500),h=n(502),m={data:function(){return{items:[{transform:"translate(0, 0) scale(1)",compontent:h.a},{transform:"translate(67%, -33.5%) scale(0.33)",compontent:l},{transform:"translate(67%, 0%) scale(0.33)",compontent:d.a},{transform:"translate(67%, 33.5%) scale(0.33)",compontent:f.a},{transform:"translate(-33.5%, 67%) scale(0.33)"},{transform:"translate(0%, 67%) scale(0.33)",compontent:r.a},{transform:"translate(33.5%, 67%) scale(0.33)"},{transform:"translate(67%, 67%) scale(0.33)"}],currentItemIndex:0}},methods:{itemClick:function(t){if(t===this.currentItemIndex)return!1;var e=this.items[this.currentItemIndex].transform;this.items[this.currentItemIndex].transform=this.items[t].transform,this.items[t].transform=e,this.currentItemIndex=t}}},v=(n(544),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"board"},t._l(t.items,(function(e,r){return n("div",{staticClass:"item",style:{transform:e.transform},attrs:{"item-code":String.fromCharCode(65+r)},on:{click:function(e){return t.itemClick(r)}}},[n(e.compontent,{tag:"component"})],1)})),0)])}),[],!1,null,null,null));e.default=v.exports}}]);
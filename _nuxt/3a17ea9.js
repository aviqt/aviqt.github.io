(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{519:function(e,t,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("35398ef4",content,!0,{sourceMap:!1})},566:function(e,t,n){"use strict";n(519)},567:function(e,t,n){var o=n(22)(!1);o.push([e.i,".three-box{background:#000;position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto}",""]),e.exports=o},649:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{id:(new Date).getTime()+Math.random(),st:null,scene:null}},mounted:function(){this.init()},destroyed:function(){clearInterval(this.st)},methods:{init:function(){var e=this,t=this.$THREE,n=document.getElementById(this.id);this.scene=new t.Scene;var o=new t.BoxGeometry(100,100,100),r=(new t.SphereGeometry(60,40,40),new t.CylinderGeometry(50,50,100,25),new t.OctahedronGeometry(50),new t.DodecahedronGeometry(50),o=new t.IcosahedronGeometry(50),new t.MeshLambertMaterial({color:4290559,wireframe:!0})),d=new t.Mesh(o,r);d.translateZ(120),this.scene.add(d);var l=new t.BoxGeometry(100,100,100),c=(new t.MeshLambertMaterial({color:255}),new t.Mesh(l,r));this.scene.add(c);var h=new t.SphereGeometry(60,40,40),w=(new t.MeshLambertMaterial({color:16711935}),new t.Mesh(h,r));w.position.set(120,0,120),this.scene.add(w);var m=new t.CylinderGeometry(50,50,100,25),f=(new t.MeshLambertMaterial({color:16776960}),new t.Mesh(m,r));f.position.set(150,0,0),this.scene.add(f);new t.AxisHelper(250);var v=new t.PointLight(16777215);v.position.set(400,200,300),this.scene.add(v);var y=new t.AmbientLight(4473924);this.scene.add(y);var M=window.innerWidth,x=window.innerHeight,C=M/x,s=200,E=new t.OrthographicCamera(-s*C,s*C,s,-s,1,1e3);E.position.set(200,300,200),E.lookAt(this.scene.position);var G=new t.WebGLRenderer;G.setSize(M,x),G.setClearColor(2236962,1),n.appendChild(G.domElement);var L=new Date,T=function t(){var n=new Date,o=n-L;L=n,requestAnimationFrame(t),G.render(e.scene,E),d.rotateZ(.001*o),c.rotateX(.001*o),w.rotateY(.001*o),f.rotateY(.001*o)};T(),new t.OrbitControls(E,G.domElement).addEventListener("change",T)}}},r=o,d=(n(566),n(10)),l={components:{ComTest:Object(d.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"three-box",attrs:{id:e.id}})}),[],!1,null,null,null).exports},data:function(){return{qrText:"1624512918787-23-13"}},mounted:function(){console.log(this.$THREE)},methods:{}},c=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{padding:"20px"}},[t("ComTest")],1)}),[],!1,null,null,null);t.default=c.exports}}]);
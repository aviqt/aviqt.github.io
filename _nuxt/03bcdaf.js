(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{465:function(t,e,n){"use strict";n(43);e.a={data:function(){return{table:{data:[],columns:[],sort:[]},page:{currentPage:1,pageSizes:[2,10,20,30,50],pageSize:10,total:0,layout:"total, sizes, prev, pager, next, jumper",show:!1},tableDataAll:[]}},created:function(){},methods:{resetPage:function(t){this.page.currentPage=1,this.page.pageSize=10,!0!==t&&this.getTableData()},sortChange:function(t){this.table.sort=t,console.log(t)},pageChange:function(t){this.page.currentPage=t,this.setTableData&&this.setTableData()},sizeChange:function(t){this.page.pageSize=t,this.page.currentPage=1,this.setTableData&&this.setTableData()},initPagination:function(){this.page.total=this.tableDataAll.length,this.page.currentPage=1,this.setTableData&&this.setTableData(),0==this.page.total&&this.$message.error("暂无数据")},setTableData:function(){var t=this;console.log(this.page),this.table.data=[],this.table.data=this.tableDataAll.filter((function(e,i){return i>=(t.page.currentPage-1)*t.page.pageSize&&i<t.page.currentPage*t.page.pageSize}))}}}},541:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("1b70e3cc",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";n(541)},618:function(t,e,n){var r=n(22)(!1);r.push([t.i,".pagination[data-v-2376d4a0]{text-align:right;margin-top:20px}",""]),t.exports=r},662:function(t,e,n){"use strict";n.r(e);n(2);var r=n(471),l=n(465),o=n(86),c={layout:"admin",mixins:[l.a,r.a,o.a],components:{},data:function(){return{title:"实验试卷管理"}},mounted:function(){this.table.columns=[{prop:"id",label:"编号",sortable:!1,width:50},{prop:"name",label:"实验名称",sortable:!1},{prop:"type",label:"实验室类型",sortable:!1,formatter:this.typeFormatter}],this.table.data=this.paperList},methods:{typeFormatter:function(t,e,n,r){return 2==t.type?"化学":"物理"},viewPaper:function(){window.open("/pad/paperView/")}},computed:{}},h=(n(617),n(10)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-page"},[n("div",{staticClass:"top"},[n("span",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"action-bar"},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.viewPaper}},[t._v("查看试卷")])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.table.data,border:"","max-height":t.DcSize.height-230},on:{"sort-change":t.sortChange}},t._l(t.table.columns,(function(t,i){return n("el-table-column",{key:i,attrs:{label:t.label,formatter:t.formatter,prop:t.prop,width:t.width,"min-width":t.minWidth,fixed:t.fixed,sortable:t.sortable}})})),1)],1)}),[],!1,null,"2376d4a0",null);e.default=component.exports}}]);
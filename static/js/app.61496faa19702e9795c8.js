webpackJsonp([2,0],[function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=a(40),i=n(s),r=a(34),l=n(r),u=a(9),c=n(u);c.default.defaults.baseURL="https://cnodejs.org/api/v1",c.default.defaults.timeout=1e4,i.default.prototype.$http=c.default,new i.default({el:"#app",template:"<App/>",components:{App:l.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(36),i=n(s),r=a(35),l=n(r);e.default={name:"app",data:function(){return{currentpage:1,rows:5,limit:10,total:500,result:[]}},created:function(){this.getList()},computed:{allpage:function(){return Math.ceil(this.total/this.rows)}},methods:{handleCurrentChange:function(t){this.currentpage=t},getList:function(){var t=this;t.$http.get("/topics",{params:{page:t.currentpage,limit:t.limit}}).then(function(e){t.$set(t.$data,"result",e.data.data)}).catch(function(t){console.log(t)})}},watch:{currentpage:function(t){this.getList()}},components:{list:l.default,pageination:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list",props:{result:{type:Array,default:function(){return{}}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isPreShow:!1,isNextShow:!1,currentPage:1}},props:{pageSize:{type:Number,default:0},allpage:{type:Number,default:0},totalNum:{type:Boolean,default:!1},hep:{type:Boolean,default:!1},btnType:{type:Number,default:0}},computed:{preBtn:function(){return 0==this.btnType?"<":"上一页"},nextBtn:function(){return 0==this.btnType?">":"下一页"},hpBtn:function(){return 0==this.btnType?"<<":"首页"},epBtn:function(){return 0==this.btnType?">>":"尾页"},pages:function(){var t=[];if(this.allpage<=this.pageSize){this.isPreShow=!1,this.isNextShow=!1;for(var e=this.allpage;e;)t.unshift(e--)}else if(this.isNextShow=!0,this.currentPage<=Math.ceil(this.pageSize/2)){this.isPreShow=!1;for(var e=this.pageSize;e;)t.unshift(e--)}else if(this.currentPage<=this.allpage-Math.ceil(this.pageSize/2)){this.isPreShow=!0;var a=this.currentPage-Math.floor(this.pageSize/2),n=this.currentPage+Math.floor(this.pageSize/2);this.isNextShow=!0;for(var e=a;e<=n;)t.push(e++)}else{this.isNextShow=!1;for(var e=this.allpage-this.pageSize;e<=this.allpage;)t.push(e++)}return t}},methods:{currentChange:function(t,e){switch(e){case"pre":if(1==this.currentPage)return;this.currentPage--;break;case"goto":if(this.currentPage==t)return;this.currentPage=t;break;case"next":if(this.currentPage==this.allpage)return;this.currentPage++;break;case"hpBtn":this.currentPage=1;break;case"epBtn":this.currentPage=this.allpage}this.$emit("current-change",this.currentPage)}}}},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(32);var n=a(3)(a(27),a(39),null,null);t.exports=n.exports},function(t,e,a){a(31);var n=a(3)(a(28),a(38),"data-v-638cc5c1",null);t.exports=n.exports},function(t,e,a){a(30);var n=a(3)(a(29),a(37),"data-v-46921732",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("ul",{staticClass:"page-ul"},[t.totalNum?a("li",{staticClass:"page-li"},[t._v("\n\t\t\t\t总共"+t._s(t.allpage)+"页\n\t\t\t")]):t._e(),t._v(" "),t.hep?a("li",{staticClass:"page-li",class:{disabled:1==t.currentPage},on:{click:function(e){t.currentChange(t.currentPage,"hpBtn")}}},[t._v(t._s(t.hpBtn))]):t._e(),t._v(" "),a("li",{staticClass:"page-li",class:{disabled:1==t.currentPage},on:{click:function(e){t.currentChange(t.currentPage,"pre")}}},[t._v("\n\t\t\t\t"+t._s(t.preBtn)+"\n\t\t\t")]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isPreShow,expression:"isPreShow"}],staticClass:"page-li"},[t._v("...")]),t._v(" "),t._l(t.pages,function(e){return a("li",{staticClass:"page-li",class:{active:e==t.currentPage},on:{click:function(a){t.currentChange(e,"goto")}}},[t._v(t._s(e))])}),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isNextShow,expression:"isNextShow"}],staticClass:"page-li"},[t._v("...")]),t._v(" "),a("li",{staticClass:"page-li",class:{disabled:t.currentPage==t.allpage},on:{click:function(e){t.currentChange(t.currentPage,"next")}}},[t._v("\n\t\t\t\t"+t._s(t.nextBtn)+"\n\t\t\t")]),t._v(" "),t.hep?a("li",{staticClass:"page-li",class:{disabled:t.currentPage==t.allpage},on:{click:function(e){t.currentChange(t.currentPage,"epBtn")}}},[t._v(t._s(t.epBtn))]):t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("ul",{staticClass:"list-ul"},t._l(t.result,function(e){return a("li",{staticClass:"list-li"},[a("span",{staticClass:"list-span title"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("list",{attrs:{result:t.result}}),t._v(" "),a("pageination",{attrs:{pageSize:t.rows,"total-num":!1,hep:!0,"btn-type":1,allpage:t.allpage},on:{"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.61496faa19702e9795c8.js.map
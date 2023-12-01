(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61e142b7"],{"1e8e":function(t,e,s){t.exports=s.p+"img/podcast-thumnail.4fa630c4.png"},"1fee":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("page-loading"):t._e(),t.loading||t.access?t._e():a("no-access",{attrs:{message:"This service is not available for you"}}),!t.loading&&t.access?a("div",{staticClass:"row",staticStyle:{"z-index":"1000",padding:"0 12px"}},[a("div",{staticClass:"vx-card p-3"},[a("div",{staticClass:"flex justify-content-between flex-wrap"},[a("v-select",{staticClass:"sm-horizontal-center mr-2 ml-2",staticStyle:{width:"fit-content","min-width":"250px"},attrs:{options:t.subjects,dir:"ltr"},on:{input:t.selectedFilter},model:{value:t.selectedSubject,callback:function(e){t.selectedSubject=e},expression:"selectedSubject"}})],1)])]):t._e(),t.loading||0!==t.podcasts.length?t._e():a("no-data",{attrs:{message:"no podcast added to this subject"}}),!t.loading&&t.access?a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"row"},t._l(t.podcasts,(function(e){return a("div",{key:e.id,staticClass:"col col-md-3 col-sm-12 col-12 mt-6"},[a("vx-card",[a("img",{staticClass:"responsive rounded-lg cursor-pointer",attrs:{src:s("1e8e"),alt:"content-img"},on:{click:function(s){return t.goToPodcastItem(e.fid)}}}),a("div",{staticClass:"text-center",staticStyle:{height:"50px"}},[a("h5",{staticClass:"cursor-pointer",staticStyle:{direction:"ltr"},on:{click:function(s){return t.goToPodcastItem(e.fid)}}},[t._v(t._s(e.item.title))])]),a("vs-divider"),a("div",{staticClass:"flex justify-between flex-wrap"},[a("span",[a("p",{staticClass:"text-grey"},[t._v("subject")]),a("p",{staticClass:"text-xl mt-2"},[t._v(t._s(e.item.subject.title))])]),a("div",{staticClass:"flex"},[null===e.bookmark?a("vs-button",{staticClass:"mt-4",attrs:{color:"primary",type:"border","icon-pack":"feather",icon:"icon-bookmark",id:"add-bookmark-btn-"+e.item.id},on:{click:function(s){return t.addToBookmark(e,"add-bookmark-btn-"+e.item.id)}}}):t._e(),null!==e.bookmark?a("vs-button",{staticClass:"mt-4",attrs:{color:"primary","icon-pack":"feather",icon:"icon-bookmark",id:"remove-bookmark-btn-"+e.item.id},on:{click:function(s){return t.removeFromBookmark(e,"remove-bookmark-btn-"+e.item.id)}}}):t._e()],1)])],1)],1)})),0),a("div",{staticClass:"row mt-8"},[a("div",{staticClass:"col col-md-4"}),a("div",{staticClass:"col col-md-4"},[t.totalPages>1?a("vs-pagination",{attrs:{total:t.totalPages},on:{change:t.goToPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1),a("div",{staticClass:"col col-md-4"})])])]):t._e()],1)},i=[],o=(s("ac6a"),s("74f4")),c=s("9c9e"),n=s("4a7a"),l=s.n(n),r=24,d={name:"Podcasts",components:{"v-select":l.a},mixins:[c["a"]],data:function(){return{loading:!0,access:!0,podcasts:[],productId:this.$route.params.productId,product:null,subjects:[{id:"",label:"all subjects"}],englishLevels:[{id:"",label:"all levels"}],selectedSubject:{id:"",label:"all subjects"},selectedEnglishLevel:{id:"",label:"all levels"},totalPages:null,currentPage:1,pageChanged:!1}},mounted:function(){this.currentPage=this.$route.query.page?+this.$route.query.page:1,this.getProductDetail(),this.getSubjects(),this.getEnglishLevels(),this.getPodcasts()},methods:{selectedFilter:function(){this.currentPage=1,this.pageChanged=!1,null!==this.selectedSubject&&null!==this.selectedEnglishLevel&&this.getPodcasts()},getPodcasts:function(){var t=this;this.loading=!0,this.podcasts=[];var e="/api/store/products/".concat(this.productId,"/items/")+"?page=".concat(this.currentPage,"&podcast__level=").concat(this.selectedEnglishLevel.id,"&podcast__subject=").concat(this.selectedSubject.id);o["a"].get(e,{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){200===e.status?e.data.no_access?(t.simpleNotify(t.NOTIFY_DANGER_TITLE,e.data.no_access,"danger"),t.access=!1):(t.access=!0,t.totalPages=Math.ceil(e.data.count/r),t.podcasts=e.data.results):t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger"),t.loading=!1}))},goToPage:function(){this.pageChanged?(this.$router.push({query:{page:this.currentPage}}),this.getPodcasts(),this.pageChanged=!1):this.pageChanged=!0},removeFromBookmark:function(t,e){var s=this;this.startLoading(e),o["a"].delete("/api/bookmarks/".concat(t.bookmark),{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(a){s.stopLoading(e),204===a.status?t.bookmark=null:s.simpleNotify(s.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},addToBookmark:function(t,e){var s=this;this.startLoading(e),o["a"].post("/api/bookmarks/",{item_fid:t.fid},{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(a){s.stopLoading(e),201===a.status?t.bookmark=a.data.fid:s.simpleNotify(s.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},getProductDetail:function(){var t=this;o["a"].get("/api/store/products/".concat(this.productId),{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){200===e.status&&(t.product=e.data)}))},getSubjects:function(){var t=this;o["a"].get("/api/english/subjects",{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){200===e.status?e.data.forEach((function(e){t.subjects.push({id:e.id,label:e.title})})):t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},getEnglishLevels:function(){var t=this;o["a"].get("/api/english/english-levels",{headers:{Accept:"application/json",Authorization:this.getAccessToken()}}).then((function(e){200===e.status?e.data.forEach((function(e){t.englishLevels.push({id:e.id,label:e.title})})):t.simpleNotify(t.NOTIFY_DANGER_TITLE,"something went wrong","danger")}))},goToPodcastItem:function(t){this.$router.push({name:"podcast-item",params:{itemFid:t,productId:this.productId}})}}},u=d,g=(s("413b"),s("2877")),h=Object(g["a"])(u,a,i,!1,null,"0d7ccd86",null);e["default"]=h.exports},"413b":function(t,e,s){"use strict";s("6aca")},"6aca":function(t,e,s){}}]);
//# sourceMappingURL=chunk-61e142b7.9ed5e737.js.map
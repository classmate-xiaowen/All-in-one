(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5d7927"],{"8c93":function(t,e,i){"use strict";i("a738")},a738:function(t,e,i){},f19b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[this.newDetail!={}?e("div",{staticClass:"newDetail_Page"},[e("div",{staticClass:"header_title"},[e("i",{staticClass:"iconfont icon-guanbi",staticStyle:{marginLeft:"20px"},on:{click:function(e){return t.$router.back()}}})]),e("header",{staticClass:"header"},[e("img",{attrs:{src:t.newDetail.cover,alt:""}}),e("h1",[t._v(t._s(t.newDetail.title))])]),e("div",{ref:"mainPage",staticClass:"NewDetail_Card"}),e("footer",[e("p",[t._v(t._s(t.newDetail.ptime))])])]):t._e(),this.newDetail?e("div",[t._v("数据加载中，请稍后。。。。")]):t._e()])},n=[],s=i("2f62"),c={name:"newDatail",data(){return{}},watch:{newDetail(){this.$refs.mainPage.innerHTML=this.newDetail.content}},computed:{...Object(s["c"])({newDetail:t=>t.home.newDetail})},mounted(){setTimeout(()=>{this.$store.dispatch("getNewDetail",this.$route.query.id)},1500)}},l=c,r=(i("8c93"),i("2877")),o=Object(r["a"])(l,a,n,!1,null,"7ce376e6",null);e["default"]=o.exports}}]);
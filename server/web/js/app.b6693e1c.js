(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e94bfda1"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t),i=function(e){l.onerror=l.onload=null,clearTimeout(o);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,s[1](r)}n[t]=void 0}};var o=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1399:function(t,e,s){"use strict";var a=s("2e99"),n=s.n(a);n.a},"21bb":function(t,e,s){"use strict";var a=s("bcc9"),n=s.n(a);n.a},"2e99":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r=s("2877"),c={},l=Object(r["a"])(c,n,i,!1,null,null,null),o=l.exports,u=(s("be35"),s("78a7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse pb-1 jc-around"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],m={},f=m,v=(s("a006"),Object(r["a"])(f,d,p,!1,null,null,null)),h=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.banners,function(t,e){return s("swiper-slide",{key:e},[s("a",{attrs:{tag:"div",href:t.url}},[s("img",{staticClass:"w-100",attrs:{src:t.image,alt:""}})])])}),s("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],2),s("div",{staticClass:"entry nav-icons bg-white mt-3 text-center pt-3 text-dark-1"},[s("div",{staticClass:"hidden-height d-flex flex-wrap",class:{"entry-hidden":!t.isEntry}},t._l(t.spriteData,function(e,a){return s("a",{key:a,staticClass:"entry-list nav-item mb-3",attrs:{href:e.url}},[s("i",{staticClass:"sprite sprite-news",class:e.class}),s("div",[t._v(t._s(e.text))])])}),0),s("div",{staticClass:"entry-btn t-center",on:{click:t.entryBtnClick}},[s("i",{class:{is_entry:!t.isEntry}}),s("span",{staticClass:"py-3"},[t._v(t._s(t.isEntry?"收起":"展开"))])])]),s("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return t._l(a.newsList,function(e,a){return s("router-link",{key:a,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{class:e.nameClass},[t._v(t._s(e.categoryName))]),s("span",{staticClass:"px-2"},[t._v("|")]),s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])})}}])}),s("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var a=e.category;return[s("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(a.heroList,function(e,a){return s("router-link",{key:a,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[s("img",{staticClass:"w-100",attrs:{src:e.avatar}}),s("div",[t._v(t._s(e.name))])])}),1)]}}])}),s("m-card",{attrs:{icon:"menu1",title:"精彩视频"}})],1)},b=[],g=(s("ac6a"),s("96cf"),s("3b8d")),x=s("5a0c"),C=s.n(x),y={filters:{date:function(t){return C()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newsCats:[],heroCats:[],banners:[],spriteData:[{text:"爆料站",class:"sprite_blz",url:"https://pvp.qq.com/m/m201706/coming/index.htm"},{text:"故事站",class:"sprite_gsz",url:"https://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG"},{text:"周边商城",class:"sprite_zbsc",url:"https://pvp.qq.com/mall/m"},{text:"体验服",class:"sprite_tyf",url:"https://pvp.qq.com/cp/a20161116tyf/page01.htm"},{text:"新人专区",class:"sprite_xrzq",url:"https://pvp.qq.com/m/m201606/goCenter.shtml"},{text:"荣耀传承",class:"sprite_rycc",url:"https://pvp.qq.com/m/memory/index.shtml"},{text:"王者营地",class:"sprite_wzyd",url:"https://image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com"},{text:"公众号",class:"sprite_gzh",url:"https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect"},{text:"版本介绍",class:"sprite_bbjs",url:"https://pvp.qq.com/cp/a20190320bbgxsmm/index.html"},{text:"对局环境",class:"sprite_djhj",url:"https://pvp.qq.com/cp/a20190917station/index.html"},{text:"无限王者团",class:"sprite_wxwzt",url:"https://pvp.qq.com/cp/a20190827boundlessp/index.html"},{text:"创意互动营",class:"sprite_cyhdy",url:"https://pvp.qq.com/m/hdy/p1/index.html"}],isEntry:!1}},methods:{entryBtnClick:function(){this.isEntry=!this.isEntry},fetchBanners:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/banner/list?",{params:{name:"首页轮播图"}});case 2:e=t.sent,this.banners=e.data.items;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchNewsCats:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/list");case 2:e=t.sent,e.data.forEach(function(t){t.newsList.forEach(function(t){switch(t.categoryName){case"新闻":t.nameClass="new-category-lightgodenrod";break;case"公告":t.nameClass="new-category-gold";break;case"活动":t.nameClass="new-category-mediumpurpul";break;case"赛事":t.nameClass="new-category-blue";break;default:t.nameClass="new-category-lightgodenrod";break}})}),this.newsCats=e.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchHeroCats:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/list");case 2:e=t.sent,this.heroCats=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchBanners(),this.fetchNewsCats(),this.fetchHeroCats()}},w=y,k=(s("21bb"),Object(r["a"])(w,_,b,!1,null,null,null)),q=k.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("router-link",{staticClass:"d-flex py-3 px-2 border-bottom ",staticStyle:{"text-decoration":"none"},attrs:{to:""}},[s("div",{staticClass:"iconfont icon-Back text-blue",on:{click:function(e){return t.$router.back(-1)}}}),s("strong",{staticClass:"flex-1 text-blue pl-2"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v(t._s(t._f("date")(t.model.createdAt))+" ")])]),s("div",{staticClass:"px-3 body fs-lg mt-3",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-3"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.model.related,function(e){return s("router-link",{key:e._id,staticClass:"py-1 text-ellipsis d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[s("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),s("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])}),1)])],1):t._e()},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-menu1"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],E={filters:{date:function(t){return C()(t).format("YYYY-MM-DD")}},props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:"fetch"},methods:{fetch:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("articles/".concat(this.id));case 2:e=t.sent,window.console.log(e.data),this.model=e.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},O=E,$=(s("1399"),Object(r["a"])(O,j,S,!1,null,null,null)),A=$.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("cf05"),height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map(function(t){return t.name}).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"span"}},[t._v("皮肤: 2 >")])],1)])]),a("div",[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v("\n                英雄介绍视频\n              ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v("\n                英雄介绍视频\n              ")])],1),a("div",{staticClass:"skills bg-white mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,function(e,s){return a("img",{key:e.name,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})}),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex pt-4 pb-3"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v("\n                    (冷却值: "+t._s(t.currentSkill.delay)+"\n                    消耗: "+t._s(t.currentSkill.cost)+")\n                  ")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey-1"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]):t._e()])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])}),0),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])])}),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,function(e){return a("div",{key:e.name,staticClass:"d-flex pt-3"},[a("img",{attrs:{src:e.hero.avatar,alt:"",height:"50"}}),a("p",{staticClass:"flex-1 m-0 ml-3"},[t._v("\n                "+t._s(e.description)+"\n              ")])])}),a("div",{staticClass:"border-bottom mt-3"})],2)],1)]),a("swiper-slide")],1)],1)]):t._e()},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",{staticClass:"text-white"},[t._v("王者荣耀")]),s("span",{staticClass:"ml-2"},[t._v("攻略站")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-3"},[s("div",{staticClass:"nav d-flex jc-around pt-3 pb-2 border-bottom"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])])}],T={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},z=T,D=(s("6e94"),Object(r["a"])(z,P,R,!1,null,null,null)),M=D.exports;a["a"].use(u["a"]);var F=new u["a"]({routes:[{path:"/",component:h,children:[{path:"/",name:"home",component:q},{path:"/articles/:id",name:"article",component:A,props:!0}]},{path:"/heroes/:id",name:"hero",component:M,props:!0},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),L=s("7212"),B=s.n(L),I=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[s("strong",[t._v(t._s(t.title))])]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),N=[],H={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},U=H,Y=(s("e60d"),Object(r["a"])(U,I,N,!1,null,null,null)),G=Y.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])}),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)}),1)],1)])},V=[],Q={props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},K=Q,W=Object(r["a"])(K,J,V,!1,null,null,null),X=W.exports,Z=s("bc3a"),tt=s.n(Z);a["a"].config.productionTip=!1,a["a"].use(B.a),a["a"].component("m-card",G),a["a"].component("m-list-card",X),a["a"].prototype.$http=tt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["a"]({router:F,render:function(t){return t(o)}}).$mount("#app")},"6e94":function(t,e,s){"use strict";var a=s("b07d"),n=s.n(a);n.a},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("b2d9"),n=s.n(a);n.a},ae86:function(t,e,s){},b07d:function(t,e,s){},b2d9:function(t,e,s){},bcc9:function(t,e,s){},be35:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},e60d:function(t,e,s){"use strict";var a=s("ae86"),n=s.n(a);n.a}});
//# sourceMappingURL=app.b6693e1c.js.map
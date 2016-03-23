/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdomscroller"],function(b,f){b.zc=function(a,b,c){this.sb=b;this.u=a;this.Yy=!1;this.f5(c);this.Init()};b.b.ga(b.zc,b.b,"oj.DataSourceContentHandler");b.zc.prototype.Init=function(){b.zc.q.Init.call(this)};b.b.g("DataSourceContentHandler.prototype.Init",{Init:b.zc.prototype.Init});b.zc.prototype.HandleResize=function(){};b.zc.prototype.Oe=function(){f(this.sb).empty();this.sb=this.u=null};b.zc.prototype.Rr=function(){return!this.Yy};b.zc.prototype.YO=
function(){this.ll()?this.sb.setAttribute("role","tree"):this.sb.setAttribute("role","listbox")};b.zc.prototype.mQ=function(){this.cb();this.Ho(!1);this.YO();this.$a()};b.zc.prototype.ad=function(a){return a.key};b.zc.prototype.Id=function(a){var b,c,e;b=f(this.sb).find("."+this.u.Lf());for(c=0;c<b.length;c++)if(e=b[c],a==this.ad(e))return e;return null};b.zc.prototype.getDataSource=function(){return this.Bg};b.zc.prototype.f5=function(a){this.Bg=a};b.zc.prototype.Ho=function(){};b.zc.prototype.TM=
function(a,b,c,e,g){var h;h=document.createElement("li");f(h).uniqueId();a.insertBefore(h,b===a.childElementCount?null:a.children[b]);this.OS(h,b,a,b,c,e,g)};b.zc.prototype.Hea=function(a){var b,c,e;a=a.target;f(a).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.oO);b=f.data(a,"ctx");f.removeData(a,"ctx");c=a.parentNode;e=f(c).children().index(a);this.OS(a,e,c,b.index,b.data,b.q4,b.Cb)};b.zc.prototype.Jpa=function(a,b,c,e,g){null==this.oO&&(this.oO=this.Hea.bind(this));
f.data(a,"ctx",{index:b,data:c,q4:e,Cb:g});this.cb();f(a).addClass("oj-listview-item-add-remove-transition").on("transitionend",this.oO).css("opacity",0)};b.zc.prototype.OS=function(a,b,c,e,f,h,k){void 0==k&&(k=this.Xq.bind(this));e=this.gN(e,f,h,a);h=this.u.Hda();null!=h?(f=h.call(this,e),null!=f&&(null===f.parentNode||f.parentNode instanceof DocumentFragment?a.appendChild(f):null==f.parentNode&&f.toString&&(h=document.createElement("span"),h.appendChild(document.createTextNode(f.toString())),a.appendChild(h)))):
(h=document.createElement("span"),h.appendChild(document.createTextNode(null==f?"":f.toString())),a.appendChild(h));a=c.children[b];e.parentElement=a;k(a,e)};b.zc.prototype.Xq=function(a,b){var c;a.key=b.key;a=f(a);a.uniqueId();c=this.u.kE(a);c.attr("role",this.ll()?"treeitem":"option");c!=a&&a.attr("role","presentation");c.addClass(this.u.Qk());this.cO(b)||a.addClass("oj-skipfocus");a.addClass(this.u.Lf())};b.zc.prototype.gN=function(a,b,c,e){var f,h;f={};f.parentElement=e;f.index=a;f.data=b;f.component=
this.u.Nf();f.datasource=this.getDataSource();for(h in c)c.hasOwnProperty(h)&&(f[h]=c[h]);return f};b.zc.prototype.cO=function(a){return this.u.Iw("focusable",a,!0)};b.zc.prototype.qE=function(a){return this.u.Iw("selectable",a,!0)};b.zc.prototype.cb=function(){this.u&&this.u.cb()};b.zc.prototype.$a=function(){this.u&&this.u.$a()};b.rb=function(a,d,c){b.rb.q.constructor.call(this,a,d,c)};b.b.ga(b.rb,b.zc,"oj.TableDataSourceContentHandler");b.rb.prototype.Init=function(){b.rb.q.Init.call(this)};b.rb.prototype.ll=
function(){return!1};b.rb.prototype.Oe=function(){b.rb.q.Oe.call(this);this.f_();null!=this.Iu&&(this.Iu.destroy(),this.rO=this.Iu=null);this.Zy=null};b.rb.prototype.HandleResize=function(a,b){this.Hh()&&void 0!=this.l4&&this.l4!=b&&(this.l4=b,this.checkViewport())};b.rb.prototype.Hh=function(){return"loadMoreOnScroll"==this.u.options.scrollPolicy?!0:!1};b.rb.prototype.qk=function(){return Math.max(0,this.u.options.scrollPolicyOptions.fetchSize)};b.rb.prototype.fJ=function(){return this.u.options.scrollPolicyOptions.maxCount};
b.rb.prototype.f5=function(a){var d;this.f_();if(null!=a){this.Hh()&&(d=this,this.rO=function(a){null!=a?(d.cb(),d.qL(),d.Rr()&&d.cb(),d.QJ(a),a.maxCountLimit?d.WJ():d.bT(),d.$a(),d.$a()):void 0===a&&(d.qL(),d.$a())},this.Iu=new b.Yf(this.u.ON(),a,{fetchSize:this.qk(),maxCount:this.fJ(),success:this.rO,error:this.$a}),this.Iu.XJ=function(a,e){1>=e-a&&d.cb();b.Yf.prototype.XJ.call(this,a,e)});this.k4=this.Coa.bind(this);this.j4=this.Boa.bind(this);this.f4=this.xoa.bind(this);this.h4=this.zoa.bind(this);
this.g4=this.yoa.bind(this);this.i4=this.Aoa.bind(this);if(b.ka&&a instanceof b.ka)a.on("sync",this.k4);a.on("sort",this.j4);a.on("add",this.f4);a.on("remove",this.h4);a.on("change",this.g4);a.on("reset",this.i4)}this.Bg=a};b.rb.prototype.bT=function(){var a,b;null==this.Zy&&(a=f(document.createElement("li")),a.uniqueId().attr("role","presentation").addClass(this.u.Kj()),b=f(document.createElement("div")),b.addClass("oj-listview-loading-icon"),a.append(b),f(this.sb).append(a),this.Zy=a)};b.rb.prototype.qL=
function(){null!=this.Zy&&this.Zy.remove();this.Zy=null};b.rb.prototype.Xq=function(a,d){var c;b.rb.q.Xq.call(this,a,d);f(a).addClass(this.u.Kj());this.u.yk()&&this.qE(d)&&this.u.oe(f(a)).attr("aria-selected",!1);this.Hh()&&(c=Math.min(this.Bg.totalSize(),this.fJ()),-1===c&&(c=this.fJ()),0<c&&f(a).attr("aria-setsize",c).attr("aria-posinset",d.index+1));this.u.Uy(a,d)};b.rb.prototype.Hma=function(a,b){var c,e,g;this.cb();this.Xq(a,b);c=f(a);e=c.outerHeight();c.css("opacity","0");c.css("maxHeight",
"0");g=this.u.Kj();c.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");c.removeClass(g).addClass("oj-listview-item-add-remove-transition");c.children().first().addClass(g);null==this.mO&&(this.mO=this.Fea.bind(this));f.data(a,"ctx",b);c.on("transitionend",this.mO);this.cb();requestAnimationFrame(function(){c.css("opacity","1");c.css("maxHeight",e+"px")});this.$a()};b.rb.prototype.WJ=function(){b.r.error("max count reached")};b.rb.prototype.f_=function(){null!=this.Bg&&(this.Bg.off("sync",this.k4),this.Bg.off("sort",
this.j4),this.Bg.off("add",this.f4),this.Bg.off("remove",this.h4),this.Bg.off("change",this.g4),this.Bg.off("reset",this.i4))};b.rb.prototype.Ho=function(a){var d=!0,c;this.cb();if(this.Rr()&&(this.Yy=!0,b.ka&&this.Bg instanceof b.ka&&(d=!1,this.cb()),d||a)){d&&this.cb();a={fetchType:"init",startIndex:0};this.Hh()&&(a.pageSize=this.qk());c=this;a=this.Bg.fetch(a);a.then(function(a){null!=c.u&&d&&(c.QJ(a),c.Hh()&&null!=a&&a.keys&&0<a.keys.length&&c.bT())},function(a){c.Ql(a);c.$a()});this.$a();return}this.$a()};
b.rb.prototype.Ql=function(a){b.r.error(a);this.Hh()&&this.qL();this.u.$o()};b.rb.prototype.Un=function(a,b){var c,e,f;c=this.sb.childElementCount;for(e=0;e<a.length;e++)f=a[e],this.TM(this.sb,c,f,this.getMetadata(c,b[e],f)),c+=1};b.rb.prototype.xoa=function(a){var b,c,e;if(null!=this.sb){this.cb();b=a.data;c=a.keys;a=a.indexes;if(null!=b&&null!=c&&0<c.length&&0<b.length&&c.length==b.length&&null!=a&&c.length==a.length){for(e=0;e<b.length;e++)this.cb(),this.TM(this.sb,a[e],b[e],this.getMetadata(a[e],
c[e],b[e]),this.Hma.bind(this)),this.$a();this.Rr()&&this.cb();this.r2()}this.$a()}};b.rb.prototype.Fea=function(a){var b;a=a.target;b=f.data(a,"ctx");f.removeData(a,"ctx");f(a).removeClass("oj-listview-item-add-remove-transition").addClass(this.u.Kj()).off("transitionend",this.mO).children().children().unwrap();this.u.W3(a,b);this.$a()};b.rb.prototype.zoa=function(a){var b,c;a=a.keys;if(null!=this.sb&&null!=a&&0!=a.length){this.cb();for(b=0;b<a.length;b++)c=this.Id(a[b]),null!=c&&(this.cb(),this.Jja(c),
this.$a());this.u.Lr();this.$a()}};b.rb.prototype.Jja=function(a){var b,c=this;this.cb();null==this.CO&&(this.CO=this.Kfa.bind(this));b=this.u.Kj();a=f(a);a.children().wrapAll("\x3cdiv class\x3d'"+b+"'\x3e\x3c/div\x3e");a.removeClass(b).css("maxHeight",a.outerHeight()+"px").addClass("oj-listview-item-add-remove-transition").on("transitionend",this.CO);setTimeout(function(){c.cb();a.css("opacity","0");a.css("maxHeight","0px");c.$a()},10)};b.rb.prototype.Kfa=function(a){var b;a=f(a.target);b=a.parent();
a.off("transitionend",this.CO);this.u.fO(a.get(0));a.remove();0==b.get(0).childElementCount&&this.u.$o();this.$a()};b.rb.prototype.yoa=function(a){var b,c,e,f;b=a.keys;if(null!=this.sb&&null!=b&&0!=b.length){this.cb();c=a.data;a=a.indexes;for(e=0;e<b.length;e++)f=this.Id(b[e]),null!=f&&(this.cb(),this.Jpa(f,a[e],c[e],this.getMetadata(a[e],b[e],c[e]),this.Gma.bind(this)),this.$a());this.u.Lr();this.$a()}};b.rb.prototype.Gma=function(a,b){var c=this;this.cb();f(a).css("opacity",0);this.Xq(a,b);null==
this.nO&&(this.nO=this.Gea.bind(this));f(a).on("transitionend",this.nO);setTimeout(function(){f(a).addClass("oj-listview-item-add-remove-transition").css("opacity",1);c.$a()},10)};b.rb.prototype.Gea=function(a){f(a.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.nO);this.u.Mpa();this.$a()};b.rb.prototype.Aoa=function(){null!=this.sb&&(this.cb(),f(this.sb).empty(),this.u.Lr(),this.Ho(!0),this.$a())};b.rb.prototype.QJ=function(a){var b;null!=this.sb&&(b=a.data,
a=a.keys,Array.isArray(b)&&Array.isArray(a)&&b.length==a.length&&(this.Un(b,a),this.r2()))};b.rb.prototype.Coa=function(a){null!=this.sb&&(this.cb(),0===a.startIndex&&f(this.sb).empty(),this.u.Lr(),this.QJ(a),this.$a())};b.rb.prototype.Boa=function(){null!=this.sb&&(this.cb(),f(this.sb).empty(),this.u.Lr(),this.u.sj()&&this.u.Up(!0),this.Ho(!0),this.$a())};b.rb.prototype.r2=function(){this.Yy=!1;this.u.$o();this.checkViewport();this.$a()};b.rb.prototype.checkViewport=function(){var a=this,b;this.cb();
null!=this.Iu&&0<this.Bg.totalSize()&&this.Rr()&&(b=this.Iu.checkViewport(),null!=b&&(this.cb(),b.then(function(b){a.rO(b);a.$a()},null)));this.$a()};b.rb.prototype.getMetadata=function(a,b,c){c=c.context;null==c&&(c={});null==c.index&&(c.index=a);null==c.key&&(c.key=b);return c};b.Og=function(a,d,c){b.Og.q.constructor.call(this,a,d,c)};b.b.ga(b.Og,b.zc,"oj.TreeDataSourceContentHandler");b.Og.prototype.Init=function(){b.Og.q.Init.call(this)};b.Og.prototype.ll=function(){return!0};b.Og.prototype.Ho=
function(){this.cb();this.Hf(0,null,this.sb,null);this.$a()};b.Og.prototype.Hf=function(a,b,c,e){this.cb();this.Yy=!0;a={start:a,count:this.Bg.af(b)};this.Bg.Hf(b,a,{success:function(a){this.Un(a,b,c,e)}.bind(this),error:function(a){this.Ql(a)}.bind(this)});this.$a()};b.Og.prototype.Un=function(a,b,c,e){var f,h,k,l;this.cb();b=a.ta();f=a.R();for(h=0;h<f;h++)k=a.getData(b+h),l=a.getMetadata(b+h),this.TM(c,b+h,k,l);this.Yy=!1;null!=e&&e.call(null,c);this.u.$o();this.$a()};b.Og.prototype.Xq=function(a,
d){var c,e,g,h,k,l;this.cb();b.Og.q.Xq.call(this,a,d);c=this.u.Hi();e=this.u.Kj();g=this.u.vg();h=this.u.er();l=this.u.Ij();k=this.u.Qk();a=f(a);!1==d.leaf?(a.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"),a.hasClass(k)?a.removeClass(k).children().first().addClass(k).attr("aria-expanded","false"):a.children().first().attr("role","presentation").find("."+k).attr("aria-expanded","false"),e=a.children().first(),e.uniqueId().addClass(g),this.u.Hu()&&(a.addClass("oj-collapsed"),g=document.createElement("a"),
f(g).attr("href","#").attr("aria-labelledby",e.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),e.prepend(g)),l=document.createElement("ul"),f(l).addClass(c).addClass(h).attr("role","group"),a.append(l)):!0==d.leaf&&a.addClass(e);this.u.yk()&&this.qE(d)&&this.u.oe(a).attr("aria-selected",!1);this.u.Uy(a[0],d);this.$a()};b.Og.prototype.Ql=function(a){this.cb();b.r.error(a);this.u.$o();this.$a()};b.Og.prototype.Pr=function(a,b){var c,e;this.cb();c=this.ad(a[0]);e=a.children("ul")[0];
this.Hf(0,c,e,b);this.$a()};b.Og.prototype.Mr=function(a){a.empty()};b.Sc=function(a,b){this.u=a;this.sb=b};b.b.ga(b.Sc,b.b,"oj.StaticContentHandler");b.Sc.prototype.Init=function(){b.Sc.q.Init.call(this)};b.Sc.prototype.Oe=function(){this.Y4(this.sb,0);this.vqa()};b.Sc.prototype.Rr=function(){return!0};b.Sc.prototype.HandleResize=function(){};b.Sc.prototype.mQ=function(){this.v4(this.sb,0);this.YO();this.u.$o()};b.Sc.prototype.Pr=function(a,b){var c;c="."+this.u.Hi();c=f(a).children(c)[0];f(c).css("display",
"block");b.call(null,c)};b.Sc.prototype.Mr=function(){};b.Sc.prototype.ll=function(){null==this.wO&&(this.wO=0<f(this.sb).children("li").children("ul").length);return this.wO};b.Sc.prototype.Y4=function(a,b){var c,e,g,h,k,l,m,n,p,r;c=this.u.Hi();e=this.u.er();g=this.u.zu();h=this.u.vg();k=this.u.Kj();l=this.u.Lf();m=a.children;for(n=0;n<m.length;n++)p=m[n],this.uqa(p),p=f(p),p.removeClass(l).removeClass(k).removeClass(this.u.EN(b)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"),
r=p.children("ul"),0<r.length&&(p.children("."+h).children().unwrap(),p.children(".oj-component-icon").remove(),p=f(r[0]),p.removeClass(c).removeClass(g).removeClass(e).removeAttr("role"),this.Y4(p[0],b+1))};b.Sc.prototype.v4=function(a,b){var c,e,g,h,k,l,m,n,p,r,s,q,t,w,x;c=this.u.Kj();e=this.u.Lf();g=this.u.Hi();h=this.u.vg();k=this.u.er();l=this.u.Ij();m=this.u.Qk();n=a.children;p=this.u.Hu();for(r=0;r<n.length;r++)s=f(n[r]),q=this.gN(s),this.Spa(s),s.uniqueId().addClass(e),0<b&&s.addClass(this.u.EN(b)),
this.cO(q)||s.addClass("oj-skipfocus"),t=s.children("ul"),0<t.length?(this.wO=!0,s.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"),w=s.children().first(),w.addClass(h),this.Koa(t[0])&&(s.hasClass(m)?(s.removeClass(m),w.addClass(m).attr("aria-expanded","false")):(w.attr("role","presentation"),w.find("."+m).attr("aria-expanded","false")),p&&(s.addClass("oj-collapsed"),w.uniqueId(),x=document.createElement("a"),f(x).attr("href","#").attr("role","button").attr("aria-labelledby",w.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),
w.prepend(x))),t=f(t[0]),t.addClass(g).addClass(k).attr("role","group").css("display","none"),this.v4(t[0],b+1)):s.addClass(c),this.u.yk()&&this.qE(q)&&this.u.oe(s).attr("aria-selected",!1),this.u.Uy(s[0],q)};b.Sc.prototype.YO=function(){this.ll()?this.sb.setAttribute("role","tree"):this.sb.setAttribute("role","listbox")};b.Sc.prototype.vqa=function(){this.sb.removeAttribute("role")};b.Sc.prototype.Koa=function(a){return 0<f(a).children("li").length};b.Sc.prototype.gN=function(a){var b;b={};b.key=
a.attr("id");b.parentElement=a.children().first()[0];b.index=a.index();b.data=a[0];b.component=this.u.Nf();this.ll()&&(b.leaf=0==a.children("ul").length,a=a.parents("li."+this.u.Lf()),b.depth=a.length,b.parentKey=0==a.length?null:a.first().attr("id"));return b};b.Sc.prototype.Spa=function(a){var b=this.u.kE(a);b.attr("role",this.ll()?"treeitem":"option");b!=a&&a.attr("role","presentation");b.addClass(this.u.Qk())};b.Sc.prototype.uqa=function(a){a=this.u.kE(f(a));a.removeAttr("role");a.removeAttr("aria-selected");
a.removeAttr("aria-expanded");a.removeClass(this.u.Qk())};b.Sc.prototype.ad=function(a){return f(a).attr("id")};b.Sc.prototype.Id=function(a){return document.getElementById(a)};b.Sc.prototype.cO=function(a){return this.u.Iw("focusable",a,!0)};b.Sc.prototype.qE=function(a){return this.u.Iw("selectable",a,!0)};b.OK=function(a,d){function c(){}b.b.ga(c,a,"");c.prototype=f.extend(c.prototype,d);return c}(Object,{hv:37,wz:39,eF:40,HF:38,X6:9,k6:13,l6:27,m6:113,V6:32,Zi:0,Yi:1,pQ:2,Eqa:0,mp:1,vm:function(a){var d=
this;this.Zo=[];this.cb();this.W=a.W;this.element=a.element;this.options=a;this.element.uniqueId().addClass(this.mF()+" oj-component-initnode").attr("tabIndex",0);this.W._on(this.element,{click:function(a){d.rF(a)},touchstart:function(a){d.SP(a)},touchend:function(a){d.sF(a)},touchcancel:function(a){d.sF(a)},mousedown:function(a){0!==a.button||d.Fx()||d.SP(a)},mouseup:function(a){d.sX(a);d.BO=!1},mouseout:function(a){d.qX(a)},mouseover:function(a){d.Efa(a)},keydown:function(a){d.RP(a)},focus:function(a){d.qF(a)},
blur:function(a){d.pF(a)},ojpanmove:function(a){d.sX(a)}});b.Ma.xy().browser===b.Ma.kl.HP&&this.W._on(this.jd(),{focus:function(){d.element.focus()}});this.mp===this.mp?this.W._on(this.element,{focusin:function(a){d.qF(a)},focusout:function(a){d.x6(a)}}):this.W._on(this.element,{focus:function(a){d.qF(a)},blur:function(a){d.pF(a)}});this.W.document.bind("touchend.ojlistview touchcancel.ojlistview",this.sF.bind(this));this.b_()},mu:function(){var a;this.T$();this.PX();a=this.jd();this.xj(a[0]);this.$a()},
refresh:function(){this.w_();this.cb();this.ov();this.PX();this.b_();this.$a()},whenReady:function(){return this.Q4},destroy:function(){this.element.removeClass(this.mF()+" oj-component-initnode");this.Ik(this.jd());this.w_();b.v.unwrap(this.element,this.jd());this.W.document.off(".ojlistview")},w_:function(){var a=this;this.IF();this.qaa(this.element);null!=this.He&&(this.He.Oe(),this.He=null);this.kb=null;this.Zo=[];this.Q4=new Promise(function(b){a.R4=b});this.Lr()},C4:function(){this.jd().removeClass("oj-focus-ancestor");
null!=this.kb&&f(this.kb.elem).removeClass("oj-focus");null!=this.xO&&this.cm(this.xO,"oj-hover")},esa:function(){},getNodeBySubId:function(a){var b;if(null==a)return this.element?this.element[0]:null;b=a.subId;if("oj-listview-disclosure"===b||"oj-listview-icon"===b)if(a=a.key,a=this.Id(a),null!=a&&a.firstElementChild&&(a=a.firstElementChild.firstElementChild,null!=a&&(f(a).hasClass(this.nm())||f(a).hasClass(this.Ij()))))return a;return null},getSubIdByNode:function(a){if(null!=a&&f(a).hasClass(this.nm())||
f(a).hasClass(this.Ij()))if(a=this.Wh(a),null!=a&&0<a.length&&(a=this.ad(a[0]),null!=a))return{subId:"oj-listview-disclosure",key:a};return null},getContextByNode:function(a){var b,c,e;a=this.Wh(a);return null!=a&&0<a.length&&(b=this.ad(a[0]),null!=b)?(c=a.parent(),e=c.children("li").index(a),b={subId:"oj-listview-item",key:b,index:e},c.get(0)!=this.element.get(0)&&(b.parent=c.parent().get(0)),a.children().first().hasClass(this.vg())?b.group=!0:b.group=!1,b):null},Ik:function(a){a&&this.Ge&&b.v.Oi(a,
this.Ge)},xj:function(a){a&&(null==this.Ge&&(this.Ge=this.Ve.bind(this)),b.v.Nh(a,this.Ge))},Ve:function(a,b){0<a&&0<b&&null!=this.He&&this.He.HandleResize(a,b)},sQ:function(a){return null!=a.data||null!=a.drillMode||null!=a.groupHeaderPosition||null!=a.item||null!=a.scrollPolicy||null!=a.scrollPolicyOptions},Dr:function(a){var b,c,e,g;if(this.sQ(a))return null!=a.data&&(null==a.currentItem&&this.xh("currentItem",null),null==a.selection&&this.Up(!0)),!0;null!=a.currentItem?(c=this.Id(a.currentItem),
null!=c&&(c=f(c),this.ci(c)||this.wn(c,null))):null===a.currentItem&&(this.Bz(),this.kb=null);null!=a.expanded&&this.He.ll()&&(c=a.expanded,Array.isArray(c)&&(this.cb(),this.Daa(),b=this,f.each(c,function(a,c){b.oN(c,!0,!0,!0)}),this.$a()));if(null!=a.selection&&this.yk())for(a.selection=this.Kca(a.selection),e=a.selection,this.Up(!1),g=0;g<e.length;g++)c=this.Id(e[g]),null!=c&&this.Xv(c,e[g]);null!=a.selectionMode&&(this.Up(!0),this.ov());return!1},cn:function(a,b,c){return this.W._trigger(a,b,c)},
xh:function(a,b,c){this.W.option(a,b,c)},Td:function(a){return this.W.option(a)},cb:function(){var a=this;this.Zo&&(0==this.Zo.length&&(this.Q4=new Promise(function(b){a.R4=b})),this.Zo.push(1))},$a:function(){this.Zo&&0<this.Zo.length&&(this.Zo.pop(),0==this.Zo.length&&this.R4(null))},PX:function(){var a;this.cb();a=this.Td("data");if(null!=a){if("undefined"===typeof b.T||"undefined"===typeof b.tp)throw"oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
if(a instanceof b.T)this.He=new b.rb(this,this.element[0],a);else if(a instanceof b.tp)this.He=new b.Og(this,this.element[0],a);else throw"Invalid data";}else this.He=new b.Sc(this,this.element[0]);this.vla();this.He.mQ();this.$a()},Z6:function(a){this.element.attr("aria-activedescendant",a.attr("id"))},ov:function(){this.element.attr("aria-activedescendant","");this.sj()?this.element.attr("aria-multiselectable",!0):this.yk()&&this.element.attr("aria-multiselectable",!1)},IF:function(){this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")},
T$:function(){var a,b;a=this.jd();this.ov();b=this.W$();a.append(b);this.n4=b},W$:function(){var a=f(document.createElement("div"));a.addClass("oj-listview-status").attr({id:this.WH("status"),role:"status"});return a},vla:function(){var a=this.W.A("msgFetchingData");this.n4.text(a).show()},bga:function(){this.n4.hide()},ON:function(){return this.jd()},jd:function(){null==this.Xy&&(this.Xy=this.eba());return this.Xy},eba:function(){var a=f(document.createElement("div"));a.addClass(this.NP()).addClass("oj-component");
this.element.parent()[0].replaceChild(a[0],this.element[0]);a.prepend(this.element);return a},xda:function(){return this.W.A("msgNoData")},P$:function(){var a,b;a=this.xda();b=document.createElement("li");b.id=this.WH("empty");b.className="oj-listview-empty-text";b.textContent=a;return b},Re:function(a){a=this.oe(a).attr("aria-expanded");return"true"==a?this.Zi:"false"==a?this.Yi:this.pQ},sp:function(a,b){var c=this.Hu();b==this.Zi?(this.oe(a).attr("aria-expanded","true"),c&&a.removeClass("oj-collapsed").addClass("oj-expanded")):
b==this.Yi&&(this.oe(a).attr("aria-expanded","false"),c&&a.removeClass("oj-expanded").addClass("oj-collapsed"))},Iw:function(a,b,c){a=this.options.item[a];return"function"==typeof a&&c?a.call(this,b):a},Hda:function(){var a=this.Iw("renderer",null,!1);return"function"!=typeof a?null:a},W3:function(){},fO:function(a){var b;if(null!=a&&a.id&&null!=this.$k)for(b in this.$k)if(this.$k.hasOwnProperty(b)&&this.$k[b]===a.id){delete this.$k[b];break}},Uy:function(a,b){var c,e,g,h;this.kI(a);if(this.yk())if(c=
this.Td("selection"),this.vh(a))for(g=0;g<c.length;g++){if(c[g]==b.key&&(this.Xv(a,c[g]),!this.sj())){1<c.length&&(e=f(this.Id(b.key)),this.xh("selection",[b.key],{_context:{originalEvent:null,Va:!0,Gj:{items:e}},changed:!0}));break}}else if(g=c.indexOf(b.key),-1<g){c=c.slice(0);c.splice(g,1);e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Id(c[g]);this.xh("selection",c,{_context:{originalEvent:null,Va:!0,Gj:{items:f(e)}},changed:!0})}this.He.ll()&&this.Re(f(a))==this.Yi&&(g=this.Td("expanded"),
this.Dt()?this.lp(f(a),null,!1,null,!1,!1,!1):Array.isArray(g)&&(h=this,f.each(g,function(c,e){e==b.key&&h.lp(f(a),null,!1,null,!1,!1,!1)})));null!=this.kb&&b.key==this.kb.key&&null!=this.kb.elem&&a!=this.kb.elem.get(0)&&(this.kb.elem=f(a))},$o:function(){var a;this.bga();f(document.getElementById(this.WH("empty"))).remove();0==this.element[0].childElementCount?(a=this.P$(),this.element.append(a)):(this.Ju=null,a=this.Td("currentItem"),null==this.kb&&null!=a&&(a=this.Id(a),null==a||this.ci(f(a))||
this.wn(f(a),null)),this.jd().hasClass("oj-focus-ancestor")&&null==this.kb&&this.TX());this.cn("ready",null,{})},Mpa:function(){var a=this.Td("currentItem");null!=a&&(a=this.Id(a),null==a||this.ci(f(a))||this.wn(f(a),null))},Lr:function(){this.vO=this.Ju=null},B4:function(a,b,c){if(this.tz(f(b.target)))return!1;a=f(b.target).closest("."+this.Lf());0<a.length&&!this.ci(f(a[0]))&&this.wn(f(a[0]),null);a={launcher:this.element,initialFocus:"menu"};"keyboard"===c&&(a.position={my:"start top",at:"start bottom",
of:this.kb.elem});this.W.rf(b,c,a)},WP:function(a){return null!=a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)},tz:function(a){for(;null!=a&&a[0]!=this.element[0]&&"LI"!=a.prop("nodeName");){if(3!=a[0].nodeType){var b=a.attr("tabIndex"),c=a.attr("data-oj-tabindex");if(null!=b&&0<=b&&!a.hasClass(this.Qk())||this.WP(a)&&(-1!=b||-1!=c))return!0}a=a.parent()}return!1},kI:function(a){var b;f(a).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function(){f(this).removeAttr("data-first").removeAttr("data-last");
b=parseInt(f(this).attr("tabIndex"),10);(isNaN(b)||0<=b)&&f(this).attr("tabIndex",-1).attr("data-tabmod",isNaN(b)?-1:b)})},sca:function(a){var b;a=f(a).find("[data-tabmod]").each(function(){b=parseInt(f(this).attr("data-tabmod"),10);f(this).removeAttr("data-tabmod");-1==b?f(this).removeAttr("tabIndex"):f(this).attr("tabIndex",b)});a.first().attr("data-first","true");a.last().attr("data-last","true")},qaa:function(a){f(a).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last")},
ci:function(a){return a.hasClass("oj-skipfocus")},qF:function(a){this.jd().addClass("oj-focus-ancestor");null==this.kb?this.Ht()||this.BO||this.TX(a):this.BO||this.ev()},TX:function(a){var b,c,e;b=this.Jw();for(c=0;c<b.length;c++)if(e=f(b[c]),!this.ci(e)){this.wn(e,a);break}},x6:function(a){this.pF(a)},pF:function(a){null!=a.relatedTarget&&f.contains(this.element.get(0),a.relatedTarget)||(this.jd().removeClass("oj-focus-ancestor"),this.Bz())},qX:function(a){a=this.Wh(a.target);null!=a&&(this.xO=null,
this.cm(a,"oj-hover"))},Efa:function(a){this.Fx()||(a=this.Wh(a.target),null==a||this.ci(a)||(this.xO=a,this.iC(a,"oj-hover")))},Fx:function(){return 500>Date.now()-this.CK},RP:function(a){var b,c;if(this.Hu()&&(b=a.keyCode,b===this.hv||b===this.wz))if(c=this.kb.elem,b===this.hv){if(this.Re(c)==this.Zi){this.Tm(c,a,!0,this.kb.key,!0,!0);return}}else if(this.Re(c)==this.Yi){this.lp(c,a,!0,this.kb.key,!0,!0,!0);return}!0===this.TP(a)&&a.preventDefault()},sX:function(){this.xE&&this.cm(this.xE,"oj-focus")},
SP:function(a){this.BO=!0;a=this.lj(f(a.target));null==a||0==a.length||this.ci(a)||(this.jd().hasClass("oj-focus-ancestor")||this.jd().addClass("oj-focus-ancestor"),this.xE=a,this.iC(a,"oj-focus"))},sF:function(a){null!=this.xE&&this.cm(this.xE,"oj-focus");this.CK=Date.now();this.qX(a)},rF:function(a){var b,c,e,g;0===a.button&&(b=this.Ij(),c=this.nm(),e=this.vg(),g=f(a.target),g.hasClass(c)?(this.lk(a),a.preventDefault()):g.hasClass(b)?(this.$d(a),a.preventDefault()):(this.dY()&&null!=this.kb&&(this.FL(!1),
this.kI(this.kb.elem)),b=this.lj(g),null==b||0==b.length||this.ci(b)||(this.jd().hasClass("oj-focus-ancestor")||this.jd().addClass("oj-focus-ancestor"),this.yk()&&this.vh(b[0])?this.Ht()?this.Tfa(b,a):this.w6(b,a):this.Oea(b,a),this.Hu()&&g.closest("."+e)&&(this.Re(b)==this.Yi?this.$d(a):this.Re(b)==this.Zi&&this.lk(a)))))},Ht:function(){return b.v.Rd()},aI:function(a){return b.v.wm(a)},WH:function(a){return[this.element.attr("id"),a].join(":")},Wh:function(a){return f(a).closest("."+this.Lf())},
Qga:function(a){return a.hasClass("oj-clickthrough-disabled")||a.hasClass("oj-component-initnode")||a.hasClass("oj-component")},lj:function(a){for(;0<a.length&&!this.Qga(a);){if(a.hasClass(this.Lf()))return a;a=a.parent()}return null},Nda:function(){null==this.e4&&(this.e4=parseInt(this.jd().css("border-top-width"),10)+parseInt(this.jd().css("border-bottom-width"),10));return this.e4},M_:function(a){var b,c,e,g,h,k,l=0;b=a.offsetTop;c=a.offsetHeight;a=this.jd()[0];e=a.scrollTop;g=a.offsetHeight;null!=
this.Ie&&(h=parseInt(this.Ie.style.top,10),k=f(this.Ie).outerHeight(),b<=h&&h<b+c?l=(c+b-h)/2:b>=h&&b<h+k&&(l=(h+k-b)/2));b>=e&&b+c<=e+g?0<l&&(a.scrollTop=e-l):(b=Math.max(0,Math.min(b-l,Math.abs(b+c-g))),b>e&&(b+=this.Nda()),a.scrollTop=b)},ad:function(a){return this.He.ad(a)},Id:function(a){var b;return null!=this.$k&&(b=this.$k[a],null!=b)?document.getElementById(b):this.He.Id(a)},Qr:function(a){return a==this.HF||a==this.eF},Jw:function(){var a,b,c;null==this.Ju&&(a=this.er(),b="."+this.Lf()+
":visible",this.Ju=this.element.find(b).filter(function(){return(c=f(this).parent().hasClass(a))?!f(this).parent().parent().hasClass("oj-collapsed"):!0}));return this.Ju},pp:function(a,b,c){var e,g,h;if(!this.He.Rr())return!0;e=!b||this.wE?this.kb.elem:this.Ro;g=!1;h=this.Jw();e=h.index(e);switch(a){case this.HF:e--;if(0<=e){for(a=f(h[e]);this.ci(a);){e--;if(0>e)return!1;a=f(h[e])}b?(this.yI(a,c),this.wE=!1):(this.wn(a,c),this.wE=!0)}g=!0;break;case this.eF:e++;if(e<h.length){for(a=f(h[e]);this.ci(a);){e++;
if(e==h.length)return!1;a=f(h[e])}b?(this.yI(a,c),this.wE=!1):(this.wn(a,c),this.wE=!0)}g=!0}return g},dY:function(){return"actionable"==this.ipa},FL:function(a){this.ipa=a?"actionable":"navigation";a||this.element[0].focus()},Fqa:function(){return this.mp},oe:function(a){return a.hasClass(this.Qk())?a:f(a.find("."+this.Qk()).first())},cla:function(a){this.oe(a).attr("tabIndex",0)},cka:function(a){var b;b=!0;"presentation"===a.attr("role")&&(b=!1);a=this.oe(a);b?a.removeAttr("tabIndex"):a.attr("tabIndex",
-1)},DV:function(a,b){this.mp===this.mp?(null!=a&&this.cka(a),this.cla(b),this.element.attr("tabIndex")&&this.element.removeAttr("tabIndex")):this.Z6(b)},kE:function(a){var b;b=a.children("a, input, select, textarea, button");return 1===b.length&&0===b.first().find("a, input, select, textarea, button").length?b.first():a},Q_:function(a,b){var c,e,f;null!=a?(c=a[0],c=this.ad(c),null==this.kb||c!=this.kb.key?(e={key:c,item:a},null!=this.kb&&(e.previousKey=this.kb.key,e.previousItem=this.kb.elem),f=
!this.cn("beforeCurrentItem",b,e),f||(this.kb=f={key:c,elem:a},this.DV(e.previousItem,a),this.xh("currentItem",c,{_context:{originalEvent:b,Va:!0,Gj:{item:a}},changed:!0}))):c==this.kb.key&&(this.kb=f={key:c,elem:a},this.DV(null,a))):this.kb=null},ev:function(a){var b,c;null!=this.kb&&this.jd().hasClass("oj-focus-ancestor")&&(a=a||!1,b=this.kb.elem,this.iC(b,"oj-focus"),this.mp===this.mp&&(b=this.oe(b),c=document.activeElement,!a&&b.get(0).contains(c)||b.get(0).focus()))},Bz:function(){null!=this.kb&&
this.cm(this.kb.elem,"oj-focus")},Oea:function(a,b){this.wn(a,b)},wn:function(a,b){this.M_(a[0]);this.Bz();this.Q_(a,b);this.ev()},yk:function(){return"none"!=this.Td("selectionMode")},sj:function(){return"multiple"==this.Td("selectionMode")},vh:function(a){a=this.oe(f(a)).get(0);return a.hasAttribute("aria-selected")},Kca:function(a){var b,c,e;b=[];for(c=0;c<a.length&&(e=this.Id(a[c]),null==e||!this.vh(e)||(b.push(a[c]),this.sj()));c++);return b},cma:function(){var a,b;null!=this.$k&&(a=this,f.each(this.Td("selection"),
function(c,e){b=a.Id(e);null!=b&&a.cm(b,"oj-selected")}))},iC:function(a,b){this.qp(a,b,!0)},cm:function(a,b){this.qp(a,b,!1)},qp:function(a,b,c){var e;a=f(a);"oj-selected"==b&&this.oe(a).attr("aria-selected",c?"true":"false");e=a.children("."+this.vg());0<e.length&&(a=f(e[0]));c?a.addClass(b):a.removeClass(b)},w6:function(a,b){var c,e;this.M_(a[0]);c=this.aI(b);e=b.shiftKey;this.sj()?c||e?!c&&e?this.yI(a,b):this.bH(a,b):this.nv(a,b):this.nv(a,b)},Tfa:function(a,b){this.sj()?this.bH(a,b):this.nv(a,
b)},Up:function(a){this.cma();a&&this.xh("selection",[],{_context:{originalEvent:null,Va:!0,Gj:{items:f()}},changed:!0});this.Ro=null},nv:function(a,b){this.Up(!1);this.bH(a,b,[])},yI:function(a,b){var c;null!=this.kb&&(c=this.Ro,c!=a&&(this.cm(a,"oj-focus"),this.lV(this.kb.elem,a,b)))},lV:function(a,b,c){this.Up(!1);this.Ro=b;this.fga(a,b,c);this.ev()},fga:function(a,b,c){var e,g,h,k,l;e=[];g=[];h=this.Jw();a=h.index(a);k=h.index(b);a>k?b=k:(b=a,a=k);for(;b<=a;b++)k=h[b],this.vh(k)&&(l=this.He.ad(k),
this.Xv(k,l),e.push(l),g.push(k));this.xh("selection",e,{_context:{originalEvent:c,Va:!0,Gj:{items:f(g)}},changed:!0})},Xv:function(a,b){null==this.$k&&(this.$k={});this.$k[b]=f(a).attr("id");this.iC(a,"oj-selected")},bH:function(a,b,c){var e,g;e=this.ad(a[0]);void 0==c&&(c=this.Td("selection").slice(0));this.Bz();g=c.indexOf(e);-1<g?(this.cm(a,"oj-selected"),c.splice(g,1)):(this.Ro=a,this.Xv(a,e),c.push(e));e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Id(c[g]);this.Q_(a,b);this.ev();this.xh("selection",
c,{_context:{originalEvent:b,Va:!0,Gj:{items:f(e)}},changed:!0})},Az:function(a,b,c){var e,g,h,k;e=this.Td("selection").slice(0);g=this.kb.elem;h=this.kb.key;k=e.indexOf(h);if(-1<k){if(c)return;this.cm(g,"oj-selected");e.splice(k,1);0==e.length&&(this.Ro=null)}else this.vh(g[0])&&(b||(this.Up(!1),e.length=0),this.Ro=g,this.Xv(g,h),e.push(h));b=Array(e.length);for(c=0;c<e.length;c++)b[c]=this.Id(e[c]);this.xh("selection",e,{_context:{originalEvent:a,Va:!0,Gj:{items:f(b)}},changed:!0})},TP:function(a){var b,
c,e,f=!1;if(null==this.kb)return!1;b=a.keyCode;c=this.kb.elem;this.dY()?b==this.l6?(this.FL(!1),this.kI(c),this.ev(!0),f=!0):b===this.X6&&(b=c.find("[data-first]"),c=c.find("[data-last]"),a.shiftKey?0<b.length&&0<c.length&&b!=c&&a.target==b[0]&&(c[0].focus(),f=!0):0<b.length&&0<c.length&&b!=c&&a.target==c[0]&&(b[0].focus(),f=!0)):b==this.m6?(this.sca(c),b=c.find("[data-first]"),0<b.length&&(b[0].focus(),this.FL(!0))):b==this.V6&&this.yk()?(c=this.aI(a),(e=a.shiftKey)&&!c&&null!=this.Ro&&this.sj()?
this.lV(this.Ro,this.kb.elem,a):this.Az(a,c&&!e&&this.sj(),!1),f=!0):b==this.k6&&this.yk()?this.Az(a,!1,!0):this.Qr(b)&&(c=this.aI(a),e=a.shiftKey,c||(f=this.pp(b,e&&this.yk()&&this.sj(),a)));return f},Hu:function(){return"none"!=this.Td("drillMode")},Dt:function(){var a=this.Td("expanded");if("auto"===a){if(!this.Hu())return!0}else if("all"===a)return!0;return!1},oN:function(a,b,c,e){var g=this.Id(a);null!=g&&this.lp(f(g),null,!1,a,b,e,c)},$d:function(a){var b=this.Wh(a.target);null!=b&&0<b.length&&
this.lp(b,a,!0,null,!0,!0,!0)},lp:function(a,b,c,e,f,h,k){var l;if(this.Re(a)==this.Yi){null==e&&(e=this.ad(a[0]));l={item:a,key:e};if(k&&(e=!this.cn("beforeExpand",b,l))&&f)return;this.cb();this.He.Pr(a,function(a){this.Cca(a,c,b,l,h)}.bind(this));this.Ju=null;null!=b&&b.stopPropagation();this.$a()}},Cca:function(a,b,c,e,g){var h;this.cb();this.$E(f(a),b);a=a.parentNode;a=f(a);this.sp(a,this.Zi);b=this.Ij();h=this.nm();a.children("."+this.vg()).find("."+b).removeClass(b).addClass(h);g&&this.cn("expand",
c,e);this.$a()},VS:function(a,b){var c;a.parentsUntil("ul.oj-component-initnode","ul."+this.Hi()).each(function(){c=parseInt(f(this).css("maxHeight"),10);0<c&&f(this).css("maxHeight",c+b+"px")})},$E:function(a,b){var c=0;b?(this.cb(),a.children().each(function(){c+=f(this).outerHeight(!0)}),this.Ht()&&this.VS(a,c),null==this.sO&&(this.sO=this.ifa.bind(this)),a.css("maxHeight","0px"),a.on("transitionend",this.sO),this.cb(),requestAnimationFrame(function(){a.css("maxHeight",c+"px")}),this.$a()):(this.Ht()?
(a.children().each(function(){c+=f(this).outerHeight(!0)}),a.css("maxHeight",c+"px"),this.VS(a,c)):a.css("maxHeight",""),this.aF(a))},ifa:function(a){a=f(a.target);a.off("transitionend",this.sO);this.Ht()||a.css("maxHeight","");this.aF(a);this.$a()},aF:function(a){a.removeClass(this.er()).addClass(this.zu())},R1:function(a,b,c){var e=this.Id(a);null!=e&&this.Tm(f(e),null,!1,a,b,c)},lk:function(a){var b=this.Wh(a.target);null!=b&&0<b.length&&this.Tm(b,a,!0,null,!0,!0)},Tm:function(a,b,c,e,f,h){var k;
this.Re(a)==this.Zi&&(null==e&&(e=this.ad(a[0])),e={item:a,key:e},k=!this.cn("beforeCollapse",b,e),k&&f||(this.cb(),this.YE(a,c),this.sp(a,this.Yi),c=this.Ij(),f=this.nm(),a.find("."+f).first().removeClass(f).addClass(c),this.Ju=null,null!=b&&b.stopPropagation(),h&&this.cn("collapse",b,e),this.$a()))},YE:function(a,b){var c=0,e,g=this;e=a.children("ul").first();b?(this.cb(),null==this.pO&&(this.pO=this.Qea.bind(this)),e.children().each(function(){c+=f(this).outerHeight()}),e.css("transition-property",
"none"),e.css("maxHeight",c+"px"),e.css("transition-property",""),e.on("transitionend",this.pO),setTimeout(function(){g.cb();e.css("maxHeight","0px");g.$a()},100)):(e.css("maxHeight","0px"),this.ZE(a))},Qea:function(a){a=f(a.target);a.off("transitionend",this.pO);this.ZE(a);this.$a()},ZE:function(a){a.removeClass(this.zu()).addClass(this.er());null!=this.He&&this.He.Mr(a)},Daa:function(){var a;this.cb();a=this;this.Jw().each(function(){a.Tm(f(this),null,!1,null,!1,!1)});this.$a()},getExpanded:function(){var a,
b,c;a=[];b=this;this.Jw().each(function(){c=f(this);b.Re(c)==b.Zi&&a.push(b.ad(c[0]))});return a},Nf:function(){return b.Components.Nf(this.element)},NP:function(){return this.Ht()?"oj-listview oj-listview-container-touch":"oj-listview oj-listview-container"},mF:function(){return"oj-listview-element"},Kj:function(){return"oj-listview-item"},Qk:function(){return"oj-listview-focused-element"},Lf:function(){return"oj-listview-item-element"},vg:function(){return"oj-listview-group-item"},Hi:function(){return"oj-listview-group"},
zu:function(){return"oj-listview-collapsible-transition"},er:function(){return this.zu()},Ij:function(){return"oj-listview-collapse-icon"},nm:function(){return"oj-listview-expand-icon"},EN:function(){return""},b_:function(){var a=this;this.W._off(this.jd(),"scroll");this.sY()&&this.W._on(this.jd(),{scroll:function(){a.vX()}})},sY:function(){return"static"!=this.Td("groupHeaderPosition")},Gw:function(){var a;null==this.vO&&(a="."+this.vg()+":visible",this.vO=this.element.find(a).filter(function(){return!f(this).parent().hasClass("oj-collapsed")&&
0<f(this).next().children().length?!0:!1}));return this.vO},CM:function(a){a.style.position="static";a.style.top="auto";a.style.width="auto"},vW:function(a){var b;b=this.Gw();a=b.index(a);return-1<a&&a<b.length-1?b[a+1]:null},wia:function(a,b){var c,e,f;c=a.offsetWidth;e=a.offsetHeight;f=this.vW(a);null!=f&&f.offsetTop<=b+e+5&&(b-=e);a.style.position="absolute";a.style.top=b+"px";a.style.width=c+"px"},vX:function(){var a,b,c,e,f,h,k,l;a=this.jd().get(0).scrollTop;if(null!=this.Ie&&0==a)this.CM(this.Ie),
this.Ie=null;else{c=this.Gw();e=0;null!=this.Ie&&(e=this.Ie.offsetHeight);for(f=0;f<c.length;f++)if(h=c[f],this.Ie!=h&&(k=c[f].offsetTop,l=k+h.parentNode.offsetHeight,k<a&&l>a+e)){b=h;break}null!=b&&b!=this.Ie?(null!=this.Ie&&this.CM(this.Ie),this.wia(b,a),this.Ie=b):null!=this.Ie&&(b=this.vW(this.Ie),this.Ie.style.top=null!=b&&b.offsetTop<=a+e?b.offsetTop-e+"px":a+"px")}},L_:function(a){var b,c;b=this.jd().get(0);c=b.scrollTop;null!=this.Ie&&(this.CM(this.Ie),this.Ie=null);b.scrollTop=a.offsetTop;
this.sY()&&c==b.scrollTop&&this.vX();this.Hka(a)},Hka:function(a){var b=this,c;f(a).next().children().each(function(){c=f(this);if(!b.ci(c))return b.xh("currentItem",this.key),!1})}});o_("_ojListView",b.OK,b);b.ya("oj.ojListView",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,data:null,drillMode:"collapsible",expanded:"auto",groupHeaderPosition:"sticky",item:{focusable:!0,renderer:null,selectable:!0},scrollPolicy:"auto",scrollPolicyOptions:{fetchSize:25,maxCount:500},selection:[],
selectionMode:"none",beforeCurrentItem:null,beforeExpand:null,beforeCollapse:null,collapse:null,expand:null,optionChange:null,ready:null},_ComponentCreate:function(){this._super();this.Aa()},Aa:function(){var a={};a.element=this.element;a.W=this;a=f.extend(this.options,a);this.Qc=new b.OK;this.Qc.vm(a)},lf:function(){this._super();this.Qc.mu()},_destroy:function(){this.Qc.destroy();this._super()},pf:function(a,b,c){this.Qc.B4(a,b,c)},_setOptions:function(a,b){var c=this.Qc.Dr(a,b);this._super(a,b);
c&&(this.Qc.refresh(),this.yV())},_setOption:function(a,b){var c=!0;"selectionMode"==a?c="none"==b||"single"==b||"multiple"==b:"drillMode"==a?c="collapsible"==b||"none"==b:"scrollPolicy"==a?c="auto"==b||"loadMoreOnScroll"==b:"groupHeaderPosition"==a&&(c="static"==b||"sticky"==b);if(c)this._super(a,b);else throw"Invalid value: "+b+" for key: "+a;},li:function(){this.Qc.C4()},tl:function(){},widget:function(){return this.Qc.ON()},refresh:function(){this._super();this.Qc.refresh();this.yV()},whenReady:function(){return this.Qc.whenReady()},
getNodeBySubId:function(a){return this.Qc.getNodeBySubId(a)},getSubIdByNode:function(a){return this.Qc.getSubIdByNode(a)},getContextByNode:function(a){return this.Qc.getContextByNode(a)},expand:function(a,b){this.Qc.oN(a,b,!0,!0)},collapse:function(a,b){this.Qc.R1(a,b,!0)},getExpanded:function(){return this.Qc.getExpanded()},getIndexerModel:function(){null==this.Jy&&b.ag&&(this.Jy=new b.ag(this.Qc));return this.Jy},yV:function(){null!=this.Jy&&this.Jy.u2&&this.Jy.u2()}})});
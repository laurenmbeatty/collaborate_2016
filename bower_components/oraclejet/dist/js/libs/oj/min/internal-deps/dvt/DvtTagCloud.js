/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.hS=function(a,b,c){this.Init(a,b,c)};(0,D.ca)("DvtTagCloud",D.hS);D.w.l(D.hS,D.nj,"DvtTagCloud");D.hS.newInstance=function(a,b,c){return new D.hS(a,b,c)};D.hS.prototype.Init=function(a,b,c){D.hS.o.Init.call(this,a,b,c);this.j().Jc.ta().setAttributeNS(null,"text-rendering","geometricPrecision");this.Ia=new D.iS(this,a,this.Od,this);this.Ia.le(this);(0,D.Gf)()||(0,D.tj)(this.Ia,new D.jS(this.Ia));this.pf=new D.kS;this.Za=[];this.Bq=[];this.Tg=null;this.Gd=new D.gu(this.j());(0,D.Gq)(this.Ia,this.Gd)};
D.hS.prototype.P=function(a,b,c){!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Ga=b,this.Ua=c);this.aO();this.ud(a);this.Sa&&this.Sa.stop();this.Mg=this.X;this.kQ=this.Za;this.Za=[];this.vla=[];this.X=new D.B(this.j());this.k(this.X);D.lS.P(this,this.X,new D.z(0,0,this.Ga,this.Ua));this.Um&&(0,D.Cl)(this.Um,this.D.selection,this.Tq());b=this.D.animationDuration;c=new D.z(0,0,this.Ga,this.Ua);this.Mg?"none"!==this.D.animationOnDataChange&&a&&(this.lf=new D.B(this.j()),this.k(this.lf),a=new D.Jm(this.j(),
this.lf),(0,D.Km)(a,this.kQ,this.Za),this.Sa=a.Nq()):"none"!==this.D.animationOnDisplay&&(this.Sa=D.Zk.by(this.j(),D.Zk.uw,this.X,c,b));this.Sa?(this.Ia.Ac(),this.Ia.ei(this),this.Sa.he(this.Xfa,this),this.Sa.play()):this.Xfa();this.Pn()};D.hS.prototype.render=D.hS.prototype.P;D.hS.prototype.Qca=(0,D.q)("Za");D.hS.prototype.Df=function(){this.Ik||(this.Ik=new D.mS(this));return this.Ik};D.hS.prototype.getAutomation=D.hS.prototype.Df;D.hS.prototype.ZD=function(a,b){this.Bq.push(a);this.vla[b]=a};
D.hS.prototype.Tq=(0,D.s)("Bq");D.hS.prototype.yh=(0,D.s)("vla");D.hS.prototype.Ee=function(a){this.D.highlightedCategories=D.kl.Y(a);(0,D.ll)(a,this.Tq(),"any"===this.D.highlightMatch);this.Tg&&this.Tg.Ee(a)};D.hS.prototype.highlight=D.hS.prototype.Ee;D.hS.prototype.select=function(a){this.D.selection=D.kl.Y(a);this.Um&&(0,D.Cl)(this.Um,this.D.selection,this.Tq())};D.hS.prototype.select=D.hS.prototype.select;D.u=D.hS.prototype;
D.u.ud=function(a){a?this.D=this.pf.Tj(a):this.D||(this.D=(0,D.vj)(this));a=this.D.selectionMode;this.Um="single"===a?new D.Vk("s"):"multiple"===a?new D.Vk("m"):null;this.Ia.yu(this.Um);(0,D.Uk)()||(this.D.animationOnDisplay="none",this.D.animationOnDataChange="none")};D.u.Fj=function(){return(0,D.ik)(this.q(),"componentName","DvtUtilBundle","TAG_CLOUD")};
D.u.Xfa=function(){this.Mg&&(this.removeChild(this.Mg),this.Mg.Q(),this.Mg=null);this.lf&&(this.removeChild(this.lf),this.lf.Q(),this.lf=null);this.Sa&&(this.Sa=null,this.Ia.le(this));this.D.highlightedCategories&&0<this.D.highlightedCategories.length&&this.Ee(this.D.highlightedCategories)};D.u.aO=function(){this.Ia.Ac();this.Bq.length=0};D.u.la=(0,D.s)("Ia");
D.u.Od=function(a,b){var c=a.Ta();if(c==D.rl.Jw||c==D.rl.Py){var d=a.Nk,e=D.H.wa(this.D.hiddenCategories,d);c==D.rl.Jw&&0>e&&this.D.hiddenCategories.push(d);c==D.rl.Py&&0<=e&&this.D.hiddenCategories.splice(e,1);this.P(this.D,this.Ga,this.Ua)}else if("categoryRollOver"==c||"categoryRollOut"==c)this!=b?this.Ee(a.categories):this.Tg&&this.Tg!=b&&this.Tg.Od(a,b);a&&this.dispatchEvent(a)};D.u.Yt=function(){for(var a=[],b=this.Um.getSelection(),c=0;c<b.length;c++)a=a.concat(b[c].Yc());return a};
D.hS.prototype.xj=function(a,b,c){return this.Gd.xj(c)};D.hS.prototype.isDragAvailable=D.hS.prototype.xj;D.hS.prototype.wk=function(a,b){return this.Gd.wk(a,b)};D.hS.prototype.getDragTransferable=D.hS.prototype.wk;D.hS.prototype.Zt=function(a,b){return this.Gd.Zt(a,b)};D.hS.prototype.getDragOverFeedback=D.hS.prototype.Zt;D.hS.prototype.wp=function(a,b){return this.Gd.wp(a,b)};D.hS.prototype.getDragContext=D.hS.prototype.wp;D.hS.prototype.Ov=function(a,b){return this.Gd.Ov(a,b)};
D.hS.prototype.getDragOffset=D.hS.prototype.Ov;D.hS.prototype.Vv=function(a,b){return this.Gd.Vv(a,b)};D.hS.prototype.getPointerOffset=D.hS.prototype.Vv;D.hS.prototype.Zv=function(){this.Gd.Zv()};D.hS.prototype.initiateDrag=D.hS.prototype.Zv;D.hS.prototype.ds=function(){this.Gd.ds()};D.hS.prototype.dragDropEnd=D.hS.prototype.ds;
D.hS.prototype.po=function(a,b,c){this.ul||(this.ul=new D.pS);return this.ul.po(a,b,c)};D.hS.prototype.acceptDrag=D.hS.prototype.po;
D.mS=(0,D.q)("Qx");(0,D.ca)("DvtTagCloudAutomation",D.mS);D.w.l(D.mS,D.zj,"DvtTagCloudAutomation");D.mS.prototype.ol=function(a){return(a=(0,D.Aj)(this.Qx.Ia,a))&&a instanceof D.nS?"item["+this.Qx.yh().indexOf(a)+"]":null};D.mS.prototype.Ff=function(a){if("tooltip"==a)return(0,D.Tl)(this.Qx);var b=a.indexOf("[");return 0<b&&"item"===a.substring(0,b)&&(a=(0,window.parseInt)(a.substring(b+1,a.length-1)),a=this.Qx.yh()[a])?a.Yc()[0].ta():null};D.mS.prototype.getDomElementForSubId=D.mS.prototype.Ff;
D.mS.prototype.getItem=function(a){if(a=this.Qx.yh()[a]){var b={};b.color=a.si();b.tooltip=a.zc();b.label=a.Mc();b.value=a.getValue();b.selected=a.Ca();return b}return null};D.mS.prototype.getItem=D.mS.prototype.getItem;D.mS.prototype.XL=function(){return this.Qx.Tq().length};D.mS.prototype.getItemCount=D.mS.prototype.XL;
D.rS=function(a,b,c,d,e,f,g){this.Init(a,b,c,d,e,f,g)};D.w.l(D.rS,D.Uj,"DvtTagCloudItem");D.u=D.rS.prototype;D.u.Init=function(a,b,c,d,e,f,g){D.rS.o.Init.call(this,b,c,d,e,f,g);this.Qx=a;this.vZ();f&&(0,D.sS)(this,f)};D.u.jb=function(a){this.Rh!=a&&((this.Rh=a)?this.yl?this.Ha(this.WW):this.Ha(this.FY):this.Ha(this.dG))};D.u.Ob=function(){this.yl||(this.yl=!0,this.Rh?this.Ha(this.WW):this.Ha(this.V6))};D.u.Db=function(){this.Rh?this.Ha(this.FY):this.Ha(this.dG);this.yl=!1};
D.u.ff=function(a,b){var c=new D.gn(this.j(),this,D.tS.xa(this.Qx)),d=this.fc(),e=b.fc(),f=!1,g=e.A("color"),h=d.A("color");if(g!=h){var i=this;this.Ha(d.W("color",g));(0,D.T)(c.J,"typeColor",this,function(){return i.fc().A("color")},function(a){i.Ha(i.fc().W("color",a))},h)}e=(0,window.parseFloat)(e.A("font-size"));d=(0,window.parseFloat)(d.A("font-size"));e!=d&&(f=!0,i=this,this.Ge(e),(0,D.T)(c.J,"typeNumber",this,function(){return(0,window.parseFloat)(i.fc().A("font-size"))},this.Ge,d));g=b.ja();
d=this.ja();e=b.vn();h=this.vn();if(d!=g||f&&h!=e)h!=e&&(f=g,g=b.Wd.F(void 0),g="left"==e?f+g.e:"right"==e?f-g.e:f),this.ca(g),(0,D.T)(c.J,"typeNumber",this,this.ja,this.ca,d);f=b.na();d=this.na();d!=f&&(this.va(f),(0,D.T)(c.J,"typeNumber",this,this.na,this.va,d));b.B(0);a.add(c,1)};D.u.hh=function(a){a.add(new D.jn(this.j(),this,D.tS.xa(this.Qx)),0)};D.u.pg=function(a){this.B(0);a.add(new D.Mm(this.j(),this,D.tS.xa(this.Qx)),2)};D.u.Ge=function(a){D.rS.o.Ge.call(this,a);(0,D.sS)(this,this.fc())};
D.sS=function(a,b){a.dG=b.Y();var c=a.dG.A("color");a.dG.W("background-color",null);a.V6=a.dG.Y();var d=(0,D.uS)(c,0.3);a.V6.W("background-color",d);a.V6.W("color",D.M.rj(d));a.FY=a.dG.Y();a.FY.W("background-color",c);a.FY.W("color",D.M.rj(c));a.WW=a.dG.Y();c=(0,D.uS)(c,0.6);a.WW.W("background-color",c);a.WW.W("color",D.M.rj(c))};
D.uS=function(a,b){var c=D.M.qe(a),d=D.M.oe(a),e=D.M.ne(a);return D.M.ZA(window.Math.floor(255*(1-b)+b*c),window.Math.floor(255*(1-b)+b*d),window.Math.floor(255*(1-b)+b*e))};
D.nS=function(a,b,c){this.Init(a,b,c)};D.w.l(D.nS,D.w,"DvtTagCloudObjPeer");D.u=D.nS.prototype;D.u.Init=function(a,b,c){this.H=a;this.ug=b;this.oa=c;this.ZE=this.Rh=!1;c.url?(b.Td("link"),this.Q7=D.A.xD("_blank",c.url)):b.Td("img");this.Hq()};D.u.getId=function(){return this.oa.id};D.u.Mc=function(){return this.oa.label};D.u.getValue=function(){return this.oa.value};D.u.zc=function(){return this.oa.shortDesc};D.u.Ae=function(){return this.oa.action};
D.u.Be=function(){var a=this.H.q().tooltip;return a?(0,D.ap)(this.H.j().fe(),a,this.up()):this.zc()};D.u.up=function(){return{id:this.getId(),label:this.Mc(),color:this.si(),value:this.getValue()}};D.u.xD=(0,D.s)("Q7");D.u.si=function(){this.Zn||(this.Zn=(new D.F(this.oa.style)).A("color"));return this.Zn};D.u.Jf=(0,D.q)("ZE");D.u.Aa=(0,D.s)("ZE");D.u.Ca=(0,D.s)("Rh");D.u.jb=function(a){this.Rh=a;this.ug.jb(a);this.Hq()};D.u.Ob=function(){this.ug.Ob()};D.u.Db=function(){this.ug.Db()};
D.u.zd=function(a){var b=this.H.Ia.Rf;a.type==D.fk||b.$q(a)?b=this:b.sg(a)?(b=this.H.Tq(),a=39==a.keyCode||40==a.keyCode?!0:!1,a=D.H.wa(b,this)+(a?1:-1),b=a<b.length&&0<=a?b[a]:null):b=null;return b};D.u.Ce=function(a){return this.ug.F(a)};D.u.wj=function(){return this.ug.ta()};D.u.Ud=function(){this.Ib=!0;this.Ob()};D.u.ic=function(){this.Ib&&(this.Ib=!1,this.Db())};D.u.oc=(0,D.s)("Ib");D.u.Yc=function(){return[this.ug]};
D.u.ec=function(){var a=[];this.Aa()&&a.push((0,D.P)("DvtUtilBundle",this.Ca()?"STATE_SELECTED":"STATE_UNSELECTED"));return(0,D.jk)(this.zc(),a)};D.u.Lc=function(){return this.oa.categories};D.u.Hq=function(){(0,D.$e)()||this.ug.Zb("label",this.ec())};D.u.pd=function(){if(!this.md&&(this.md=[],this.oa.showPopupBehaviors))for(var a=this.oa.showPopupBehaviors,b=0;b<a.length;b++)this.md.push(new D.Ci(a[b].popupId,a[b].triggerType,a[b].alignId,a[b].align));return this.md};
D.u.xj=function(a){return this.H.Um?a[0]:null};D.u.wk=function(){var a=this.H;this.Ca()||(a.Um.Km(this,!1),a.Ia.Nv());for(var b=[],a=a.Um.getSelection(),c=0;c<a.length;c++){var d=a[c];d instanceof D.nS&&b.push(d.getId())}return b};D.u.Yt=function(){return this.H.Yt()};
D.kS=function(){this.Init({alta:D.oS})};D.w.l(D.kS,D.Jj,"DvtTagCloudDefaults");
D.oS={animationOnDisplay:"none",animationOnDataChange:"none",emptyText:null,hiddenCategories:[],hideAndShowBehavior:"none",highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",layout:"rectangular",selectionMode:"none",_statusMessageStyle:new D.F('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;'),styleDefaults:{animationDuration:500,hoverBehaviorDelay:200,style:new D.F('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;')},touchResponse:"auto"};
D.lS={};D.w.l(D.lS,D.w,"DvtTagCloudRenderer");D.lS.P=function(a,b,c){D.lS.Gt(a,b,c);D.lS.$C(a,b,c);D.lS.Rw(c);var d=a.q();d.items&&0<d.items.length?(d=D.lS.j9(a,b,c),0<d.length?(a.Qca(d),(0,D.xj)(a.Ia,a.Tq()[0])):D.lS.NQ(a,b,c)):D.lS.NQ(a,b,c)};D.lS.NQ=function(a,b,c){var d=a.q(),e=d.emptyText;e||(e=(0,D.ik)(d,"labelNoData","DvtUtilBundle","NO_DATA",null));D.Xe.Lm(b,e,new D.z(c.x,c.y,c.e,c.g),a.Ia,d._statusMessageStyle)};D.lS.Gt=function(a,b,c){a=new D.C(a.j(),c.x,c.y,c.e,c.g);(0,D.si)(a);b.k(a)};
D.lS.j9=function(a,b,c){for(var d=a.q(),e=[],f=d.items,g=window.Number.MAX_VALUE,h=-window.Number.MAX_VALUE,i=0;i<f.length;i++)g=window.Math.min(g,f[i].value),h=window.Math.max(h,f[i].value);g=D.vS.bJa(g,h);h=D.H.$G(d.hiddenCategories);for(i=0;i<f.length;i++){var k=f[i];k.categories||(k.categories=[k.label]);if(!h||!D.H.tM(h,k.categories)){var l=d.styleDefaults.style.Y();(0,D.Sf)(l,k.style);l.W("font-size",g.call(null,k.value).toString());var l=new D.rS(a,a.j(),k.label,0,0,l,k.id),m=new D.nS(a,l,
k);a.Ia.Fa(l,m);a.ZD(m,i);"none"!==d.selectionMode&&m.Jf(!0);(m.Aa()||k.url||m.Ae())&&l.setCursor("pointer");e.push(l);b.k(l)}}0<e.length&&("cloud"===d.layout?D.vS.fHa(c,e):D.vS.bNa(c,e,(0,D.D)(a.j())));return e};
D.lS.$C=function(a,b,c){var d=a.q(),e=d.legend;if(e&&e.sections){e=D.kl.Y(e);e.orientation="horizontal";e.halign="center";e.hoverBehavior=d.hoverBehavior;e.hideAndShowBehavior=d.hideAndShowBehavior;e.hiddenCategories=d.hiddenCategories;d=(0,D.tn)(a.j(),a.Od,a);b.k(d);var f=d.Cp(e,c.e,c.g/3);d.P(e,f.e,f.g);(0,D.rn)(c,"bottom",d,f.e,f.g,0);a.Tg&&(a.Tg.Q(),b.removeChild(a.Tg));a.Tg=d}};D.lS.Rw=function(a){a.x=window.Math.round(a.x);a.y=window.Math.round(a.y);a.e=window.Math.round(a.e);a.g=window.Math.round(a.g)};
D.vS=(0,D.j)();D.w.l(D.vS,D.w,"DvtTagCloudLayoutUtils");D.vS.bJa=function(a,b){return function(c){return 12+window.Math.ceil(12*(2*(c-a)/(b-a)))}};
D.vS.fHa=function(a,b){var c=[],d=10/180,e=10/180;a.e>a.g?d*=a.e/a.g:e*=a.g/a.e;for(var f=2*window.Math.PI/180,g=null,h=0,i=[],k=[],l=0;l<b.length;l++)for(var m=!1,n=0,o=4,p=b[l],r=p.F(),h=window.Math.max(h,(0,window.parseFloat)(p.fc().A("font-size"))),t=-1;!m;){var v=n%180;void 0===i[v]&&(i[v]=window.Math.cos(n*f));void 0===k[v]&&(k[v]=window.Math.sin(n*f));var y=d*n*i[v],L=e*n*k[v],J=new D.z(y,L,r.e,r.g),m=!0;-1!=t&&c[t].T_(J)&&(m=!1);if(m)for(v=0;v<l;v++)if(c[v].T_(J)){t=v;m=!1;break}m&&(g=g?(0,D.so)(g,
J):J,t=-1,c[l]=J,p.ca(y),p.va(-r.y+L));3600===n?o=3:5400===n?o=2:10800===n&&(o=1);n+=o}c=window.Math.max(g.e/a.e,g.g/a.g);d=g.x+g.e/2;g=g.y+g.g/2;for(v=0;v<b.length;v++)p=b[v],p.ca(a.x+p.ja()/c+(a.e/2-d/c)),p.va(a.y+p.na()/c+(a.g/2-g/c)),e=(0,window.parseFloat)(p.fc().A("font-size")),p.Ge(e/c)};
D.vS.bNa=function(a,b,c){for(var d=[],e=0,f=0,g=0,h=0;h<b.length;h++){var i=b[h],k=i.F(),e=window.Math.max(e,k.e),f=window.Math.max(f,k.g),g=window.Math.max(g,(0,window.parseFloat)(i.fc().A("font-size")));d.push(new D.yg(k.e,k.g))}h=0;for(i=(a.e-10)/e;0.001<i-h;)e=(h+i)/2,g=D.vS.Bia(d,(a.e-10)/e),g.length*(e*f+2)-2>a.g-10?i=e:h=e;e=h;g=D.vS.Bia(d,(a.e-10)/e);g.push(b.length);for(h=0;h<g.length-1;h++){var k=g[h],l=g[h+1],m=0,n=0,o=!0;if(1<l-k){for(var i=0,p=k;p<l;p++)i+=d[p].e*e,n=window.Math.max(n,
d[p].g*e);m=(a.e-10-i)/(l-k-1);h==g.length-2&&(p=0.5*n,p<m&&i+(l-k)*p<0.9*(a.e-10)&&(m=p,o=!1))}for(var n=5+(h+1)*(f*e+2)-2,r=c?a.e-5:5,p=k;p<l;p++){var i=b[p],t=(0,window.parseFloat)(i.fc().A("font-size"));i.Ge(t*e);i.va(a.y+n);o&&p==l-1&&p!=k?c?(i.vh(),i.ca(a.x+5)):(i.wh(),i.ca(a.x+a.e-5)):(i.ca(a.x+r),c?(i.wh(),r-=d[p].e*e+m):(i.vh(),r+=d[p].e*e+m))}}};D.vS.Bia=function(a,b){var c=[0],d=a[0].e+2;if(1<a.length)for(var e=1;e<a.length;e++)d+a[e].e>b&&(c.push(e),d=0),d+=a[e].e+2;return c};
D.tS={};D.w.l(D.tS,D.w,"DvtTagCloudStyleUtils");D.tS.xa=function(a){return a.q().styleDefaults.animationDuration/1E3};
D.iS=function(a,b,c,d){this.Init(b,c,d);this.H=a};D.w.l(D.iS,D.Lj,"DvtTagCloudEventManager");D.iS.prototype.GI=function(a){a=(0,D.Aj)(this,a.target);(0,D.qS)(a);this.xG(a)};D.iS.prototype.BN=function(a){a=(0,D.Aj)(this,a.target);this.xG(a)};D.iS.prototype.pr=function(a){a=(0,D.Aj)(this,a.target);(0,D.qS)(a);this.xG(a)};D.qS=function(a){a instanceof D.nS&&(a=a.xD())&&a.call()};D.iS.prototype.Ih=function(a){var b=!0,c=this.dd();13==a.keyCode?(0,D.qS)(c):b=D.iS.o.Ih.call(this,a);return b};
D.iS.prototype.dm=function(a,b,c){a=this.H.q();"dim"==a.hoverBehavior&&(b=b.Lc?b.Lc():[],a.highlightedCategories=c?b.slice():null,c=new D.qm(c?"categoryRollOver":"categoryRollOut",a.highlightedCategories),b=(0,D.So)(a.styleDefaults.hoverBehaviorDelay),this.GB.Od(c,this.H.Tq(),b,"any"==a.highlightMatch))};D.iS.prototype.xG=function(a){a&&(a.Ae&&a.Ae())&&this.Fh(new D.Nj("action",a.Ae(),a.getId()))};D.iS.prototype.Bu=function(){return this.H.q().touchResponse};
D.jS=function(a){this.Init(a)};D.w.l(D.jS,D.ek,"DvtTagCloudKeyboardHandler");D.jS.prototype.Init=function(a){D.jS.o.Init.call(this,a)};D.jS.prototype.qy=function(a){return this.sg(a)&&!a.ctrlKey};D.jS.prototype.$q=function(a){return 32==a.keyCode&&a.ctrlKey};
D.pS=(0,D.j)();D.w.l(D.pS,D.iu,"DvtTagCloudDropTarget");D.pS.prototype.po=function(a,b,c){return c[0]};

  return D;
});
(function(i){function t(t){for(var s,a,r=t[0],u=t[1],c=t[2],h=0,g=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(e,a)&&e[a]&&g.push(e[a][0]),e[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(i[s]=u[s]);_&&_(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var i,t=0;t<o.length;t++){for(var n=o[t],s=!0,r=1;r<n.length;r++){var u=n[r];0!==e[u]&&(s=!1)}s&&(o.splice(t--,1),i=a(a.s=n[0]))}return i}var s={},e={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return i[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=i,a.c=s,a.d=function(i,t,n){a.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:n})},a.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(i,t){if(1&t&&(i=a(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var s in i)a.d(n,s,function(t){return i[t]}.bind(null,s));return n},a.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return a.d(t,"a",t),t},a.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var _=u;o.push([0,"chunk-vendors"]),n()})({0:function(i,t,n){i.exports=n("56d7")},"034f":function(i,t,n){"use strict";var s=n("85ec"),e=n.n(s);e.a},"0f7e":function(i,t,n){i.exports=n.p+"img/perez.de591b0e.png"},"1eb6":function(i,t,n){i.exports=n.p+"img/sausage.8afc7543.png"},"301d":function(i,t,n){i.exports=n.p+"img/bekon.83612317.png"},3887:function(i,t,n){i.exports=n.p+"img/shinka.2dcacc03.png"},"568a":function(i,t,n){i.exports=n.p+"img/kukuruza.3905b5a3.png"},"56d7":function(i,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("main",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"row",on:{click:i.warning}},[s("div",{staticClass:"left_colom col-lg-5"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"pizza"},[s("img",{staticClass:"testo",attrs:{src:n("adcd"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.bekon_img,expression:"bekon_img"}],attrs:{src:n("301d")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.ananas_img,expression:"ananas_img"}],attrs:{src:n("7251"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.brokoli_img,expression:"brokoli_img"}],attrs:{src:n("8a04"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.cheese_img,expression:"cheese_img"}],attrs:{src:n("65e3"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.Tomato_img,expression:"Tomato_img"}],attrs:{src:n("949e"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.krevetki_img,expression:"krevetki_img"}],attrs:{src:n("dcd4"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.midii_img,expression:"midii_img"}],attrs:{src:n("f50a"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.ogurez_img,expression:"ogurez_img"}],attrs:{src:n("ba74"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.riba_img,expression:"riba_img"}],attrs:{src:n("998b"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.sausage_img,expression:"sausage_img"}],attrs:{src:n("1eb6"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.shinka_img,expression:"shinka_img"}],attrs:{src:n("3887"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.telyatina_img,expression:"telyatina_img"}],attrs:{src:n("ad3f"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.olivki_img,expression:"olivki_img"}],attrs:{src:n("edbf"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.perez_img,expression:"perez_img"}],attrs:{src:n("0f7e"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:i.kukuruza_img,expression:"kukuruza_img"}],attrs:{src:n("568a"),alt:""}})])]),s("div",{staticClass:"score"},[s("h1",[i._v("Стоимость пиццы: "+i._s(i.score))]),s("h5",{directives:[{name:"show",rawName:"v-show",value:!i.ingredient_warning,expression:"!ingredient_warning"}]},[i._v("Не больше четырех ингредиентов!")])])]),s("div",{staticClass:"right_colom col-lg-7"},[s("div",{staticClass:"ingredients"},[s("button",{staticClass:"button9",on:{click:i.meat_switch}},[i._v("Мясное")]),s("button",{staticClass:"button9",on:{click:i.veg_switch}},[i._v("Овощи")]),s("button",{staticClass:"button9",on:{click:i.supplements_switch}},[i._v("Добавки")])]),s("div",{staticClass:"ingredients_all"},[s("div",{directives:[{name:"show",rawName:"v-show",value:i.meat,expression:"meat"}],staticClass:"meat row"},[s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("301d"),alt:"",width:"170"}}),s("h4",[i._v("Бекон")]),s("h5",[i._v("100 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_bekon}},[i._v("+")]),i._v(" "+i._s(i.count_bekon)+" "),s("button",{staticClass:"button27",on:{click:i.minus_bekon}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("ad3f"),alt:"",width:"170"}}),s("h4",[i._v("Телятина")]),s("h5",[i._v("90 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_telyatina}},[i._v("+")]),i._v(" "+i._s(i.count_telyatina)+" "),s("button",{staticClass:"button27",on:{click:i.minus_telyatina}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("3887"),alt:"",width:"170"}}),s("h4",[i._v("Шинка")]),s("h5",[i._v("150 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_shinka}},[i._v("+")]),i._v(" "+i._s(i.count_shinka)+" "),s("button",{staticClass:"button27",on:{click:i.minus_shinka}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("1eb6"),alt:"",width:"170"}}),s("h4",[i._v("Колбаса")]),s("h5",[i._v("80 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_sausage}},[i._v("+")]),i._v(" "+i._s(i.count_sausage)+" "),s("button",{staticClass:"button27",on:{click:i.minus_sausage}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("998b"),alt:"",width:"170"}}),s("h4",[i._v("Сёмга")]),s("h5",[i._v("50 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_riba}},[i._v("+")]),i._v(" "+i._s(i.count_riba)+" "),s("button",{staticClass:"button27",on:{click:i.minus_riba}},[i._v("-")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!i.veg,expression:"!veg"}],staticClass:"veg row"},[s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("949e"),alt:"",width:"170"}}),s("h4",[i._v("Помидоры")]),s("h5",[i._v("20 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_Tomato}},[i._v("+")]),i._v(" "+i._s(i.count_Tomato)+" "),s("button",{staticClass:"button27",on:{click:i.minus_Tomato}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("8a04"),alt:"",width:"170"}}),s("h4",[i._v("Брокколи")]),s("h5",[i._v("30 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_brokoli}},[i._v("+")]),i._v(" "+i._s(i.count_brokoli)+" "),s("button",{staticClass:"button27",on:{click:i.minus_brokoli}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("0f7e"),alt:"",width:"170"}}),s("h4",[i._v("Перец")]),s("h5",[i._v("10 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_perez}},[i._v("+")]),i._v(" "+i._s(i.count_perez)+" "),s("button",{staticClass:"button27",on:{click:i.minus_perez}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("ba74"),alt:"",width:"170"}}),s("h4",[i._v("Огурцы")]),s("h5",[i._v("15 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_ogurez}},[i._v("+")]),i._v(" "+i._s(i.count_ogurez)+" "),s("button",{staticClass:"button27",on:{click:i.minus_ogurez}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("568a"),alt:"",width:"170"}}),s("h4",[i._v("Кукуруза")]),s("h5",[i._v("10 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_kukuruza}},[i._v("+")]),i._v(" "+i._s(i.count_kukuruza)+" "),s("button",{staticClass:"button27",on:{click:i.minus_kukuruza}},[i._v("-")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!i.supplements,expression:"!supplements"}],staticClass:"supplements row"},[s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("7251"),alt:"",width:"170"}}),s("h4",[i._v("Ананас")]),s("h5",[i._v("50 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_ananas}},[i._v("+")]),i._v(" "+i._s(i.count_ananas)+" "),s("button",{staticClass:"button27",on:{click:i.minus_ananas}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("f50a"),alt:"",width:"170"}}),s("h4",[i._v("Мидии")]),s("h5",[i._v("120 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_midii}},[i._v("+")]),i._v(" "+i._s(i.count_midii)+" "),s("button",{staticClass:"button27",on:{click:i.minus_midii}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("edbf"),alt:"",width:"170"}}),s("h4",[i._v("Оливки")]),s("h5",[i._v("20 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_olivki}},[i._v("+")]),i._v(" "+i._s(i.count_olivki)+" "),s("button",{staticClass:"button27",on:{click:i.minus_olivki}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("dcd4"),alt:"",width:"170"}}),s("h4",[i._v("Криветки")]),s("h5",[i._v("40 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_krevetki}},[i._v("+")]),i._v(" "+i._s(i.count_krevetki)+" "),s("button",{staticClass:"button27",on:{click:i.minus_krevetki}},[i._v("-")])]),s("div",{staticClass:"block_ingredient"},[s("img",{attrs:{src:n("65e3"),alt:"",width:"170"}}),s("h4",[i._v("Сыр")]),s("h5",[i._v("45 р.")]),s("button",{staticClass:"button27",on:{click:i.plus_cheese}},[i._v("+")]),i._v(" "+i._s(i.count_cheese)+" "),s("button",{staticClass:"button27",on:{click:i.minus_cheese}},[i._v("-")])])])])])])])},o=[],a={data:function(){return{score:0,count:0,meat:!0,veg:!0,supplements:!0,count_bekon:0,count_telyatina:0,count_shinka:0,count_sausage:0,count_riba:0,count_Tomato:0,count_brokoli:0,count_perez:0,count_ogurez:0,count_kukuruza:0,count_ananas:0,count_midii:0,count_olivki:0,count_krevetki:0,count_cheese:0,bekon_img:!1,ananas_img:!1,brokoli_img:!1,cheese_img:!1,Tomato_img:!1,krevetki_img:!1,midii_img:!1,ogurez_img:!1,riba_img:!1,sausage_img:!1,shinka_img:!1,telyatina_img:!1,olivki_img:!1,perez_img:!1,kukuruza_img:!1,ingredient_warning:!0,ingredient_bekon:0,ingredient_telyatina:0,ingredient_shinka:0,ingredient_sausage:0,ingredient_riba:0,ingredient_Tomato:0,ingredient_brokoli:0,ingredient_perez:0,ingredient_ogurez:0,ingredient_kukuruza:0,ingredient_ananas:0,ingredient_cheese:0,ingredient_midii:0,ingredient_olivki:0,ingredient_krevetki:0}},methods:{warning:function(){this.ingredient_bekon+this.ingredient_telyatina+this.ingredient_shinka+this.ingredient_sausage+this.ingredient_riba+this.ingredient_Tomato+this.ingredient_brokoli+this.ingredient_perez+this.ingredient_ogurez+this.ingredient_kukuruza+this.ingredient_ananas+this.ingredient_cheese+this.ingredient_midii+this.ingredient_olivki+this.ingredient_krevetki>4?this.ingredient_warning=!1:this.ingredient_warning=!0},meat_switch:function(){this.meat=!0,this.veg=!0,this.supplements=!0},veg_switch:function(){this.meat=!1,this.veg=!1,this.supplements=!0},supplements_switch:function(){this.meat=!1,this.veg=!0,this.supplements=!1},plus_bekon:function(){if(1!=this.ingredient_warning)return 0;this.count_bekon<3&&(this.count_bekon++,this.bekon_img=!0,this.score+=100),1==this.count_bekon&&(this.ingredient_bekon=1)},minus_bekon:function(){this.count_bekon>0&&(this.count_bekon--,this.score-=100),0==this.count_bekon&&(this.bekon_img=!1),0==this.count_bekon&&(this.ingredient_bekon=0)},plus_telyatina:function(){if(1!=this.ingredient_warning)return 0;this.count_telyatina<3&&(this.count_telyatina++,this.telyatina_img=!0,this.score+=90),1==this.count_telyatina&&(this.ingredient_telyatina=1)},minus_telyatina:function(){this.count_telyatina>0&&(this.count_telyatina--,this.score-=90),0==this.count_telyatina&&(this.telyatina_img=!1),0==this.count_telyatina&&(this.ingredient_telyatina=0)},plus_shinka:function(){if(1!=this.ingredient_warning)return 0;this.count_shinka<3&&(this.count_shinka++,this.shinka_img=!0,this.score+=150),1==this.count_shinka&&(this.ingredient_shinka=1)},minus_shinka:function(){this.count_shinka>0&&(this.count_shinka--,this.score-=150),0==this.count_shinka&&(this.shinka_img=!1),0==this.count_shinka&&(this.ingredient_shinka=0)},plus_sausage:function(){if(1!=this.ingredient_warning)return 0;this.count_sausage<3&&(this.count_sausage++,this.sausage_img=!0,this.score+=80),1==this.count_sausage&&(this.ingredient_sausage=1)},minus_sausage:function(){this.count_sausage>0&&(this.count_sausage--,this.score-=80),0==this.count_sausage&&(this.sausage_img=!1),0==this.count_sausage&&(this.ingredient_sausage=0)},plus_riba:function(){if(1!=this.ingredient_warning)return 0;this.count_riba<3&&(this.count_riba++,this.riba_img=!0,this.score+=50),1==this.count_riba&&(this.ingredient_riba=1)},minus_riba:function(){this.count_riba>0&&(this.count_riba--,this.score-=50),0==this.count_riba&&(this.riba_img=!1),0==this.count_riba&&(this.ingredient_riba=0)},plus_Tomato:function(){if(1!=this.ingredient_warning)return 0;this.count_Tomato<3&&(this.count_Tomato++,this.Tomato_img=!0,this.score+=20),1==this.count_Tomato&&(this.ingredient_Tomato=1)},minus_Tomato:function(){this.count_Tomato>0&&(this.count_Tomato--,this.score-=20),0==this.count_Tomato&&(this.Tomato_img=!1),0==this.count_Tomato&&(this.ingredient_Tomato=0)},plus_brokoli:function(){if(1!=this.ingredient_warning)return 0;this.count_brokoli<3&&(this.count_brokoli++,this.brokoli_img=!0,this.score+=30),1==this.count_brokoli&&(this.ingredient_brokoli=1)},minus_brokoli:function(){this.count_brokoli>0&&(this.count_brokoli--,this.score-=30),0==this.count_brokoli&&(this.brokoli_img=!1),0==this.count_brokoli&&(this.ingredient_brokoli=0)},plus_perez:function(){if(1!=this.ingredient_warning)return 0;this.count_perez<3&&(this.count_perez++,this.perez_img=!0,this.score+=10),1==this.count_perez&&(this.ingredient_perez=1)},minus_perez:function(){this.count_perez>0&&(this.count_perez--,this.score-=10),0==this.count_perez&&(this.perez_img=!1),0==this.count_perez&&(this.ingredient_perez=0)},plus_ogurez:function(){if(1!=this.ingredient_warning)return 0;this.count_ogurez<3&&(this.count_ogurez++,this.ogurez_img=!0,this.score+=15),1==this.count_ogurez&&(this.ingredient_ogurez=1)},minus_ogurez:function(){this.count_ogurez>0&&(this.count_ogurez--,this.score-=15),0==this.count_ogurez&&(this.ogurez_img=!1),0==this.count_ogurez&&(this.ingredient_ogurez=0)},plus_kukuruza:function(){if(1!=this.ingredient_warning)return 0;this.count_kukuruza<3&&(this.count_kukuruza++,this.kukuruza_img=!0,this.score+=10),1==this.count_kukuruza&&(this.ingredient_kukuruza=1)},minus_kukuruza:function(){this.count_kukuruza>0&&(this.count_kukuruza--,this.score-=10),0==this.count_kukuruza&&(this.kukuruza_img=!1),0==this.count_kukuruza&&(this.ingredient_kukuruza=0)},plus_ananas:function(){if(1!=this.ingredient_warning)return 0;this.count_ananas<3&&(this.count_ananas++,this.ananas_img=!0,this.score+=50),1==this.count_ananas&&(this.ingredient_ananas=1)},minus_ananas:function(){this.count_ananas>0&&(this.count_ananas--,this.score-=50),0==this.count_ananas&&(this.ananas_img=!1),0==this.count_ananas&&(this.ingredient_ananas=0)},plus_midii:function(){if(1!=this.ingredient_warning)return 0;this.count_midii<3&&(this.count_midii++,this.midii_img=!0,this.score+=120),1==this.count_midii&&(this.ingredient_midii=1)},minus_midii:function(){this.count_midii>0&&(this.count_midii--,this.score-=120),0==this.count_midii&&(this.midii_img=!1),0==this.count_midii&&(this.ingredient_midii=0)},plus_olivki:function(){if(1!=this.ingredient_warning)return 0;this.count_olivki<3&&(this.count_olivki++,this.olivki_img=!0,this.score+=20),1==this.count_olivki&&(this.ingredient_olivki=1)},minus_olivki:function(){this.count_olivki>0&&(this.count_olivki--,this.score-=20),0==this.count_olivki&&(this.olivki_img=!1),0==this.count_olivki&&(this.ingredient_olivki=0)},plus_krevetki:function(){if(1!=this.ingredient_warning)return 0;this.count_krevetki<3&&(this.count_krevetki++,this.krevetki_img=!0,this.score+=40),1==this.count_krevetki&&(this.ingredient_krevetki=1)},minus_krevetki:function(){this.count_krevetki>0&&(this.count_krevetki--,this.score-=40),0==this.count_krevetki&&(this.krevetki_img=!1),0==this.count_krevetki&&(this.ingredient_krevetki=0)},plus_cheese:function(){if(1!=this.ingredient_warning)return 0;this.count_cheese<3&&(this.count_cheese++,this.cheese_img=!0,this.score+=45),1==this.count_cheese&&(this.ingredient_cheese=1)},minus_cheese:function(){this.count_cheese>0&&(this.count_cheese--,this.score-=45),0==this.count_cheesei&&(this.cheesei_img=!1),0==this.count_cheese&&(this.ingredient_cheese=0)}}},r=a,u=(n("034f"),n("2877")),c=Object(u["a"])(r,e,o,!1,null,null,null),_=c.exports;new s["a"]({el:"#app",render:function(i){return i(_)}})},"65e3":function(i,t,n){i.exports=n.p+"img/cheese.b5d4cbce.png"},7251:function(i,t,n){i.exports=n.p+"img/ananas.c9b5382c.png"},"85ec":function(i,t,n){},"8a04":function(i,t,n){i.exports=n.p+"img/brokoli.624d5891.png"},"949e":function(i,t,n){i.exports=n.p+"img/Tomato.2a22fd38.png"},"998b":function(i,t,n){i.exports=n.p+"img/riba.2e08f7a6.png"},ad3f:function(i,t,n){i.exports=n.p+"img/telyatina.d116a151.png"},adcd:function(i,t,n){i.exports=n.p+"img/Testo.7a294a81.png"},ba74:function(i,t,n){i.exports=n.p+"img/ogurez.386c22fe.png"},dcd4:function(i,t,n){i.exports=n.p+"img/krevetki.e6e7deba.png"},edbf:function(i,t,n){i.exports=n.p+"img/olivki.0011ef5e.png"},f50a:function(i,t,n){i.exports=n.p+"img/midii.2e5e3395.png"}});
//# sourceMappingURL=app.0df4aea7.js.map
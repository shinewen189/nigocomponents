(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e8933ee"],{"4e23":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("button",{on:{click:t.stop}},[t._v("停止")]),i("button",{on:{click:t.start}},[t._v("游戏开始")]),i("div",{staticStyle:{color:"red","text-align":"center","font-size":"25px"}},[t._v("score:"+t._s(t.scroce))]),i("div",{staticClass:"box",style:{width:t.boxWidth+"px",height:t.boxHeight+"px"}},[i("div",{staticClass:"str"},[t._v(t._s(t.str))]),i("div",{staticClass:"kuaiBox"},t._l(t.arr,(function(t,e){return i("div",{key:e,staticClass:"kuai",style:{opacity:t.active?"0":"1"}})})),0),i("div",{staticClass:"ball",style:{left:t.x+"px",top:t.y+"px",width:t.ball+"px",height:t.ball+"px"}}),i("div",{staticClass:"bottomMove",style:{left:t.mx+"px",top:t.my+"px",width:t.moveBottomW+"px",height:t.moveBottomH+"px"}})])])},s=[],r=(i("a630"),i("3ca3"),i("159b"),null),a=3,n={x:10,y:10},c=null,l=0,h={name:"block",data:function(){return{ball:10,boxWidth:800,boxHeight:300,moveBottomH:5,moveBottomW:100,x:245,y:285,mx:200,my:295,arr:Array.from({length:50},(function(t,e){return{index:e,active:!1}})),str:"",scroce:0}},mounted:function(){document.addEventListener("keyup",this.bottomMove.bind(this))},destroyed:function(){clearInterval(r)},methods:{stop:function(){clearInterval(r)},strFun:function(){x.length===l&&clearInterval(c),this.str+=x.substr(l,1),l++},moveBall:function(){var t=this,e=document.querySelector(".bottomMove"),i=e.offsetTop,o=e.offsetHeight,s=e.offsetLeft,l=e.offsetWidth;this.x<=0?n.x=a:this.x>this.boxWidth-this.ball&&(n.x=-a),this.y<=0&&(n.y=a),this.y>=i-o&&this.y<=i+o&&this.x>=s&&this.x<s+l&&(n.y=-a),this.y>this.boxHeight&&(clearInterval(r),alert("game over"),window.location.reload()),Array.from(this.arr).forEach((function(e,i){var o=document.querySelectorAll(".kuai")[i],s=o.offsetLeft,r=o.offsetTop,a=o.offsetWidth,n=o.offsetHeight;t.x>s&&t.x<s+a&&t.y>r&&t.y<r+n&&(t.arr[i].active||(t.scroce+=100),t.arr[i].active=!0)})),Array.from(this.arr).every((function(t){return t.active}))&&(clearInterval(r),c=setInterval(this.strFun.bind(this),1e3)),this.x=this.x+=n.x,this.y=this.y+=n.y},bottomMove:function(t){switch("Space"===t.code&&clearInterval(r),t.key){case"ArrowRight":this.mx+=100;break;case"ArrowLeft":this.mx-=100;break}this.mx=this.mx<0?0:this.mx,this.mx=this.mx>this.boxWidth-this.moveBottomW?this.boxWidth-this.moveBottomW:this.mx},start:function(){r=setInterval(this.moveBall.bind(this),20)}}},x="恭喜你,挑战成功!!",f=h,u=(i("ea09"),i("2877")),v=Object(u["a"])(f,o,s,!1,null,null,null);e["default"]=v.exports},"9bf9":function(t,e,i){},ea09:function(t,e,i){"use strict";i("9bf9")}}]);
//# sourceMappingURL=chunk-6e8933ee.9ad51527.js.map
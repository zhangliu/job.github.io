(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o),a=e(6),c=e.n(a),r=e(1),u=e(2),l=e(4),s=e(3),d=(e(12),function(t){Object(l.a)(e,t);var n=Object(s.a)(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"componentDidMount",value:function(){this.initCanvas(this.canvas),this.page&&(this.page.id="page_".concat(100*Math.random()))}},{key:"initCanvas",value:function(t){var n,e,o=this;t&&(t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight,function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.getContext("2d");e.strokeStyle=n.strokeStyle||"#ff4d4f",t.ontouchstart=function(n){var o=n.touches[0].clientX,i=n.touches[0].clientY;e.beginPath(),e.moveTo(o,i),t.ontouchmove=function(t){var n=t.touches[0].clientX-this.offsetLeft,o=t.touches[0].clientY-this.offsetTop;e.lineWidth=1,e.lineTo(n,o),e.stroke()},t.ontouchend=function(n){t.ontouchmove=null,t.ontouchend=null}}}(t),n=t,e=function(){var t=window.$(o.page).next()[0];if(t){var n=t.id;window.location.href="".concat(window.location.origin).concat(window.location.pathname,"#").concat(n)}},window.$(n).on("swipeleft",(function(t){var n=t.swipestart.coords[0];document.documentElement.clientWidth-n>10||e&&e()})),function(t,n){window.$(t).on("swiperight",(function(t){t.swipestart.coords[0]>10||n&&n()}))}(t,(function(){return window.history.go(-1)})))}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{"data-role":"page",id:this.props.id,ref:function(n){return t.page=n}},i.a.createElement("canvas",{className:"p_s_a zi_s_100",ref:function(n){return t.canvas=n}}),this.props.children)}}]),e}(i.a.Component)),f=function(t){Object(l.a)(e,t);var n=Object(s.a)(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,null,"fdafajflajLjfdlksjalfdjal"),i.a.createElement(d,null,"fjdsljflsjflks\u4e3d\u67ab\u9152\u5e97\u6b7b\u5566\u5c31\u53d1\u9886\u5bfc\u8bbe\u8ba1\u8d39"))}}]),e}(i.a.Component);var h=function(){return i.a.createElement(f,null)};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root"))},7:function(t,n,e){t.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2210d116.chunk.js.map
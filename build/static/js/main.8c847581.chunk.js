(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(6),i=n.n(s),o=n(1),r=n(2),_=n(4),l=n(3),u=(n(12),n(13),function(e){Object(_.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.initCanvas(this.canvas),this.page&&(this.page.id="page_".concat(window.$id++))}},{key:"initCanvas",value:function(e){var t,n,a=this;e&&(e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getContext("2d");n.strokeStyle=t.strokeStyle||"#ff4d4f",e.ontouchstart=function(t){var a=t.touches[0].clientX,c=t.touches[0].clientY;n.beginPath(),n.moveTo(a,c),e.ontouchmove=function(e){var t=e.touches[0].clientX-this.offsetLeft,a=e.touches[0].clientY-this.offsetTop;n.lineWidth=1,n.lineTo(t,a),n.stroke()},e.ontouchend=function(t){e.ontouchmove=null,e.ontouchend=null}}}(e),n=function(){var e=window.$(a.page).next()[0];if(e){var t=e.id;window.location.href="".concat(window.location.origin).concat(window.location.pathname,"#").concat(t)}},(t=e).$tapCount=0,t.$timer=null,window.$(t).on("tap",(function(){if(t.$tapCount<1)return t.$tapCount++,void(t.$timer||(t.$timer=setTimeout((function(){t.$tapCount=0,t.$timer=null}),200)));n&&n()})),function(e,t){window.$(e).on("swiperight",(function(e){e.swipestart.coords[0]>10||t&&t()}))}(e,(function(){return window.history.go(-1)})))}},{key:"render",value:function(){var e=this,t=this.props.className||"";return c.a.createElement("div",{"data-role":"page",className:t,id:this.props.id,ref:function(t){return e.page=t},style:{backgroundColor:"#fff"}},c.a.createElement("canvas",{className:"p_s_a zi_s_100",ref:function(t){return e.canvas=t}}),this.renderHeader(),c.a.createElement("div",{className:"p_s_a t_s_0 l_s_0 b_s_0 r_s_0 d_s_f fd_s_c ai_s_c jc_s_c p_s_20"},c.a.createElement("div",{className:"mt_s_-120 d_s_f fd_s_c ai_s_c"},this.props.children)),this.renderFooter())}},{key:"renderHeader",value:function(){return c.a.createElement("img",{className:"h_s_25 ctc_m_s_10_ml_s_8",src:"./logo.jpg",alt:""})}},{key:"renderFooter",value:function(){return c.a.createElement("img",{className:"h_s_100 m_s_10 p_s_a b_s_0 r_s_0",src:"./qrcode.png",alt:""})}}]),n}(c.a.Component)),m=function(e){Object(_.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,null,c.a.createElement("div",{className:"fs_s_24 mb_s_20"},"\u524d\u7aef\u5f00\u53d1\uff08\u9ad8\u7ea7\uff09\u5de5\u7a0b\u5e08 \u2014 \u4e91\u5e73\u53f0\u65b9\u5411"),c.a.createElement("img",{className:"w_s_100_percent_",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590687405212&di=7c46ef0aec64a10b08e5f2531416b6d1&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F5g%2F7b%2FQJ6174749688.jpg",alt:""})),c.a.createElement(u,null,c.a.createElement("div",{className:"d_s_f jc_s_c"},c.a.createElement("img",{className:"h_s_25 m_s_16",src:"//s3.pstatp.com/toutiao/static/img/logo.271e845.png",alt:""}),c.a.createElement("img",{className:"h_s_25 m_s_16",src:"https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/logo.ba774b28.svg",alt:""}),c.a.createElement("img",{className:"h_s_25 m_s_16",src:"https://zhengxin-pub.bj.bcebos.com/logopic/d350998f81880a134f86becd78dbf91d_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_200",alt:""})),c.a.createElement("div",{className:"fs_s_32 fw_s_b mt_s_20 bs_s_d bw_s_1 bc_s_ccc p_s_20 w_s_80_percent_ ta_s_c"},"\u4e91\u5e73\u53f0")))}}]),n}(c.a.Component);var d=function(){return c.a.createElement(m,null)};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8c847581.chunk.js.map
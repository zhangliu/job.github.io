(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(6),i=a.n(c),_=a(1),o=a(2),l=a(4),r=a(3),m=(a(12),a(13),n.a.Component,a(14),function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.initCanvas(this.canvas),this.page&&(this.page.id="page_".concat(window.$id++))}},{key:"initCanvas",value:function(e){var t,a,s=this;e&&(e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.getContext("2d");a.strokeStyle=t.strokeStyle||"#ff4d4f",e.ontouchstart=function(t){var s=t.touches[0].clientX,n=t.touches[0].clientY;a.beginPath(),a.moveTo(s,n),e.ontouchmove=function(e){var t=e.touches[0].clientX-this.offsetLeft,s=e.touches[0].clientY-this.offsetTop;a.lineWidth=1,a.lineTo(t,s),a.stroke()},e.ontouchend=function(t){e.ontouchmove=null,e.ontouchend=null}}}(e),a=function(){var e=window.$(s.page).next()[0];if(e){var t=e.id;window.location.href="".concat(window.location.origin).concat(window.location.pathname,"#").concat(t)}},(t=e).$tapCount=0,t.$timer=null,window.$(t).on("tap",(function(){if(t.$tapCount<1)return t.$tapCount++,void(t.$timer||(t.$timer=setTimeout((function(){t.$tapCount=0,t.$timer=null}),200)));a&&a()})),function(e,t){window.$(e).on("swiperight",(function(e){e.swipestart.coords[0]>10||t&&t()}))}(e,(function(){return window.history.go(-1)})))}},{key:"render",value:function(){var e=this,t=this.props.className||"";return n.a.createElement("div",{"data-role":"page",className:t,id:this.props.id,ref:function(t){return e.page=t},style:{backgroundColor:"#fff"}},n.a.createElement("canvas",{className:"p_s_a zi_s_100",ref:function(t){return e.canvas=t}}),this.renderHeader(),n.a.createElement("div",{className:"p_s_a t_s_0 l_s_0 b_s_0 r_s_0 d_s_f fd_s_c ai_s_c jc_s_c p_s_20"},n.a.createElement("div",{className:"mt_s_-120 d_s_f fd_s_c ai_s_c"},this.props.children)),this.renderFooter())}},{key:"renderHeader",value:function(){return n.a.createElement("img",{className:"h_s_25 ctc_m_s_10_ml_s_8",src:"./logo.jpg",alt:""})}},{key:"renderFooter",value:function(){return n.a.createElement("img",{className:"h_s_80 m_s_10 p_s_a b_s_0 r_s_0",src:"./me.jpeg",alt:""})}}]),a}(n.a.Component)),u=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m,null,n.a.createElement("div",{className:"fs_s_24 mb_s_20"},"\u524d\u7aef\u5f00\u53d1\uff08\u9ad8\u7ea7\uff09\u5de5\u7a0b\u5e08 \u2014 \u4e91\u5e73\u53f0\u65b9\u5411"),n.a.createElement("img",{className:"w_s_100_percent_",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590687405212&di=7c46ef0aec64a10b08e5f2531416b6d1&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F5g%2F7b%2FQJ6174749688.jpg",alt:""})),n.a.createElement(m,null,n.a.createElement("div",{className:"d_s_f jc_s_c"},n.a.createElement("img",{className:"h_s_30 m_s_8",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590779567731&di=f797028b40779b9dbf1708a31880680f&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F5%2F0%2F4%2F1593405.png%3FimageMogr2%2Fauto-orient%2Fformat%2Fjpg%2Fstrip%2Fthumbnail%2F%25211800",alt:""}),n.a.createElement("img",{className:"h_s_30 m_s_8",src:"https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/logo.ba774b28.svg",alt:""}),n.a.createElement("img",{className:"h_s_30 m_s_8",src:"//s3.pstatp.com/toutiao/static/img/logo.271e845.png",alt:""})),n.a.createElement("div",{className:"fs_s_32 fw_s_b mt_s_20 bs_s_d bw_s_1 bc_s_ccc p_s_20 w_s_80_percent_ ta_s_c"},"\u4e91\u5e73\u53f0")),n.a.createElement(m,null,n.a.createElement("div",{className:"fs_s_16 fw_s_b c_s_fff d_s_f"},n.a.createElement("div",{className:"w_s_120 p_s_18 ta_s_c bgc_s_3370ff m_s_1"},"React / Vue"),n.a.createElement("div",{className:"w_s_60 p_s_18 ta_s_c bgc_s_ff8b07 ctc_mb_s_1_mt_s_1"},"NodeJs")),n.a.createElement("div",{className:"fs_s_24 fw_s_b p_s_20 bgc_s_ee4d38 c_s_fff w_s_240 ta_s_c"},"js / css / html")),n.a.createElement(m,null,n.a.createElement("div",null,n.a.createElement("div",null,"* \u6709\u4ea7\u54c1\u8bbe\u8ba1 & \u754c\u9762\u8bbe\u8ba1\u7ecf\u9a8c\u4f18\u5148"),n.a.createElement("div",{className:"mt_s_20"},"* \u6709\u81ea\u5df1\u7684\u6280\u672f\u4ea7\u54c1\u3001\u5f00\u6e90\u4f5c\u54c1\u4f18\u5148"),n.a.createElement("div",{className:"mt_s_20"},"* ?"),n.a.createElement("img",{className:"h_s_179 mt_s_20",alt:"",src:"http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590839850268&di=ea6768dc4bd3abd94887f59e0a8aae61&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2F8d5494eef01f3a2968ca20934e3e06355c607c09.jpeg%3Ftoken%3D0e6dc97831d2aee6c27eca50c0ae32bb%26s%3D16E1BB0D40A182F01BB0AF970300D08D"}))),n.a.createElement(m,null,n.a.createElement("div",null,n.a.createElement("div",{className:"fs_s_48 fw_s_b ta_s_c"},"\u5408\xa0\xa0\xa0\xa0\u9002"),n.a.createElement("img",{className:"w_s_100_percent_ mt_s_20",alt:"",src:"./imgs/1.png"}))))}}]),a}(n.a.Component);var d=function(){return n.a.createElement(u,null)};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a9597034.chunk.js.map
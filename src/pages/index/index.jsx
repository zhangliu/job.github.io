import React from 'react';

function ClassName() {
  return (
    <div className="mt:200">
      <div data-role="page" id="pageone">
        <div data-role="header">
          <h1>欢迎来到我的主页</h1>
        </div>

        <div data-role="main" class="ui-content">
          <p>单击链接查看淡入效果。</p>
          <a href="#pagetwo" data-transition="fade">淡入第二个页面</a>
        </div>

        <div data-role="footer">
          <h1>底部文本</h1>
        </div>
      </div> 

      <div data-role="page" id="pagetwo">
        <div data-role="header">
          <h1>欢迎来到我的主页</h1>
        </div>

        <div data-role="main" class="ui-content">
          <p>点击链接返回上一个页面。<b>注意</b>: fade（淡入）效果是默认的</p>
          <a href="#pageone">返回第一个页面</a>
        </div>

        <div data-role="footer">
          <h1>底部文本</h1>
        </div>
      </div> 
    </div>
  )
}

export default ClassName;

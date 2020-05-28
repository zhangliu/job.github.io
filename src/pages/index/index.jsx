import React from 'react';
import Page from '../../components/page';

export default class ClassName extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <div className="fs:24 mb:20">前端开发（高级）工程师 — 云平台方向</div>
          <img className="w:100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590687405212&di=7c46ef0aec64a10b08e5f2531416b6d1&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F5g%2F7b%2FQJ6174749688.jpg" alt="" />
        </Page>
        <Page>
          <div className="d:f jc:c">
            <img className="h:25 m:16" src="//s3.pstatp.com/toutiao/static/img/logo.271e845.png" alt="" />
            <img className="h:25 m:16" src="https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/logo.ba774b28.svg" alt="" />
            <img className="h:25 m:16" src="https://zhengxin-pub.bj.bcebos.com/logopic/d350998f81880a134f86becd78dbf91d_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_200" alt="" />
          </div>
          <div className="fs:32 fw:b mt:20 bs:d bw:1 bc:ccc p:20 w:80% ta:c">
            云平台
          </div>
        </Page>
      </div>
    )
  }
}

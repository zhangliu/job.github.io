import React from 'react';
import Tag from '../../components/tag';
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
            <img className="h:32 m:8" src="//s3.pstatp.com/toutiao/static/img/logo.271e845.png" alt="" />
            <img className="h:32 m:8" src="https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/logo.ba774b28.svg" alt="" />
            <img className="h:32 m:8" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590779567731&di=f797028b40779b9dbf1708a31880680f&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F5%2F0%2F4%2F1593405.png%3FimageMogr2%2Fauto-orient%2Fformat%2Fjpg%2Fstrip%2Fthumbnail%2F%25211800" alt="" />
          </div>
          <div className="fs:32 fw:b mt:20 bs:d bw:1 bc:ccc p:20 w:80% ta:c">
            云平台
          </div>
        </Page>
        <Page>
          <div className="fs:16 fw:b c:fff d:f">
            <div className="w:120 p:16 ta:c bgc:3370ff">React / Vue</div>
            <div className="w:60 p:16 ta:c bgc:ff8b07">NodeJs</div>
          </div>
          <div className="fs:24 fw:b p:20 bgc:ee4d38 c:fff w:240 ta:c">js / css / html</div>
        </Page>
        <Page>
          <div>
            <div>* 有产品设计 & 界面设计经验优先</div>
            <div className="mt:20">* 有自己的技术产品、开源作品优先</div>
            <div className="mt:20">* ?</div>
          </div>
        </Page>
      </div>
    )
  }
}

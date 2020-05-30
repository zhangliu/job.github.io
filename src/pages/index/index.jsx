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
            <img className="h:30 m:8" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590779567731&di=f797028b40779b9dbf1708a31880680f&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F5%2F0%2F4%2F1593405.png%3FimageMogr2%2Fauto-orient%2Fformat%2Fjpg%2Fstrip%2Fthumbnail%2F%25211800" alt="" />
            <img className="h:30 m:8" src="https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/logo.ba774b28.svg" alt="" />
            <img className="h:30 m:8" src="//s3.pstatp.com/toutiao/static/img/logo.271e845.png" alt="" />
          </div>
          <div className="fs:32 fw:b mt:20 bs:d bw:1 bc:ccc p:20 w:80% ta:c">
            云平台
          </div>
        </Page>
        <Page>
          <div className="fs:16 fw:b c:fff d:f">
            <div className="w:120 p:18 ta:c bgc:3370ff m:1">React / Vue</div>
            <div className="w:60 p:18 ta:c bgc:ff8b07 mb:1 mt:1">NodeJs</div>
          </div>
          <div className="fs:24 fw:b p:20 bgc:ee4d38 c:fff w:240 ta:c">js / css / html</div>
        </Page>
        <Page>
          <div>
            <div>* 有产品设计 & 界面设计经验优先</div>
            <div className="mt:20">* 有自己的技术产品、开源作品优先</div>
            <div className="mt:20">* ?</div>
            <img className="h:179 mt:20" alt="" src="http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590839850268&di=ea6768dc4bd3abd94887f59e0a8aae61&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2F8d5494eef01f3a2968ca20934e3e06355c607c09.jpeg%3Ftoken%3D0e6dc97831d2aee6c27eca50c0ae32bb%26s%3D16E1BB0D40A182F01BB0AF970300D08D" />
          </div>
        </Page>
      </div>
    )
  }
}

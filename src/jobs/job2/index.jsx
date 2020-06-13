import React from 'react';
import Page from '../../components/page';

export default class ClassName extends React.Component {
  render() {
    return (
      <div className="h:100% w:100% d:f jc:c ai:c">
        <Page className="jc:c">
            <img className="w:60%" src="./imgs/5.jpeg" alt="" />
        </Page>
        <Page>
          <div className="d:f ai:c jc:c">
            <img className="w:45% bw:4 bs:s bc:222" src="./imgs/2.jpeg" alt="" />
            <img className="w:45% bw:4 bs:s bc:aa0000" src="./imgs/3.jpeg" alt="" />
            <img className="w:60% mt:-15 bw:4 bs:s bc:00aa00" src="./imgs/4.jpeg" alt="" />
          </div>
        </Page>
        <Page>
          <div className="fw:b ta:l w:100% c:666 mt:40">程序员小A：</div>
          <div className="c:999 bw:0 blw:3 bs:s bc:eee pl:20 mt:8">
                      “<span className="c:666">加入抖音研发团队，我个人感觉是迎来了技术能力指数级增长的新高峰。</span>
            你的思考方式、信息源、思维模式，周围的人都愿意给到帮助。大环境非常友好，也是其他公司很少见的。
            几乎任何领域的任何问题，都能找到在那个领域深耕多年的专精的人来协助。”
          </div>
          <div className="fw:b ta:l w:100% c:666 mt:20">程序员小B：</div>
          <div className="c:999 bw:0 blw:3 bs:s bc:eee pl:20 mt:8">
                        “<span className="c:666">团队做的事情，难度和复杂度在业界来讲都非常top，这种经历很难得。</span>
            而且同事里藏龙卧虎，面对挑战性比较大的项目，自己很紧张，但环顾四周，坐着一圈都是诸葛亮。
            之前和海外同事沟通，以为会遇到语言障碍，结果当地团队的一位同学用很溜的中文跟我打招呼。后来一问，居然会说9门语言。”
          </div>
        </Page>
        <Page>
          <div className="fw:b ta:l w:100% c:666 mt:40">成都高新区OCG国际中心</div>
          <img className="w:100% mt:8" src="./imgs/8.png" alt="" />
        </Page>
        <Page>
          <div>
            <div>* iOS（高级）研发工程师 - 抖音（成都）	</div>
            <div className="mt:20">* Android（高级）研发</div>
            <div className="mt:20">* 测试开发工程师 — 抖音</div>
            <div className="mt:20">* 后台核心研发工程师</div>
            <div className="mt:20">* 服务端技术负责人 — 抖音短视频</div>
            <div className="mt:20">* ......</div>
          </div>
        </Page>
      </div>
    )
  }
}

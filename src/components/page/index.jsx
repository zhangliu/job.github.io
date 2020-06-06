import React from 'react';
import { learnLine } from '../../utils/canvas';
import { initDblTap } from '../../utils/touch';

const defaultPage = 'page_1';
export default class ClassName extends React.Component {
  componentDidMount() {
    this.initPage();
    this.initCanvas(this.canvas);
  }

  initPage() {
    if (!this.page) return;

    this.page.id = `page_${window.$id++}`;
    this.page.style.width = document.documentElement.clientWidth + 'px';
    this.page.style.height = document.documentElement.clientHeight + 'px';

    const pageId = window.location.hash.replace(/#(.*?)$/, '$1') || defaultPage;
    window.$(`#${pageId}`).show();
  }

  initCanvas(canvas) {
    if (!canvas) return;

    canvas.width = document.documentElement.clientWidth;
    canvas.height =  document.documentElement.clientHeight;

    learnLine(canvas);

    initDblTap(canvas, (event) => {
      // const width = document.documentElement.clientWidth;
      // const clientX = event.touches[0].clientX;

      // let next = (width / 2) < clientX
      //   ? window.$(this.page).next()[0]
      //   : window.$(this.page).prev()[0];
      // next = next || document.getElementById(defaultPage);
      const next = window.$(this.page).next()[0] || document.getElementById(defaultPage);

      window.$(this.page).fadeOut(300, () => window.$(next).fadeIn());
    });
  }

  render() {
    const className = this.props.className || '';
    return (
      <div
        data-type="page"
        className={`bgc:fff d:n ${className}`}
        id={this.props.id}
        ref={node => this.page = node}
      >
        <canvas className="p:a zi:100" ref={node => this.canvas = node} />
        {this.renderHeader()}
        <div className="p:a t:0 l:0 b:0 r:0 d:f fd:c ai:c jc:c p:20">
          <div className="mt:-120 d:f fd:c ai:c">{this.props.children}</div>
        </div>
        {this.renderFooter()}
      </div>
    )
  }

  renderHeader() {
    const onClick = () => {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    return <img className="h:25 m:10 ml:8 p:a zi:101" onClick={onClick} src="./logo.jpg" alt="" />;
  }

  renderFooter() {
    return <img className="h:80 m:10 p:a b:0 r:0" src="./me.jpeg" alt="" />;
  }
}

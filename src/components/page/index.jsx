import React from 'react';
import { learnLine } from '../../utils/canvas';

import './index.scss';

const defaultPage = 'page_1';
export default class ClassName extends React.Component {
  componentDidMount() {
    this.initPage();
    this.initCanvas(this.canvas);
  }

  initPage() {
    if (!this.page) return;

    const { width, height } = this.getSize();
    this.page.style.width = `${width}px`;
    this.page.style.height = `${height}px`;

    const params  = new URLSearchParams(window.location.search);
    const pageId = params.get('page') ? `page_${params.get('page')}` : defaultPage;
    this.page.id = `page_${window.$id++}`;
    window.$(`#${pageId}`).show();
  }

  getSize() {
    const height = window.$(this.page).parent().height();
    const ratio = this.props.mode === 'vertical' ? (9 / 16) : (16 / 9);
    const width = height * ratio;

    return { width, height };
  }

  initCanvas(canvas) {
    if (!canvas) return;

    // const offset = window.$(this.page).position();
    // learnLine(canvas, { offset });
    window.$(canvas).dblclick(() => {
      const next = window.$(this.page).next()[0] || document.getElementById(defaultPage);
      window.$(this.page).fadeOut(300, () => window.$(next).fadeIn());
      // window.location.hash = next.id;
    });
  }

  render() {
    const className = this.props.className || '';
    return (
      <div
        className={`bgc:fff d:n p:r ${className} page`}
        style={{userSelect: 'none'}}
        ref={node => this.page = node}
      >
        <canvas className="p:a t:0 l:0 w:100% h:100% zi:100" ref={node => this.canvas = node} />
        {this.renderHeader()}
          <div className="d:f fd:c ai:c m:20 ml:40 mr:40">{this.props.children}</div>
        {this.renderFooter()}
      </div>
    )
  }

  renderHeader() {
    const onClick = () => {
      if (!this.canvas) return;
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    return <img className="h:20 m:10 ml:8" onClick={onClick} src="./logo.jpg" alt="" />;
  }

  renderFooter() {
    return null;
  }
}

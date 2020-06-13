import React from 'react';
import { getParams } from '../../utils/url';
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

    this.initPageSize();
    window.addEventListener('resize', () => this.initPageSize());

    const pageId = getParams('page') ? `page_${getParams('page')}` : defaultPage;
    this.page.id = `page_${window.$id++}`;
    window.$(`#${pageId}`).fadeIn();
  }

  initPageSize() {
    const height = window.$(this.page).parent().height();
    const ratio = this.props.mode === 'vertical' ? (9 / 16) : (16 / 9);
    const width = height * ratio;

    this.page.style.width = `${width}px`;
    this.page.style.height = `${height}px`;
  }

  initCanvas(canvas) {
    if (!canvas) return;

    canvas.width = window.$(this.page).width();
    canvas.height = window.$(this.page).height();

    learnLine(canvas);

    window.$(canvas).dblclick(() => {
      window.$(this.page).fadeOut(150, () => {
        const job = getParams('job');
        let page = +(getParams('page') || '1') + 1;
        page = document.getElementById(`page_${page}`) ? page : '1';
        window.location.search = `job=${job}&page=${page}`;
      });
    });
  }

  render() {
    const className = this.props.className || '';
    return (
      <div
        className={`bgc:fff d:n p:r page`}
        style={{userSelect: 'none'}}
        ref={node => this.page = node}
      >
        <canvas className="p:a t:0 l:0 w:100% h:100% zi:100" ref={node => this.canvas = node} />
        <div className="d:f fd:c h:100%">
          {this.renderHeader()}
          <div className={`d:f fd:c ai:c ml:40 mr:40 h:100% ${className}`}>{this.props.children}</div>
          {this.renderFooter()}
        </div>
      </div>
    )
  }

  renderHeader() {
    const onClick = () => {
      if (!this.canvas) return;
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    return (
      <div>
        <img className="h:25 m:10" onClick={onClick} src="./logo.jpg" alt="" />
      </div>
    );
  }

  renderFooter() {
    return null;
  }
}
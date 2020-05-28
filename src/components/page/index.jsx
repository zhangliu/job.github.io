import React from 'react';
import { learnLine } from '../../utils/canvas';
import { initTurnLeft, initDblTap } from '../../utils/touch';

export default class ClassName extends React.Component {
  componentDidMount() {
    this.initCanvas(this.canvas);
    if (this.page) this.page.id = `page_${window.$id++}`
  }

  initCanvas(canvas) {
    if (!canvas) return;

    canvas.width = document.documentElement.clientWidth;
    canvas.height =  document.documentElement.clientHeight;

    learnLine(canvas);

    initDblTap(canvas, () => {
      const next = window.$(this.page).next()[0];
      if (!next) return;

      const nextId = next.id;
      window.location.href = `${window.location.origin}${window.location.pathname}#${nextId}`;
    });
    // initTurnRight(canvas, () => {
    //   const next = window.$(this.page).next()[0];
    //   if (!next) return;

    //   const nextId = next.id;
    //   window.location.href = `${window.location.origin}${window.location.pathname}#${nextId}`;
    // });

    initTurnLeft(canvas, () => window.history.go(-1));
  }

  render() {
    const className = this.props.className || '';
    return (
      <div
        data-role="page"
        className={className}
        id={this.props.id}
        ref={node => this.page = node}
        style={{ backgroundColor: '#fff' }}
      >
        <canvas className="p:a zi:100" ref={node => this.canvas = node} />
        {this.renderHeader()}
        <div className="p:a t:0 l:0 b:0 r:0 d:f fd:c ai:c jc:c p:20">{this.props.children}</div>
        {this.renderFooter()}
      </div>
    )
  }

  renderHeader() {
    return <img className="h:25 m:10 ml:8" src="./logo.jpg" alt="" />;
  }

  renderFooter() {
    return <img className="h:100 m:10 p:a b:0 r:0" src="./qrcode.png" alt="" />;
  }
}

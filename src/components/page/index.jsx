import React from 'react';
import { learnLine } from '../../utils/canvas';
import { initTurnLeft, initTurnRight } from '../../utils/touch';

export default class ClassName extends React.Component {
  componentDidMount() {
    this.initCanvas(this.canvas);
    if (this.page) this.page.id = `page_${Math.random() * 100}`
  }

  initCanvas(canvas) {
    if (!canvas) return;

    canvas.width = document.documentElement.clientWidth;
    canvas.height =  document.documentElement.clientHeight;

    learnLine(canvas);

    initTurnRight(canvas, () => {
      const next = window.$(this.page).next()[0];
      if (!next) return;

      const nextId = next.id;
      window.location.href = `${window.location.origin}${window.location.pathname}#${nextId}`;
    });

    initTurnLeft(canvas, () => window.history.go(-1));
  }

  render() {
    return (
      <div data-role="page" id={this.props.id} ref={node => this.page = node}>
        <canvas className="p:a zi:100" ref={node => this.canvas = node} />
        {this.props.children}
      </div>
    )
  }
}

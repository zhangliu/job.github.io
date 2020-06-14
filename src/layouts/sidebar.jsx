import React from 'react';
import { sleep } from '../utils/time';
import { getParams } from './../utils/url';
import { goPage } from './../utils/page';

export default class ClassName extends React.Component{
  state = { pages: [] };
  async componentDidMount() {
    await waitPage();
    const pages = getPages();
    const doc = this.iframe.contentWindow.document;
    const heads = Array.from(document.head.children);
    
    const currentPage = getParams('page') || '1';
    heads.forEach(head => doc.head.appendChild(head.cloneNode(true)));
    pages.forEach(page => {
      const node = page.cloneNode(true);
      node.style.display = 'block';
      node.style.opacity = '1';

      const div = document.createElement('div');
      
      const width = window.$(this.iframe).width() - 2;
      window.$(div).width(width);
      scale(div, node);

      const isCurrent = node.id === `page_${currentPage}`;
      div.style.border = isCurrent ? '1px solid #0000ff' : '1px solid #eee';
      div.style.overflow = 'hidden';
      div.style.margin = `10px 0`;
      div.appendChild(node);
      div.onclick = () => goPage(node.id);

      doc.body.appendChild(div);
    });
  }

  render() {
    return (
      <div className="h:100% pl:16 pr:16">
        <iframe ref={node => this.iframe = node} title="iframe" className="h:100% w:100% bw:0" />
      </div>
    );
  }
}

async function waitPage() {
  while(true) {
    await sleep(100);
    const pages = getPages();
    if (pages.length > 0) return;
  }
}

function getPages() {
  return document.querySelectorAll('#content .page');
}

function scale(container, node) {
  const parentWidth = window.$(node).width();
  const parentHeight = window.$(node).height();

  const width = window.$(container).width();
  const ratio = width / parentWidth;

  node.style.transform = `scale(${ratio})`;
  node.style.transformOrigin = `0 0`;
  window.$(container).height(parentHeight * ratio);

  return node;
}
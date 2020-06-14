import React from 'react';
import { sleep } from '../utils/time';

export default class ClassName extends React.Component{
  state = { pages: [] };
  async componentDidMount() {
    await waitPage();
    const pages = getPages();
    const doc = this.iframe.contentWindow.document;
    const heads = Array.from(document.head.children);
    
    heads.forEach(head => doc.head.appendChild(head.cloneNode(true)));
    pages.forEach(page => {
      const node = page.cloneNode(true);
      node.style.display = 'block';
      node.style.transform = 'scale(0.5)';
      window.$(node).show();
      doc.body.appendChild(node);
    });
  }

  render() {
    return (
      <div className="h:100%">
        <iframe ref={node => this.iframe = node} title="iframe" className="h:100% w:100% bw:1 of:a" />
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
import React from 'react';
import Sidebar from './sidebar';

export default class ClassName extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <div className="p:a t:0 r:0 b:0 l:0 bgc:eff0f1">
        {/* <div id="header"></div> */}
        <div className="d:f p:a t:0 r:0 b:0 l:0">
          <div id='sidebar' className="w:240 bgc:fff bw:0 brw:1 bs:s bc:dee0e3"><Sidebar /></div>
          <div id='content' className="d:f jc:c ai:c w:100%">
            <div className="h:80%">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
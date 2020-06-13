import React from 'react';
// import Sidebar from './sidebar';

export default class ClassName extends React.Component{
  render() {
    return (
      <div className="p:a t:0 r:0 b:0 l:0">
        {/* <div id="header"></div> */}
        {/* <div id='sidebar'><Sidebar /></div> */}
        <div id='content' className="bgc:eff0f1 d:f jc:c ai:c p:r h:100%">
          {this.props.children}
        </div>
      </div>
    );
  }
}
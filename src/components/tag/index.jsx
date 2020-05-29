import React from 'react';

export default class ClassName extends React.Component {
  render() {
    if (this.props.type === 'purple') {
      return <div className="c:722ed1 bgc:f9f0ff bw:1 bs:s bc:d3adf7 p:3 pl:7 pr:7 br:2 fs:14">{this.props.children}</div>
    }
    if (this.props.type === 'red') {
      return <div className="c:f5222d bgc:fff1f0 bw:1 bs:s bc:ffa39e p:3 pl:7 pr:7 br:2 fs:14">{this.props.children}</div>
    }
    return <div className="c:666 bgc:fafafa bw:1 bs:s bc:d9d9d9 p:3 pl:7 pr:7 br:2 fs:14">{this.props.children}</div>;
  }
}

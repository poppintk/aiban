import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    var blockStyle = { width: '200px' };
    return (
      <div style={{ height: '100%' }}>
        <div
          style={{
            width: '90%',
            display: 'block',
            margin: '0 auto',
            height: '25vh'
          }}
        >
          <button style={blockStyle}>视频介绍</button>
          <button style={blockStyle}>新闻中心</button>
          <button style={blockStyle}>更多</button>
          <button style={blockStyle}>经典案例</button>
          <button style={blockStyle}>更多</button>
        </div>
      </div>
    );
  }
}

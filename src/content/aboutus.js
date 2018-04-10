import React, { Component } from 'react';
import header_image from '../image/header.png';
import LeftMenue from './leftMenue';

export default class AboutUs extends Component {
  render() {
    return (
      <div style={{ minWidth: '1113px' }}>
        <div
          style={{
            backgroundColor: '#e2eeff'
          }}
        >
          <LeftMenue />
          about us
        </div>
      </div>
    );
  }
}

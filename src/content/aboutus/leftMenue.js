import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class LeftMenue extends Component {
  render() {
    return (
      <div
      style={{
        marginLeft: '60px',
        height: '100%',
        backgroundColor: '#bce6ff',
        width: '10vw',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          paddingTop: '10px'
        }}
      >
        关于我们<Icon type="arrow-right" />
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '30px',
          cursor: 'pointer'
        }}
      >
        
        <Link to="/about">
          <Icon type="right" />企业简介
        </Link>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        <Link to="/qiyewenhua">
          <Icon type="right" />企业文化
        </Link>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        <Link to="/rongyao">
          <Icon type="right" />资质荣誉
        </Link>
      </div>
    </div>
    );
  }
}

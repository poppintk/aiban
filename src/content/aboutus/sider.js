import React, { Component } from 'react';
import { Divider, Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderComponent extends Component {
  state = {
    collapsed: true
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        trigger={null}
        style={{ height: 'calc(100vh - 155px)', backgroundColor: 'white' }}
      >
        <div className="logo" />
        <Menu theme="white" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/about">
              <Icon type="environment-o" />
              <span>企业简介</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/qiyewenhua">
              <Icon type="flag" />
              <span>企业文化</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/rongyao">
              <Icon type="smile-o" />
              <span>质量荣耀</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
          <div className="logo" />
          <Menu
            theme="white"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>

          <Content style={{height:'calc(100vh - 107px)'}}>

          </Content>
          <Footer style={{ textAlign: 'center' ,backgroundColor:'#001529',color:'white'}}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
       
    );
  }
}

export default App;

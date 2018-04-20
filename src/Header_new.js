import React, { Component } from 'react';
import { Layout } from 'antd';
import logo from './image/logo.png';
import { Menu, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;

export default class Top extends Component {
  state = {
    is_inline: false
  };

  handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1080) {
      console.log(true);
      this.setState({ is_inline: true });
    } else {
      console.log(false);
      this.setState({ is_inline: false });
    }
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <Content>
        <Header
          style={{
            backgroundColor: '#b5defc',
            height: '107px'
          }}
        >
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div>
              <img
                src={logo}
                style={{
                  width: '80px',
                  marginTop: '10px'
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                top: '-10px',
                fontSize: '20px',
                marginLeft: '20px',
                fontWeight: 'bold'
              }}
            >
              爱邦正明
            </div>
            <div
              style={{
                position: 'relative',
                top: '15px',
                left: '-100px',
                fontWeight: 'bold'
              }}
            >
              ai bang zheng ming
            </div>
          </div>
          <div style={{ position: 'absolute', right: '40px', top: '10px' }}>
            <Search
              placeholder="查詢"
              onSearch={value => console.log(value)}
              style={{ width: 130 }}
            />
            <span style={{ marginLeft: '5px' }}>简体/</span>
            <span>繁体</span>
          </div>

          <Menu
            onClick={this.handleClick}
            selectedKeys={[state.current]}
            mode={this.state.is_inline ? 'inline' : 'horizontal'}
            style={{
              backgroundColor: '#b5defc',
              position: 'absolute',
              right: '0px',
              top: '70px'
            }}
          >
            <Menu.Item key="setting:1">
              <Link to="/">
                <Icon type="mail" key="mail" />首頁
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Link to="/about">
                    <Icon type="appstore" key="app" />關於我們
                  </Link>
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Link to="/about">企業簡介</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/qiyewenhua">企業文化</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Link to="/rongyao">紙質榮譽</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />新聞中心
                </span>
              }
            >
              <Menu.Item key="setting:1">公司新聞</Menu.Item>
              <Menu.Item key="setting:2">工程動態</Menu.Item>
              <Menu.Item key="setting:3">行業新聞</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />工程業績
                </span>
              }
            >
              <Menu.Item key="setting:1">華東地區</Menu.Item>
              <Menu.Item key="setting:2">華南地區</Menu.Item>
              <Menu.Item key="setting:3">華中地區</Menu.Item>
              <Menu.Item key="setting:4">西南地區</Menu.Item>
              <Menu.Item key="setting:5">華北地區</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />技術研發
                </span>
              }
            >
              <Menu.Item key="setting:1">核心技術</Menu.Item>
              <Menu.Item key="setting:2">知識產權</Menu.Item>
              <Menu.Item key="setting:3">產學研合作</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />交流合作
                </span>
              }
            >
              <Menu.Item key="setting:1">大陸合作</Menu.Item>
              <Menu.Item key="setting:2">港臺合作</Menu.Item>
              <Menu.Item key="setting:3">國際合作</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />招賢納士
                </span>
              }
            >
              <Menu.Item key="setting:1">領軍人才</Menu.Item>
              <Menu.Item key="setting:2">招賢納士</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />聯係我們
                </span>
              }
            >
              <Menu.Item key="setting:1">聯係我們</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />新聞中心
                </span>
              }
            >
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </Content>
    );
  }
}

const state = {
  current: 'mail'
};

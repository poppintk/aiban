import React, { Component } from 'react';
import { Layout } from 'antd';
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
    // if (window.innerWidth < 1080) {
    //   console.log(true);
    //   this.setState({ is_inline: true });
    // } else {
    //   console.log(false);
    this.setState({ is_inline: false });
    // }
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
                src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
                style={{
                  width: '80px'
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                top: '-10px',
                fontSize: '20px',
                color: 'black',
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
                <Icon type="home" key="mail" />首页
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Link to="/about">
                    <Icon type="smile-o" key="app" />关于我们
                  </Link>
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Link to="/about">企业文化</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/qiyewenhua">企业文化</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Link to="/rongyao">质量荣耀</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Link to="/news">
                    <Icon type="setting" />新闻中心
                  </Link>
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Link to="/news">公司新闻</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">行业新闻</Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Link to="/service">
                    <Icon type="line-chart" />业绩展示
                  </Link>
                </span>
              }
            >
              <Menu.Item key="setting:2">
                <Link to="/service">
                  <Icon type="line-chart" />业绩展示
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/case">工程实例</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span>
                  <Link to="/tech">
                    <Icon type="rocket" />技术研发
                  </Link>
                </span>
              }
            />
            <SubMenu
              title={
                <span>
                  <Link to="/coop">
                    <Icon type="message" />交流合作
                  </Link>
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
                  <Link to="/team">
                    <Icon type="team" />领军人才
                  </Link>
                </span>
              }
            />
            <SubMenu
              title={
                <span>
                  <Link to="/contact">
                    <Icon type="phone" />联系我們
                  </Link>
                </span>
              }
            />
          </Menu>
        </Header>
      </Content>
    );
  }
}

const state = {
  current: 'mail'
};

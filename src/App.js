import React, { Component } from 'react';
import './App.css';
import Top from './Header_new';
import header_image from './image/header.png';
import { Layout, Select } from 'antd';
import Main from './content/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './content/Aboutus';
const { Header, Footer, Sider, Content } = Layout;
const Option = Select.Option;

export default class App extends Component {
  handleChange(value) {
    window.open(value, '_blank');
  }

  render() {
    return (
      <Layout>
        <Top />
        <Content style={{ height: '80vh', overflow: 'auto' }}>
          <img
            style={{
              width: '90%',
              display: 'block',
              margin: '0 auto',
              height: '200px'
            }}
            src={header_image}
          />

          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutUs} />
        </Content>
        <Footer
          style={{ height: 'calc(20vh - 117px)', backgroundColor: '#3c56a3' }}
        >
          <div
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div>版权所有：湖南爱邦正明环保工程公司</div>
            <div style={{ marginLeft: '10px' }}>
              <a
                href="mailto:1317426180@qq.com"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                企业邮箱
              </a>
            </div>
            <div style={{ marginLeft: '10px' }}>网站地图 </div>
            <div style={{ marginLeft: '10px' }}>技术支持</div>
            <div style={{ marginLeft: '10px' }}>天气预报</div>
            <div style={{ marginLeft: '10px' }}>联系我们</div>
            <div style={{ marginLeft: '10px' }}>友情链接：</div>
            <Select
              defaultValue="国际环保城"
              style={{ width: 120 }}
              onChange={this.handleChange}
              size={'small'}
            >
              <Option value="http://www.iepz.cc/">国际环保城</Option>
              <Option value="http://green.sina.com.cn/">新浪环保</Option>
              <Option value="http://www.dowater.com/">
                中国污水处理工程网
              </Option>
              <Option value="http://www.cenews.com.cn/">中国环境网</Option>
              <Option value="http://www.chinaenvironment.com/">
                中国环保网
              </Option>
              <Option value="http://www.zhb.gov.cn/">中国环保部</Option>
              <Option value="http://www.epday.com/">中国环境保护网</Option>
              <Option value="http://www.caepi.org.cn/">
                中国环保保护产业协会
              </Option>
            </Select>
          </div>
        </Footer>
      </Layout>
    );
  }
}

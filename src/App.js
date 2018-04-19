import React, { Component } from 'react';
import './App.css';
import Top from './Header_new';
import header_image from './image/header.png';
import { Layout, Select,Carousel } from 'antd';
import Main from './content/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './content/aboutus/aboutus';
import Qiyewenhua from './content/aboutus/qiyewenhua';
import Rongyao from './content/aboutus/rongyao';
const { Header, Footer, Sider, Content  } = Layout;
const Option = Select.Option;

export default class App extends Component {
  handleChange(value) {
    window.open(value, '_blank');
  }
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <Layout>
        <Top />
        <Content style={{ height: '80vh', overflow: 'auto' }}>
          <Carousel afterChange={this.onChange}>
            <img
              style={{
                height: '400px'
              }}
              src={header_image}
            />
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>

          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutUs} />
          <Route path="/qiyewenhua" component={Qiyewenhua} />
          <Route path="/rongyao" component={Rongyao} />
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

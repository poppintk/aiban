import React, { Component } from 'react';
import './App.css';
import Top from './Header';
import { Layout, Select, Carousel, Icon, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './content/Main';
import AboutUs from './content/aboutus/aboutus';
import Qiyewenhua from './content/aboutus/qiyewenhua';
import Rongyao from './content/aboutus/rongyao';
import FooterComponent from './Footer';
import News from './content/news/news';
import Service from './content/service/service';
import Coop from './content/coop/coop';
import CoreTech from './content/tech/tech';
import Team from './content/team/team';
import Contact from './content/contact/contact';
import Case from './content/case/case';
const { Header, Sider, Content } = Layout;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;

export default class App extends Component {
  handleChange(value) {
    window.open(value, '_blank');
  }
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <Layout.Content style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Top tool bar */}
        <Top />
        {/* content */}
        <Content
          style={{
            width: '100vw',
            backgroundColor: 'white',
            height: 'calc(100vh - 165px)',
            overflowX: 'hidden'
          }}
        >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={AboutUs} />
            <Route path="/qiyewenhua" component={Qiyewenhua} />
            <Route path="/rongyao" component={Rongyao} />
            <Route path="/news" component={News} />
            <Route path="/service" component={Service} />
            <Route path="/coop" component={Coop} />
            <Route path="/tech" component={CoreTech} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
            <Route path="/case" component={Case} />
          </Switch>
        </Content>
        <FooterComponent />
      </Layout.Content>
    );
  }
}

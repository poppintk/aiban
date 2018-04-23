import React, { Component } from 'react';
import { Icon } from 'antd';
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

import './mobile_app.css';
const MobileApp = () => {
  return (
    <div>
      <div className="navbar navbar-fixed-top">
        <div>
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="brand">
              <img
                src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
                style={{
                  width: '50px',
                  marginLeft: '30px'
                }}
              />爱邦正明
            </Link>
            <div
              className="nav-collapse collapse"
              style={{ position: 'relative', top: 15 }}
            >
              <ul className="nav">
                <li>
                  <Link to="/">
                    <Icon type="home" key="mail" />首页
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                  >
                    <Icon type="smile-o" key="app" />关于我们
                  </Link>
                  {/* <li className="dropdown">
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Action</a>
                      </li>
                      <li>
                        <a href="#">Another action</a>
                      </li>
                    </ul>
                  </li> */}
                </li>
                <li>
                  <Link to="/news">
                    <Icon type="setting" />新闻中心
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    <Icon type="line-chart" />业绩展示
                  </Link>
                </li>
                <li>
                  <Link to="/tech">
                    <Icon type="rocket" />技术研发
                  </Link>
                </li>
                <li>
                  <Link to="/coop">
                    <Icon type="message" />交流合作
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <Icon type="team" />领军人才
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Icon type="phone" />联系我們
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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

        <hr />
      </div>
      <FooterComponent />
    </div>
  );
};

export default MobileApp;

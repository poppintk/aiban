import Head from "next/head";
import Link from "next/link";
import React from "react";
import Hover from "./hover";
import { Motion, spring } from "react-motion";
import { Menu, Icon, Button } from "antd";
const SubMenu = Menu.SubMenu;

export default class Layout extends React.Component {
  componentDidMount() {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  }
  render() {
    const english_text = { fontSize: "9px" };
    return (
      <div style={{ overflow: "hidden" }}>
        <Head>
          <title>湖南爱邦正明环保工程公司</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="baidu-site-verification" content="uQvGC18gmt" />
          <meta name="baidu-site-verification" content="Ak8Z1l18Uu" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="description"
            content="湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。公司董事长黎勃先生2003年获美国耶鲁大学环境工程博士学位，曾任美国总统克林顿环保顾问。从事大气污染治理二十多年，引领和参与十多项专利技术的研制和开发，与国际上顶尖的环保公司美国爱邦（Airbone）公司有长远的战略合作伙伴关系，2010年美国爱邦获美国总统克林顿三千万美元科研支持，公司有国际上顶尖学府美国耶鲁大学作为科研基地，引领国际环保高新科技。"
          />
          <meta
            name="keywords"
            content="湖南爱邦正明环保工程公司,脱硫技术,脱硝工艺,除尘;湖南爱邦正明;爱邦;正明;长沙爱邦正明;長沙;湖南;愛;環保;綠色;湖南長沙;湖南爱邦正明環保；"
          />
          <meta name="author" content="湖南爱邦正明" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-tabs@2/style/react-tabs.css"
          />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="http://cdn.bootcss.com/antd/2.9.3/antd.css"
          />
        </Head>
        <style jsx>{`
          * {
            font-family: "SF Pro Display", Roboto, Noto, Arial, "PingFang SC",
              "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
          }
          a {
            line-height: 100%;
          }
          .navbar-toggler-icon {
            color: black;
          }
        `}</style>

        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(247, 250, 255)",
            color: "black",
            fontSize: "12px",
            position: "fixed",
            zIndex: "90",
            backgroundImage:
              "url(https://aiban.oss-cn-beijing.aliyuncs.com/banner2.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}
        >
          <div className="form-inline">
            <marquee
              style={{
                width: "calc(100vw - 260px)",
                padding: "10px",
                fontSize: "12px",
                color: "black",
                fontWeight: "bold"
              }}
            >
              爱邦兴国 博爱明慧 爱邦正明 环保先锋 让整个地球共享一片蓝天
            </marquee>
            <div
              style={{
                width: "210px",
                color: "black",
                fontWeight: "bold"
              }}
            >
              业务咨询电话：
              <a style={{ color: "black" }} href="tel:0086-183-9098-0101">
                0086-183-9098-0101
              </a>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            position: "relative",
            top: "0px",
            backgroundColor: "#edf3ff",
            backgroundImage:
              "url(https://aiban.oss-cn-beijing.aliyuncs.com/banner.jpeg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            zIndex: "99"
          }}
        >
          <a className="navbar-brand" href="/" style={{ display: "flex" }}>
            <img
              src="https://aiban.oss-cn-beijing.aliyuncs.com/logo2.png"
              style={{
                width: "60px",
                height: "50px"
              }}
            />

            <div
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: "10px",
                lineHeight: "100%",
                marginTop: "5px",
                color: "black"
              }}
            >
              爱邦正明环保
              <br />
              <span style={english_text}>AI BANG ZHENG MING</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link prefetch href="/">
                  <a className="nav-link" style={{ color: "black" }}>
                    <Hover
                      chineseTitle={"首页"}
                      englishTitle={"HOME"}
                      submenu={[]}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }}>
                  <Hover
                    chineseTitle={"关于我们"}
                    englishTitle={"ABOUT US"}
                    submenu={[
                      { name: "企业文化", url: "/culture" },
                      { name: "关于我们", url: "/about" },
                      { name: "企业荣耀", url: "/honor" }
                    ]}
                  />
                </a>
              </li>
              <li className="nav-item">
                <Link prefetch href="/news">
                  <a className="nav-link" style={{ color: "black" }}>
                    <Hover
                      chineseTitle={"新闻中心"}
                      englishTitle={"NEWS"}
                      submenu={[]}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }}>
                  <Hover
                    chineseTitle={"业绩展示"}
                    englishTitle={"PROJECTS"}
                    submenu={[
                      { name: "业绩展示", url: "/service" },
                      { name: "工程实例", url: "/case" }
                    ]}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }}>
                  <Hover
                    chineseTitle={"工程实例"}
                    englishTitle={"CASES"}
                    submenu={[
                      { name: "工程实例", url: "/case" },
                      { name: "业绩展示", url: "/service" }
                    ]}
                  />
                </a>
              </li>
              <li className="nav-item">
                <Link prefetch href="/tech">
                  <a className="nav-link" style={{ color: "black" }}>
                    <Hover
                      chineseTitle={"技术研发"}
                      englishTitle={"R&D"}
                      submenu={[]}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/coop">
                  <a className="nav-link" style={{ color: "black" }}>
                    <Hover
                      chineseTitle={"交流合作"}
                      englishTitle={"COOPERATION"}
                      submenu={[]}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch href="/team">
                  <a className="nav-link" style={{ color: "black" }}>
                    <Hover
                      chineseTitle={"领军人才"}
                      englishTitle={"TEAM"}
                      submenu={[]}
                    />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }}>
                  <Hover
                    chineseTitle={"联系我們"}
                    englishTitle={"CONTACT US"}
                    submenu={[
                      { name: "联系方式", url: "/contact" },
                      { name: "发送邮件", url: "/qa" }
                    ]}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Motion defaultStyle={{ offset: 2 }} style={{ offset: spring(2) }}>
          {style => {
            return (
              <div
                style={{
                  marginTop: style.offset
                }}
              >
                {this.props.children}
              </div>
            );
          }}
        </Motion>
        <div style={{ position: "fixed", bottom: "81px" }}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="white"
            inlineCollapsed={true}
            onClick={submenu => {
              if (submenu.key == 1) {
                window.location.href = "/contact";
              } else if (submenu.key == 2) {
                window.location.href = "/qa";
              }
            }}
            style={{ zIndex: 999 }}
          >
            <Menu.Item key="1">
              <Icon type="message" theme="outlined" />
              <span>联系我们</span>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Icon type="aliwangwang" theme="outlined" />
              <span>微信联系</span>
            </Menu.Item> */}
            <Menu.Item key="2">
              <Icon type="mail" theme="outlined" />
              <span>发送邮件</span>
            </Menu.Item>
          </Menu>
        </div>
        <footer
          className="container-fluid"
          style={{
            backgroundColor: "rgb(247, 250, 255,0.9)",
            float: "bottom",
            backgroundImage:
              "url(https://aiban.oss-cn-beijing.aliyuncs.com/company_banner.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            fontWeight: "bold",
            transform: "scaleY(-1)"
          }}
        >
          <div style={{ transform: "scaleY(-1)" }}>
            <p className="float-right">
              <a href="#">返回顶部</a>
            </p>
            <div style={{ clear: "both" }}>
              <div style={{ textAlign: "center", height: "35px" }}>
                版权所有：湖南爱邦正明环保工程公司 <a href="http://www.beian.miit.gov.cn/">备案号：湘ICP备15004135号</a>
              </div>

              <div
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-12px",
                  height: "40px",
                  paddingBottom: "15px"
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  <a
                    href="mailto:1317426180@qq.com"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    企业邮箱
                  </a>
                </div>
                {/* <div style={{ marginLeft: '10px' }}>网站地图 </div> */}
                <div style={{ marginLeft: "10px" }}>友情链接：</div>
                <select
                  defaultValue="国际环保城"
                  style={{ width: 120 }}
                  onChange={e => onChangeHandler(e)}
                  size={"small"}
                >
                  <option value="http://www.iepz.cc/">国际环保城</option>
                  <option value="http://green.sina.com.cn/">新浪环保</option>
                  <option value="http://www.dowater.com/">
                    中国污水处理工程网
                  </option>
                  <option value="http://www.cenews.com.cn/">中国环境网</option>
                  <option value="http://www.chinaenvironment.com/">
                    中国环保网
                  </option>
                  <option value="http://www.zhb.gov.cn/">中国环保部</option>
                  <option value="http://www.epday.com/">中国环境保护网</option>
                  <option value="http://www.caepi.org.cn/">
                    中国环保保护产业协会
                  </option>
                </select>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const onChangeHandler = e => {
  window.open(e.currentTarget.value, "_blank");
};

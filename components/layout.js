import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Hover from './hover';
import {Motion, spring} from 'react-motion';

export default class Layout extends React.Component{
  componentDidMount(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  }
  render(){
    const english_text = {fontSize:'9px'};
    return(
      <div>
      <Head>
        <title>湖南爱邦正明环保工程公司</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="baidu-site-verification" content="uQvGC18gmt" />
        <meta name="baidu-site-verification" content="Ak8Z1l18Uu" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta
          name="description"
          content="湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。公司董事长黎勃先生2003年获美国耶鲁大学环境工程博士学位，曾任美国总统克林顿环保顾问。从事大气污染治理二十多年，引领和参与十多项专利技术的研制和开发，与国际上顶尖的环保公司美国爱邦（Airbone）公司有长远的战略合作伙伴关系，2010年美国爱邦获美国总统克林顿三千万美元科研支持，公司有国际上顶尖学府美国耶鲁大学作为科研基地，引领国际环保高新科技。"
        />
        <meta name="keywords" content="湖南爱邦正明环保工程公司,脱硫技术,脱硝工艺,除尘;湖南爱邦正明;爱邦;正明;长沙爱邦正明;長沙;湖南;愛;環保;綠色;湖南長沙;湖南爱邦正明環保；" />
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
      </Head>
      <style jsx>{`
        a {
          line-height:100%;
          font-weight:bold;
        }
        .navbar-toggler-icon {
          color: black;
        }
      `}</style>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          position: 'relative',
          backgroundColor: '#e3f2fd',
          boxShadow:'1px 1px 3px grey'
        }}
      >
        <a className="navbar-brand" href="/" style={{display:'flex'}}>
          <img
            src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
            style={{
              width: '60px',
              height:'50px'
            }}
          />
   
        <div style={{fontSize:18,fontWeight:'bold',marginLeft:'10px',lineHeight:'100%',marginTop:'5px',color:'black'}}>
          爱邦正明环保
          <br/>
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
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'首页'} englishTitle={'HOME'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/about">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'关于我们'} englishTitle={'ABOUT US'} submenu={['企业文化','关于我们','企业荣耀']}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/news">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'新闻中心'} englishTitle={'NEWS'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/service">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'业绩展示'} englishTitle={'SERVICE'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/tech">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'技术研发'} englishTitle={'TECH'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/coop">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'交流合作'} englishTitle={'CO-OP'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/team">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'领军人才'} englishTitle={'TEAM'} submenu={[]}/>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch href="/contact">
                <a className="nav-link" style={{color:'black'}}>
                  <Hover chineseTitle={'联系我們'} englishTitle={'CONTACT US'} submenu={[]}/>
                </a>
              </Link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              style={{width:'150px'}}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              搜索
            </button>
          </form>
        </div>
      </nav>
      <Motion defaultStyle={{offset : -1200}} style={{offset: spring(0)}}>
        {
          (style)=>{
            return(
              <div style={{marginLeft:style.offset}}>
                {this.props.children}
              </div>
            );
          }
        }
      </Motion>
      <footer className="container-fluid" style={{ backgroundColor: '#e3f2fd',float:'bottom',boxShadow:'-1px -1px 3px grey' }}>
        <p className="float-right">
          <a href="#">返回顶部</a>
        </p>
        <div style={{ clear: 'both' }}>
          <div style={{ textAlign: 'center', height: '35px' }}>
            版权所有：湖南爱邦正明环保工程公司
          </div>
          <div
            style={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-12px',
              height: '40px'
            }}
          >
            <div style={{ marginLeft: '10px' }}>
              <a
                href="mailto:1317426180@qq.com"
                style={{ color: 'black', textDecoration: 'none' }}
              >
                企业邮箱
              </a>
            </div>
            <div style={{ marginLeft: '10px' }}>网站地图 </div>
            <div style={{ marginLeft: '10px' }}>友情链接：</div>
            <select
              defaultValue="国际环保城"
              style={{ width: 120 }}
              onChange={(e)=>onChangeHandler(e)}
              size={'small'}
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
      </footer>
    </div>
    );
  }
}



const onChangeHandler = (e)=>{
  window.open(e.currentTarget.value, "_blank");
}

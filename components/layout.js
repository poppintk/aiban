import Head from 'next/head';

export default props => {
  return (
    <div>
      <Head>
        <title>湖南爱邦正明环保工程公司</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="baidu-site-verification" content="uQvGC18gmt" />
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
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        />
      </Head>
      <style jsx>{`
        a {
          color: black;
        }
        .navbar-toggler-icon {
          color: black;
        }
      `}</style>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          position: 'relative',
          backgroundColor: '#e3f2fd'
        }}
      >
        <a className="navbar-brand" href="/" style={{fontSize:'13px'}}>
          <img
            src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
            style={{
              width: '50px'
            }}
          />爱邦正明环保
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
              <a className="nav-link" href="/">
                首页 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                关于我们
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                新闻中心
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">
                业绩展示
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tech">
                技术研发
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/coop">
                交流合作
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/team">
                领军人才
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                联系我們
              </a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="搜索"
              aria-label="Search"
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
      <div>
        {props.children}
      </div>
      <footer className="container-fluid" style={{ backgroundColor: '#e3f2fd',float:'bottom' }}>
        <p className="float-right">
          <a href="#">返回頂部</a>
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
};


const onChangeHandler = (e)=>{
  window.open(e.currentTarget.value, "_blank");
}

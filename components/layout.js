import Head from 'next/head';

export default props => {
  return (
    <div>
      <Head>
        <title>湖南爱邦正明环保工程公司</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="baidu-site-verification" content="uQvGC18gmt" />
        <meta
          name="description"
          content="湖南爱邦正明環保工程公司，讓我們的生活環境更加美好"
        />
        <meta name="keywords" content="湖南爱邦正明;爱邦;正明;长沙爱邦正明;長沙；湖南；愛；環保；綠色；湖南長沙；湖南爱邦正明環保；" />
        <meta name="author" content="湖南爱邦正明；爱邦；正明；长沙爱邦正明" />
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
        <a className="navbar-brand" href="/">
          <img
            src="https://aiban.oss-cn-beijing.aliyuncs.com/logo.png"
            style={{
              width: '50px'
            }}
          />爱邦正明
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
      <footer className="container-fluid" style={{ backgroundColor: '#e3f2fd' }}>
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
              onChange={this.onChangeHandler}
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

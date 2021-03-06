import Layout from "../components/layout";

const data = [
  {
    url: "https://aiban.oss-cn-beijing.aliyuncs.com/home1.jpg",
    desc: ""
  },
  {
    url: "https://aiban.oss-cn-beijing.aliyuncs.com/home1.jpg",
    desc: ""
  },
  {
    url: "https://aiban.oss-cn-beijing.aliyuncs.com/home3.jpg",
    desc: ""
  },
  {
    url: "https://aiban.oss-cn-beijing.aliyuncs.com/home4.jpg",
    desc: ""
  },
  {
    url: "https://aiban.oss-cn-beijing.aliyuncs.com/home5.jpg",
    desc: ""
  }
];

const generateCarousel = () => {
  let style = { height: "60vh" };
  return data.map((info, k) => {
    if (k === 0) {
      return (
        <div className="carousel-item active" key={k}>
          <img
            className="d-block w-100"
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
            alt="slider loading ..."
            src={info.url}
            data-holder-rendered="true"
            style={style}
          />
          <div className="carousel-caption d-none d-md-block">
            <p>{info.desc}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel-item" key={k}>
          <img
            className="d-block w-100"
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
            alt="slider loading..."
            src={info.url}
            data-holder-rendered="true"
            style={style}
          />
          <div className="carousel-caption d-none d-md-block">
            <p>{info.desc}</p>
          </div>
        </div>
      );
    }
  });
};
const getIndex = () => {
  data.map((info, index) => {
    if (index === 0) {
      return (
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to={index}
          className="active"
        />
      );
    } else {
      return (
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to={index}
          className=""
        />
      );
    }
  });
};

export default () => {
  return (
    <div>
      <style>
        {`
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #b2cfff; 
            border-radius: 10px;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #b2cfff; 
        }
        .card-text{
          font-weight:bold;
        }
        .background {
          background: rgba(189, 223, 255, 1);
          background: -moz-linear-gradient(
            left,
            rgba(189, 223, 255, 1) 2%,
            rgba(107, 179, 255, 1) 96%,
            rgba(107, 179, 255, 1) 100%
          );
          background: -webkit-gradient(
            left top,
            right top,
            color-stop(2%, rgba(189, 223, 255, 1)),
            color-stop(96%, rgba(107, 179, 255, 1)),
            color-stop(100%, rgba(107, 179, 255, 1))
          );
          background: -webkit-linear-gradient(
            left,
            rgba(189, 223, 255, 1) 2%,
            rgba(107, 179, 255, 1) 96%,
            rgba(107, 179, 255, 1) 100%
          );
          background: -o-linear-gradient(
            left,
            rgba(189, 223, 255, 1) 2%,
            rgba(107, 179, 255, 1) 96%,
            rgba(107, 179, 255, 1) 100%
          );
          background: -ms-linear-gradient(
            left,
            rgba(189, 223, 255, 1) 2%,
            rgba(107, 179, 255, 1) 96%,
            rgba(107, 179, 255, 1) 100%
          );
          background: linear-gradient(
            to right,
            rgba(189, 223, 255, 1) 2%,
            rgba(107, 179, 255, 1) 96%,
            rgba(107, 179, 255, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bddfff', endColorstr='#6bb3ff', GradientType=1 );
        }
        `}
      </style>
      <Layout>
        <main
          role="main"
          style={{
            margin: "-2px",
            border: "none",
            // backgroundImage:
            //   'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky3.jpg)',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center center',
            backgroundColor: "#ccffff"
          }}
        >
          {/* carousel start  */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide d-none d-lg-block"
            data-ride="carousel"
            style={{
              maxWidth: "1300px",
              margin: "0 auto"
            }}
          >
            <ol className="carousel-indicators">{getIndex()}</ol>
            <div className="carousel-inner">{generateCarousel()}</div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* carouselE end ---  */}
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <div
              style={{
                border: "none",
                backgroundImage:
                  "url(https://aiban.oss-cn-beijing.aliyuncs.com/value1.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            >
              <div className="card-body">
                <p className="card-text">
                  湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。
                  公司拥有数十项核心技术和多项专利，其专利技术应用在遍及17省市用户的脱硫，脱销和除尘工程中，工程合格，达标排放。
                </p>
              </div>
            </div>
            <div>
              <div
                className="row"
                style={{ textAlign: "center", paddingTop: "5px" }}
              >
                <div
                  className="card col-lg-2 offset-lg-1 mb-2"
                  style={{
                    border: "none",
                    // backgroundImage:
                    // 'url(https://aiban.oss-cn-beijing.aliyuncs.com/index_background.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    backgroundColor: "rgb(91, 211, 203,0.8)"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">企业宗旨</h5>
                    <div className="card-text">
                      高效节能
                    </div>
                  </div>
                </div>
                <div
                  className="card col-lg-2 mb-2 offset-lg-2"
                  style={{
                    border: "none",
                    // backgroundImage:
                    // 'url(https://aiban.oss-cn-beijing.aliyuncs.com/index_background.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    backgroundColor: "rgb(91, 211, 203,0.8)"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">企业使命</h5>
                    <div className="card-text">
                      让整个地球共享一片蓝天
                    </div>
                  </div>
                </div>
                <div
                  className="card col-lg-2 mb-2 offset-lg-2"
                  style={{
                    border: "none",
                    // backgroundImage:
                    // 'url(https://aiban.oss-cn-beijing.aliyuncs.com/index_background.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    backgroundColor: "rgb(91, 211, 203,0.8)"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">长期目标</h5>
                    <div className="card-text">科技先锋 行业典范</div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ textAlign: "center", paddingBottom: "10px" }}
              >
                <div
                  className="card col-lg-2 mb-2 offset-lg-3"
                  style={{
                    border: "none",
                    // backgroundImage:
                    // 'url(https://aiban.oss-cn-beijing.aliyuncs.com/index_background.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    backgroundColor: "rgb(91, 211, 203,0.8)"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">经营理念</h5>
                    <div className="card-text">
                      爱邦兴国 博爱明慧
                      <br /> 爱邦正明 环保节能
                    </div>
                  </div>
                </div>
                <div
                  className="card col-lg-2 mb-2 offset-lg-2"
                  style={{
                    border: "none",
                    // backgroundImage:
                    // 'url(https://aiban.oss-cn-beijing.aliyuncs.com/index_background.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center center',
                    backgroundColor: "rgb(91, 211, 203,0.8)"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">企业初心</h5>
                    <div className="card-text">
                      合作共赢
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

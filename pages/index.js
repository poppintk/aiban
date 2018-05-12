import Layout from '../components/layout';

const data = [
  {
    url: 'https://aiban.oss-cn-beijing.aliyuncs.com/home1.jpg',
    desc: '',
  },
  {
    url: 'https://aiban.oss-cn-beijing.aliyuncs.com/home2.jpg',
    desc: '',
  },
  {
    url: 'https://aiban.oss-cn-beijing.aliyuncs.com/home3.jpg',
    desc: '',
  },
  {
    url: 'https://aiban.oss-cn-beijing.aliyuncs.com/home4.jpg',
    desc: '',
  },
  {
    url: 'https://aiban.oss-cn-beijing.aliyuncs.com/home5.jpg',
    desc: '',
  },
];

const generateCarousel = () => {
  let style = { height: '60vh' };
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
        .card-text{
          font-weight:bold;
        }
        `}
      </style>
      <Layout>
        <main role="main">
          {/* carousel start  */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide d-none d-lg-block"
            data-ride="carousel"
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
          <div className="card" 
            style={{
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/company.jpeg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'2px 2px 30px #c0cee5'
              }}>
            <marquee>
            <div className="card-body">
              <p className="card-text">
                湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。
                公司拥有数十项核心技术和多项专利，其专利技术应用在遍及17省市用户的脱硫，脱销和除尘工程中，工程合格率达100%，达标排放率100%。
              </p>
            </div>
            </marquee>
          </div>
          <div style={{
            backgroundImage:
            'url(https://aiban.oss-cn-beijing.aliyuncs.com/company6.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            boxShadow:'2px 2px 20px #c0cee5'
          }}>
          <div className="row" style={{ textAlign: 'center',paddingTop:'5px' }}>
            <div className="card col-lg-2 offset-lg-1 mb-2"
              style={{
                border:'none',
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/value1.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'0px 0px 50px white'
              }}>
              <div className="card-body">
                <h5 className="card-title">企业宗旨</h5>
                <p className="card-text">让整个地球共享一片蓝天</p>
              </div>
            </div>
            <div className="card col-lg-2 mb-2 offset-lg-2"
              style={{
                border:'none',
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/value3.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'0px 0px 50px white'
              }}>
              <div className="card-body">
                <h5 className="card-title">企业精神</h5>
                <p className="card-text">
                  {' '}
                  以人为本，激扬进取，自强不息，同甘共苦
                </p>
              </div>
            </div>
            <div className="card col-lg-2 mb-2 offset-lg-2"
              style={{
                border:'none',
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/value5.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'0px 0px 50px white'
              }}>
              <div className="card-body">
                <h5 className="card-title">长期目标</h5>
                <p className="card-text">科技先锋，行业典范</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="card col-lg-2 mb-2 offset-lg-3"
              style={{
                border:'none',
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/value2.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'0px 0px 50px white'
              }}>
              <div className="card-body">
                <h5 className="card-title">经营理念</h5>
                <p className="card-text">爱邦兴国 博爱明慧 爱邦正明 环保先锋</p>
              </div>
            </div>
            <div className="card col-lg-2 mb-2 offset-lg-2"
              style={{
                border:'none',
                backgroundImage:
                'url(https://aiban.oss-cn-beijing.aliyuncs.com/value4.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                boxShadow:'0px 0px 50px white'
              }}>
              <div className="card-body">
                <h5 className="card-title">服务理念</h5>
                <p className="card-text"> 顶尖技术服务于用户，创精品工程</p>
              </div>
            </div>
          </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

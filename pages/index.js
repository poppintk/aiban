import Layout from '../components/layout';

const data = [
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/case_1.jpg",
    desc:"武钢"
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/case_10.JPG",
    desc:"武钢"
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/case_11.JPG",
    desc:"武钢"
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/case_12.JPG",
    desc:"武钢"
  }
];

const generateCarousel = ()=>{
  return data.map((info,k)=>{
    if(k === 0){
      return(
        <div class="carousel-item active">
          <img class="d-block w-100" 
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" 
            alt="slider loading ..." 
            src={info.url}
            data-holder-rendered="true"
            style={{width:'100vw',height:'80vh'}}/>
          <div class="carousel-caption d-none d-md-block">
            <p>{info.desc}</p>
          </div>
        </div>
      );
    }else{
      return(
        <div className="carousel-item">
          <img className="d-block w-100" 
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" 
            alt="slider loading..." 
            src={info.url}
            data-holder-rendered="true"
            style={{width:'100vw',height:'80vh'}}/>
          <div class="carousel-caption d-none d-md-block">
            <p>{info.desc}</p>
          </div>
        </div>
      );
    }
  });
}
const getIndex = ()=>{
  data.map((info, index)=>{
    if(index === 0){
      return (
        <li data-target="#carouselExampleCaptions" data-slide-to={index} className="active"></li>
      );

    }
    else{
      return(
        <li data-target="#carouselExampleCaptions" data-slide-to={index} className=""></li>
      );
    }
  });
}


export default () => {
  return (
    <div>
      <Layout>
        <main role="main">
          {/* carousel start  */}
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              {getIndex()}
            </ol>
            <div class="carousel-inner">
              {generateCarousel()}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>{/* carouselE end ---  */}
          <br/>
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_12.JPG"
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>正德厚生</h2>
                <p>
                  博爱明慧 爱邦正明 环保先锋 让整个地球共享一片蓝天
                </p>
                <p>
                  <a className="btn btn-secondary" href="/about" role="button">
                    詳情 »
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_13.JPG"
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>明誠至信</h2>
                <p>
                  公司拥有数十项核心技术和多项专利，其专利技术应用在遍及17省市用户的脱硫，脱销和除尘工程中，工程合格率达100%，达标排放率100%。
                </p>
                <p>
                  <a className="btn btn-secondary" href="/about" role="button">
                    詳情 »
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img
                  className="rounded-circle"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_14.JPG"
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>正明環保，造福人類</h2>
                <p>
                  公司始终坚持以技术为先导，以人为本，海纳百川，共赢发展。公司将以先进的技术服务于用户，始终贯彻公司一贯的宗旨：“让整个地球村共享一片蓝天”，为中国的蓝天目标坚持努力！
                </p>
                <p>
                  <a className="btn btn-secondary" href="/about" role="button">
                    詳情 »
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  正德厚生
                </h2>
                <p className="lead">
                  湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="featurette-image img-fluid mx-auto"
                  data-src="holder.js/500x500/auto"
                  alt="500x500"
                  style={{ width: '500px', height: '500px' }}
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_15.JPG"
                  data-holder-rendered="true"
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                  明誠至信
                </h2>
                <p className="lead">
                  公司拥有数十项核心技术和多项专利，其专利技术应用在遍及17省市用户的脱硫，脱销和除尘工程中，工程合格率达100%，达标排放率100%。
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  className="featurette-image img-fluid mx-auto"
                  data-src="holder.js/500x500/auto"
                  alt="500x500"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_16.jpg"
                  data-holder-rendered="true"
                  style={{ width: '500px', height: '500px' }}
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  正明環保，造福人類
                </h2>
                <p className="lead">
                  公司始终坚持以技术为先导，以人为本，海纳百川，共赢发展。公司将以先进的技术服务于用户，始终贯彻公司一贯的宗旨：“让整个地球村共享一片蓝天”，为中国的蓝天目标坚持努力！
                </p>
              </div>
              <div className="col-md-5">
                <img
                  className="featurette-image img-fluid mx-auto"
                  data-src="holder.js/500x500/auto"
                  alt="500x500"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_17.jpg"
                  data-holder-rendered="true"
                  style={{ width: '500px', height: '500px' }}
                />
              </div>
            </div>
            <hr className="featurette-divider" />
          </div>
        </main>
      </Layout>
    </div>
  );
};

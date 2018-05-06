import Layout from '../components/layout';

const data = [
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/home1.jpg",
    desc:""
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/home2.jpg",
    desc:""
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/home3.jpg",
    desc:""
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/home4.jpg",
    desc:""
  },
  {
    url:"https://aiban.oss-cn-beijing.aliyuncs.com/home5.jpg",
    desc:""
  }
];

const generateCarousel = ()=>{
  let style = {height:'60vh'}
  return data.map((info,k)=>{
    if(k === 0){
      return(
        <div className="carousel-item active" key={k}>
          <img className="d-block w-100"
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" 
            alt="slider loading ..." 
            src={info.url}
            data-holder-rendered="true"
            style={style}/>
          <div className="carousel-caption d-none d-md-block">
            <p>{info.desc}</p>
          </div>
        </div>
      );
    }else{
      return(
        <div className="carousel-item" key={k}>
          <img className="d-block w-100" 
            data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" 
            alt="slider loading..." 
            src={info.url}
            data-holder-rendered="true"
            style={style}/>
          <div className="carousel-caption d-none d-md-block">
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
          <div id="carouselExampleCaptions" className="carousel slide d-none d-lg-block" data-ride="carousel">
            <ol className="carousel-indicators">
              {getIndex()}
            </ol>
            <div className="carousel-inner">
              {generateCarousel()}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>{/* carouselE end ---  */}

        </main>
      </Layout>
    </div>
  );
};

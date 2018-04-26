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
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
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
                <h2>Heading</h2>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Cras mattis
                  consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
                  cursus commodo, tortor mauris condimentum nibh.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
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
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Vestibulum id ligula porta felis euismod
                  semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  First featurette heading.{' '}
                  <span className="text-muted">It'll blow your mind.</span>
                </h2>
                <p className="lead">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
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
                  Oh yeah, it's that good.{' '}
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
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
                  And lastly, this one.{' '}
                  <span className="text-muted">Checkmate.</span>
                </h2>
                <p className="lead">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
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

import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          .container-fluid {
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
      <div
        style={{
          textIndent: '20px',
          textAlign: 'left',
          lineHeight: '35px',
          minHeight: '100vh',
          marginTop: '-3px',
        }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-lg-3">
            <SubMenu title="企业文化" englishTitle="CULTURE" 
              submenu={[
                {chinese:'企业文化',english:'CULTURE',url:'/culture'},
                {chinese:'企業簡介',english:'ABOUT US',url:'/about'},
                {chinese:'企业荣耀',english:'HONOR',url:'/honor'}
              ]}/>
          </div>
          <div className="col-lg-9">
            <div
              className="container"
              style={{
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              <br />
              <h5
                style={{
                  fontSize: '30px',
                  color: 'black',
                }}
              >
                企业文化
              </h5>
              <br /> <br />
              <div
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  lineHeight: '200%',
                }}
              >
                <div style={{ minHeight: '550px' }}>
                  <div>企业宗旨</div>
                  <div>高效节能</div>
                  <div>企业使命</div>
                  <div>让整个地球共享一片蓝天</div>
                  <div>企业初心</div>
                  <div>合作共赢</div>
                  <div>经营理念</div>
                  <div>爱邦兴国	博爱明慧	爱邦正明	环保节能</div>
                  <div>服务理念</div>
                  <div>用顶尖技术，创精品工程</div>
                  <div>长期目标</div>
                  <div>科技先锋，行业典范</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

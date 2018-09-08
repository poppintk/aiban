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
            <SubMenu title="企业荣耀" englishTitle="HONOR" 
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
                textShadow: '0 1px 0 #bbb,0 2px 0 #bbb,0 3px 0 #aaa',
              }}
            >
              <h5
                style={{
                  fontSize: '30px',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                企业荣耀
              </h5>
              <br />
              <br />
              <br />
              <div className="row">
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor1.png"
                  alt="公司荣耀"
                />
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor2.png"
                  alt="公司荣耀"
                />
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor3.png"
                  alt="公司荣耀"
                />
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor4.png"
                  alt="公司荣耀"
                />
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor5.png"
                  alt="公司荣耀"
                />
                <img
                  className="col-lg-12"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor6.png"
                  alt="公司荣耀"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

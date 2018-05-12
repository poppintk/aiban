import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return(
    <Layout>
      <div
        style={{
          textIndent: '20px',
          textAlign: 'left',
          lineHeight: '35px',
          minHeight:'100vh',
          backgroundImage:'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
        className="container-fluid"
        >
        <div className="row">
          <div className="col-lg-3">
            <SubMenu title="公司荣耀" englishTitle="HONOR"/>
          </div>
          <div className="col-lg-9">
            <div className="container" style={{marginTop:'20px',textShadow: '0 1px 0 #bbb,0 2px 0 #bbb,0 3px 0 #aaa'}}>
              <h5 style={{ 
                fontSize:'30px',
                textAlign:'center',
                color:'white'}}>
                企业荣耀
              </h5>
              <br /><br /><br />
              <div className="row">
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor1.png" alt="公司荣耀"/>
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor2.png" alt="公司荣耀"/>
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor3.png" alt="公司荣耀"/>
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor4.png" alt="公司荣耀"/>
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor5.png" alt="公司荣耀"/>
                <img className="col-lg-12" src="https://aiban.oss-cn-beijing.aliyuncs.com/hornor6.png" alt="公司荣耀"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

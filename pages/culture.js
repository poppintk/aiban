import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return (
  <Layout>
    <div
        style={{
          textIndent: '20px',
          textAlign: 'left',
          lineHeight: '35px',
          minHeight:'100vh',
          marginTop:'-3px',
          backgroundImage:'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
        className="container-fluid"
        >
        <div className="row">
          <div className="col-lg-3">
            <SubMenu title="公司文化" englishTitle="CULTURE"/>
          </div>
          <div className="col-lg-9">
            <div className="container" style={{marginTop:'20px',textAlign:'center', textShadow: '0 1px 0 #bbb,0 2px 0 #bbb,0 3px 0 #aaa,0 4px 0 #aaa,0 5px 0 #999,0 6px 1px #000,0 0px 3px #000,0 1px 3px #000,0 3px 5px #000,0 5px 10px #000,0 5px 20px #000'}}>
              <br/>
              <h5 style={{
                fontSize:'30px',
                color:'white'
              }}>
                企业文化
              </h5>
              <br/> <br/>
              <div style={{color:'white',fontWeight:'bold',fontSize:'20px',lineHeight:'200%'}}>
                  <div style={{minHeight:'550px'}}>
                    <div>企业宗旨</div>
                    <div>
                      让整个地球共享一片蓝天
                    </div>
                    <div>
                      经营理念
                    </div>
                    <div>
                      爱邦兴国	博爱明慧	爱邦正明	环保先锋
                    </div>
                    <div>
                      企业精神
                    </div>
                    <div>
                      以人为本，激扬进取，自强不息，同甘共苦
                    </div>
                    <div>
                      服务理念
                    </div>
                    <div>
                      顶尖技术服务于用户，创精品工程
                    </div>
                    <div>
                      长期目标
                    </div>
                    <div>
                      科技先锋，行业典范
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>);
};

import Layout from '../components/layout';
import GoogleMap from '../components/googleMap';

export default () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height:'120vh'
        }}
        className="container"
      >
        <div style={{ width: '100%' }}>
          <img
            style={{ height: '200px', width: '100%' }}
            src="https://aiban.oss-cn-beijing.aliyuncs.com/header.png"
          />
          <h5
            style={{
              textAlign: 'center',
              width: '300px',
              height: '30px',
              paddingTop: '2px',
              borderRadius: '25px',
              margin: '0 auto',
              marginTop: '10px',
              boxShadow: '1px 1px 1px #9aa1ad',
              textShadow: '1px 1px red',
              fontWeight: 'bold'
            }}
          >
            爱邦正明——联系方式
          </h5>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <p style={{fontSize:'16px',lineHeight:'300%'}}>
                地址：长沙市芙蓉区八一路59号科技信息大楼10楼
                <br />
                业务咨询电话：18390980101 黎先生
                <br />
                邮箱：1317426180@qq.com
                <br />
                传真：0731-89708467
                <br />
                邮编：410001
              </p>
            </div>
            <div className="col-lg-6">
              <GoogleMap/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

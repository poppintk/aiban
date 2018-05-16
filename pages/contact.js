import Layout from '../components/layout';
import GoogleMap from '../components/googleMap';

export default () => {
  return (
    <Layout>
      <div
        className="container-fluid"
        style={{
          // backgroundImage:
          //       'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPosition: 'center center',
          //   boxShadow:'2px 2px 30px #c0cee5',
          marginTop: '-4px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '130vh',
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
                paddingTop: '2px',
                borderRadius: '25px',
                margin: '0 auto',
                marginTop: '10px',
                fontWeight: 'bold',
                color: 'green',
                textShadow: '4px 4px 15px #c0f9b8',
              }}
            >
              爱邦正明——联系方式
            </h5>
            <br />
            <div className="row">
              <div className="col-lg-6">
                <p style={{ fontSize: '14px', lineHeight: '300%' }}>
                  地址： 长沙市芙蓉区八一路59号省科技信息大楼10楼
                  <br />
                  业务咨询电话：0086-183-9098-0101
                  <br />
                  业务咨询邮箱：1317426180@QQ.com
                  <br />
                  公司网站：{' '}
                  <a href="http://www.hnabzm.com">http://www.hnabzm.com</a>
                  <br />
                  传真： 0086-0731-8970-8467
                  <br />
                  邮编： 410001
                </p>
              </div>
              <div className="col-lg-6">
                Google Map Service
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

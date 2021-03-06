import Layout from '../components/layout';

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
        <div className="container" style={{ paddingTop: '10px' }}>
          <style jsx>
            {`
              .card-title {
                font-size: 14px;
              }
            `}
          </style>
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
            合作交流——精益求精
          </h5>
          <br />

          <div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/pic1.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{
                    height: 240,
                    width:200,
                    display:'block',
                    margin:'0 auto'
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    总经理和中国环境科学院 院长夏青
                  </h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/pic2.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{ height: 240,width:200,
                    display:'block',
                    margin:'0 auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">经理参加2018年中国绿色发展论坛</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/pec3.jpg"
                  alt="Card image cap"
                  style={{ height: 240, }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    总经理在2018年中国绿色发展论坛上介绍公司技术
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%811.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理与客户技术交流</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%812.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理和当地政府签约</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%813.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理与Mc Master 副校长交流</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%814.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理和专家与客户交流</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%815.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理与供应商技术交流</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%816.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">总经理与专家</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%817.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家在现场</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%818.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家随加拿大总理访华</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%819.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家随加拿大总理访华</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%8110.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%8111.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家与加拿大总理</h5>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BA%A4%E6%B5%8112.png"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">公司专家与环保部门交流</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return (
    <Layout>
      <div className="container-fluid">
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
          工程實例——精益求精
        </h5>
        <br />
        <div className="row">
          <div className="col-lg-3">
            <SubMenu
              title="工程实例"
              englishTitle="CASES"
              submenu={[
                { chinese: '业绩展示', english: 'PROJECT', url: '/service' },
                { chinese: '工程实例', english: 'CASE', url: '/case' },
              ]}
            />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_1.jpg"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_10.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_11.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_12.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_13.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_14.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_15.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_16.jpg"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_17.jpg"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_18.jpg"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_19.JPG"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/case_2.jpg"
                  alt="Card image cap"
                  style={{ height: 240 }}
                />
                <div className="card-body">
                  <h5 className="card-title">河北午安</h5>
                  <p className="card-text">2016.04.04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

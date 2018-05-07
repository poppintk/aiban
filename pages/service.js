import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div className="container" style={{paddingTop:'10px'}}>
          <h5
            style={{
              textAlign: 'center',
              width: '350px',
              height: '30px',
              paddingTop: '2px',
              borderRadius: '25px',
              margin: '0 auto',
              boxShadow: '1px 1px 1px #9aa1ad',
              fontWeight: 'bold',
              textShadow: '1px 1px red'
            }}
          >
            爱邦正明环保——我们用心做事！
          </h5>
          <br />
          <div>
            <img
              src="https://aiban.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%871.png"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <img
              src="https://aiban.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%872.png"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <img
              src="https://aiban.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%873.png"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <img
              src="https://aiban.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%874.png"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
      </div>
    </Layout>
  );
};

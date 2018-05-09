import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div
        className="container"
        style={{
          paddingTop: '10px',
        }}
      >
        <h5
          style={{
            textAlign: 'center',
            paddingTop: '2px',
            borderRadius: '25px',
            margin: '0 auto',
            marginTop: '10px',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px #FF0000',
          }}
        >
          爱邦正明环保——我们用心做事！
        </h5>
        <br />
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">序号</th>
                <th scope="col">用户单位名称</th>
                <th scope="col">炉型</th>
                <th scope="col">产品炉型及数量</th>
                <th scope="col">是否达标排放</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-primary">
                <td>1</td>
                <td>重庆中梁山电厂</td>
                <td>35t/h流化床</td>
                <td>SPS -35型2台</td>
                <td>达标</td>
              </tr>

              <tr class="table-light">
                <td>2</td>
                <td>湖南维尼纶厂有限公司</td>
                <td>35t/h流化床</td>
                <td>SPS -35型1台</td>
                <td>达标</td>
              </tr>

              <tr class="table-primary">
                <td>3</td>
                <td>山西阳煤集团发供电二电厂</td>
                <td>35t/h流化床</td>
                <td>SPS -35t/h 4台</td>
                <td>达标</td>
              </tr>

              <tr class="table-light">
                <td>4</td>
                <td>山西河津振兴电厂</td>
                <td>240t/h流化床</td>
                <td>hzx-240 型2台</td>
                <td>达标</td>
              </tr>
            </tbody>
          </table>
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

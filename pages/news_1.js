import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p {
            font-weight: bold;
          }
        `}
      </style>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            'url(https://aiban.oss-cn-beijing.aliyuncs.com/value2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          boxShadow: '2px 2px 30px #c0cee5',
          minHeight: '85vh',
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'row', marginTop: '-4px' }}
          className="container"
        >
          <div style={{ width: '100%' }}>
            <h5
              style={{
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
                borderRadius: '25px',
                margin: '0 auto',
                marginTop: '10px',
                fontWeight: 'bold',
                color: 'green',
                textShadow: '4px 4px 15px #c0f9b8',
              }}
            >
              2018中国绿色发展论坛在京召开
            </h5>
            <div className="row">
              <div className="col-lg-4 offset-lg-1">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/new_1.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{
                    height: 200,
                    borderRadius: '15px',
                  }}
                />
              </div>
              <div className="col-lg-4 offset-lg-2">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/new_2.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{
                    height: 200,
                    borderRadius: '15px',
                  }}
                />
              </div>
            </div>
            <p style={{ marginTop: '20px' }}>
              2018年6月3日，中国绿色发展论坛在中华人民共和国生态环境部举办。中国环境报社副社长陈廷榔，中国绿发会顾问、中国绿色发展联盟顾问委员会主任委员吕克勤，中国环境科学研究院原副院长、总工程师、中国绿色发展联盟专家委员会主任委员夏青，中国绿色发展联盟秘书长、中国环境报理事会执行秘书长郭府青等领导出席。论坛由中国环境报理事会秘书长屠锐主持。
            </p>
            <img
              className="card-img-top"
              src="https://aiban.oss-cn-beijing.aliyuncs.com/new_3.jpg?x-oss-process=style/aiban"
              alt="Card image cap"
              style={{
                height: 240,
                width: 300,
                float: 'left',
                borderRadius: '15px',
                padding: '15px',
              }}
            />
            <p>
              中国绿发会顾问、中国绿色发展联盟顾问委员会主任委员吕克勤为论坛致辞，吕将军结合近期全国生态环境保护大会的主要精神，目前我国生态文明建设的现实情况正处于压力叠加负重前行的关键期，提供更多优质生态产品以满足人民日益增长的优美生态环境需要的攻坚期以及有条件有能力解决生态环境突出问题的窗口期。他指出与会环保企业正值国家环保产业3.0发展的关键时期，应加快创新技术、砥砺前行，为我国的生态文明做出贡献。
            </p>
            <p>
              随后，湖南爱邦正明环保有限公司、北京崔氏德门科贸有限公司、江苏亿尔等离子体科技有限公司、江苏力鼎环保科技有限公司、奥特拉斯(天津)环保科有限公司、北京博奇电力科技有限公司、山东康格能源科技有限公司、福海蓝天(北京)环保科技有限公司等8家企业先后进行了环保领先技术路演。
            </p>

            <p>
              我公司总经理黎勃先生在论坛上介绍公司节能超低排放技术，收到专家和与会者的一致好评，当场有数家企业对此技术感兴趣，要求会后进行洽谈和访问。
            </p>

            <p style={{ marginTop: '20px' }}>
              江苏亿尔等离子体科技有限公司董事长符国华就高温蒸汽碳化高盐、高COD危废产业化装置展开介绍，该公司运用清洁能源天然气加热升温至1000℃，将蒸汽送入无氧碳化炉内，均匀彻底碳化有机物，把COD从几十万mg/L降至500～1000mg/L以下，碳渣水溶过滤去残渣，MVR脱盐处理，盐再作为工业副产品循环利用。该项技术可解决化工、医药、农药等领域处置含高盐、高COD、危险有机废弃物的污染问题。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

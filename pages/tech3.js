import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p,
          ul {
            font-weight: bold;
            line-height: 200%;
            list-style: none;
          }
          p,
          ol {
            font-weight: bold;
            line-height: 200%;
          }
        `}
      </style>
      <div className="container-fluid" style={{ minHeight: '85vh' }}>
        <div
          style={{ display: 'flex', flexDirection: 'row', marginTop: '-4px' }}
          className="container"
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
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
              公司核心技术之三： 湿法集束旋流除尘器
            </h5>
            <p>
              湿法集束旋流高效除尘除雾工艺是本公司总经理黎勃博士引领科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的高效除尘除雾工艺，并且结合本公司将近十多年的脱硫除尘实践经验总结的技术成果，在国际上处于领先水平。其主要特点：
            </p>
            <ol>
              <li>
                我公司的湿法集束旋流除尘器（已报得了国家专利）。
                <ul>
                  <li>
                    A、高效：除尘除雾效率达到超低排放要求，尘排放≤5mg/Nm3。{' '}
                  </li>
                  <li>
                    B、节省空间：整个系统占有空间小，可与脱硫塔一体化，该装置节约70%的空间，效率提高3倍。{' '}
                  </li>
                </ul>
              </li>
              <li>
                本系统投资省：湿法集束旋流除尘器与同样效果的湿法静电除尘器相比，投资额仅为湿法湿法静电除尘器的五分之一。
              </li>
              <li>
                本系统应用范围广，随着国内外环保要求的日益提高，目前湿法脱硫塔出口烟气普遍存在带浆带水，导致尘排放超标。湿法集束旋流除尘器充分利用原脱硫吸收塔，在不需要占有额外的场地和空间，只需要增加原系统20%左右的投资就能将整个系统提升到超低排放标准。
                总之，采用本公司湿法集束旋流除尘器可实现：
                <ul>
                  <li>A、除尘效率高可以达到5mg/Nm3的排放要求。</li>
                  <li>B、投资成本省，仅为同类产品造价20%左右。</li>
                  <li>
                    C、应用广泛，目前湿法脱硫普遍存在带浆带水，尘排放难以控制。此工艺不占用额外的场地充分利用现有的脱硫吸收塔，仅需要增加原系统20%的投资就能将整个系统提升到超低排放标准。
                  </li>
                </ul>
                该工艺在多个案例中应用，深受用户好评，为环保事业作出了贡献。
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

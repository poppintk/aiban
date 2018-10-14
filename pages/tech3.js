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
              公司核心技术之三： 湿法集束除尘器
            </h5>
            <p>
            湿法集束旋流球筛高效除尘除雾工艺是本公司领科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的高效除尘除雾工艺，它是由多级旋流片和多层高分子过滤球组成，利用烟气运动离心力和液膜张力的物理特性除尘，锅炉负荷低烟气量小所吹过滤浮球托力小，球与球之间缝隙小，高分子过滤球上的液膜除尘除湿脱硫效率高；锅炉负荷高时烟气量大，烟气在旋流板的引导下切向速度大，除尘效率高。该除尘器双重除尘互为弥补，满足锅炉从低负荷到高负荷全程的除尘要求，完美替代传统的除雾器+湿电除尘器。并且结合十多年的脱硫除尘实践经验总结的技术成果，在国际上处于领先水平。其主要特点：
            </p>
            <ol>
              <li>
                我公司的湿法集束除尘器（专利号: ZL 2016 2 0161395.8）。
                <ul>
                  <li>
                  A.	高效：除尘除雾效率达到超低排放要求，尘排放≤5mg/Nm³。
                  </li>
                  <li>
                  B.	节省空间：整个系统占有空间小，可与脱硫塔一体化，比卧式湿电除尘器节70%的空间。
                  </li>
                </ul>
              </li>
              <li>
                投资省：湿法集束除尘器与同样效果的湿法静电除尘器相比，投资额仅为湿法静电除尘器的三分之一。
              </li>
              <li>
                应用范围广：随着国内外环保要求的日益提高，目前湿法脱硫塔出口烟气普遍存在带浆带水，导致尘排放超标。湿法集束
              </li>
              <li>
                除尘器充分利用原脱硫吸收塔，不需要占有额外的场地和空间， 就能将整个系统提升到超低排放标准。
              </li>
              <li>
                运行和维护成本省且安全：相对湿电除尘器来讲，湿法集束旋流除尘器是纯物理方法除尘，没有用电设备，不产生电耗，安全系数高。
              </li>
              <p>
              该工艺在多个案例中应用，深受用户好评，为环保事业作出了贡献。
              </p>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

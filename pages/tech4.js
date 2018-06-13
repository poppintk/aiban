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
              公司核心技术之四： 低阻高效离线清灰电袋复合除尘工艺
            </h5>
            <p>
              低阻高效离线清灰电袋复合除尘工艺是本公司总科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的电袋复合除尘工艺，并且结合本公司将近十多年的脱硫实践经验总结的技术成果，在国际上处于领先水平。其主要特点：
            </p>
            <ol>
              <li>
                我公司的低阻高效离线清灰电袋复合除尘器（专利号: ZL 2016 2
                0161426.X）。
                <p>
                  该除尘器就是低阻：整个系统阻力低通常在600Pa,最大系统阻力可控制在900Pa以下，节约运行电费25%。
                </p>
                <div>低阻除尘从以下核心技术控制实现：</div>
                <ul>
                  <li> 一是布袋过滤风速≤1.00m/Min；</li>
                  <li> 二是袋笼中轴间距不小于布袋的直径与布袋长的1%之和；</li>
                  <li>三是离线阀烟气流速小于15m/s； </li>
                  <li>
                    四是整个系统烟道满足CFD流场要求，拐弯必须是流线型不留直角死角。
                  </li>
                </ul>
              </li>
              <li>
                本系统高效：我们通过对除尘器过滤系统、清灰系统和导流防护系统的研究，设计的电袋复合除尘器，通常情况下能达到≤10mg/Nm3的排放标准，完全可以满足≤20mg/Nm3的环保排放标准。
                <p>
                  布袋材质选用PPS+PTFE浸渍，生产工艺选用国际名牌厂商合作；配合专有的核心技术即导流防护系统实现高效除尘。
                </p>
              </li>
              <li>
                本系统采用先进的离线清灰系统，比在线清灰节约30%高压空气，关键部件布袋和电磁脉冲阀延长20%的使用寿命。核心技术指标：每个电磁脉冲阀控制喷吹布袋面积小于55平方米（离线清灰）。如果是在线清灰每个电磁脉冲阀控制喷吹布袋面积小于50平方米。
              </li>
              总之，对于电袋复合除尘器改造采用本公司低阻高效离线清灰电袋复合除尘工艺实现了
              <ul>
                <li>A、除尘效率高可以达到10mg/Nm3的排放要求。</li>
                <li>
                  B、投资成本省，结合本公司二十多年的项目管理和施工经验使系统主体建造要节省10%。
                </li>
                <li>
                  C、运行成本低，此工艺在低阻离线清灰专利技术的应用，有效保证系统在最经济条件下运行，运行成本降低30%。
                </li>
              </ul>
              该工艺在多个案例中应用，深受用户好评，为环保事业作出了贡献。
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

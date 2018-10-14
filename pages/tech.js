import Layout from '../components/layout';
import Link from 'next/link';

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
          minHeight: '85vh',
        }}
      >
        <div className="container">
          <h5
            style={{
              textAlign: 'center',
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              fontWeight: 'bold',
              color: 'green',
              textShadow: '4px 4px 15px #c0f9b8',
            }}
          >
            爱邦正明——技术研发
          </h5>
          <div className="list-group">
            {data.map((d, k) => {
              return (
                <a
                  className="list-group-item list-group-item-action flex-column align-items-start"
                  key={k}
                  prefetch="true"
                  href={d.url}
                >
                  <div>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 style={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {d.title}
                      </h5>
                    </div>
                    <p style={{ fontSize: '14px' }}>{d.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
const data = [
  {
    url: '/tech1',
    title: '公司核心技术之一： 节能超净化湿法脱硫除尘一体化技术',
    description:
      '随着国际组织对环保要求越来越高，普通的脱硫技术很难达到新的超低排放要求。脱硫技术从干法、半干法到湿法脱硫，除尘从旋风除尘、电除尘、布袋除尘到湿法电除尘。各种技术不断涌现。尽管这些技术能达到新的超低排放要求，但有一个普遍存在的问题就是投资大、占地大、电耗高、运行成本高。二十多年来我们通过对国内外的烟气治理的研究开发，发明了一种节能超净化湿法脱硫除一体化技术，它有如下特点：......查看详情>>',
  },
  {
    url: '/tech2',
    title: '公司核心技术之二：FS型双循环两级湿法喷雾脱硫塔工艺',
    description:
      'FS型双循环两级湿法喷雾脱硫塔工艺是本公司总经理美国耶鲁大学博士黎勃带领的科研团队与美国Airborne公司合作研究开发的石灰石-石膏法脱硫工艺，并且结合我公司将近二十多年的脱硫实践经验总结的技术成果，在国际上处于领先水平。其主要特点：......查看详情>>',
  },
  {
    url: '/tech3',
    title: '公司核心技术之三： 湿法集束旋流除尘器',
    description:
      '湿法集束旋流高效除尘除雾工艺是本公司总经理黎勃博士引领科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的高效除尘除雾工艺，并且结合本公司将近十多年的脱硫除尘实践经验总结的技术成果，在国际上处于领先水平。其主要特点：......查看详情>>',
  },
  {
    url: '/tech4',
    title: ' 公司核心技术之四：烟气冷凝再热异形管直接换热（GGH）消白工艺',
    description:
      '烟气冷凝再热异形管直接换热（GGH）消白工艺是先将脱硫塔入口烟气进行冷凝降温然后再将脱硫出口烟气进行加热，使出口烟气处于非饱和状态，达到烟气消白的目的......查看详情>>',
  },
  {
    url: '/tech5',
    title: '公司核心技术之五：多方位对冲燃烬风低氮燃烧脱硝技术',
    description:
      'MOFA(Multi-Direction Opposed Fired Air）多方位对冲燃烬风低氮燃烧脱硝技术 MOFA(Multi-Direction Opposed Fired Air）多方位对冲燃烬风低氮燃烧技术是本公司总经理黎勃博士引领科研团队联合美国爱邦环保公司与耶鲁大学联合开发具有国际领先水平的脱硝技术。烟气脱硝方法根据不同型号锅炉和烟气中氮氧化物浓度选择合适有效的方法。降低氮氧化物排放有二种途径，一是减少氮氧化物的产生在锅炉上使用低氮燃烧技术；二是烟气中的氮氧化物中和成氮气或硝酸盐。 ......查看详情>>',
  },
  {
    url: '/tech6',
    title: '公司核心技术之六： 高效节能多级脱硝工艺',
    description:
      '随着我国对环保要求越来越高，普通的脱硝技术很难达到新的超低排放和节能降耗要求。脱硝技术从SNCR、SCR、强氧化剂（臭氧、双氧水等）、生物脱硝，而SNCR脱硝运行费用最低的一种方法，但此方法通常脱硝效率低在50%左右，本公司多级脱硝工艺装置，使脱硝效率提高达75%以上，能使锅炉氮氧化物排放达到超低排放要求。技术特点: ......查看详情>>',
  },
  {
    url: '/tech7',
    title: '公司核心技术之七： 生物质锅炉脱硫脱硝有机催化工艺',
    description:
      '随着我国对环保要求越来越高，对于生物质锅炉烟气成分的特殊性普通的脱硫脱硝技术很难达到新的超低排放要求。生物质锅炉烟气中含有大量的钾、钠离子，影响了氨对氮氧化物吸收和石灰浆液对SO2的吸收。为次, 本公司研究发明一种催化剂, 也可以称之为螯合剂,在脱硫塔入口喷淋该剂，它是一种含亚硫酰基的有机亚砜类洗涤液，通过螯合作用，捕捉H2SO3和HNO2，促进其进一步氧化为稳定的硫酸与硝酸，减少逆反应的发生，提高反应效率 ......查看详情>>',
  },
  {
    url: '/tech8',
    title: '公司核心技术之八： 低阻高效离线清灰电袋复合除尘工艺',
    description:
      '低阻高效离线清灰电袋复合除尘工艺是本公司总科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的电袋复合除尘工艺，并且结合本公司多年的除尘实践经验总结的技术成果，在国际上处于领先水平。其主要特点： ......查看详情>>',
  }
];

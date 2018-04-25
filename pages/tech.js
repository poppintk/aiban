import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div class="list-group">
        {data.map(d => {
          return (
            <a
              href="#"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{d.title}</h5>
              </div>
              <p class="mb-1">{d.description}</p>
            </a>
          );
        })}
      </div>
    </Layout>
  );
};
const data = [
  {
    title: 'FS型双循环两级湿法喷雾脱硫塔工艺',
    description:
      '公司核心技术之一： FS型双循环两级湿法喷雾脱硫塔工艺 FS型双循环两级湿法喷雾脱硫塔工艺是本公司总经理美国耶鲁大学博士黎勃带领的科研团队与美国Airborne公司合作研究开发的石灰石-石膏法脱硫工艺，并且结合......查看详情>>'
  },
  {
    title: '低阻高效离线清灰电袋复合除尘工艺',
    description:
      '公司核心技术之二 低阻高效离线清灰电袋复合除尘工艺 低阻高效离线清灰电袋复合除尘工艺是本公司总经理黎勃博士引领科研团队联合美国耶鲁大学和美国Airborne环保公司合作研究开发的电袋复合除尘工艺，并且结合本公......查看详情>>'
  },
  {
    title:
      'MOFA(Multi-Direction Opposed Fired Air） 多方位对冲燃烬风低氮燃烧脱硝技术 中铝分公司多次遭罚',
    description:
      '公司核心技术之三： MOFA(Multi-Direction Opposed Fired Air） 多方位对冲燃烬风低氮燃烧脱硝技术 MOFA(Multi-Direction Oppo......查看详情>>'
  },
  {
    title: '石灰石/石灰—石膏湿法烟气脱硫技术',
    description:
      '石灰石/石灰—石膏湿法烟气脱硫技术 石灰石/石灰—石膏湿法烟气脱硫工艺采用廉价易得的石灰石或石灰作脱硫吸收剂，石灰石经破碎磨细成粉状与水混合搅拌成浆液。当采用石灰为吸收剂时，石灰粉经消化处理后加水搅拌制成吸收......查看详情>>'
  },
  {
    title: '钠钙双碱法脱硫技术',
    description:
      '钠钙双碱法脱硫技术 钠钙双碱法脱硫，是利用强碱性的钠碱（烧碱，也可用纯碱）脱硫，再利用廉价的钙碱（石灰）苛化亚硫酸钠，使钠碱再生回用。设计曝气氧化工艺，将酸性环境下容易分解的亚硫酸钙氧化成稳定的硫酸钙沉淀。 ......查看详情>>'
  },
  {
    title: '氨法脱硫技术',
    description:
      '氨法脱硫技术       我公司的氨法脱硫工艺采用氨水或液氨作为吸收剂，吸收剂直接喷入吸收塔。锅炉来烟气进入预洗涤装置，洗涤降温后再进入脱硫塔，在脱硫塔内经溶有氨的吸收循环液洗涤反应，脱除SO2、......查看详情>>'
  },
  {
    title: '布袋除尘器技术',
    description:
      '布袋除尘器技术 概述：布袋除尘器是指利用纤维性滤袋捕集粉尘的一种除尘设备，布袋除尘器的突出优点是除尘效率高，属高效除尘器，除尘效率一般可达99.9%以上，处理后烟气中粉尘的排放浓度可在30mg/Nm3以下，最低甚至可达10mg......查看详情>>'
  },
  {
    title: '静电除尘器技术',
    description:
      '静电除尘器技术       我公司设计的GMHD高效节能型系列静电除尘器是在吸取国内外电除尘器现有先进技术的基础上，充分应用现代计算机仿真技术、先进的实验研究装备、先进的自动化系统控制技术、现代高......查看详情>>'
  },
  {
    title: 'SCR脱硝技术',
    description:
      'SCR脱硝技术     （1）SCR脱硝原理及特点：       4 NO + 4 NH3 + O2 —> 4 N2 + 6 H2O     &n......查看详情>>'
  },
  {
    title: '选择性非催化还原法—SNCR法脱硝技术',
    description:
      '选择性非催化还原法—SNCR法脱硝技术 （1）概况：我公司SNCR脱硝技术是在美国燃料技术公司和加拿大脱硝公司的选择性非催化还原烟气脱硝技术的基础上发展的成熟的应用技术，该技术最早是在80年代开始的，已经有20多年的工业客户服......查看详情>>'
  }
];

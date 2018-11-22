import Layout from "../components/layout";

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
      <div className="container-fluid" style={{ minHeight: "85vh" }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "-4px" }}
          className="container"
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h5
              style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "25px",
                margin: "0 auto",
                marginTop: "10px",
                fontWeight: "bold",
                color: "green",
                textShadow: "4px 4px 15px #c0f9b8",
              }}
            >
              公司核心技术之五： MOFA(Multi-Direction Opposed Fired Air）
              多方位对冲燃烬风低氮燃烧脱硝技术
            </h5>
            <p>
              MOFA(Multi-Direction Opposed Fired
              Air）多方位对冲燃烬风低氮燃烧技术是本公司科研团队联合美国爱邦环保公司与耶鲁大学联合开发具有国际领先水平的脱硝技术。烟气脱硝方法根据不同型号锅炉和烟气中氮氧化物浓度选择合适有效的方法。降低氮氧化物排放有二种途径，一是减少氮氧化物的产生在锅炉上使用低氮燃烧技术；二是烟气中的氮氧化物中和成氮气或硝酸盐。
            </p>
            <p>
              烟气中氮氧化物生成机制：在燃料的燃烧过程中，NOx由以下三种途径形成：
            </p>
            <p>
              1. 热力型NOx <br />
              热力型NOx是空气中的氧（O2）和氮（N2）在燃料燃烧时所形成的高温环境下生成的NO和NO2的总和，根据热力型NOx的生成过程，要控制其生成，就需要降低锅炉炉膛中燃烧温度，并避免产生局部高温区，以降低热力型NOx的生成。在循环流化床锅炉中，燃料是低温燃烧，因此热力型NOx可以忽略。
            </p>
            <p>
              2. 快速型NOx
              <br />
              快速型NOx主要是指燃料中的碳氢化合物在燃料浓度较高区域燃烧时所产生的烃与燃烧空气中的N2发生反应，形成CN、HCN，继续氧化生成的NOx,
              因此，快速型NOx主要产生于碳氢化合物含量较高、氧浓度较低的富燃料区，多发生在内燃机的燃烧过程。而在燃煤锅炉中，其生成量很小。
            </p>
            <p>
              3. 燃料型NOx
              <br />
              燃料型NOx的生成是燃料中的氮化合物在燃烧过程中氧化反应而生成的NOx，称为燃料型NOx。燃煤电厂锅炉（循环流化床）中产生的NOx中大约90%以上是燃料型NOx，因此燃料型NOx是燃煤电厂锅炉产生的NOx的主要途径。
            </p>
            <p>
              这三种类型的NOx，其各自的生成量和煤的燃烧温度有关，在电厂锅炉（循环流化床）中燃料型NOx是主要的，其占NOx总量的90%以上。而在没有低氮燃烧系统的非循环流化床锅炉，燃料型NOx约占75%，热力型NOx约占25%。
            </p>
            <p>ＭOFA　脱除氮氧化物的主要原理：</p>
            <ol>
              <li>降低锅炉高温减少氮氧化物</li>
              <li>低过量空气燃烧抑制燃料型NOx的形成</li>
              <li>分级燃烧脱除氮氧化物</li>
            </ol>
            <p> MOFA低氮燃烧技术工艺流程</p>

            <p>
              采用多方位对冲回流烟气低氮燃烧技术，其分级燃烧合理分配和控制了火焰中心的温度和O2含量，进行分级布风燃烧，从除尘器引风机出口引入部分燃烧过的烟气混合到鼓风机的空气中，再通过MOFA一次风、二次风和火上风进行分级布风燃烧。MOFA火上风通过安放在锅炉上的喷嘴中以高速射流的形式从不同方位送入炉膛，这种含氧量低的烟气与炉膛内上升烟气相遇产生强烈紊流，使炉内烟气混合更均匀，增长了烟气在炉膛内的滞留时间，提高了燃烧效率，主要的是烟气在这种低氧低温环境中分级燃烧，大大减少的氮氧化物的产生，从而达到脱硝的目的。应用在非低氮燃烧类型的锅炉中，它的脱硝效率可达５5％，可以提高锅炉燃烧效率０.４％。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

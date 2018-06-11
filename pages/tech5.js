import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p,
          ul {
            font-weight: bold;
          }
          p,
          ol {
            font-weight: bold;
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
              公司核心技术之五： MOFA(Multi-Direction Opposed Fired Air）
              多方位对冲燃烬风低氮燃烧脱硝技术
            </h5>
            <p>
              MOFA(Multi-Direction Opposed Fired
              Air）多方位对冲燃烬风低氮燃烧技术是本公司总经理黎勃博士引领科研团队联合美国爱邦环保公司与耶鲁大学联合开发具有国际领先水平的脱硝技术。烟气脱硝方法根据不同型号锅炉和烟气中氮氧化物浓度选择合适有效的方法。降低氮氧化物排放有二种途径，一是减少氮氧化物的产生在锅炉上使用低氮燃烧技术；二是烟气中的氮氧化物中和成氮气或硝酸盐。
            </p>
            <p>
              烟气中氮氧化物生成机制：NOx是指N2O、NO、NO2、N2O3、N2O4、N2O5等几种氮与氧的化合物总称，经常存在于空气中，对人体危害较大的是NO和NO2。在化石燃料的燃烧过程中，NOx由以下三种途径形成：
            </p>
            <p>
              1、 热力型NOx <br />
              热力型NOx是空气中的氧（O2）和氮（N2）在燃料燃烧时所形成的高温环境下生成的NO和NO2的总和，当燃烧区域的温度低于1000℃时，热力型NO的生成量很小，而温度在1300℃～1500℃时，NO的浓度大约为50ppmppm，而且随着温度的升高，NOx的生成速度按指数规律增加，因此，温度对热力型NOx的生成具有决定作用。
              <br />根据热力型NOx的生成过程，要控制其生成，就需要降低锅炉炉膛中燃烧温度，并避免产生局部高温区，以降低热力型NOx的生成。在循环流化床锅炉中，燃料是低温燃烧，因此热力型NOx可以忽略。
            </p>
            <p>
              2、 快速型NOx<br />
              快速型NOx主要是指燃料中的碳氢化合物在燃料浓度较高区域燃烧时所产生的烃与燃烧空气中的N2发生反应，形成CN、HCN，继续氧化生成的NOx,
              <br />因此，快速型NOx主要产生于碳氢化合物含量较高、氧浓度较低的富燃料区，多发生在内燃机的燃烧过程。而在燃煤锅炉中，其生成量很小。
            </p>
            <p>
              3 燃料型NOx<br />
              燃料型NOx的生成是燃料中的氮化合物在燃烧过程中氧化反应而生成的NOx，称为燃料型NOx。燃煤电厂锅炉（循环流化床）中产生的NOx中大约90%以上是燃料型NOx，因此燃料型NOx是燃煤电厂锅炉产生的NOx的主要途径。研究燃料型NOx的生成和破坏机理，对于控制燃烧过程中NOx的生成和排放，具有重要的意义。
              燃料型NOx的生成和破坏过程不仅和煤种特性、燃料中的氮化合物受热分解后在挥发份和焦炭中的比例、成分和分布有关，而且其反应过程还和燃烧条件（如温度和氧）及各种成分的浓度等密切相关。研究它的生成机理，大约有以下规律：
              在燃料进入炉膛被加热后，燃料中的氮有机化合物首先被热分解成氰（HCN）、氨（NH4）和CN等中间产物，它们随挥发份一起从燃料中析出，被称为挥发份N。挥发份N析出后仍残留在燃料中的氮化合物，被称为焦炭N.
              随着炉膛温度的升高及煤粉细度的减小（煤粉变细），挥发份N的比例增大，焦炭N的比例减小。挥发份N中的主要氮化合物是HCN和NH3，它们遇到氧后，HCN首先氧化成NCO，NCO在氧化性环境中会进一步氧化成NO，如在还原性环境中，NCO则会生成NH，NH在氧化性环境中进一步氧化成NO，同时又能与生成的NO进行还原反应，使NO还原成N2，成为NO的还原剂.
            </p>
            <p>
              在一般情况下，燃料型NOx的主要来源是挥发份N，其占总量的60%～80%，其余为焦炭N所形成。在氧化性环境中生成的NOx遇到还原性气氛时，会还原成N2，因此，锅炉燃烧最初形成的NOx，并不等于其排放浓度，而随着燃烧条件的改变，生成的NOx可能被还原，或称被破坏。煤中的N在燃烧过程中转化为NOx的量与煤的挥发份及燃烧过量空气系数有关。除此之外，生成的NOx在炉膛中可能被不同程度的还原，在循环流化床锅炉中，由于整体上处于还原性气氛燃烧，而且有大量的焦炭颗粒参与循环，NOx排放较低。挥发分越低、燃料的反应活性越差（表现在飞灰含碳量越高），主循环回路中的碳含量就越高，生成的NOx越低。这与煤粉炉恰好相反。
            </p>
            <p>
              这三种类型的NOx，其各自的生成量和煤的燃烧温度有关，在电厂锅炉（循环流化床）中燃料型NOx是最主要的，其占NOx总量的90%以上。而在没有低氮燃烧系统的非循环流化床锅炉，燃料型NOx约占75%，热力型NOx约占25%。
            </p>
            一、ＭOFA　脱除氮氧化物的主要原理： 　　<p>
              ① 降低锅炉高温减少氮氧化物
              随着温度的增加，热力型NOx的生成速度按指数规律迅速增加。MOFA系统形成的旋转湍流使炉膛内的气流得以充分混合，使整个锅炉的容量在燃烧过程中得到更有效地利用，增加对流的热能吸收，降低了炉内发生化学反应时产生的高温，减少了热力型氮氧化物的产生。
            </p>
            <p>
              ② 低过量空气燃烧抑制燃料型NOx的形成
              燃料氮包括挥发分N和焦炭N。燃料中的氮有机化合物首先被热分解成HCN等中间产物，它们随挥发分一起从燃料中析出，称之为挥发分N。挥发分N析出后仍残留在焦炭中的氮化合物，称之为焦炭N。
              MOFA系统有效地混合燃烧气流，从而降低了过剩空气系数。由于氧的比例降低，燃料氮所生成的中间产物HCN无法生成NOx，抑制了燃料型NOx的形成，并且HCN还能将已经生成的NOx还原为氮气，减少了NOx的产生。
            </p>
            <p>
              ③ 分级燃烧脱除氮氧化物
              当MOFA抽取了一定比例的锅炉燃烬风后，在锅炉底部形成了还原性气氛，燃料先在缺氧的富燃料条件下燃烧，抑制了燃料NOx的形成。MOFA系统延长了煤粉在炉膛内的停留时间，降低了燃料氮向燃料型NOx的转变率。同时，由于燃料在炉内的停留时间得到了延长，还使得燃烧更为充分，降低了排放烟气中的CO浓度。
              在锅炉上部，MOFA喷口将高动能射流喷入锅炉，形成强烈的旋转湍流，改善了炉内的热交换，使锅炉上部区域的温度得以降低，抑制了NOx的产生。
            </p>
            二、MOFA低氮燃烧技术工艺流程
            <p>
              NOx的生成在高温和富氧的环境下容易产生，改变锅炉的氧的分布能有效地降低氮氧化物的生成。
            </p>
            <p>
              一般循环流化床锅炉有二次风分层燃烧，减少一次风量和氧的含量，从而降低了燃料和氧在炉镗底部的过度集中，减少了氮氧化物的生成。
            </p>
            <p>
              为此我公司研发的一种MOFA(Multi-Direction Opposed Fired
              Air）低氮燃烧技术,
              MOFA是一种多方位对冲回流烟气低氮燃烧技术，MOFA的分级燃烧合理分配和控制了火焰中心的温度和O2含量，进行分级布风燃烧，它是从除尘器引风机出口引入部分燃烧过的烟气混合到鼓风机的空气中，再通过MOFA一次风、二次风和火上风进行分级布风燃烧。
            </p>
            <p>
              MOFA火上风通过安放在锅炉上的喷嘴中以高速射流的形式从不同方位送入炉膛，这种含氧量低的烟气与炉膛内上升烟气相遇产生强烈紊流，使炉内烟气混合更均匀，增长了烟气在炉膛内的滞留时间，提高了燃烧效率，最主要的是烟气在这种低氧低温环境中分级燃烧，大大减少的氮氧化物的产生，从而达到脱硝的目的。它的脱硝效率达５5％，可以提高锅炉燃烧效率０.４％。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

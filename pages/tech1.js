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
              节能超净化湿法脱硫除尘一体化技术
            </h5>
            <p>
              随着国际组织对环保要求越来越高，普通的脱硫技术很难达到新的超低排放要求。脱硫技术从干法、半干法到湿法脱硫，除尘从旋风除尘、电除尘、布袋除尘到湿法电除尘。各种技术不断涌现。尽管这些技术能达到新的超低排放要求，但有一个普遍存在的问题就是投资大、占地大、电耗高、运行成本高。二十多年来我们通过对国内外的烟气治理的研究开发，发明了一种节能超净化湿法脱硫除一体化技术，它有如下特点：
            </p>
            <div>
              <ul>
                <li>
                  节能，运行费用比同类技术降低50%，能耗低。系统运行稳定可靠性高。
                </li>
                <li>超净化，SO2排放≤30mg/m3，尘排放≤5mg/m3。</li>
                <li>占地空间小，建造费用比常规要节省20%。</li>
              </ul>
              <p>
                本技术是在同一个洗涤塔（脱硫塔）上进行超净化脱硫除尘，它是由湿法集束旋流除尘器和内外双循环双曝气脱硫系统组成。在同一座塔上实现除尘、脱硫双超低排放。
              </p>
              <p>
                湿式集束旋流除尘器原理是烟气通过底端旋流板，烟气在旋流板的导流下产生旋流离心运动，在离心力的作用下雾滴与尘向集束管壁面方向运动而气体留在管内运动，净气体与雾滴和尘产生分离，在这个运动过程中雾滴、尘相互碰撞聚合较大的液滴；气流再通过中间一层旋流板进一步提速，聚合成较大液滴被抛向管壁表面，与管壁附着的液面汇合在一起向下流；基本洁净的气流继续向上运动，在通过上端旋流板时，旋流板带有锁水装置，将气流中的液滴完挡截下来，防止液滴的二次夹带。最后装在集束管上面的冲洗喷淋系统定时对集束管进行冲洗，完全实现除尘超低排放。
              </p>
              <p>湿式集束旋流除尘器是由下部分组成：</p>
              <ul>
                <li>集束管：集束旋流器安装有十至数百个集束管。</li>
                <li>旋流板：每根集束管有分布功能不同的三层旋流板。</li>
              </ul>
              <p>冲洗喷淋系统：清除集束管里的灰尘。</p>
              <p>
                内外双循环双曝气脱硫系统原理是外循环喷淋系统是脱硫石灰浆液通过安装在脱硫塔烟道入口的喷枪喷入烟气中，混合石灰浆液的烟气经过自激水浴式S型喉口，此处烟道截面积小烟气流速快，湍流强烈，烟气与石灰浆液充分混合，大大提高了脱硫效率，使整个脱硫系统的液气比降低一半，大大节药系统运行的能耗。
              </p>
              <p>
                内循环喷淋系统在塔内设计安装三层内循环喷淋，对每层的喷头流向根据实际情况进行了选择。脱硫浆液通过喷嘴形成多层扇面喷雾，重复覆盖上行烟气，使脱硫液与烟气反复混合溶汇在一起，从而使烟气中的So2与石灰浆液中和成石膏，达到烟气脱硫的目的。
              </p>
              <p>
                外曝气是将从烟气中脱下来的亚硫酸钙在石灰浆液池和石膏浆液池中进一步完全氧化生成石膏，再通过真空皮带脱水机将石膏脱出。
              </p>
              <p>
                内曝气是将塔内消化池中的大部分亚硫酸钙氧化成石膏，再通过输送管道输送到石膏池中进行进一步氧化和脱水。
              </p>
              <p>内外双循环双曝气脱硫系统由以下部分组成：</p>
              <ul>
                <li>
                  外喷淋系统：每台脱硫塔入口装有数个至数十个石灰浆液喷嘴，喷淋系统由喷枪体、喷头和套管组成。
                </li>
                <li>
                  自激水浴装置：在烟道入口设置两排石灰浆液喷雾，错位布置的两排喷雾形成无数个紊流区，烟气自激水浴后将下弧板上之水层带至“S”型喉口内产生强烈紊流进行第一级脱硫；因烟气在该装置通过时的流速较高，从而脱硫液与热烟气形成强烈湍流，强烈破碎石灰浆滴，极大地增加了气液相之间的传质、传热表面，对提高脱硫效率、降低循环液量、降低运行电耗、降低石灰耗量有明显效果。同时，因烟气通过自激水浴式脱硫装置塔外循环后，进入塔内喷淋吸收塔的宽度较宽，从而使烟气在塔内吸收塔截面上的分布更均匀，更易保障高脱硫效率的达到。
                </li>
                <li>
                  外循环浆液泵，将石灰浆液从石灰化浆池输送到脱硫塔烟道入口的喷淋系统进行喷淋。
                </li>
                <li>
                  外循环管道系统：石灰浆液进入烟道喷淋与烟气强烈混合反应进入塔底消化池，经塔底消化池排浆孔和溢流口再进入石膏池脱水，多余未曾反应彻底的石灰浆液从石膏池溢流至石灰浆液池进入再循环。
                </li>
                <li>
                  内循环系统：塔内循环三层喷淋，喷头的流向由爱邦根据实际清况进行选择。由于有外循环系统配合，大大降低了整个脱硫系统的液气比，液气比从常规方法的20：1降为10：1，运行能耗减少40%。
                </li>
                <li>
                  外循环曝气系统：在石灰和石膏浆液池都均匀布置曝气管，使塔内未氧化完全的亚硫酸钙充分氧化为硫酸钙（石膏）沉淀，沉淀不溶于水的石膏由真空皮带脱水机脱出。
                </li>
                <li>
                  内循环曝气系统：塔内消化池均匀布置曝气管，促使石膏的形成。
                </li>
              </ul>
              <p>
                湿式集束旋流除器能大大提高除尘效果，使烟尘排放达到超低排放标准，建造成本低，运行费用省，是划时代产品。
              </p>
              <p>
                内外双循环喷淋，大大提高液气的混合效率，增加液气接触时间，降低脱硫液气比，比常规产品节约运行费用40%。内外双曝气大大延长了亚硫酸钙的氧化时间，提高石灰使用效率，降低了脱硫的钙硫比，最重要的是有效地控制了脱硫系统结垢堵塞。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
              节能超净化湿法脱硫除尘一体化技术
            </h5>
            <p>
              随着国际组织对环保要求越来越高，普通的脱硫技术很难在低能耗的情况下达到新的超低排放要求。脱硫技术从干法、半干法到湿法以及其它方式的脱硫，除尘从旋风除尘、电除尘、布袋除尘到湿法电除尘。各种技术不断涌现。尽管这些技术有的能达到新的超低排放要求，但有一个普遍存在的问题就是投资大、占地大、电耗高、运行成本高。二十多年来我们通过对国内外的烟气治理的研究开发，发明了一种节能超净化湿法脱硫除尘一体化技术(专利号: ZL 2016 2 0161393.3)，它有如下特点：
            </p>
            <div>
              <ul>
                <li>
                  节能，就脱硫除尘来讲，运行费用比同类“湿法脱硫+湿电除尘器”技术降低20~50%，能耗低。而且系统运行稳定可靠性高，节省大量维护费用。
                </li>
                <li>超净化，SO2排放≤30mg/m3，尘排放≤5mg/m3。</li>
                <li>地空间小，建造费用比常规要节省10%左右。</li>
              </ul>
              <p>
                本技术是在同一个脱硫塔上进行超净化脱硫除尘，它是由湿法集束除尘器和双循环双曝气脱硫系统组成。在同一座塔上实现除尘、脱硫双超低排放。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

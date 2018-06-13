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
              公司核心技术之六： 高效节能多级脱硝工艺
            </h5>
            <p>
              随着我国对环保要求越来越高，普通的脱硝技术很难达到新的超低排放和节能降耗要求。脱硝技术从SNCR、SCR、强氧化剂（臭氧、双氧水等）、生物脱硝，而SNCR脱硝运行费用最低的一种方法，但此方法通常脱硝效率低在50%左右，本公司多级脱硝工艺装置，使脱硝效率提高达75%以上，能使锅炉氮氧化物排放达到超低排放要求。
              技术特点:
            </p>

            <p>
              该除尘器就是低阻：整个系统阻力低通常在600Pa,最大系统阻力可控制在900Pa以下，节约运行电费25%。
            </p>
            <p>低阻除尘从以下核心技术控制实现：</p>
            <ul>
              <li> Ａ．　制造成本比常规技术节药60%。</li>
              <li>
                {' '}
                Ｂ．　运行费用比同类技术降低50%，能耗低。系统运行稳定可靠性高。%之和；
              </li>
              <li> Ｃ．　脱硝效率高，运行稳定,氮氧化物排放≤50mg/m3。/s； </li>
              <li>Ｄ．　维护方便，操作简单。</li>
            </ul>

            <p>
              多级脱硝装置位于三个温度在800～1100℃区域，第一级脱硝喷枪安装在连接炉镗与旋风分离器的平行烟道上，第二级脱硝喷枪安装在锅炉的炉镗壁上，第三级脱硝喷枪安装在省煤器前端锅炉顶部。
            </p>
            <p>
              烟气通过三级脱硝，能起到并集效果，从单一的一级脱硝效率从50%可以提升到75%。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

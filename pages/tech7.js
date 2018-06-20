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
              公司核心技术之七： 生物质锅炉脱硫脱硝有机催化工艺
            </h5>
            <p>
              随着我国对环保要求越来越高，对于生物质锅炉烟气成分的特殊性普通的脱硫脱硝技术很难达到新的超低排放要求。生物质锅炉烟气中含有大量的钾离子氯离子，影响了氨对氮氧化物吸收和石灰浆液对SO2的吸收。为次,
              本公司研究发明一种催化剂,
              也可以称之为螯合剂,在脱硫塔入口喷淋该剂，它是一种含亚硫酰基的有机亚砜类洗涤液，通过螯合作用，捕捉HSO3和HNO2，促进其进一步氧化为稳定的硫酸与硝酸，减少逆反应的发生，提高反应效率，有效提高去除率。这种有机催化物能将硫酸根和硝酸根俘获再与钙和氨离子结合生成石膏和氮气，提高脱硫脱硝效率，减少了氨逃逸。有机催化物通过脱硫废水蒸发塔得到回收再生，重新在脱硫脱硝系统中使用。
              技术特点:
            </p>

            <ul>
              <li>
                A.
                协同脱硫脱硝，提高脱硫脱硝效率，解决了生物质锅炉脱硫脱硝难的难题。
              </li>
              <li>B. 减少了氨逃逸。</li>
              <li>C. 维护方便，操作简单</li>
            </ul>
            <p>
              该技术是一种高效节能环保产品，能大大提高脱硫脱硝效率，解决生物质锅炉脱硫脱硝难以达到超低排放的难题，使烟尘排放达到超低排放标准，建造成本低，运行费用省可循环使用，是划时代产品。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

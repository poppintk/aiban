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
              公司核心技术之四： 烟气冷凝再热异形管直接换热（GGH）消白工艺
            </h5>
            <p>
              烟气冷凝再热异形管直接换热（GGH）消白工艺是先将脱硫塔入口烟气进行冷凝降温然后再将脱硫出口烟气进行加热，使出口烟气处于非饱和状态，达到烟气消白的目的。这种烟气冷凝再热直接将脱硫塔进口烟气和脱硫塔出口烟气设计在同一个换热器中进行，不需要额外的能耗，投资省，脱白效率高。关键技术是异形换热管，增加换热面积，大大减少了换热器的体积，是烟气消除湿烟羽通常称消白的首选技术之一。该工艺在多个案例中应用，深受用户好评。
            </p>
          
          </div>
        </div>
      </div>
    </Layout>
  );
};

import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p {
            font-weight: bold;
            line-height: 200%;
          }
          .card-img-top{
            margin:10px;
          }
        `}
      </style>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            'url(https://aiban.oss-cn-beijing.aliyuncs.com/value2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          boxShadow: '2px 2px 30px #c0cee5',
          minHeight: '85vh',
        }}
      >
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
              第十一届全国工业行业“烟气脱白、脱硫、脱硝技术交流研讨会”
            </h5>
            <p>
                2018年10月27-28日，由中华环保联合会能源环境专业委员会举办和武汉锅炉集团、湖南爱邦正明环保有限公司协办的第十一届全国工业行业“烟气脱白、脱硫、脱硝技术交流研讨会”在湖北省会——武汉隆重召开。
            </p>
            <p>
                有关部门领导、行业权威专家、环保产业研究领域业内知名企业负责人等齐聚一堂，湖南爱邦正明环保有限公司作为此次会议的协办单位受邀参加了此次会议。并在会议中以《高效节能超低排放技术》为主题分享了烟气脱白、脱硫、脱硝技术的要点。
            </p>   
            <div style={{display:'flex'}}> 
            <img
                className="card-img-top"
                src="http://aiban.oss-cn-beijing.aliyuncs.com/01.jpg"
                alt="Card image cap"
                style={{ height: 240,width:300, borderRadius: '25px' }}
              />
              <img
                className="card-img-top"
                src="http://aiban.oss-cn-beijing.aliyuncs.com/02.jpg"
                alt="Card image cap"
                style={{ height: 240,width:300, borderRadius: '25px' }}
              />
              </div>
              <div style={{display:'flex'}}>
              <img
                className="card-img-top"
                src="http://aiban.oss-cn-beijing.aliyuncs.com/03.jpg"
                alt="Card image cap"
                style={{ height: 240,width:300, borderRadius: '25px' }}
              />
              <img
                className="card-img-top"
                src="http://aiban.oss-cn-beijing.aliyuncs.com/04.jpg"
                alt="Card image cap"
                style={{ height: 240,width:300, borderRadius: '25px' }}
              />
            </div>    
            <p>
                受邀专家有原国家环保部污染防治司刘孜同志、湖南爱邦正明环保有限公司黎勃博士、武汉锅炉集团卢红敬总经理、华电电力研究院有限公司张扬主任、山东大学朱维群教授、大庆庆鲁景泰防腐工程有限公司唐裕湛、斯普瑞喷雾系统（上海）有限公司刘晨总工艺工程师、北京科技大学苍大强教授、武汉大学博士汪远博士、中石化节能环保工程科技有限公司陆诗建博士等（排名按发言先后顺序）。
            </p>
            <p>
                据悉，本次会议主要是以对大气污染治理产业“十三五”发展规划、国家烟气脱硫脱硝及除尘产业政策分析探讨、国内外电厂燃煤锅炉烟气脱硫脱硝技术的现状及发展趋势。会上，与会的专家、学者及供需商就以上议题展开了热烈的讨论。
            </p>
            <p>
                27日上午9：00原环保部污染防治司刘牧同志对十三五大气污染物防治工作政策趋势解读。 
            </p>
            <p>
                10：00我公司黎勃博士率先介绍了高效节能超低排放技术的要点
            </p>
            <p>
                11:00武汉锅炉集团卢红敬总经理对低低温省煤器和生物质气化耦合技术进行了论述
            </p>
            <p>
                下午1:30华电电力研究院有限公司张扬主任论述了燃煤电厂厂界环保岛关键技术研究与应用 
            </p>
            <p>
                2:30山东大学朱维群教授对燃煤烟气污染物干式高效脱除技术开发做了汇报
            </p>
            <p>
                4:00大庆庆鲁景泰防腐工程有限公司唐裕湛对湿法脱硫设施的防腐与集合物图层系统解决方案提出了论述
            </p>
            <p>
                5:00斯普瑞喷雾系统（上海）有限公司刘晨总工艺工程师对超低排放工艺存在的问题与解决途径探讨
            </p>
            <p>
                28日9:00北京科技大学 苍大强 教授对钢铁烧结工序脱硫脱硝综合治理技术及工程基础研究做了汇报
            </p>
            <p>
                10:00武汉大学博士汪远博士对燃煤电厂汞污染及控制技术做了研讨
            </p>
            <p>
                11:00中石化节能环保工程科技有限公司陆诗建主任讲述了中小型燃煤燃油锅炉脱硫脱硝技术
            </p>
            <p>
                演讲人的讲话引起了与会人员的激烈讨论、全场掌声不断。对本次的会议做了详细的讲解和技术引导，得到了所有参与人员的一致赞赏。
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/05.png"
                  alt="Card image cap"
                  style={{ height: 500,width:500, borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/06.png"
                  alt="Card image cap"
                  style={{  height: 500,width:500,borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/07.png"
                  alt="Card image cap"
                  style={{  height: 500,width:500, borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/08.png"
                  alt="Card image cap"
                  style={{ height: 500,width:500, borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/09.png"
                  alt="Card image cap"
                  style={{  height: 500,width:500, borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/10.png"
                  alt="Card image cap"
                  style={{  height: 500,width:500,borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/11.png"
                  alt="Card image cap"
                  style={{  height: 500,width:500, borderRadius: '25px' }}
                  />
                  <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/12.png"
                  alt="Card image cap"
                  style={{ height: 500,width:500, borderRadius: '25px' }}
                  />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

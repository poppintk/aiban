import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return (
    <Layout>

      <div
        style={{
          textIndent: '20px',
          marginTop: '-5px',
          textAlign: 'left',
          lineHeight: '35px',
          minHeight: '100vh',
        }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-lg-3">
            <SubMenu
              title="企業簡介"
              englishTitle="ABOUT US"
              submenu={[
                { chinese: '企业文化', english: 'CULTURE', url: '/culture' },
                { chinese: '企業簡介', english: 'ABOUT US', url: '/about' },
                { chinese: '企业荣耀', english: 'HONOR', url: '/honor' },
              ]}
            />
          </div>
          <div className="col-lg-9">
            <div className="container" style={{ marginTop: '20px' }}>
              <img style={{width:'100%'}} src="https://aiban.oss-cn-beijing.aliyuncs.com/%E4%BC%81%E4%B8%9A%E7%AE%80%E4%BB%8B.png"/>
              <hr />
              <br />
              <p style={{ color: 'black', fontWeight: 'bold' }}>
              湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是专业从事环保工程及技术装备研发、设计、制造、环保服务、项目工程总承包业务的重点高新技术企业。公司董事长黎勃先生2003年获美国耶鲁大学环境工程博士学位，曾任美国总统克林顿环保顾问。从事大气污染治理二十多年，引领和参与数十项专利技术的研制和开发，与国际顶尖的环保公司美国爱邦（Airbone）公司有长远的战略合作伙伴关系，2010年美国爱邦获美国克林顿政府三千万美元科研支持。公司有国际上顶尖学府美国耶鲁大学作为科研基地，引领国际环保高新科技。
              </p>
              <p style={{ color: 'black', fontWeight: 'bold' }}>
              公司注册资金8000万元，公司在美丽的历史文化名城——长沙建有生产基地，公司通过了ISO9001质量管理体系认证，在北京、上海设有市场发展部，在美国、加拿大设有技术研究院。由国际上环保工程领军人物组成我们的科研团队。公司董事长黎勃博士、教授，加拿大电脑学院名誉院长，曾任湖南省树山环境工程有限公司、湖南正明环境工程有限公司总经理。公司拥有多项核心技术和数十项专利，开发了各种脱硫、脱硝、除尘高效节能技术，攻克了高硫煤脱硫难题，多种超低排放节能技术已成为市场主流，如FS双区双循环脱硫技术、湿法集束旋流球筛高效除尘技术、消白烟冷凝再热异形管直接换热GGH技术、多级复合脱硝技术、烟气余热废水蒸发塔废水零排放技术等，公司还开发了各种废水处理技术和VOCs治理技术。其专利技术应用在遍及17省市用户的脱硫，脱硝和除尘工程中，工程合格率达100%，达标排放率100%。
              </p>
              <p style={{ color: 'black', fontWeight: 'bold' }}>
              公司始终坚持以技术为先导，以人为本，海纳百川，共赢发展。公司将以先进的技术服务于用户，始终贯彻公司一贯的宗旨：“让整个地球共享一片蓝天”！
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

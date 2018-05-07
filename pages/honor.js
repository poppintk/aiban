import Layout from '../components/layout';
import SubMenu from '../components/submenu';

export default () => {
  return(
    <Layout>
      <div
        style={{
          textIndent: '20px',
          textAlign: 'left',
          lineHeight: '35px',
          minHeight:'100vh',
          backgroundImage:'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
        className="container-fluid"
        >
        <div className="row">
          <div className="col-lg-3">
            <SubMenu title="公司荣耀" englishTitle="HONOR"/>
          </div>
          <div className="col-lg-9">
            <div className="container" style={{marginTop:'20px',textShadow: '0 1px 0 #bbb,0 2px 0 #bbb,0 3px 0 #aaa'}}>
              <h5 style={{ 
                fontSize:'30px',
                textAlign:'center',
                color:'white'}}>
                企业荣耀
              </h5>
              <br /><br /><br />
              <p style={{color:'black'}}>
                湖南爱邦正明环保工程有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。公司董事长黎勃先生2003年获美国耶鲁大学环境工程博士学位，曾任美国总统克林顿环保顾问。从事大气污染治理二十多年，引领和参与十多项专利技术的研制和开发，与国际上顶尖的环保公司美国爱邦（Airbone）公司有长远的战略合作伙伴关系，2010年美国爱邦获美国总统克林顿三千万美元科研支持，公司有国际上顶尖学府美国耶鲁大学作为科研基地，引领国际环保高新科技。
              </p>
              <p>
                公司注册资金8000万元，公司在美丽的历史文化名城——长沙建有生产基地，在北京有爱邦正明的市场发展部，在北美中心城市多伦多有我们的技术研究院。公司通过了ISO9001质量管理体系认证，在美国耶鲁大学森林环境学院，加拿大多伦多大学地理环境学院，中国南京信息工程大学气象环境学院设有耶鲁大气实验室，由国际上环保工程领军人物组成我们的科研团队。公司董事长黎勃博士、教授，加拿大电脑学院名誉院长，曾任湖南树山、湖南正明环保公司总经理。公司市场总裁Marray
                Mortson，任美国爱邦Airbone环保公司总裁。公司技术总裁汤友志博士，任中加环境协会会长，加拿大爱邦清洁能源有限公司董事长。公司研究院外方院长李旭辉博士，任美国耶鲁大学森林环境学院终身教授
              </p>
              <p>
                公司拥有数十项核心技术和多项专利，其专利技术应用在遍及17省市用户的脱硫，脱销和除尘工程中，工程合格率达100%，达标排放率100%。
              </p>
              <p>
                公司始终坚持以技术为先导，以人为本，海纳百川，共赢发展。公司将以先进的技术服务于用户，始终贯彻公司一贯的宗旨：“让整个地球村共享一片蓝天”，为中国的蓝天目标坚持努力！
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

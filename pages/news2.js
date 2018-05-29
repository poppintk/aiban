import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
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
              北京启动“大气污染执法年”行动 打击环境违法
            </h5>
            <p>
              为持续推进空气质量改善，北京将启动“大气污染执法年”行动，针对散煤、高排放机动车、城乡结合部等重点防治领域和区域，“三管齐下”打击多类环境违法行为，加大环境监管执法力度。
            </p>
            <p>
              北京市环境保护局于2018年4月23日召开新闻通报会。北京市环境监察总队副总队长赵志威介绍，“大气污染执法年”行动将从严查处各类环境违法行为，并公开曝光一批严重违法企业，形成严厉打击违法排污的高压态势，促进排污者养成良好的环保守法习惯。
            </p>
            <p>
              本次行动由“治散煤”、“净四气”、“降三尘”三项重点工作组成。其中，“治散煤”专项整治行动将针对散煤生产、加工、储存、运输、销售、使用等各环节，由质监、环保等多个部门强化监管，通过在重点时段、重点部位开展联合执法，严厉打击非法生产、销售、使用劣质散煤的行为，取缔违法违规的煤炭企业和销售点。
            </p>
            <p>
              “净四气”针对燃煤废气、挥发性有机物废气、工业废气和机动车尾气，将通过开展多个专项执法行动，严厉打击污染物超标排放、无污染防治设施或设施不正常运行、不使用清洁能源等各类环境违法行为。
            </p>
            <p>
              “降三尘”重点聚焦施工扬尘、道路遗撒致尘、因烧致尘问题，通过开展工地扬尘和渣土运输泄漏遗撒、露天烧烤、露天焚烧三大整治行动，加大源头监管和执法查处力度。
            </p>
            <p>
              为把环境监管属地职责落到实处，此次行动方案还提出，北京各区应依托现有网格化城市管理系统，优先在城乡结合部地区建立网格化环境监管体系，将环境监管职责逐一明确相关责任人，力争大部分环境问题第一时间在基层发现并解决。
            </p>
            <p>
              在加强执法力度的同时，为鼓励民众积极参与环保监督管理，加强对环境违法行为的社会监督，北京市环保局此前曾发布举报新规。规定中提到，民众实名举报相关环境违法行为，经查实后最高可获奖励5万元人民币。
            </p>
            <p>
              据环保部门发布的数据显示，针对北京的采暖季特点，环保部门于2015年11月1日启动了“大气执法季”行动，截至2016年3月22日，共检查各类企业15687家，处罚环境违法行为671起，处罚金额1601.42万元。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

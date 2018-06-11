import Layout from '../components/layout';
import Link from 'next/link';

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
              爱邦正明——新闻动态
            </h5>
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      No.1
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                          <div>2018中国绿色发展论坛在京召开</div>
                          <div>
                            2018年6月3日，中国绿色发展论坛在中华人民共和国生态环境部举办。中国环境报社副社长陈廷榔，中国绿发会顾问、中国绿色发展联盟顾问委员会主任委员吕克勤，中国环境科学研究院原副院长、总工程师、中国绿色发展联盟专家委员会主任委员夏青，中国绿色发展联盟秘书长、中国环境报理事会执行秘书长郭府青等领导出席。论坛由中国环境报理事会秘书长屠锐主持。
                            ......<br />
                            <Link prefetch href="/news_1">
                              [查看详情>>]
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      No.2
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                          <div>以“科技”护卫蓝天 大气污染防治挺进新时代</div>
                          <div>
                            5月9日凌晨，我国高分五号卫星成功发射，成为世界首颗实现对大气和陆地综合观测的全谱段高光谱卫星，不仅可动态反映我国大气污染状况......<br />
                            <Link prefetch href="/news_2">
                              [查看详情>>]
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      No.3
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                          <div>北京启动“大气污染执法年”行动 打击环境违法</div>
                          <div>
                            为持续推进空气质量改善，北京将启动“大气污染执法年”行动，针对散煤、高排放机动车、城乡结合部等重点防治领域和区域，“三管齐下”打击多类环境违法行为，加大环境监管执法力度。
                            ......<br />{' '}
                            <Link prefetch href="/news_3">
                              [查看详情>>]
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      No.4
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse show"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                          <div>
                            河北省发布5项大气污染排放标准点评:超低排放成大势所趋
                            非电提标市场待开放
                          </div>
                          <div>
                            2018 年4 月25
                            日,河北省发布了钢铁、焦化、水泥、平板玻璃、锅炉等5
                            个非电行业的大气污染排放标准的征求意见稿。其中,钢铁工业大气标准为“超低排放”
                            标准。 ......<br />{' '}
                            <Link prefetch href="/news_4">
                              [查看详情>>]
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginBottom: '100px' }}>
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      No.5
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  className="collapse show"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                          <div>山东7个通道城市大气质量全面改善</div>
                          <div>
                            “2017年10月至2018年3月，全省7个传输通道城市空气质量总体情况同比全面改善，均完成了生态环境部下达的PM2.5浓度和重污染天数的改善目标。”山东省环保厅日前向社会公布2017~2018年秋冬季大气污染综合治理攻坚任务完成情况。
                            ......<br />{' '}
                            <Link prefetch href="/news_5">
                              [查看详情>>]
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

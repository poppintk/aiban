import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="container">
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <h5
            style={{
              textAlign: 'center',
              border: '1px groove',
              width: '300px',
              height: '30px',
              paddingTop: '2px',
              borderRadius: '25px',
              margin: '0 auto',
              marginTop: '20px',
              marginBottom: '10px',
              boxShadow: '1px 1px 1px #9aa1ad',
              color: 'red',
              fontWeight: 'bold'
            }}
          >
            爱邦正明——新闻动态
          </h5>
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    News 1
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    <div style={{ display: 'flex' }}>
                      <button
                        className="float-left mx-1"
                        style={{ width: '100px', height: '100px' }}
                      >
                        No.1
                      </button>
                      <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        <div>[行业资讯]</div>
                        <div>全国环保系统环评机构限期彻底脱钩</div>
                        <div>
                          本报记者王昆婷3月25日北京报道
                          环境保护部今日公布《全国环保系统环评机构脱钩工作方案》
                          [查看详情>>]
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    News 2
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    <div style={{ display: 'flex' }}>
                      <button
                        className="float-left mx-1"
                        style={{ width: '100px', height: '100px' }}
                      >
                        No.2
                      </button>
                      <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        <div>[行业资讯]</div>
                        <div>二零一五环保产业之十大关注</div>
                        <div>
                          傅涛
                          第三方治理和政企合作等模式将划清地方政府与污染企业、环保企业之间的界线
                          ...... [查看详情>>]
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    News 3
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse show"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    <div style={{ display: 'flex' }}>
                      <button
                        className="float-left mx-1"
                        style={{ width: '100px', height: '100px' }}
                      >
                        No.3
                      </button>
                      <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        <div>[行业资讯]</div>
                        <div>环保部曝光42项违规问题 中铝分公司多次遭罚</div>
                        <div>
                          3月19日，环保部通报了2015年2月份大气污染防治督查情况，通过对14个市(县、区)进行大气污染......
                          [查看详情>>]
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    News 4
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                class="collapse show"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    <div style={{ display: 'flex' }}>
                      <button
                        className="float-left mx-1"
                        style={{ width: '100px', height: '100px' }}
                      >
                        No.4
                      </button>
                      <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        <div>[行业资讯]</div>
                        <div>下一波千亿级富豪将诞生于环保产业？</div>
                        <div>
                          投资，就是要做一头站在风口上的猪。创业，就是要找对风口，风口找对了，猪都会飞起来。
                          目前，全球约6...... [查看详情>>]
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFive">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    News 5
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                class="collapse show"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    <div style={{ display: 'flex' }}>
                      <button
                        className="float-left mx-1"
                        style={{ width: '100px', height: '100px' }}
                      >
                        No.5
                      </button>
                      <div style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        <div>[行业资讯]</div>
                        <div>福建漳州PX工厂爆炸 6人受伤</div>
                        <div>
                          昨日22时20分许，据事故处置领导小组通报，经初步了解，33号腾龙芳烃装置和周边的常压渣油储罐......
                          [查看详情>>]
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

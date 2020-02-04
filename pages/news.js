import Layout from "../components/layout";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url(https://aiban.oss-cn-beijing.aliyuncs.com/value2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          boxShadow: "2px 2px 30px #c0cee5",
          minHeight: "85vh"
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "-4px" }}
          className="container"
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h5
              style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "25px",
                margin: "0 auto",
                marginTop: "10px",
                fontWeight: "bold",
                color: "green",
                textShadow: "4px 4px 15px #c0f9b8"
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
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                          <div>2019年国内国际十大环境新闻</div>
                          <div>
                            1.
                            党的十九届四中全会提出坚持和完善生态文明制度体系。
                            2. 让黄河成为造福人......
                            <br />
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
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                          <div>2019年国际十大环境新闻</div>
                          <div>
                            1. 世界环境日主场活动在中国杭州成功举办。 2.
                            第25届联合国气候变化大会在......
                            <br />
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
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      No.3
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
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                          <div>大气污染防治将突出“精准治污”</div>
                          <div>
                            近日，生态环境部表示，随着打赢蓝天保卫战的决策部署逐步落实，全国的空气质量持续稳中向好。其中.....
                            <br />
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
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      No.4
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
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                          <div>河北去年大气质量达到6年来最好水平</div>
                          <div>
                            记者从日前开幕的河北省第十三届人民代表大会第三次会议上获悉，......
                            <br />{" "}
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

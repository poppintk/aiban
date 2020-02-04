import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p {
            font-weight: bold;
            line-height: 200%;
          }
        `}
      </style>
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
          <div style={{ width: "100%" }}>
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
              2019年国内国际十大环境新闻
            </h5>
            <div className="row">
              <div className="col-lg-4 offset-lg-1">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/new_1.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{
                    height: 200,
                    borderRadius: "15px"
                  }}
                />
              </div>
              <div className="col-lg-4 offset-lg-2">
                <img
                  className="card-img-top"
                  src="https://aiban.oss-cn-beijing.aliyuncs.com/new_2.jpg?x-oss-process=style/aiban"
                  alt="Card image cap"
                  style={{
                    height: 200,
                    borderRadius: "15px"
                  }}
                />
              </div>
            </div>
            <p style={{ marginTop: "20px" }}>2019年国内十大环境新闻：</p>
            {/* <img
              className="card-img-top"
              src="https://aiban.oss-cn-beijing.aliyuncs.com/new_3.jpg?x-oss-process=style/aiban"
              alt="Card image cap"
              style={{
                height: 240,
                width: 300,
                float: "left",
                borderRadius: "15px",
                padding: "15px"
              }}
            /> */}
            <p>
              1. 党的十九届四中全会提出坚持和完善生态文明制度体系。
              <br />
              2. 让黄河成为造福人民的幸福河。 <br />
              3. 长三角一体化发展国家战略全面进入施工期。 <br />
              4. 今后每届党的中央委员会任期内均开展例行生态环保督察。 <br />
              5. 污染防治攻坚战成效明显生态环境质量持续改善。
              <br /> 6. 北京世园会向世界发出绿色发展倡议。 <br />
              7. “无废城市”建设试点启动。 <br />
              8. 第二届监测大比武展现生态环保铁军风采。 <br />
              9. 立法推进垃圾分类实施。
              <br />
              10. 首部《中国的核安全》白皮书发布。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

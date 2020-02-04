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
              河北去年大气质量达到6年来最好水平
            </h5>
            <p>
              记者从日前开幕的河北省第十三届人民代表大会第三次会议上获悉，
              <br />
              今年河北省将全民共治、源头防治打好污染防治攻坚战，
              <br />
              PM2.5平均浓度同比下降3%左右。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

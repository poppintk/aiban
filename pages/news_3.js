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
              大气污染防治将突出“精准治污”
            </h5>
            <p>
              近日，生态环境部表示，随着打赢蓝天保卫战的决策部署逐步落实，全国的空气质量持续稳中向好。
              <br />
              其中，京津冀地区的大气污染治理成效明显，但是华中、西南等区域的污染问题却日渐凸显,
              <br />
              这些地域的治理将作作为今年蓝天保卫战的重点。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

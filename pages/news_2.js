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
              2019年国际十大环境新闻
            </h5>
            <p>
              2019年国际十大环境新闻：
              <br />
              <br />
              1. 世界环境日主场活动在中国杭州成功举办。
              <br />
              2. 第25届联合国气候变化大会在西班牙马德里召开。 <br />
              3. 第四届联合国环境大会呼吁创新发展模式。 <br />
              4. 《生物多样性公约》第十五次缔约方大会主题发布。 <br />
              5. 美国政府正式启动退出《巴黎协定》程序。 <br />
              6. 欧洲多国遭遇热浪袭击，全球变暖议题再引关注。 <br />
              7. 亚马孙雨林大火给南美洲埋下环境隐患。 <br />
              8. 印度遭遇严重空气污染，多地进入公共卫生紧急状态 。 <br />
              9. 菲律宾—加拿大的洋垃圾“六年之争”收场。 <br />
              10. “我们的海洋”大会关注塑料垃圾。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p,
          ul {
            font-weight: bold;
            list-style: none;
            line-height: 200%;
          }
          p,
          ol {
            font-weight: bold;
            line-height: 200%;
          }
        `}
      </style>
      <div className="container-fluid" style={{ minHeight: "85vh" }}>
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
                textShadow: "4px 4px 15px #c0f9b8",
              }}
            >
              公司核心技术之二： FS型双循环双区两级湿法喷雾脱硫塔工艺
            </h5>
            <div>
              <p>
                FS型双循环双区两级湿法喷雾脱硫塔工艺是本公司科研团队与美国Airborne公司合作研究开发的石灰石-石膏法脱硫工艺，并且结合我公司将近二十多年的脱硫实践经验总结的技术成果。其主要特点：
              </p>
              <ol>
                <li>
                  我公司的双循环脱硫工艺（专利号: ZL 2016 2
                  0161394.3），实现了脱硫液的双循环，石灰石浆液输送泵的流量调控范围增大10倍，即可大大提高脱硫效率，并且大幅度提高了系统的脱硫余量，环保要求进一步提高或者燃煤含硫增加一倍，也能保证脱硫超低排放。
                </li>
                <li>
                  将脱硫塔设计为两级湿法喷雾脱硫塔（专利号:ZL 2016 2
                  0161392.4），在相同“液气比”甚至低“液气比”条件下，我公司方案比常规方案的脱硫效率大幅度提高。
                </li>
                <li>
                  设计了石膏浆液区，将脱硫塔内的石膏浆液循环浓缩后送往真空皮带脱水机脱水。
                </li>
              </ol>

              <p>因此，“FS型双循环双区两级湿法喷雾脱硫塔工艺”可以说实现了：</p>
              <ul>
                <li>
                  A.脱硫效率高可以达到99.5%以上，SO2超低排放甚至近零排放要求。
                </li>

                <li>
                  B.
                  投资成本省，此工艺降低了脱硫的液气比，使系统主体建造和设备选型比常规要节省10%。
                </li>

                <li>
                  C.
                  运行成本低，此工艺对脱硫剂石灰石输送量的调控和一级外循环水浴专利装置的使用，有效保证系统在经济条件下运行，运行成本降低20%-30%。该工艺在100多个案例中应用，深受用户好评，为环保事业作出了贡献。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

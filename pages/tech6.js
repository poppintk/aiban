import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <style jsx>
        {`
          p,
          ul {
            font-weight: bold;
            line-height: 200%;
            list-style: none;
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
              公司核心技术之六： 高效节能多级脱硝工艺
            </h5>
            <p>
              随着我国对环保要求越来越高，普通的脱硝技术很难达到新的超低排放和节能降耗要求。脱硝技术从SNCR、SCR、强氧化剂（臭氧、双氧水等）到生物脱硝，而SNCR脱硝是运行费用低的一种方法，但此方法通常脱硝效率低很多，本公司多级SNCR脱硝工艺装置，使脱硝效率在原有基础上提高15%以上。
              技术特点:
            </p>
            <ul>
              <li> A．能耗低，系统运行稳定可靠性高。</li>
              <li>B．脱硝效率高，运行稳定,氮氧化物排放≤50mg/m3。</li>
              <li> C．维护方便，操作简单。</li>
            </ul>

            <p>
              多级脱硝装置位于三个温度在800～1100℃区域，烟气通过三级脱硝，能起到并集效果，从而提高脱硝效率。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

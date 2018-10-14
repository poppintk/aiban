import Layout from '../components/layout';

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
              河北省发布5项大气污染排放标准点评:超低排放成大势所趋
              非电提标市场待开放
            </h5>
            <p>
              2018 年4 月25 日,河北省发布了钢铁、焦化、水泥、平板玻璃、锅炉等5
              个非电行业的大气污染排放标准的征求意见稿。其中,钢铁工业大气标准为“超低排放”
              标准。 超低排放成大势所趋,钢铁作为“排污大头”首当其冲。
            </p>
            <p>
              2018
              年政府工作报告中明确提出,今年要推动钢铁等行业超低排放改造。河北省作为钢铁大省,钢铁产量全国占比近30%,而2016
              年河北省钢铁行业烟(粉)尘、SO2、NOx 年排放量高达61、22、25
              万吨,占全省工业排放量的69%、43%、43%,钢铁行业污染治理刻不容缓。此次河北省出台的钢铁工业大气“超低排放”限值规定,现有企业自2020
              年1 月1 日起,烧结(球团)的颗粒物、SO2、NOx
              排放浓度分别不得超过10、35、50mg/m3,与之前的特别排放限值相比再一次加严,充分体现了政府对打赢蓝天保卫战的决心和态度。
            </p>
            <p>其他4行业提高大气污染物排放限值标准,非电提标要求望全面铺开。</p>
            <p>
              本次河北省在焦化、水泥、平板玻璃、锅炉等4
              个非电行业排放标准的制定上比原国家标准均大幅提高。目前非电行业错峰生产成为常态,同时,也有部分重污染企业或因行政命令、环保要求过于严格搬离重点污染区,以环保做“减法”是解决区域环保问题重要手段之一;而在环保的“加法”方面,河北省紧跟国家脚步,先行在以上行业提高标准,未来非电行业的提标工作有望全面铺开,“2+26”所涉及的其他5
              省市也有望跟进。
            </p>
            <p>无组织排放或成未来治理新重点。</p>
            <p>
              本次除了提标外,河北省还对以上行业的无组织排放污染物浓度限值有了更加严格的规定。在污染物有组织排放治理有序发展的同时,污染物的“跑冒滴漏”等无组织排放或成未来治理新的重点。
            </p>
            <p>
              本次河北省的非电提标或将开启全国各省市新一轮的提标大潮,非电提标改造市场有望迎来新发展。但需要注意的是,本次提标限定的时间节点多为2020
              年,2018
              年仍需关注各行业有差别限产对价格和污染治理带来的效果和影响及订单铺开情况;预计2018
              年中后期至2019
              年,非电提标改造订单落地将对相关公司业绩带来积极影响。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div
        className="container-fluid"
        style={{
          // backgroundImage:
          //       'url(https://aiban.oss-cn-beijing.aliyuncs.com/sky2.jpg)',
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPosition: 'center center',
          //   boxShadow:'2px 2px 30px #c0cee5',
          marginTop: '-8px',
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: '10px',
            paddingBottom: '20px',
          }}
        >
          <h5
            style={{
              textAlign: 'center',
              paddingTop: '2px',
              borderRadius: '25px',
              margin: '0 auto',
              marginTop: '10px',
              fontWeight: 'bold',
              color: 'green',
              textShadow: '4px 4px 15px #c0f9b8',
            }}
          >
            爱邦正明环保——我们用心做事！
          </h5>
          <br />
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">序号</th>
                  <th scope="col">用户单位名称</th>
                  <th scope="col">炉型</th>
                  <th scope="col">产品炉型及数量</th>
                  <th scope="col">是否达标排放</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-primary">
                  <td>1</td>
                  <td>重庆中梁山电厂</td>
                  <td>35t/h流化床</td>
                  <td>SPS -35型2台</td>
                  <td>达标</td>
                </tr>

                <tr className="table-light">
                  <td>2</td>
                  <td>湖南维尼纶厂有限公司</td>
                  <td>35t/h流化床</td>
                  <td>SPS -35型1台</td>
                  <td>达标</td>
                </tr>

                <tr className="table-primary">
                  <td>3</td>
                  <td>山西阳煤集团发供电二电厂</td>
                  <td>35t/h流化床</td>
                  <td>SPS -35t/h 4台</td>
                  <td>达标</td>
                </tr>

                <tr className="table-light">
                  <td>4</td>
                  <td>山西河津振兴电厂</td>
                  <td>240t/h流化床</td>
                  <td>HZX-240 型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>5</td>
                  <td>山西省医科大学附二院</td>
                  <td>10t/h链条炉</td>
                  <td>SDZ-10型4台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>6</td>
                  <td>太原重型机械集团</td>
                  <td>35t/h流化床</td>
                  <td>SSP-35型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>7</td>
                  <td>山西昆明烟草有限公司</td>
                  <td>20t/h链条炉</td>
                  <td>SPS-20型3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>8</td>
                  <td>山西平阳机械厂</td>
                  <td>20t/h链条炉</td>
                  <td>SPS-20型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>9</td>
                  <td>山西阳煤集团发供电一电厂</td>
                  <td>35t/h流化床</td>
                  <td>SPS-35t/h 2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>10</td>
                  <td>山西晋能大同电厂</td>
                  <td>160t/h粉煤炉</td>
                  <td>SPS-160型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>11</td>
                  <td>云南红磷化工有限公司</td>
                  <td>35t/h流化床</td>
                  <td>SPS-35型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>12</td>
                  <td>山西阳煤集团第一热电厂</td>
                  <td>35t/h流化床</td>
                  <td>SPS-35型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>13</td>
                  <td>昆明神农汇丰化肥有限公司</td>
                  <td>25t/h流化床</td>
                  <td>SPS-25型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>14</td>
                  <td>佛山联达纺织实业有限公司</td>
                  <td>20t/h流化床</td>
                  <td>SPS-20 型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>15</td>
                  <td>翔莺化纤（海城）有限公司</td>
                  <td>25t/h流化床</td>
                  <td>SPS-25 型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>16</td>
                  <td>广东肇庆星湖生物化学制药厂</td>
                  <td>20t/h链条炉</td>
                  <td>
                    SPS-20 型1台<br />
                    SPS-10 型1台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>17</td>
                  <td>广西贵糖（集团）股份有限公司</td>
                  <td>75t/h煤粉炉</td>
                  <td>SPS-75型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>18</td>
                  <td>山东费县正义热电有限公司</td>
                  <td>75t/h流化床</td>
                  <td>SPS-75型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>19</td>
                  <td>新疆博湖苇业股份有限公司</td>
                  <td>1-35t/h流化床</td>
                  <td>SPS-35型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>20</td>
                  <td>山东临忻忻州水泥股份有限公司</td>
                  <td>75t/h流化床</td>
                  <td>SPS-75型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>21</td>
                  <td>山东忻州集团罗庄热电厂</td>
                  <td>75t/h流化床</td>
                  <td>SPS-75型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>22</td>
                  <td>山西阳煤集团第二热电厂</td>
                  <td>35t/h流化床</td>
                  <td>SPS-75型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>23</td>
                  <td>吉林华微电子股份有限公司</td>
                  <td>
                    20t/h链条炉<br />
                    10t/h链条炉
                  </td>
                  <td>
                    SS-20型2台<br />
                    SS-10型2台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>24</td>
                  <td>中油集团东方地球物理公司乌鲁木齐基地管理处</td>
                  <td>20t/h链条炉</td>
                  <td>SDZ-20型3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>25</td>
                  <td>河北晶龙丰利化工有限公司</td>
                  <td>75t/h流化床</td>
                  <td>SPS-75型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>26</td>
                  <td>汾西新峪煤业有限责任公司</td>
                  <td>
                    20t/h链条炉<br />
                    35t/h流化床
                  </td>
                  <td>
                    SS-20型2台<br />
                    SS-35型2台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>27</td>
                  <td>山西怀仁县 3-58MW 供热</td>
                  <td>80t/h流化床</td>
                  <td>SS-80型3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>28</td>
                  <td>广西田东金荣纸业有限公司</td>
                  <td>50t/h流化床</td>
                  <td>SPS-50型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>29</td>
                  <td>广东海印永业（集团）股份有限公司</td>
                  <td>20t/h余热炉</td>
                  <td>
                    SS-20型1台<br />
                    SS-30型1台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>30</td>
                  <td>中石油东方地球物理公司徐水基地管理处机械厂</td>
                  <td>2-10t/h链条炉</td>
                  <td>SDZ-10型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>31</td>
                  <td>中石油东方地球物理公司徐水基地管理处大院</td>
                  <td>4-10t/h链条炉</td>
                  <td>SDZ-10型4台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>32</td>
                  <td>湘西鹤盛原烟发展有限公司</td>
                  <td>10t/h链条炉</td>
                  <td>SS-10型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>33</td>
                  <td>山西汾西矿业集团化工有限公司</td>
                  <td>3-8t/h往复炉</td>
                  <td>SS-8型3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>34</td>
                  <td>浙江绍兴新纵横集团聚酯有限公司</td>
                  <td>4-1200万大卡热媒炉</td>
                  <td>SS-25型4台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>35</td>
                  <td>新疆博湖苇业股份有限公司</td>
                  <td>1-75t/h流化床</td>
                  <td>SPS-75型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>36</td>
                  <td>宁夏圣花米来生物工程有限公司</td>
                  <td>1-25t/h流化床</td>
                  <td>SPS-25型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>37</td>
                  <td>中石油东方地球物理公司徐水基地管理处仪器厂</td>
                  <td>2-10t/h链条炉</td>
                  <td>SDZ-10型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>38</td>
                  <td>甘肃银光聚银化工有限公司</td>
                  <td>4-45t/h粉煤炉</td>
                  <td>SS-45型4台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>39</td>
                  <td>广西田东金荣纸页有限公司</td>
                  <td>1-75t/h循环流化床炉</td>
                  <td>SS-75型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>40</td>
                  <td>新疆博湖苇业股份游戏公司</td>
                  <td>3-50t/h流化床</td>
                  <td>SPS-50型3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>41</td>
                  <td>广东华恋新材料有限公司</td>
                  <td>2-75t/h循环流化床炉</td>
                  <td>SPS-150型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>42</td>
                  <td>湖北薪农化工有限公司</td>
                  <td>1-6t/h链条炉</td>
                  <td>SS-6型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>43</td>
                  <td>宁夏圣花米来生物工程有限公司</td>
                  <td>4#5#35t/h循环流化床炉</td>
                  <td>SPS-35型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>44</td>
                  <td>长发铝电有限公司</td>
                  <td>220t/h循环流化床炉</td>
                  <td>MHD146-3/2型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>45</td>
                  <td>太原热电有限公司</td>
                  <td>200MW发电机组</td>
                  <td>SNCR脱硝2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>46</td>
                  <td>湖南华电长沙电厂</td>
                  <td>600MW发电机组</td>
                  <td>SCR脱硝2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>47</td>
                  <td>宁夏圣花米来生物工程有限公司</td>
                  <td>2#3#35t/h循环流化床炉</td>
                  <td>
                    LQDM1828 型2台<br />
                    SPS -75型1台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>48</td>
                  <td>甘肃省金昌市热电厂</td>
                  <td>35t/h链条炉</td>
                  <td>TDX-35型2台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>49</td>
                  <td>广西风糖股份有限公司罗城糖厂</td>
                  <td>90t/h生物质锅炉</td>
                  <td>SS-90型1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>50</td>
                  <td>河北冀州中科能源有限公司</td>
                  <td>2X130t/h+1X150t/h循环流化床</td>
                  <td>SNCR脱硝3台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>51</td>
                  <td>邢台春蕾集中供热公司</td>
                  <td>1X 45t/h 循环流化床</td>
                  <td>
                    FS、JS - 45型1台<br />
                    SNCR - 45型1台<br />
                    LQDM1600型1台
                  </td>
                  <td>达标</td>
                </tr>
                <tr className="table-light">
                  <td>52</td>
                  <td>邢台中科生物质发电有限公司</td>
                  <td>75t/h生物质锅炉</td>
                  <td>SNCR脱硝 1台</td>
                  <td>达标</td>
                </tr>
                <tr className="table-primary">
                  <td>53</td>
                  <td>河北亿丰热电有限公司</td>
                  <td>1X130t/h+2X75t/h循环流化床</td>
                  <td>
                    FS/JS - 130型1台<br /> FS/JS - 75型2台
                  </td>
                  <td>达标， 超低排放</td>
                </tr>
                <tr className="table-light">
                  <td>54</td>
                  <td>广东新会粤新热电联供有限公司</td>
                  <td>2X130t/h循环流化床</td>
                  <td>FS、JS - 130型2台</td>
                  <td>达标， 超低排放</td>
                </tr>
                <tr className="table-primary">
                  <td>55</td>
                  <td>内蒙古常盛制药有限公司</td>
                  <td>2X75t/h链条炉</td>
                  <td>
                    FS - 75型2台<br /> FS/JS - 75型1台<br /> SNCR - 75型3台<br />低氮燃烧
                    - 75型3台
                  </td>
                  <td>达标， 超低排放</td>
                </tr>
                <tr className="table-light">
                  <td>56</td>
                  <td>盾安节能系统有限公司原平分公司</td>
                  <td>4X90MW热水锅炉</td>
                  <td>
                    FS/JS - 130型4台<br />LQDM 4000型1台
                  </td>
                  <td>达标， 超低排放</td>
                </tr>
                <tr className="table-primary">
                  <td>57</td>
                  <td>江西永冠科技有限公司</td>
                  <td>1X75t/h循环流化床</td>
                  <td>
                    FS/JS - 75型1台<br />LQDM 2500型1台
                  </td>
                  <td>达标， 超低排放</td>
                </tr>
                <tr className="table-light">
                  <td>58</td>
                  <td>中煤东顺清洁能源有限公司</td>
                  <td>2X75t/h煤粉炉</td>
                  <td>
                    FS/SD - 75型2台<br /> SNCR+SCR-75型脱硝2台
                  </td>
                  <td>达标， 超低排放</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

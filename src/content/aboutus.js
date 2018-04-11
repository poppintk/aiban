import React, { Component } from 'react';
import header_image from '../image/header.png';
import LeftMenue from './leftMenue';
import { Divider, Layout, Icon } from 'antd';

export default class AboutUs extends Component {
  render() {
    return (
      <Layout.Content
        style={{
          backgroundColor: '#e2eeff',
          display: 'flex',
          height: '600px'
        }}
      >
        {/*  left menue */}
        <div
          style={{
            marginLeft: '60px',
            height: '100%',
            backgroundColor: '#bce6ff',
            width: '10vw',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: '10px'
            }}
          >
            关于我们<Icon type="arrow-right" />
          </div>
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '30px',
              cursor: 'pointer'
            }}
          >
            <Icon type="right" />企业简介
          </div>
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            <Icon type="right" />企业文化
          </div>
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            <Icon type="right" />资质荣誉
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '75%'
          }}
        >
          <div>正德厚生，明诚至信；证明环保，造福人类！</div>
          <hr />
          <p>
            湖南爱邦正明环保有限公司是一家国际大气污染防治先进技术中外合作典范，是一家专业从事环保技术装备研制、工程设计、环保服务、项目总承包业务的国际重点高新技术企业。
          </p>
          <p>
            公司董事长黎勃先生2003年获美国耶鲁大学环境工程博士学位，从事大气污染治理二十多年，引领和参与十多项专利技术的研制和开发，与国际上顶尖的环保公司美国爱邦（Airbone）公司有长远的战略合作伙伴关系，2010年美国爱邦获美国总统克林顿三千万美元科研支持，公司有国际上顶尖学府美国耶鲁大学作为科研基地，引领国际环保高新科技。
          </p>
          <p>
            公司注册资金8000万元，公司在美丽的历史文化名城——长沙建有生产基地，在北京有爱邦正明的市场发展部，在北美中心城市多伦多有我们的技术研究院。
          </p>
          <p>
            公司通过了ISO9001质量管理体系认证，在美国耶鲁大学森林环境学院，加拿大多伦多大学地理环境学院，中国南京信息工程大学气象环境学院设有爱邦正明实验室，由国际上环保工程领军人物组成我们的科研团队。
          </p>
          <p>
            公司董事长黎勃博士、教授，曾任奇正集团董事长，加拿大电脑学院名誉院长，树山、正明环保公司总经理。公司市场部总裁Marray
            Mortson，任美国爱邦Airbone环保公司总裁。
          </p>
          <p>
            公司技术部总裁汤友志博士，任中加环境协会会长，加拿大爱邦清洁能源有限公司董事长。公司研究院院长李旭辉博士，任美国耶鲁大学森林环境学院终身教授。公司始终坚持以技术为先导，以人为本，海纳百川。
          </p>
          <p>
            公司将以顶尖的技术服务于用户，公司用户遍布中国17个省市，产品技术远销美国、加拿大、丹麦、俄罗斯、土耳其、越南、尼日利亚、哥伦比亚等20多个国家和地区。
          </p>
        </div>
      </Layout.Content>
    );
  }
}

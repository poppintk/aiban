import React, { Component } from 'react';
import { Select, Layout } from 'antd';
const { Footer } = Layout;
const Option = Select.Option;

export default class FooterComponent extends Component {
  onChangeHandler(e) {
    var link = e;
    console.log(link);
    window.open(link, '_blank');
  }

  render() {
    return (
      <Footer style={{ height: '55px', backgroundColor: '#3c56a3' }}>
        <div
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-12px'
          }}
        >
          <div>版权所有：湖南爱邦正明环保工程公司</div>
          <div style={{ marginLeft: '10px' }}>
            <a
              href="mailto:1317426180@qq.com"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              企业邮箱
            </a>
          </div>
          <div style={{ marginLeft: '10px' }}>网站地图 </div>
          <div style={{ marginLeft: '10px' }}>联系我们</div>
          <div style={{ marginLeft: '10px' }}>友情链接：</div>
          <Select
            defaultValue="国际环保城"
            style={{ width: 120 }}
            onChange={this.onChangeHandler}
            size={'small'}
          >
            <Option value="http://www.iepz.cc/">国际环保城</Option>
            <Option value="http://green.sina.com.cn/">新浪环保</Option>
            <Option value="http://www.dowater.com/">中国污水处理工程网</Option>
            <Option value="http://www.cenews.com.cn/">中国环境网</Option>
            <Option value="http://www.chinaenvironment.com/">中国环保网</Option>
            <Option value="http://www.zhb.gov.cn/">中国环保部</Option>
            <Option value="http://www.epday.com/">中国环境保护网</Option>
            <Option value="http://www.caepi.org.cn/">
              中国环保保护产业协会
            </Option>
          </Select>
        </div>
      </Footer>
    );
  }
}

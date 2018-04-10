import React, {
  Component
} from 'react';
import './App.css';
import Top from './Header_new';
import header_image from './image/header.png';
import {
  Layout,
  Select 
} from 'antd';
const {
  Header,
  Footer,
  Sider,
  Content
} = Layout;
const Option = Select.Option;

export default class App extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return ( 
    <Layout >
      <Top / >
      <Content style={{height:'80vh',overflow:'auto'}}> 
        <img 
          style = {{
            width: '90%',
            display: 'block',
            margin: '0 auto',
            height:'200px'
          }}
          src = {header_image}/>
      </Content >
      <Footer style={{height:'calc(20vh - 117px)',backgroundColor:'#3c56a3'}}>
      <div style={{color:'white'}}>
        <span >版权所有：湖南爱邦正明环保工程公司</span>  
        <span style={{marginLeft:'10px'}}>企业邮箱</span>       
        <span style={{marginLeft:'10px'}}>网站地图 </span>      
        <span style={{marginLeft:'10px'}}>技术支持</span>       
        <span style={{marginLeft:'10px'}}>天气预报</span>       
        <span style={{marginLeft:'10px'}}>联系我们</span>    
        <span style={{marginLeft:'10px'}}>友情链接：</span>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange} size={'small'}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      </Footer> 
    </Layout >
    );
  }
}
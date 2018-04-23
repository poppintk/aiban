import React, { Component } from 'react';
import { Carousel,Card } from 'antd';

export default class Main extends Component {
  render() {
    var blockStyle = { width: '100%',height:500 };
    return (
      <div style={{ height: '100%' }}>
        <div
          style={{
            width: '90%',
            display: 'block',
            margin: '0 auto',
            height: '25vh'
          }}
        >
          <Carousel autoplay>
            <img style={blockStyle} src={require('../image/cases/1.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/10.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/11.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/12.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/13.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/14.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/15.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/16.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/17.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/18.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/19.JPG')}/>
            <img style={blockStyle} src={require('../image/cases/2.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/3.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/4.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/5.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/6.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/7.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/8.jpg')}/>
            <img style={blockStyle} src={require('../image/cases/9.JPG')}/>


          </Carousel>
          {/* <button style={blockStyle}>关于我们</button>
          <button style={blockStyle}>新闻动态</button>
          <button style={blockStyle}>工程案例</button>
          <button style={blockStyle}>联系我们</button>
          <button style={blockStyle}>业务领域</button> */}
          <div  style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
            <Card title="企业宗旨" style={{ width: 300 }}>
              <p>让整个地球共享一片蓝天</p>
            </Card>
            <Card title="经营理念" style={{ width: 300 }}>
              <p>至诚至信，和谐共赢，务实创新，追求卓越</p>
            </Card>
            <Card title="企业精神" style={{ width: 300 }}>
              <p>以人为本，激扬进取，自强不息，同甘共苦</p>
            </Card>
            <Card title="服务理念" style={{ width: 300 }}>
              <p>顶尖技术服务于用户，创精品工程</p>
            </Card>
            <Card title="长期目标" style={{ width: 300 }}>
              <p>科技先锋，行业典范</p>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

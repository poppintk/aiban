import React,{ Component } from 'react';
import header_image from '../image/header.png';

export default class Main extends Component {
  render(){
    var blockStyle = {width:'200px'};
    return(
        <div style={{minWidth:'1113px'}}>
            <img style={{
              width:'90%',
              display: 'block',
              height:'50vh',
              margin: '0 auto'
            }}  
            src={header_image}/>
          <div style={{
            width:'90%',
            display: 'block',
            margin: '0 auto',
            height:'25vh'}}>
            <button style={blockStyle}>视频介绍</button>
            <button style={blockStyle}>新闻中心</button>
            <button style={blockStyle}>更多</button>
            <button style={blockStyle}>经典案例</button>
            <button style={blockStyle}>更多</button>
          </div>
        </div>
    );
  }
}

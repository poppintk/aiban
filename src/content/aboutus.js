import React,{ Component } from 'react';
import header_image from '../image/header.png';
import LeftMenue from './leftMenue';

export default class AboutUs extends Component {
  render(){
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
            backgroundColor:'#e2eeff'}}>
            <LeftMenue/>
          </div>
        </div>
    );
  }
}

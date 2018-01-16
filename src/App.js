import React,{ Component } from 'react';
import Header from './Header';
import header_image from './image/header.png';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <img style={{
            width:'90%',
            display: 'block',
            height:'200px',
            margin: '0 auto'
          }} src={header_image}/>

      </div>
    );
  }
}

import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './content/Main';
import AboutUs from './content/aboutus';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <AboutUs/>
        {/* footer */}
        <Footer/>
      </div>
    );
  }
}

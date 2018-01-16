import React,{ Component } from 'react';
import logo from './image/logo.png';
import './Header.css';

export default class Header extends Component {
  render(){
    return(
      <div style={{
          height:90,
          width:'100vw',
          backgroundColor:'#adccff',
          display:'flex'
        }}>
        <div style={{
            display:'flex',
            position:'relative',
            top:'20%'
          }}>
          <div>
            <img
              style={{
                width:'70px',
                marginLeft:'60px'
              }}
              src={logo} alt="logo"/>
          </div>
          <div style={{
              fontSize:'23px',
              fontWeight:'bold',
              marginLeft:'5px'
            }}>
            爱邦正明
            <div style={{
                fontSize:'12px'
              }}>
              ai bang zheng ming
            </div>
          </div>

        </div>
        {/* menue */}
        <div style={{
          }}>
          <div style={{
              position:'absolute',
              top:'1%',
              left:'70%',
              width:'30%'
            }}>
            <select style={{
                width:'40%'
              }}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button>简体/</button>
            <button>繁体/</button>
            <button>English</button>
          </div>
          {/* menu*/}
          <div style={{
              marginTop:'60px',
              marginLeft:'100px'
            }}>
            <nav>
             <ul>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">首页</a>
                 <ul class="sub-menu">
                   <li><a href="">Item 1</a></li>
                   <li><a href="">Item 2</a></li>
                   <li><a href="">Item 3</a></li>
                   <li><a href="">Item 4</a></li>
                 </ul>
               </li>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">关于我们</a>
                 <ul class="sub-menu">
                   <li><a href=""> Item 1</a></li>
                   <li><a href=""> Item 2</a></li>
                   <li><a href=""> Item 3</a></li>
                   <li><a href=""> Item 4</a></li>
                   <li><a href=""> Item 5</a></li>
                   <li><a href=""> Item 6</a></li>
                 </ul>
               </li>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">新闻中心</a>
                 <ul class="sub-menu">
                   <li><a href=""> Item 1</a></li>
                   <li><a href=""> Item 2</a></li>
                 </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">工程业绩</a>
                  <ul class="sub-menu">
                    <li><a href=""> Item 1</a></li>
                    <li><a href=""> Item 2</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">技术研发</a>
                  <ul class="sub-menu">
                    <li><a href=""> Item 1</a></li>
                    <li><a href=""> Item 2</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">交流合作</a>
                  <ul class="sub-menu">
                    <li><a href=""> Item 1</a></li>
                    <li><a href=""> Item 2</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">招贤纳士</a>
                  <ul class="sub-menu">
                    <li><a href=""> Item 1</a></li>
                    <li><a href=""> Item 2</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">联系我们</a>
                  <ul class="sub-menu">
                    <li><a href=""> Item 1</a></li>
                    <li><a href=""> Item 2</a></li>
                  </ul>
                </li>
             </ul>
           </nav>
          </div>
        </div>
      </div>
    );
  }
}

import React,{ Component } from 'react';
import logo from './image/logo.png';
import './Header.css';

export default class Header extends Component {
  render(){
    return(
      <div style={{
          height:'15vh',
          width:'100vw',
          backgroundColor:'#bce6ff',
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
                width:'80px',
                marginLeft:'60px'
              }}
              src={logo} alt="logo"/>
          </div>
          <div style={{
              fontSize:'28px',
              fontWeight:'bold',
              marginLeft:'10px',
              minWidth:'130px'
            }}>
            爱邦正明
            <div style={{
                fontSize:'14px'
              }}>
              ai bang zheng ming
            </div>
          </div>

        </div>
        {/* menue */}
        <div>
          <div style={{
              position:'absolute',
              top:'1%',
              left:'70%',
              width:'30%',
              fontSize:'12px'
            }}>
            <input style={{
                width:'40%'
              }} placeholder="请输入关键字"/>
            <button>GO</button>
            &nbsp;
            <span>简体/</span>
            <span>繁体/</span>
            <span>English</span>
          </div>
          {/* menu*/}
          <div style={{
              marginTop:'8vh',
              marginLeft:'15vw'
            }}>
            <nav>
             <ul>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">首页</a>
               </li>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">关于我们</a>
                 <ul class="sub-menu">
                   <li><a href=""> 企业简介</a></li>
                   <li><a href=""> 企业文化</a></li>
                   <li><a href=""> 资质荣誉</a></li>
                 </ul>
               </li>
               <li class="sub-menu-parent" tab-index="0">
                 <a href="">新闻中心</a>
                 <ul class="sub-menu">
                   <li><a href=""> 公司新闻</a></li>
                   <li><a href=""> 工程动态</a></li>
                   <li><a href=""> 行业新闻</a></li>
                 </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">工程业绩</a>
                  <ul class="sub-menu">
                    <li><a href=""> 华东地区</a></li>
                    <li><a href=""> 华南地区</a></li>
                    <li><a href=""> 华中地区</a></li>
                    <li><a href=""> 西南地区</a></li>
                    <li><a href=""> 华北地区</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">技术研发</a>
                  <ul class="sub-menu">
                    <li><a href=""> 核心技术</a></li>
                    <li><a href=""> 知识产权</a></li>
                    <li><a href=""> 产学研合作</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">交流合作</a>
                  <ul class="sub-menu">
                    <li><a href=""> 大陆合作</a></li>
                    <li><a href=""> 港台合作</a></li>
                    <li><a href=""> 国际合作</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">招贤纳士</a>
                  <ul class="sub-menu">
                    <li><a href="">领军人才</a></li>
                    <li><a href="">招贤纳士</a></li>
                  </ul>
                </li>
                <li class="sub-menu-parent" tab-index="0">
                  <a href="">联系我们</a>
                </li>
             </ul>
           </nav>
          </div>
        </div>
      </div>
    );
  }
}

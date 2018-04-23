import React from 'react';
import { Divider, Layout, Icon } from 'antd';
import SiderComponent from './sider';

const Qiyewenhua = ()=>{
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <SiderComponent/>
          <Layout.Content
          style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <h5 style={{
            textAlign: 'center',
            border:'1px groove',
            width:'200px',
            height:'30px',
            paddingTop:'2px',
            borderRadius:'25px',
            margin: '0 auto',
            marginTop:'10px',
            marginBottom:'10px',
            boxShadow: '1px 1px 1px #9aa1ad',
            color:'red',
            fontWeight:'bold'
          }}>
            企业文化
        </h5>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width:'100%'
            }}
          >
            <img src={require('../../image/aboutUs.png')}/>
          </div>
        </Layout.Content>
      </div>
    );
}

export default Qiyewenhua;

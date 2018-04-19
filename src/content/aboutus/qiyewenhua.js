import React from 'react';
import LeftMenue from './leftMenue';
import { Divider, Layout, Icon } from 'antd';

const Qiyewenhua = ()=>{
    return(
        <Layout.Content
        style={{
          backgroundColor: '#e2eeff',
          display: 'flex',
          height: '600px'
        }}
      >
        {/*  left menue */}
        <LeftMenue/>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '75%'
          }}
        >
          <div style={{fontWeight:'bold'}}>企业文化 </div>
          <hr />
          <p>
          企业宗旨
            让整个地球共享一片蓝天 
                经营理念
            爱邦兴国	博爱明慧	爱邦正明	环保先锋
            企业精神
            以人为本，激扬进取，自强不息，同甘共苦 
             服务理念
            顶尖技术服务于用户，创精品工程 

             长期目标
            科技先锋，行业典范 
          </p>
        </div>
      </Layout.Content>
    );
}

export default Qiyewenhua;
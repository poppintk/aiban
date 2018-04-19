import React from 'react';
import LeftMenue from './leftMenue';
import { Divider, Layout, Icon } from 'antd';

const Rongyao = ()=>{
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
          <div style={{fontWeight:'bold'}}>资质荣誉 </div>
          <hr />
          <p>

          </p>
        </div>
      </Layout.Content>
    );
}

export default Rongyao;
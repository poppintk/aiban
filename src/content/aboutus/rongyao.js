import React from 'react';
import { Divider, Layout, Icon } from 'antd';
import SiderComponent from './sider';

const Rongyao = ()=>{
    return(
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SiderComponent/>
        <Layout.Content
          style={{
            backgroundColor: 'white',
            display: 'flex',
            height: '100%'
          }}
        >
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
      </div>
    );
}

export default Rongyao;

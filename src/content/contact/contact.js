import React from 'react';
import SiderComponent from '../Sider';

export const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 'calc(100vh - 97px)'
      }}
    >
      <SiderComponent />
      <div style={{ width: '100%' }}>
        <img
          style={{ height: '200px', width: '100%' }}
          src="https://aiban.oss-cn-beijing.aliyuncs.com/header.png"
        />>
        <h5
          style={{
            textAlign: 'center',
            border: '1px groove',
            width: '200px',
            height: '30px',
            paddingTop: '2px',
            borderRadius: '25px',
            margin: '0 auto',
            marginTop: '10px',
            boxShadow: '1px 1px 1px #9aa1ad',
            color: 'red',
            fontWeight: 'bold'
          }}
        >
          爱邦正明——联系方式
        </h5>
        <h5 style={{ marginLeft: '20%' }}>
          地址：长沙市芙蓉区八一路59号科技信息大楼10楼
        </h5>
        <br />
        <br />
        <h5 style={{ marginLeft: '20%' }}>业务咨询电话：18390980101 黎先生 </h5>
        <br />
        <br />
        <h5 style={{ marginLeft: '20%' }}>邮箱：1317426180@qq.com</h5>
        <br />
        <br />
        <h5 style={{ marginLeft: '20%' }}>传真：0731-89708467</h5>
        <br />
        <br />
        <h5 style={{ marginLeft: '20%' }}>邮编：410001</h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;

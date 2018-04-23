import React from 'react';

export const Service = ()=>{
  return(
    <div>
      <main>
        <h5 style={{
            textAlign: 'center',
            border:'1px groove',
            width:'200px',
            height:'30px',
            paddingTop:'2px',
            borderRadius:'25px',
            margin: '0 auto',
            marginTop:'10px',
            boxShadow: '1px 1px 1px #9aa1ad',
            color:'red',
            fontWeight:'bold'
          }}>
            爱邦正明环保——我们用心做事！
        </h5>
        <br/>
        <br/>
        <div>
          <img
            src={require('../../image/service/jobs1.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs2.jpg')}
             style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs3.jpg')}
             style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs4.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs5.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs6.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs7.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs8.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs9.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs10.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs11.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
          <img
            src={require('../../image/service/jobs12.jpg')}
            style={{display:'block',margin:'0 auto'}}
          />
        </div>
      </main>
    </div>
  );
}

export default Service;

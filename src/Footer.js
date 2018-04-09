import React,{ Component } from 'react';

export default class Footer extends Component {


  onChangeHandler(e){
    var link = e.currentTarget.value;
    window.open(link, '_blank');
  }

  render(){
    var subItem = {width:'75px',padding:'20px'};
    return(
        <div style={{
            backgroundColor:'#4a79c4',
            color:'white',
            fontSize:'12px',
            height:'10vh',
            display:'flex'
            }}>
            <div style={{width:'40%',padding:'20px',textAlign:'center',minWidth:'220px'}}>
             版权所有：湖南爱邦正明环保工程公司  
            </div>
            <div style={{width:'60%',display:'flex',minWidth:'600px'}}>
                <div style={subItem}>
                    <a href="mailto:1317426180@qq.com" style={{color:'white', textDecoration:'none'}}>
                        企业邮箱
                    </a>
                </div>
                <div style={subItem}>
                    网站地图       
                </div>
                <div style={subItem}>
                    技术支持
                </div>
                <div style={subItem}> 
                    联系我们                   
                </div>
                <div style={{width:'300px',padding:'20px',display:'flex'}}>
                    <label>友情链接:</label>
                    <div>
                        <select onChange={(e)=>{
                            this.onChangeHandler(e);
                        }}>
                            <option value="http://www.iepz.cc/">----国际环保城----</option>
                            <option value="http://green.sina.com.cn/">-----新浪环保-----</option>
                            <option value="http://www.dowater.com/">中国污水处理工程网</option>
                            <option value="http://www.cenews.com.cn/">----中国环境网----</option>
                            <option value="http://www.chinaenvironment.com/">----中国环保网----</option>
                            <option value="http://www.zhb.gov.cn/">----中国环保部----</option>
                            <option value="http://www.epday.com/">--中国环境保护网--</option>
                            <option value="http://www.caepi.org.cn/">中国环保保护产业协会</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

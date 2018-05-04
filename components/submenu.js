import Link from 'next/link';
import {Motion, spring} from 'react-motion';

export default (props)=>{
    return(
        <Motion defaultStyle={{offset : 0}} style={{offset: spring(1)}}>
        {
            (style)=>{
                return(
                    <div 
                        style={{
                            boxShadow:'1px 1px 4px grey',
                            backgroundColor:'#e3f2fd',
                            marginTop:'20px',
                            paddingBottom:'40px',
                            borderRadius:'10px',
                            opacity:style.offset
                        }}>
                        <div 
                            style={{
                                textAlign:'center',
                                fontWeight:'bold',
                                lineHeight:'150%',
                                paddingTop:'10px'}}>
                        {props.title}
                        <div style={{fontSize:'11px'}}>{props.englishTitle}</div>
                        </div>
                        <hr/>
                        <div style={{
                            textAlign:'center',
                            width:'100%'}}>
                        <Link prefetch href="/culture">
                            <div style={{backgroundColor:'#e3f2fd'}} onMouseEnter={(e)=>{onMouseIn(e)}} onMouseOut={(e)=>onMouseOut(e)}>
                                企业文化 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
                                    onMouseEnter={(e)=>{onMouseIn2(e)}} onMouseOut={(e)=>onMouseOut2(e)}
                                >
                                    CULTURE
                                </span>
                            </div>
                        </Link>
                        <Link prefetch href="/about">
                            <div style={{backgroundColor:'#e3f2fd'}}  onMouseEnter={(e)=>{onMouseIn(e)}} onMouseOut={(e)=>onMouseOut(e)}>
                                关于我们 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
                                    onMouseEnter={(e)=>{onMouseIn2(e)}} onMouseOut={(e)=>onMouseOut2(e)}
                                >
                                    ABOUT US
                                </span>
                            </div>
                        </Link>
                        <Link prefetch href="/honor">
                            <div style={{backgroundColor:'#e3f2fd'}} onMouseEnter={(e)=>{onMouseIn(e)}} onMouseOut={(e)=>onMouseOut(e)}>
                                企业荣耀 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
                                    onMouseEnter={(e)=>{onMouseIn2(e)}} onMouseOut={(e)=>onMouseOut2(e)}
                                >
                                    HONOR
                                </span>
                            </div>
                        </Link>
                        </div>
                    </div>
                );
            }
        }
            
        </Motion>
        
    );
}

const onMouseIn2 = (e)=>{

    e.currentTarget.parentNode.style.backgroundColor="gold";
}
const onMouseOut2 = (e)=>{
    e.currentTarget.parentNode.style.backgroundColor = "#e3f2fd";
}


const onMouseIn = (e)=>{
    e.currentTarget.style.backgroundColor="gold";
}

const onMouseOut = (e)=>{
    e.currentTarget.style.backgroundColor = "#e3f2fd";
}

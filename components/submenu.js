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
                            backgroundColor:'#edf3ff',
                            marginTop:"20px",
                            paddingBottom:'40px',
                            borderRadius:'10px',
                            backgroundImage:
                            'url(https://aiban.oss-cn-beijing.aliyuncs.com/submenu.jpg)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            boxShadow:'0px 0px 50px white'

                        }}>
                        <style jsx>
                            {`
                                /** bounce to right */
                                .hvr-bounce-to-right {
                                  vertical-align: middle;
                                  -webkit-transform: perspective(1px) translateZ(0);
                                  transform: perspective(1px) translateZ(0);
                                  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                                  position: relative;
                                  -webkit-transition-property: color;
                                  transition-property: color;
                                  -webkit-transition-duration: 0.5s;
                                  transition-duration: 0.5s;
                                }
                                .hvr-bounce-to-right:before {
                                  content: "";
                                  position: absolute;
                                  z-index: -1;
                                  top: 0;
                                  left: 0;
                                  right: 0;
                                  bottom: 0;
                                  background: #bfefd5;
                                  -webkit-transform: scaleX(0);
                                  transform: scaleX(0);
                                  -webkit-transform-origin: 0 50%;
                                  transform-origin: 0 50%;
                                  -webkit-transition-property: transform;
                                  transition-property: transform;
                                  -webkit-transition-duration: 0.5s;
                                  transition-duration: 0.5s;
                                  -webkit-transition-timing-function: ease-out;
                                  transition-timing-function: ease-out;
                                }
                                .hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {
                                  color: black;
                                }
                                .hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {
                                  -webkit-transform: scaleX(1);
                                  transform: scaleX(1);
                                  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
                                  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
                                }
                            `}
                        </style>
                        <div 
                            style={{
                                textAlign:'center',
                                fontWeight:'bold',
                                lineHeight:'150%',
                                color:'green',
                                textShadow: '2px 2px 8px green',
                                paddingTop:'10px'}}>
                            {props.title}
                            <div style={{fontSize:'11px'}}>{props.englishTitle}</div>
                        </div>
                        <hr/>
                        <div style={{
                            textAlign:'center',
                            width:'100%'}}>
                        <Link prefetch href="/culture">
                            <div style={{cursor:'pointer'}} className="hvr-bounce-to-right">
                                企业文化 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
                                >
                                    CULTURE
                                </span>
                            </div>
                        </Link>
                        <Link prefetch href="/about">
                            <div style={{cursor:'pointer'}} className="hvr-bounce-to-right">
                                关于我们 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
                                >
                                    ABOUT US
                                </span>
                            </div>
                        </Link>
                        <Link prefetch href="/honor">
                            <div style={{cursor:'pointer'}} className="hvr-bounce-to-right">
                                企业荣耀 &nbsp;
                                <span 
                                    style={{fontSize:'10px'}}
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

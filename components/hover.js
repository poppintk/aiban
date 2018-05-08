import {Motion, spring} from 'react-motion';
import React from 'react';
import Link from 'next/link';

export default class Hover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mouseIn: false
        };
    }
    render(){
        const english_text = {fontSize:'9px',textAlign:'center'};
        return (
            <div 
                onMouseEnter={
                    (e)=>{
                        this.setState({mouseIn:true});
                        // e.currentTarget.style.backgroundColor="gold";
                    }
                }
                onMouseLeave={
                    (e)=>{
                        this.setState({mouseIn:false});
                        // e.currentTarget.style.backgroundColor="red";
                    }
                }
            >

                <style>
                    {`          
                        .hvr-float-shadow {
                            display: inline-block;
                            vertical-align: middle;
                            -webkit-transform: perspective(1px) translateZ(0);
                            transform: perspective(1px) translateZ(0);
                            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                            position: relative;
                            -webkit-transition-duration: 0.3s;
                            transition-duration: 0.3s;
                            -webkit-transition-property: transform;
                            transition-property: transform;
                          }
                          .hvr-float-shadow:before {
                            pointer-events: none;
                            position: absolute;
                            z-index: -1;
                            content: '';
                            top: 100%;
                            left: 5%;
                            height: 10px;
                            width: 90%;
                            opacity: 0;
                            background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
                            background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
                            /* W3C */
                            -webkit-transition-duration: 0.3s;
                            transition-duration: 0.3s;
                            -webkit-transition-property: transform, opacity;
                            transition-property: transform, opacity;
                          }
                          .hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
                            -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                            /* move the element up by 5px */
                          }
                          .hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
                            opacity: 1;
                            -webkit-transform: translateY(5px);
                            transform: translateY(5px);
                            /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
                          }
                          /** bounce to right */
                          .hvr-bounce-to-right {
                            display: inline-block;
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
                            background: #2098D1;
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
                            color: white;
                          }
                          .hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1);
                            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
                          }
                          
                    `}
                </style>
                <Link prefetch href="/about">
                    <div style={{
                            textAlign:'center',
                            fontWeight:'bold',
                            borderRadius:'5px',
                            height:'40px'}} 
                        className="hvr-float-shadow ">
                        <div style={{paddingTop:'5px'}}>
                            {this.props.chineseTitle}
                        </div>
                        <div style={english_text}>{this.props.englishTitle}</div>
                    </div>
                </Link>
                <Motion defaultStyle={{height : 0}} style={{height: spring(this.state.mouseIn? this.props.submenu.length * 38 : 0)}}>
                    {style => (
                        <div 
                            style={{
                                position: 'absolute',
                                backgroundColor: 'rgb(188, 229, 255)',
                                minWidth: '90px',
                                marginTop:'10px',
                                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                zIndex: 1,
                                opacity:'0.8',
                                height:style.height
                            }}
                            className="d-none d-lg-block"
                        >
                            {this.props.submenu.map((info,k)=>{
                                return(
                                    <Link key={k} prefetch href={info.url}>
                                    <div
                                        className="hvr-bounce-to-right"
                                        style={{
                                            color: 'black',
                                            fontWeight:'bold',
                                            padding: '12px 16px',
                                            display: style.height > 100 ? 'block':'none'
                                        }}
                                        key={k}
                                    >
                                        {info.name}
                                    </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </Motion>
            </div>
            
        );
    }
}

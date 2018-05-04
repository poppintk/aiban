import {Motion, spring} from 'react-motion';
import React from 'react';


export default class Hover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mouseIn: false
        };
    }
    render(){
        const english_text = {fontSize:'9px'};
        return (
            <div 
                onMouseEnter={
                    (e)=>{
                        this.setState({mouseIn:true});
                    }
                }
                onMouseLeave={
                    (e)=>{
                        this.setState({mouseIn:false});
                    }
                }
            >
                
                <div>
                    {this.props.chineseTitle}
                </div>
                <div style={english_text}>{this.props.englishTitle}</div>
                <Motion defaultStyle={{height : 0}} style={{height: spring(this.state.mouseIn? this.props.submenu.length * 38 : 0)}}>
                    {style => (
                        <div 
                            style={{
                                position: 'absolute',
                                backgroundColor: 'rgb(188, 229, 255)',
                                minWidth: '90px',
                                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                zIndex: 1,
                                opacity:'0.8',
                                height:style.height
                            }}
                            className="d-none d-lg-block"
                        >
                            {this.props.submenu.map((info,k)=>{
                                return(
                                    <div
                                        className="option"
                                        style={{
                                            color: 'black',
                                            padding: '12px 16px',
                                            display: style.height > 100 ? 'block':'none'
                                        }}
                                        onMouseEnter={(e)=>{
                                            e.currentTarget.style.backgroundColor="gold";
                                        }}
                                        onMouseLeave={(e)=>{
                                            e.currentTarget.style.backgroundColor="rgb(188, 229, 255";
                                        }}
                                        key={k}
                                    >
                                        {info}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </Motion>
            </div>
            
        );
    }
}

import React, { Component } from 'react';
import { Divider, Layout, Icon,Menu } from 'antd';
const{Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderComponent extends Component {
    state = {
        collapsed: true,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){
        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{height: 'calc(100vh - 155px)',backgroundColor:'white'}}
            >
                <div className="logo" />
                <Menu theme="white" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

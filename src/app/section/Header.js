import React, {Component} from 'react';
import {Row , Col, Menu, Icon} from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      current:this.props.SelectedMneu
    }
    this.handelClick=this.handelClick.bind(this)
  }
  handelClick(e){
    e.preventDefault;
    //for action the state type
    this.setState({
    //find the value of key and put it into current
    current:e.key
    })
  }


  render(){
    return (
      <Menu onClick={this.handelClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">

        <Menu.Item key="home">
          <Icon type="home" /><Link style={{display:'inline-block'}}to ="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="app">
        <Icon type="appstore" />Products
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" > Example Link</a>
        </Menu.Item>

        <SubMenu title={<span><Icon type="setting" />More Page</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="morepage:about"><Link to="/about">About Page</Link></Menu.Item>
          <Menu.Item key="morepage:contact"><Link to="/contact">Contact Page</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>

      </Menu>
    );
  }
}

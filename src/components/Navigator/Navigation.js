import { Menu, Icon,Row,Col} from 'antd';
import React,{ Component, PropTypes } from 'react';
import *as styles from './Navigation.css';
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Navigation extends Component{
  constructor(props){
      super(props);
      this.state={
       current: 'mail'
      }
      this.handleClick=this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return(
      <Row>
        <Col className={styles['item']}>
          <Menu onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
         
          <SubMenu title={<span><Icon type="setting" /> 项目下载</span>}>
	            <Menu.Item key="setting:1">
                <Link to='/'>git配置</Link>
              </Menu.Item>
	            <Menu.Item key="setting:2">
                <Link to='sourcetree'>sourceTree配置</Link>
              </Menu.Item>
        	</SubMenu>
          <Menu.Item key="position">
            <Link to='process'>工作流程</Link>
          </Menu.Item>
        	<SubMenu title={<span><Icon type="setting" /> 项目管理</span>}>
	            <Menu.Item key="setting:4">
               <Link to='wiki'>WIKI接口管理</Link>
              </Menu.Item>
	            <Menu.Item key="setting:3">
               <Link to='jira'> JIRA bug管理</Link>
              </Menu.Item>
        	</SubMenu>
          <Menu.Item key="option">
            <Link to='problem'>问题定位</Link>
          </Menu.Item>
          <Menu.Item key="some">
            Don't do things
          </Menu.Item>
          
          </Menu>
        </Col>
      </Row>
      )
  }
}


import { Menu, Icon,Row,Col} from 'antd';
import React,{ Component, PropTypes } from 'react';
import *as styles from './Navigation.css'
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
          <Menu.Item key="position">
            工作流程
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" /> 项目下载</span>}>
	            <Menu.Item key="setting:1">git配置</Menu.Item>
	            <Menu.Item key="setting:2">sourceTree配置</Menu.Item>
        	</SubMenu>
        	<SubMenu title={<span><Icon type="setting" /> 项目管理</span>}>
	            <Menu.Item key="setting:1">wiki是什么</Menu.Item>
	            <Menu.Item key="setting:2">jira是什么</Menu.Item>
        	</SubMenu>
          <Menu.Item key="option">
            问题定位
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


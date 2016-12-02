import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from '../SshKey/SshKey.css'
export default class Wiki extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>接口管理</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>一、每个公司都有自己接口管理（大同小异）</h3>
						<p> 接口管理是前后台交互总要的一部分，看一下wiki管理吧</p>
						<p>登录</p>
						<img src={require('../img/wiki/login.png')}></img>
						<p>查看自己的文档</p>
							<img src={require('../img/wiki/wikilist.png')}></img>
							<img src={require('../img/wiki/list.png')}></img>
						<p>接口详情</p>
							<img src={require('../img/wiki/detail.png')}></img>
					</Col>
				</Row>
		
			</Row>
			)
	}
} 
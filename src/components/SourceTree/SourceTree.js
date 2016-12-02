import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from '../SshKey/SshKey.css'
export default class SourceTree extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>SourceTree傻瓜式提交</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>一、SourceTree下载项目（https://www.sourcetreeapp.com/）</h3>

						<img src={require('../img/sourcetree/sourcetree.png')}></img>
						
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>二、sourceTree添加暂存区</h3>
						<img src={require('../img/sourcetree/add.png')}></img>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>三、sourceTree提交</h3>
						<img src={require('../img/sourcetree/sumit.png')}></img>
						<img src={require('../img/sourcetree/submit1.png')}></img>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>四、查看提交</h3>
						<img src={require('../img/sourcetree/detail.png')}></img>
					</Col>
				</Row>
			</Row>
			)
	}
} 
import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from '../SshKey/SshKey.css'
export default class Jira extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>BUG管理</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>程序员最爱的应该是bug，这样你才能懂他就像爱你的爱人一样
						</h3>
						<p>jira的管理</p>
						<img src={require('../img/jira/buglist.png')}></img>
					</Col>
				</Row>
		
			</Row>
			)
	}
} 
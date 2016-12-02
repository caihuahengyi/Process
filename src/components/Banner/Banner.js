import React,{ Component, PropTypes } from  'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from './Banner.css'
export default class Banner extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
				<Row className={styles['banner']}> 
				<Col lg={3}></Col>
					<Col lg={12}>
						<h1>小白初闯职场</h1>
						<p>刚进公司我要做什么？？</p>
					</Col>
				</Row>
			)
	}
}
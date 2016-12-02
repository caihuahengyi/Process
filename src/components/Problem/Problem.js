import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from '../SshKey/SshKey.css'
export default class Problem extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>问题定位很重要</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>一、dom为空或者对象为空</h3>
						<i>
						TypeError: Cannot read property 'className' of undefined
						<br/><br/>
						VM1650:1 Uncaught TypeError: $$(...)[0].find is not a function(…)
						</i>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>二、tocken错误</h3>
						<i>
						Uncaught SyntaxError: Unexpected token 
						</i>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>三、分析一下下面的错误</h3>
						<i>
								number is not a function<br/>
								object is not a function<br/>
								string is not a function<br/>
								Uncaught exception: TypeError: JSON.stringify: Not an acyclic Object<br/>
								Function Expected
						</i>
					</Col>
				</Row>
	
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>三、前端debug很重要,他是调试错误的神器</h3>
					   <p>
					   		有些面试的时候会让你定位他们某些js文件在哪 
					   </p>
					</Col>
				</Row>
			</Row>
			)
	}
} 
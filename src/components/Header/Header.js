import React,{ Component, PropTypes } from 'react'
import { Col, Row  } from 'antd'
import { Navigation } from '../Navigator/index.js'
export default class Header extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
				<Row>
					<Col lg={2} ></Col>
					<Col lg={20} >
						<Navigation />
					</Col>
				</Row>
			)
	}
}

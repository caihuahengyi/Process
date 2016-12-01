import 'babel-polyfill'
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Header, Banner } from '../components/index.js' 
const App =({ children, history })=>{
    return (
      <Row style={{backgroundColor:'#99999' }}>
	      <Row>
	      	<Col>
		        <Header history={history} />
		        <Banner />
	       	</Col>
	      </Row>
	      <Row>
	      	<Col offset={2}>
		        {children}
	       	</Col>
	      </Row>
      </Row>
    )
}

export default App
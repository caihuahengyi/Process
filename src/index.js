import 'babel-polyfill'
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory }  from 'react-router'
import routes from './routers/index.js'

ReactDOM.render(
	<Router routes={routes}  history={browserHistory} />,
	 document.getElementById('app'));
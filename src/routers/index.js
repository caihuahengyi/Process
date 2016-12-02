import React from 'react'
import { Route, IndexRoute,Router,browserHistory  }  from 'react-router'
import App from  '../containers/App.js'
import { SshKey, SourceTree }  from  '../components/index.js'
	/*<IndexRoute component={Home}/>
		<Route path='about' component={About} />
		<Route path='profile/:username' component={Profile} />*/
export default (
	<Route path='/' component={App}>
		<IndexRoute component={SshKey}/>
		<Route path='/' component={SshKey}/>
		<Route path='sourcetree' component={SourceTree}/>
	</Route>
	)

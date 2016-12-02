import React from 'react'
import { Route, IndexRoute,Router,browserHistory  }  from 'react-router'
import App from  '../containers/App.js'
import { SshKey, SourceTree,Process,Wike,Jira,Problem }  from  '../components/index.js'
export default (
	<Route path='/' component={App}>
		<IndexRoute component={SshKey}/>
		<Route path='/' component={SshKey}/>
		<Route path='sourcetree' component={SourceTree}/>
		<Route path='Process' component={Process}/>
		<Route path='wiki' component={Wike}/>
		<Route path='jira' component={Jira}/>
		<Route path='problem' component={Problem}/>
	</Route>
	)

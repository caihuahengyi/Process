import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from '../SshKey/SshKey.css'
export default class Process extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>公司项目流程开发</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>一、产品设计，开发研讨</h3>
						<p>
							1、每个产品都需要设计和审核<br/>
							2、审核过程中，前端、后台、CTO、产品商讨开发产品的技术和流程，以及周期。<br/>
							
						</p>
						
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>二、确定开发</h3>
						<p>
							1、拿到设计稿，开发文档，psd图<br/>
							2、项目组长分配任务。<br/>
							3、拿到自己的任务，分析自己开发的模块。
						</p>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>三、开发前准备</h3>
						<p>
							1、认真看开发文档，分析自己项目流程，在脑海里面流程走一遍
							（功能实现不了的或者设计不合理的可以逐级反馈）
							<br/>
							2、和后台要数据接口文档和模拟数据（一般会在公司的wiki上看大自己开发的接口）<br/>
							3、把这个项目的psd图放在表你妹上<br/>
							4、不会切图的同学不要怕可以想ui要图层<br/>
							5、一定要认真看开发文档不然开发的业务很可能出错<br/>
							6、可以开发了
						</p>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>四、开发</h3>
						<p>
							1、搭建页面html+css（配合标你妹很快搞定1-2天）<br/>
							2、实现动态（点击事件绑定、动态的轮播、划过效果等等）<br/>
							3、实现模拟绑定（一般我们会快于后台的接口开发）。<br/>
							4、和后台事件数据交互和动态绑定（一般1-3左右）
						</p>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>五、自己测试开发的项目</h3>
						<p>
							1、看看样式没有大偏差<br/>
							2、把业务流程跑通。<br/>
							3、效果实现。
						</p>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>六、提交至qa测试</h3>
						<p>
							1、忐忑的等着qa题bug（一般在jira上可以看到自己的bug列表）<br/>
							2、在jira看自己bug进行修改<br/>
							3、提交修个好的代码进行再次测试。
						</p>
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>六、代码上线</h3>
						<p>
							1、上线的代码也可能有bug 有的话需要拉分支修改
							<br/>
							2、没有bug是我们最想要的 <br/>
							3、接下来坐等下个项目开始。
						</p>
					</Col>
				</Row>
			</Row>
			)
	}
} 
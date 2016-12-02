import React,{Component, PropTypes } from 'react'
import { Row, Col } from 'antd'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as styles from './SshKey.css'
export default class SshKey extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Row className={styles['mg20']}>
				<Row>
					<Col  className={styles['tit_d']}>
						<h2>代码管理方式</h2>		
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>一、公司代码管理方式</h3>
						<p>1、公司代码管理方式一般是私有git或者svg，下面讲一下git管理的初始配置sshkey<br/>
						2、给你有权限的git账号（下载项目）、wiki账号（看接口文档）、jira账号（bug列表）
						</p>
						
					</Col>
				</Row>
				<Row>
					<Col   offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>二、配置SSH ,检查SSH keys是否存在</h3>
						<p>输入下面的命令，如果有文件id_rsa.pub 或 id_dsa.pub，则直接进入步骤3将SSH key添加到GitHub中，否则进入第二步生成SSH key</p>
						<span>
							ls -al ~/.ssh <br/>
							# Lists the files in your .ssh directory, if they exist<br/>
						</span>
						<p>或者</p>
						<span>
	drwxr-xr-x 1 Administrator Administrator    0 6月  20 16:46 ./
	drwxr-xr-x 1 Administrator Administrator    0 11月 28 00:07 ../
	-rw-r--r-- 1 Administrator Administrator 1679 6月  26 02:08 id_rsa
	-rw-r--r-- 1 Administrator Administrator  399 7月  20 09:57 id_rsa.pub
	-rw-r--r-- 1 Administrator Administrator 1009 9月  11 21:54 known_hosts

						</span>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>三、设置Git的user name和email：</h3>
						<span>
						$ git config --global user.name "shiny"<br/>
						$ git config --global user.email "shinyvip@gmail.com"
						</span>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>四、设置Git的user name和email：</h3>
						<p>1.查看是否已经有了ssh密钥：cd ~/.ssh
							如果没有密钥则不会有此文件夹，有则备份删除
							2.生存密钥：
						</p>
						<span>
							$ ssh-keygen -t rsa -C “shiny.vip@gmail.com”
						</span>
						<p>按3个回车，密码为空。</p>
						<span>
								Your identification has been saved in /home/tekkub/.ssh/id_rsa.
						Your public key has been saved in /home/tekkub/.ssh/id_rsa.pub.
						The key fingerprint is:
						………………
						</span>
						<p>最后得到了两个文件：id_rsa和id_rsa.pub<br/>文件地址 ：C:\Users\Administrator\.ssh </p>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>五、ssh key添加到github上</h3>
						<p>
							右上角点击头像-> 点击settings-> 点击SSH KEYS-> 点击ADD SSH KEYS-> 将获取的public key粘贴于此
						 </p>
					</Col>
				</Row>
				<Row>
					<Col  offset={2}  offset={2} lg={18} md={18} sm={18} xs={18}>
						<h3>六、测试：</h3>
						<span> $ ssh -T git@github.com</span>
						<p>
							你将会看到：
						</p>
						 	<span>  The authenticity of host github.com (207.97.227.239)' can't be established.
		    RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
		    Are you sure you want to continue connecting (yes/no)?
   		 </span>
   		 			<p>
							 选择 yes
						</p>
						<span>
						 Hi humingx! You've successfully authenticated, but GitHub does not provide shell access.
						</span>
					</Col>
				</Row>
			</Row>
			)
	}
} 
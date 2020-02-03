import React from 'react'
import '../static/style/components/header.css'
import Router from 'next/router'

import { Row, Col, Menu, Icon } from 'antd'
const Header = () => {

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/index')
        } else if(e.key == 'login'){
            Router.push('/login')
        }else {
            Router.push('/list?id=' + e.key)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className="header-logo">zziqi</span>
                    <span className="header-txt">专注技术</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="home">
                            <Icon type="home" />
                            首页
                    </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtube" />
                            视频
                    </Menu.Item>
                        <Menu.Item key="login">
                            <Icon type="smile" />
                            登录
                    </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header
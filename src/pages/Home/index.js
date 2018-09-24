import React, { Component } from 'react'
import { InputItem,Button, WhiteSpace, WingBlank,NoticeBar } from 'antd-mobile'
import Carousel from './model/Carousel'
import Card from '@/components/Card'

class app extends Component {
    state = {
    }

    render() {
        return (
          <div className="page">

            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
               欢迎来到叭哩叭哩！！！！
            </NoticeBar>
            <Carousel />
            {/* <WhiteSpace size="lg" /> */}
            <Card />
          </div>
        )
    }
}

export default app
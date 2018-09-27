import React, { Component } from 'react'
import { InputItem, Button, WhiteSpace, WingBlank, NoticeBar } from 'antd-mobile'
import Carousel from './model/Carousel'
import Card from '@/components/Card'
import img from '@/images/moon.png'

class app extends Component {
  state = {
    title: '欢迎来到叭哩叭哩,github-https://github.com/1067011734/balibali！！！！'
  }
  cardList = [
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
    { title: '团员中秋', src: img },
  ]
  render() {
    const { title } = this.state
    return (
      <div className="page">
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          {title}
        </NoticeBar>
        <Carousel />
        <Card list={this.cardList} className="flex-column"/>
      </div>
    )
  }
}

export default app
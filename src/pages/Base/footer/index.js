import React, { Component } from 'react'
import { TabBar} from 'antd-mobile'
import {FormattedMessage} from 'umi/locale'
import img from '@/images/icon/home.png'
import img2 from '@/images/icon/home_select.png'
import img3 from '@/images/icon/map.png'
import img4 from '@/images/icon/map_select.png'
import img5 from '@/images/icon/book.png'
import img6 from '@/images/icon/book_select.png'
import router from 'umi/router'

class app extends Component {
    state = {
      selectedTab:''
    }

// 根据pathname选中tabbar
componentDidMount(){
 const {location} = this.props
 const {pathname} = location
 const selectedTab = pathname.slice(1)
 this.setState({selectedTab:selectedTab||'home'})
}

selected=(flag)=>{
  const {selectedTab}  = this.state
  if(selectedTab===flag){
    return
  }
  this.setState({selectedTab:flag},()=>{
    router.push({pathname:`/${flag}`})
  })
}

    render() {
      const {selectedTab} = this.state
        return (
          <TabBar>
            <TabBar.Item
              title={<FormattedMessage id='home' />}
              key="Life"
              icon={<img src={img} className='icon' />}
              selectedIcon={<img src={img2} className='icon' />}
              selected={selectedTab === 'home'}
              badge={1}
              onPress={() => {this.selected('home')}}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={img3} className='icon' />}
              selectedIcon={<img src={img4} className='icon' />}
              title={<FormattedMessage id='map' />}
              key="map"
              selected={selectedTab === 'map'}
              onPress={() => {this.selected('map')}}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={<img src={img5} className='icon' />}
              selectedIcon={<img src={img6} className='icon' />}
              title={<FormattedMessage id='book' />}
              key="book"
              selected={selectedTab === 'book'}
              onPress={() => {this.selected('book')}}
            >
            </TabBar.Item>
          </TabBar>
        )
    }
}

export default app
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img from '@/images/moon.png'
import style from './index.less'

class app extends Component {
  PropTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
  }

  state = {
    cardList:[
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
      {title:'团员中秋',src:img},
    ]
  }

componentWillReceiveProps(nextProps){
  const {open} = nextProps
  if(open!=this.state.open){
    this.setState({open})
  }
}

close=()=>{
  this.setState({open:false})
  this.props.onClose()
}

  render() {
    const {cardList} = this.state
      return (
        <div className={style["card-wrap"]}>
          {
          cardList.map(x=>(
            <div className={style.card}>
              <div className="card-img">
                <img src={x.src} alt="" />
              </div>
              <card className="title">
                {x.title}
              </card>
            </div>
          ))
        }
        </div>
      )
  }
}

export default app
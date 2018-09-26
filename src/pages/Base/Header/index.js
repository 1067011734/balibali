import React, { Component } from 'react'
import { NavBar} from 'antd-mobile'
import img from '@/images/icon/menu_user.png'
import PropTypes from 'prop-types'
import { connect } from 'dva'
@connect(({}) => ({
}))

class app extends Component {
  PropTypes={
    onClose: PropTypes.func,
    visibility: PropTypes.bool,
  }

  state = {
  }
  //展开侧边栏
  iconClick=()=>{
    const { dispatch } = this.props
    dispatch({
      type: 'common/updateNavLeftVisible',
      payload: true,
    })
  }
  render() {
    const {onClose,} = this.props
      return (
        <NavBar
          mode="dark"
          leftContent={<img src={img} className="icon-larget" alt="" />}
          onLeftClick={this.iconClick}
        >叭哩叭哩
        </NavBar>
      )
  }
}

export default app
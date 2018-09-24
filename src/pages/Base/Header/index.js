import React, { Component } from 'react'
import { NavBar} from 'antd-mobile'
import img from '@/images/icon/menu_user.png'
import PropTypes from 'prop-types';

class app extends Component {
  PropTypes={
    onClose: PropTypes.func,
    visibility: PropTypes.bool,
  }

  state = {
  }

  render() {
    const {onClose,} = this.props
      return (
        <NavBar
          mode="dark"
          leftContent={<img src={img} className="icon-larget" alt="" />}
          onLeftClick={onClose}
        >叭哩叭哩
        </NavBar>
      )
  }
}

export default app
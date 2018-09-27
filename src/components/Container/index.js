import React, { Component } from 'react'
import { NavBar,WhiteSpace} from 'antd-mobile'
import img from '@/images/icon/arrow-left.png'
import PropTypes from 'prop-types'
import router from 'umi/router'
import View from '@/components/View'

class app extends Component {
  PropTypes={
    title: PropTypes.string,
  }

  state = {
  }

  back=()=>{
    router.goBack()
  }

  render() {
    const {onClose,title} = this.props
      return (
        <div className="page">
          <div className="page-header">
            <NavBar
              mode="left"
              leftContent={<img src={img} alt="" className="icon" onClick={this.back} />}
              onLeftClick={onClose}
            >{title}
            </NavBar>
            <WhiteSpace size="lg" />
          </div>
          <div className="page-content">
            {this.props.children}
          </div>
        </div>
      )
  }
}

export default app
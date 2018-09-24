import React, { Component } from 'react'
import { connect } from 'dva'
import Transiton from '@/components/Transiton'
import '@/styles/base.less'

class app extends Component {
  state = {
  }

  componentDidMount(){
    
  }


  render() {
    // console.info(this.props)
    // const {location} = this.props
    return (
      // <div className="page">
      //   {this.props.children}
      // </div>
      // <>
      //   {location.pathname==="/user"?(
      <Transiton {...this.props}>
        {this.props.children}
      </Transiton>
      // ):this.props.children}
      // </>
      // <Transiton {...this.props}>
        
      // </Transiton>
    )
  }
}

export default app
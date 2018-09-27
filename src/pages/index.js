import React, { Component } from 'react'
import { connect } from 'dva'
import Transiton from '@/components/Transition'
import '@/styles/base.less'

class app extends Component {
  state = {
  }

  componentDidMount(){
    
  }


  render() {
    return (
      <Transiton {...this.props}>
        {this.props.children}
      </Transiton>
    )
  }
}

export default app
import React, { Component } from 'react'
import { createForm } from 'rc-form'
import Bmap from '@/components/Bmap'
import { connect } from 'dva'

@createForm()
@connect(({ login, loading }) => ({
    login,
    submitting: loading.effects['login/login'],
  }))
class app extends Component {
    state = {
    }

componentDidMount(){
  console.info(this.props)
}

    render() {
        return (
          <div className="page">
            <Bmap />
          </div>
        )
    }
}

export default app
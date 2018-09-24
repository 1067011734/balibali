import React, { Component } from 'react'
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import { createForm } from 'rc-form'
import { connect } from 'dva'
import Transiton from '@/components/Transiton'
import Header from './Header'
import Footer from './footer'
import NavLeft from './navLeft'
import '@/styles/base.less'

@createForm()
@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class app extends Component {
  state = {
    navLeftVisibility: false,
  }

  componentDidMount(){
    
  }

  navLeftCLose=()=>{
    this.setState({navLeftVisibility: false})
  }

  render() {
    const {navLeftVisibility} =  this.state
    return (
      <>
        <div className="page">
          <Header
            onClose={()=>{
              this.setState({navLeftVisibility: true})
            }} 
          />
          {/* <WhiteSpace /> */}
          <div className="page-content">
            {/* <Transiton {...this.props}> */}
            {this.props.children}
            {/* </Transiton> */}
          </div>
          <div className="page-footer">
            <Footer {...this.props} />
          </div>
        </div>
        <NavLeft 
          visibility={navLeftVisibility}
          onClose={this.navLeftCLose}
          {...this.props}
        />
      </>
    )
  }
}

export default app
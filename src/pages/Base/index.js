import React, { Component } from 'react'
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import Header from './Header'
import Footer from './footer'
import NavLeft from './navLeft'

class app extends Component {
  state = {
    // navLeftVisibility: false,
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <>
        <div className="page">
          <Header/>
          <div className="page-content">
            {this.props.children}
          </div>
          <div className="page-footer">
            <Footer {...this.props} />
          </div>
        </div>
        <NavLeft {...this.props}
        />
      </>
    )
  }
}

export default app
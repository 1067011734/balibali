import React, { Component } from 'react'
import PropTypes from 'prop-types';
import style from './index.less'

class app extends Component {
  PropTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
  }

  state = {
    open:false,
  }

componentDidMount(){
  setTimeout(()=>{
    this.setState({open:true})
  },100)
}

componentWillReceiveProps(nextProps){
  const {open} = nextProps
  if(open!=this.state.open){
    this.setState({open:true})
  }
}

componentWillUnmount(){
  setTimeout(()=>{
    this.setState({open:false})
  },100)
}

close=()=>{
  this.setState({open:false})
  this.props.onClose()
}

  render() {
    const {open} = this.state
      return (
        <div className={`${style.view} ${open?"":style["view-close"]}`}>
          {this.props.children}
        </div>
      )
  }
}

export default app
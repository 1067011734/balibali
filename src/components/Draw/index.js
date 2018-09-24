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
    const {open} = this.state
      return (
        <div className={`${style.draw} ${open?"":style["draw-close"]}`}>
          <div className={style["draw-mask"]} onClick={this.close} />
          <div
            className={style["draw-side"]} 
          >
            {this.props.children}
          </div>
        </div>
      )
  }
}

export default app
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StaticContainer from 'react-static-container'
import style from './index.less'

class app extends Component {
  PropTypes={
    open: PropTypes.bool,
    onClose: PropTypes.func,
  }

  state = {
    previousPathname:null,
  }

componentWillMount() {
  document.body.style.margin = "0px";
  // 这是防止页面被拖拽
  document.body.addEventListener('touchmove', (ev) => {
    ev.preventDefault();
  });
}

componentWillReceiveProps(nextProps, nextContext) {
  if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ previousPathname: this.props.location.pathname })
  }
}

componentDidUpdate() {
    if (this.state.previousPathname) {
        this.setState({ previousPathname: null })
    }
}

  render() {
    const {location,children} =this.props
    const {pathname} =location
    // console.info(this.props)
    const key = (pathname!=="/user")?'':"pathname"
      return (
        <ReactCSSTransitionGroup
          component="div"
          className="translation-left"
          transitionName="translation"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          // transitionLeave={false}
        >
          {/* 用key控制滑动权限----- 苍天啊 */}
          <div key={key} className={`${pathname} translation-content`}>
            {children}
          </div>
        </ReactCSSTransitionGroup>
      )
  }
}

export default app
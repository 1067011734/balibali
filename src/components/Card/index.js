import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './index.less'

class app extends Component {
  PropTypes={
    list: PropTypes.array,
    className:PropTypes.string,
  }
  static defaultProps ={
    list :[],
  }

  state = {
  }
componentDidMount(){
}
componentWillReceiveProps(nextProps){
}

close=()=>{
  this.setState({open:false})
  this.props.onClose()
}

  render() {
    const {list,className} = this.props
      return (
        <div className={`${style["card-wrap"]} ${className}`}>
          {
          list.map((x,index)=>(
            <div className={style.card} key={index}>
              <div className="card-img">
                <img src={x.src} alt="" />
              </div>
              <div className="title">
                {x.title}
              </div>
            </div>
          ))
        }
        </div>
      )
  }
}

export default app
import React, { Component } from 'react'
import { Tag ,Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

@createForm()
class app extends Component {
  PropTypes={
    onChange: PropTypes.func,
  }

    state = {

    }

    tagList=[
      '乐观','努力','积极','有爱心','勇敢','思想良好','积极向上','善于与相处','对工作积极','认真负责',
      '严格要求自己','有强烈的责任心'
    ]

componentDidMount(){
}

onSubmit = () => {
  const domSelect= ReactDOM.findDOMNode(this).querySelectorAll(".am-tag-active")
  const selectArr = Array.from(domSelect,x=>x.textContent)
    this.props.onChange({person:selectArr},2)
}

    render() {
      const {userInfo} = this.props
      const {person} = userInfo
        return (
          <div className="flex-column">
            <div className="flex-3">
              {this.tagList.map((x,index)=>
                <Tag key={index} selected={person&&person.includes(x)}>{x}</Tag>
            )}
            </div>
            <div className="flex-1">
              <Button type="primary" onClick={this.onSubmit}>下一步</Button>
            </div>
          </div>
        )
    }
}

export default app
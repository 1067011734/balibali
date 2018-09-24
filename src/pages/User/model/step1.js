import React, { Component } from 'react'
import { List, InputItem, Switch, Stepper, Range, Button,Picker } from 'antd-mobile'
import Container from '@/components/Container'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'

const {Item} =List
@createForm()
class app extends Component {
  PropTypes={
    onChange: PropTypes.func,
  }

    state = {
    }

componentDidMount(){
  const {userInfo} = this.props
  const {name,dept} =userInfo
  // debugger
  this.props.form.setFieldsValue({
    name,
    dept:[dept],
  })
}

onSubmit = () => {
  this.props.form.validateFields((error, values) => {
    if(error){
      return false
    }
    values.dept=values.dept[0]
    this.props.onChange(values,1)
})
}

validateAccount = (rule, value, callback) => {
  if (value && value.length > 0) {
    callback();
  } else {
    callback(new Error('At least four characters for account'));
  }
}

    render() {
      const { getFieldProps, getFieldError } = this.props.form
      const deptData=[
        {
          label: '前端攻城狮',
          value: '前端攻城狮',
        },
        {
          label: 'java',
          value: 'java',
        },
      ]
        return (
          <form className="flex-column">
            <List className="flex-3">
              <InputItem
                {...getFieldProps('name', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '请修改账号' },
              { validator: this.validateAccount },
            ],
          })}
                clear
                error={!!getFieldError('account')}
                onErrorClick={() => {
            alert(getFieldError('account').join('、'));
          }}
                placeholder="请修改账号"
              >账号
              </InputItem>
              <Picker data={deptData} {...getFieldProps('dept')} cols="1">
                <List.Item arrow="horizontal">岗位</List.Item>
              </Picker>
            </List>
            <div className="flex-1">
              <Button type="primary" onClick={this.onSubmit}>下一步</Button>
            </div>
          </form>
        )
    }
}

export default app
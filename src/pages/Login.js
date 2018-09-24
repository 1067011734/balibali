import React, { Component } from 'react'
import { InputItem,Button, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { connect } from 'dva'
import '@/styles/base.less'

@createForm()
@connect(({ login, loading }) => ({
    login,
    submitting: loading.effects['login/login'],
  }))
class app extends Component {
    state = {
    }

    submit = () => {
        this.props.form.validateFields((error, values) => {
          if(error){
            Toast.info('请正确填写 !!!', 1);
            return
          }
            this.props.history.push({pathname:'/home'})
            // const { dispatch } = this.props
            // dispatch({
            //     type: 'common/login',
            //     payload: {
            //       ...values,
            //     },
            //   })
        })
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form
        return (
          <div className="page">
            <InputItem
              type="text"
              placeholder="admin"
              maxLength="10"
              minLength="4"
              clear
              {...getFieldProps('user', {
                        rules: [{ required: true, message: 'admin',}],
                        // normalize: (val, prev) => {

                        // }
                    })}
            >账号:
            </InputItem>
            <InputItem
              type="password"
              placeholder="admin"
              maxLength="10"
              clear
              {...getFieldProps('password', {
                        rules: [{ required: true, message: 'admin', }],
                        // normalize: (val, prev) => {

                        // }
                    })}
            >密码:
            </InputItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.submit}>确定</Button>
            <WhiteSpace />
          </div>
        )
    }
}

export default app
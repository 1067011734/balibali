import React, { Component } from 'react'
import { InputItem,Button, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { connect } from 'dva'
import {loginReg} from '@regularConfig'
@createForm()
@connect(({ login, loading }) => ({
    login,
    submitting: loading.effects['login/login'],
  }))
class app extends Component {
    state = {
    }

    submit = () => {
        const { getFieldProps, getFieldError } = this.props.form
        this.props.form.validateFields((error, values) => {
          if(error){
            const msg = `请输入${getFieldError('user')||''}${getFieldError('password')||''}` 
            Toast.info(msg, 1);
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
    normalize=(val, prev) => {
      if(!loginReg.test(val)){
        Toast.info('不能包含中文和大写', 1);
        return prev
      }
      return val
  }
    render() {
        let errors
        const { getFieldProps } = this.props.form
        return (
          <div className="page">
            <InputItem
              type="text"
              placeholder="admin"
              maxLength="10"
              minLength="4"
              clear
              {...getFieldProps('user', {
                        rules: [{ required: true, message: '账号',}],
                        normalize: this.normalize,
                    })}
            >账号:
            </InputItem>
            <InputItem
              type="password"
              placeholder="admin"
              maxLength="10"
              clear
              {...getFieldProps('password', {
                        rules: [{ required: true, message: '密码', }],
                        normalize: this.normalize
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
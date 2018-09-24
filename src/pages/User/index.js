import React, { Component } from 'react'
import { Steps,InputItem,Button,WhiteSpace} from 'antd-mobile'
import Container from '@/components/Container'
import { createForm } from 'rc-form'
import { connect } from 'dva'
import router from 'umi/router'
import Step1 from './model/step1'
import Step2 from './model/step2'
import Step3 from './model/step3'

const {Step} = Steps

@createForm()
@connect(({ common}) => ({
  userInfo:common.userInfo
}))
class app extends Component {
    state = {
      userInfo:{
        name:'',// ??
        dept:'',// ??
      },
      stepNumber:1,
    }

    stepList=[
      {title:'基本设置',key:1},
      {title:'个性标签',key:2},
      {title:'上传头像',key:3},
    ]

componentWillMount(){
  const {userInfo} = this.props
  this.setState({userInfo})
}

componentDidMount(){

}

// 步骤变化
stepSwitch=(key)=>{
  const {userInfo} = this.state
  switch(key){
    case 1: return <Step1 onChange={this.changeData} userInfo={userInfo} />
    case 2: return <Step2 onChange={this.changeData} userInfo={userInfo} />
    case 3: return <Step3 onChange={this.changeData} userInfo={userInfo} />
    default: break;
  }
}

// 步骤完成保存数据
changeData=(data,key)=>{
  const { dispatch } = this.props
   let {stepNumber,userInfo} = this.state
   stepNumber=key+1
   if(stepNumber>3){
     const params ={...userInfo,...data}
    dispatch({
        type: 'common/updateUserInfo',
        payload: params,
      })
      router.push({pathname:'/home'})
     return
   }
   this.setState({
    userInfo:{...userInfo,...data},
    stepNumber,
   })

}

    render() {
      const { getFieldProps, getFieldError } = this.props.form
      const {stepNumber} = this.state
        return (
          <Container title="个人设置">
            <Steps direction="horizontal">
              {this.stepList.map(item=><Step
                key={item.key}
                title={item.title} 
                icon={<i className={`step-circle ${item.key<=stepNumber?'bj-primary':''}`}>{item.key<stepNumber?'√':item.key}</i>}
                status={item.key<stepNumber?'finish':'wait'}
              />)}
            </Steps>
            <WhiteSpace />
            {this.stepSwitch(stepNumber)}
            {/* <Step1 /> */}
          </Container>
        )
    }
}

export default app
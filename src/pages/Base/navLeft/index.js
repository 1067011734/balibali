import React, { Component } from 'react'
import { Modal,Tag} from 'antd-mobile'
import Drawer from '@/components/Draw'
import logoutSrc from '@/images/icon/logout.png'
import editSrc from '@/images/icon/edit.png'
import tagSrc from '@/images/icon/tag.png'
import PropTypes from 'prop-types'
import router from 'umi/router'
import { connect } from 'dva'
import style from './index.less'

const {alert} = Modal
@connect(({ common }) => ({
  userInfo:common.userInfo,
  open:common.navLeftVisible,
}))
class app extends Component {
  PropTypes={
    open:PropTypes.bool,
  }

    state = {
      visibility:false,
    }

componentDidMount(){
}

  componentWillReceiveProps(nextProps){
    // const {visibility} = nextProps
    // if(visibility!==this.state.visibility){
    //   this.setState({visibility})
    // }
  }

  drawerClose=()=>{
    const  {dispatch} = this.props
    dispatch({
      type: 'common/updateNavLeftVisible',
      payload: false,
    })
  }

  logout=()=>{
    alert('退出登录', '你确定要退出吗?', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => {
        router.push(({pathname:'/login'}))
      } },
    ])
  }

  updateUserInfo=()=>{
  //   this.setState({visibility:false},()=>{
  //     // router.push('/user')
  //     this.props.history.push({pathname:'/user'})
  //   }
  // )
      const  {dispatch,history} = this.props
      dispatch({
        type: 'common/updateNavLeftVisible',
        payload: false,
      })
      // .then(()=>{
      //   debugger
      //   history.push({pathname:'/user'})
      // })
      history.push({pathname:'/user'})
  }

    render() {
      const {onClose,userInfo,open} = this.props
        return (
          <Drawer 
            open={open}
            onClose={this.drawerClose}
          >
            <div className={`page ${style.nav}`}>
              <div className={style["nav-header"]}>
                <img src={userInfo.avatar} alt="" className={style.avatar} />
                <div className="descript">
                  <p>账号：{userInfo.name}</p>
                  <p>岗位：{userInfo.dept}</p>
                </div>
              </div>
              <div className={style["nav-content"]}>
                <p className="flex-row align-center"><img src={tagSrc} className='icon' alt="" /><span>个人标签：</span></p>
                <div>
                  {userInfo.person.map((x,index)=>
                    <Tag key={index}>{x}</Tag>
            )}
                </div>
              </div>
              <div className={style["nav-footer"]}>
                <div className={style["nav-footer-body"]}>
                  <p className="flex-row align-center" onClick={this.updateUserInfo}><img src={editSrc} className='icon' alt="" /><span>编辑</span></p>
                  <p className="flex-row align-center" onClick={this.logout}><img src={logoutSrc} className='icon' alt="" /><span>退出登录</span></p>
                </div>
              </div>
            </div>
          </Drawer>
        )
    }
}

export default app
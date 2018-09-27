import { login } from '@/services/common'
import avataSrc from '@/images/icon/avatar.png'
import router from 'umi/router'

export default {
  namespace: 'common',

  state: {
    userInfo:{
      name:'隔壁小马哥', // 姓名
      dept:'前端攻城狮', // 所属部门
      person:["思想良好", "积极向上", "对工作积极", "严格要求自己", "有强烈的责任心"],//个性标签
      avatar:avataSrc,//头像
    },
    navLeftVisible:false, // 侧边栏切换显示
  },
// 异步操作，ajax请求
  effects: {
    *login({ payload }, { call, put }) {
      const reply = yield call(login, payload)
      // status:0 正常; 1:失败
      if(reply.status){
        return
      }
      router.push({pathname:'/home',query:'2222222222'})
    },
  },
// 同步操作 修改redux
  reducers: {
    updateUserInfo(state, action) {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    updateNavLeftVisible(state, action) {
      return {
        ...state,
        navLeftVisible: action.payload,
      };
    },
  },
};

import request from '@/utils/request'

// 用户注册
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}

// 两种写法，下面的可以把{}去掉

// 用户登录
// 这个request 是那边传过来的 axios实例，axios有post/get方法
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

// 获取用户基本信息
export const userGetInfoService = () => request.get('/my/userinfo')


// 更换头像
export const userUploadAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })


// 修改用户基本资料
export const userUpdateInfoService = (data) => request.put('/my/userinfo', data)
// 解构出来也行↓
// export const userUpdateInfoService = ({ id, nickname, email }) => request.put('/my/userinfo', { id, nickname, email })


// 修改头像  接口要求是body 所以要 {} 括起来
export const userUpdateAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })


// 更新用户密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) => request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })

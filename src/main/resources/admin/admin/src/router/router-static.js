import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import toujianxinxi from '@/views/modules/toujianxinxi/list'
    import news from '@/views/modules/news/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import qiyezhaopin from '@/views/modules/qiyezhaopin/list'
    import discussqiuzhixinxi from '@/views/modules/discussqiuzhixinxi/list'
    import xueshengchengji from '@/views/modules/xueshengchengji/list'
    import gongzuoleixing from '@/views/modules/gongzuoleixing/list'
    import xueshengxiaoxi from '@/views/modules/xueshengxiaoxi/list'
    import qiyexiaoxi from '@/views/modules/qiyexiaoxi/list'
    import qiye from '@/views/modules/qiye/list'
    import xueshengdangan from '@/views/modules/xueshengdangan/list'
    import jiuyexinxi from '@/views/modules/jiuyexinxi/list'
    import discussqiyezhaopin from '@/views/modules/discussqiyezhaopin/list'
    import qiuzhixinxi from '@/views/modules/qiuzhixinxi/list'
    import fudaoyuan from '@/views/modules/fudaoyuan/list'
    import mianshiyaoqing from '@/views/modules/mianshiyaoqing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/toujianxinxi',
        name: '投简信息',
        component: toujianxinxi
      }
      ,{
	path: '/news',
        name: '就业知识',
        component: news
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/qiyezhaopin',
        name: '企业招聘',
        component: qiyezhaopin
      }
      ,{
	path: '/discussqiuzhixinxi',
        name: '求职信息评论',
        component: discussqiuzhixinxi
      }
      ,{
	path: '/xueshengchengji',
        name: '学生成绩',
        component: xueshengchengji
      }
      ,{
	path: '/gongzuoleixing',
        name: '工作类型',
        component: gongzuoleixing
      }
      ,{
	path: '/xueshengxiaoxi',
        name: '学生消息',
        component: xueshengxiaoxi
      }
      ,{
	path: '/qiyexiaoxi',
        name: '企业消息',
        component: qiyexiaoxi
      }
      ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
      ,{
	path: '/xueshengdangan',
        name: '学生档案',
        component: xueshengdangan
      }
      ,{
	path: '/jiuyexinxi',
        name: '就业信息',
        component: jiuyexinxi
      }
      ,{
	path: '/discussqiyezhaopin',
        name: '企业招聘评论',
        component: discussqiyezhaopin
      }
      ,{
	path: '/qiuzhixinxi',
        name: '求职信息',
        component: qiuzhixinxi
      }
      ,{
	path: '/fudaoyuan',
        name: '辅导员',
        component: fudaoyuan
      }
      ,{
	path: '/mianshiyaoqing',
        name: '面试邀请',
        component: mianshiyaoqing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

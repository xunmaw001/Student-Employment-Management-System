
var projectName = '学生就业管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '企业招聘',
	url: './pages/qiyezhaopin/list.html'
}, 
{
	name: '求职信息',
	url: './pages/qiuzhixinxi/list.html'
}, 

{
	name: '就业知识',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboothch86/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"辅导员","menuJump":"列表","tableName":"fudaoyuan"}],"menu":"辅导员管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","学生档案"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"工作类型","menuJump":"列表","tableName":"gongzuoleixing"}],"menu":"工作类型管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","查看评论","投简","学生咨询"],"menu":"企业招聘","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除","审核"],"menu":"投简信息","menuJump":"列表","tableName":"toujianxinxi"}],"menu":"投简信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","查看评论","面试邀请","企业咨询"],"menu":"求职信息","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","报表"],"menu":"就业信息","menuJump":"列表","tableName":"jiuyexinxi"}],"menu":"就业信息管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","回复","删除"],"menu":"学生消息","menuJump":"列表","tableName":"xueshengxiaoxi"}],"menu":"学生消息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","回复","删除"],"menu":"企业消息","menuJump":"列表","tableName":"qiyexiaoxi"}],"menu":"企业消息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"学生档案","menuJump":"列表","tableName":"xueshengdangan"}],"menu":"学生档案管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除","导出"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"就业知识","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","查看评论","投简","学生咨询"],"menu":"企业招聘列表","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","查看评论","面试邀请","企业咨询"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","学生档案"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","报表"],"menu":"就业信息","menuJump":"列表","tableName":"jiuyexinxi"}],"menu":"就业信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"学生档案","menuJump":"列表","tableName":"xueshengdangan"}],"menu":"学生档案管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除","导出"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","查看评论","投简","学生咨询"],"menu":"企业招聘列表","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","查看评论","面试邀请","企业咨询"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"辅导员","tableName":"fudaoyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","审核"],"menu":"投简信息","menuJump":"列表","tableName":"toujianxinxi"}],"menu":"投简信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"求职信息","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"学生消息","menuJump":"列表","tableName":"xueshengxiaoxi"}],"menu":"学生消息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","回复"],"menu":"企业消息","menuJump":"列表","tableName":"qiyexiaoxi"}],"menu":"企业消息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"学生档案","menuJump":"列表","tableName":"xueshengdangan"}],"menu":"学生档案管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"学生成绩","menuJump":"列表","tableName":"xueshengchengji"}],"menu":"学生成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","查看评论","投简","学生咨询"],"menu":"企业招聘列表","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","查看评论","面试邀请","企业咨询"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","查看评论"],"menu":"企业招聘","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","审核"],"menu":"投简信息","menuJump":"列表","tableName":"toujianxinxi"}],"menu":"投简信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","回复"],"menu":"学生消息","menuJump":"列表","tableName":"xueshengxiaoxi"}],"menu":"学生消息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"企业消息","menuJump":"列表","tableName":"qiyexiaoxi"}],"menu":"企业消息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","查看评论","投简","学生咨询"],"menu":"企业招聘列表","menuJump":"列表","tableName":"qiyezhaopin"}],"menu":"企业招聘模块"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","查看评论","面试邀请","企业咨询"],"menu":"求职信息列表","menuJump":"列表","tableName":"qiuzhixinxi"}],"menu":"求职信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"企业","tableName":"qiye"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

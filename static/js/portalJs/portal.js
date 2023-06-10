const vm = new Vue({
    el: '#app',
    data() {
        return {
            //首页轮播图设置
            page1:'Xshop首页',
            page1_des:'Xshop是供销存系统的一种，目前完成情况包含Xshop网站门户以及后台的人员，供应商管理以及可视化的部分，正在逐步推进。使用项目结构：Vue+Node.js+Mysql;框架响应样式：Axios,ElementUi,Jquery,Echarts,bootstrap等',

            page2:'品牌商品',
            page2_des:'Xshop是供销存系统的一种，目前完成情况包含Xshop网站门户以及后台的人员，供应商管理以及可视化的部分，正在逐步推进。使用项目结构：Vue',

            page3:'起始于2023/6/10',
            page3_des:'Xshop是供销存系统的一种，目前完成情况包含Xshop网站门户以及后台的人员，供应商管理以及可视化的部分，正在逐步推进。使用项目结构：Vue',

            //口号等...
            all_des:'品质生活',
            //Xshop特色
            sp1:'特色1',
            sp1_des:'商店特色描述',

            sp2:'特色2',
            sp2_des:'商店特色描述',

            sp3:'特色3',
            sp3_des:'商店特色描述',

            //介绍
            about:'Xshop是供销存系统的一种，目前完成情况包含Xshop网站门户以及后台的人员，供应商管理以及可视化的部分，正在逐步推进。使用项目结构：Vue+Node.js+Mysql;框架响应样式：Axios,ElementUi,Jquery,Echarts,bootstrap等。起源于前端项目开发与实践课程，虽然编码时间有限但是希望后续可以完整地将本系统完成。',

            // 用户评价动态更改
            user1: '用户1名称',
            user1_des: '用户1描述',
            user1_say: '用户1评价',

            user2: '用户2名称',
            user2_des: '用户2描述',
            user2_say: '用户2评价',

            user3: '用户3名称',
            user3_des: '用户3描述',
            user3_say: '用户3评价',

            //场景展示动态更改
            stage1: '场景1',
            stage1_des: '场景1描述',

            stage2: '场景2',
            stage2_des: '场景2描述',

            stage3: '场景3',
            stage3_des: '场景3描述',

            stage4: '场景4',
            stage4_des: '场景4描述',

            //门店专享产品描述动态更改

            goods1: '专享1',
            goods1_pay: '￥专享1价格',
            goods1_des: '专享1描述',

            goods2: '专享2',
            goods2_pay: '￥专享2价格',
            goods2_des: '专享2描述',

            goods3: '专享3',
            goods3_pay: '￥专享3价格',
            goods3_des: '专享3描述',

            goods4: '专享4',
            goods4_pay: '￥专享4价格',
            goods4_des: '专享4描述',

            goods5: '专享5',
            goods5_pay: '￥专享5价格',
            goods5_des: '专享5描述',

            goods6: '专享6',
            goods6_pay: '￥专享6价格',
            goods6_des: '专享6描述',

            //vip专享推荐动态更改
            vip1: 'vip上新1',
            vip1_des: 'vip上新1介绍',

            vip2: 'vip上新2',
            vip2_des: 'vip上新2介绍',

            //营业时间
            work1:'周一-周五: 08.00 A.M - 10.00 P.M',
            work2:'周六: 08.00 A.M - 02.00 P.M',
            work3:'周日: 08.00 A.M - 11.00 P.M',
            work4:'节假日: 08.00 A.M - 02.00 P.M',

            //************
            adminNum: '',
            userNum: '',
            addressNum: '',
            //************
        }
    },
    methods: {
        getAdminNum() {
            axios.post('/portal/adminNum').then(
                (res) => {
                    this.adminNum = res.data[0].num;
                },
                (err) => {
                    console.log("查询数量出错");
                }
            )
        },
        getUserNum() {
            axios.post('/portal/userNum').then(
                (res) => {
                    this.userNum = res.data[0].num;
                },
                (err) => {
                    console.log("查询数量出错");
                }
            )
        },
        getAddressNum() {
            axios.post('/portal/addressNum').then(
                (res) => {
                    this.addressNum = res.data[0].num;
                },
                (err) => {
                    console.log("查询数量出错");
                }
            )
        }
    },
    created() {
        this.getAdminNum();
        this.getAddressNum();
        this.getUserNum();
    }
});
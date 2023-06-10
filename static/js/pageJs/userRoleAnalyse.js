const vm = new Vue({
    el: '#app',
    data() {
        return {
            userId: '',
            username: '',

            activeIndex2: '0',
            formLabelWidth: '120px',
            index: 0,
            page_title: '',
            sdata: [],         //饼状图统计用户角色情况
        }
    },
    methods: {
        //头部菜单
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        //侧边菜单
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //得到页面标题用于导航位置
        getPageTitle() {
            this.page_title = document.title;
        },
        //用户角色
        getRoleList() {
            axios.post("/user/getRoleWithUser").then(
                (res) => {
                    this.sdata = res.data;
                    var myChart0 = echarts.init(document.getElementById('main'));
                    var option0 = {
                        title: {
                            text: '当前网站用户角色分布',
                            subtext: '人员分配情况',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left'
                        },
                        series: [
                            {
                                name: 'From database',
                                type: 'pie',
                                radius: '50%',
                                data: res.data,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    myChart0.setOption(option0);
                },
                (err) => {
                    console.log("查询用户角色分布信息失败");
                }
            )
        },
        getGenderCount() {

        }
    },
    created() {
        this.getPageTitle();    //自动执行获取用户访问的当前页面title
        this.getRoleList();    //得到从数据库中得到数据并绘图
        this.getGenderCount();
    }
})

axios.post("/user/genderData").then(
    (res) => {
        var dom = document.getElementById('container');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};
        var option;
        option = {
            title: {
                text: '当前网站用户性别分布',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            color: ['#FF69B4', '#007BFF', '#ececec'],
            series: [
                {
                    name: 'From Datebase',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: res.data,
                    // [
                    //     { value: 5, name: '女' },
                    //     { value: 8, name: '男' },
                    //     { value: 1, name: '未知' }
                    // ]
                }
            ]
        };
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        window.addEventListener('resize', myChart.resize);
    },
    (err) => {

    }
)


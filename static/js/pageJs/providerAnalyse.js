const vm = new Vue({
  el: '#app',
  data() {
    return {
      userId: '1',
      username: 'admin',

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
  },
  created() {
    this.getPageTitle();    //自动执行获取用户访问的当前页面title
  }
})

axios.post('/provider/getproAddress').then(
  (res) => {
    if (res.data != null) {
      console.log(res.data);
      var myChart = echarts.init(document.getElementById('map'));
      var option = {
        title: {
          text: '供应商在全国的分布情况统计图',
          left: 'center'
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 20,
          left: 'left',
          top: 'bottom',
          text: ['多', '少'],
          calculable: true
        },
        series: [
          {
            name: '地图',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
              show: true
            },
            data: res.data
          }
        ]
      };

      myChart.setOption(option);
    }
  },
  (err) => {
    console.log("地图生成失误");
  }
)


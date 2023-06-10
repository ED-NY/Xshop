const vm = new Vue({
    el: '#app',
    data() {
        var validatePhone = (rule, value, callback) => {
            value = this.Addform.phone;
            if (value === '') {
                callback(new Error('手机号不能为空'))
            }
            else if (value.length != 11) {
                callback(new Error('请输入11位手机号'))
            } else {
                callback();
            }
        };
        return {
            userId: '1',
            username: 'admin',   //登录的信息

            activeIndex2: '0',
            tableData: [],   //全部信息
            multipleSelection: [],

            ChangedialogFormVisible: false,  //编辑用户信息对话框
            AdddialogFormVisible: false,    //添加新的用户

            Changeform: {},   //编辑用户信息表单
            Addform: {},      //添加新用户表单

            rules: {
                phone: [
                    { validator: validatePhone, trigger: 'blur' }    //检验手机号位数
                ]
            },

            AddformLabelWidth: '120px',

            index: 0,
            page_title: '',
            countUserList: null,
            formInline: {     //检索框
                id: '',
                proName: '',
                proDesc: '',
                proContact: '',
                proPhone: '',
                proAddress: '',
                proFax: ''
            },
            roleOptions: [],      //角色筛选选项
            currentPage: 1, //初始页
            pagesize: 10,    //每页的数据
            loading: true,
            into: {          //验证
                id: '',
                userCode: ''
            }
        }
    },
    methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
            console.log(this.currentPage)  //点击第几页
        },
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
        //main表格设置
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //打开修改对话框
        handleEdit(index, row) {
            this.ChangedialogFormVisible = true
            this.Changeform = JSON.parse(JSON.stringify(row))
            this.index = index
        },
        //添加新的供应商对话框
        handleEditAdd() {
            this.AdddialogFormVisible = true
        },
        //处理修改
        handleUpdate() {
            axios.post("/provider/getUpdate", this.Changeform).then(
                (res) => {
                    if (res.data != null) {
                        this.openSec();
                        this.ChangedialogFormVisible = false;
                        this.getProviderList();  //更新成功后刷新列表
                    }
                },
                (err) => {
                    this.openErr();
                    this.ChangedialogFormVisible = false
                    console.log("用户修改出错！");
                }
            )
        },
        openSec() {
            this.$message({
                message: '操作成功！',
                type: 'success'
            });
        },
        openErr() {
            this.$message.error('操作失败请重试！');
        },
        //删除用户
        handleDelete(index) {

            // 重要操作，删除或根据列表变更信息需要计算当前页面页码-1与显示数量的积
            // console.log(this.tableData[index+(this.currentPage-1)*this.pagesize].id); 

            axios.delete('/provider/getDelete', { data: { id: this.tableData[index + (this.currentPage - 1) * this.pagesize].id } }).then(
                (res) => {
                    if (res.data) {
                        this.getProviderList();
                        this.openSec();
                    }
                },
                (err) => {
                    this.openErr();
                    console.log("删除失败");
                }
            )
        },
        //得到页面标题用于导航位置
        getPageTitle() {
            this.page_title = document.title;
        },
        //通过axios得到请求数据
        getProviderList() {
            axios.post("/provider/getProviderList").then(
                (res) => {
                    this.tableData = res.data;
                    this.loading = false;   //请求成功为false要不然main处于加载状态
                },
                (err) => {
                    console.log("获取用户表失败");
                    this.loading = true;
                }
            );
        },
        //检索用户信息
        onSubmit() {
            console.log('submit!');
            axios.post("/provider/query_some", this.formInline).then(
                (res) => {
                    this.tableData = res.data;
                },
                (err) => {
                    console.log("指定用户信息查询失败");
                }
            )
        },
        //查看用户信息详情
        open(index) {
            var info = '供应商名 : ' + this.tableData[index + (this.currentPage - 1) * this.pagesize].proName + "\n" + '详情信息 : ' + this.tableData[index + (this.currentPage - 1) * this.pagesize].proDesc;  //用于显示的用户详情信息
            this.$alert(info, '供应商详情信息', {
                confirmButtonText: '确定',
            });
        },
        urlIndex() {
            var url = window.location.href;    //连接携带id指定跳转到特定功能
            var index = url.indexOf("id");
            var str;
            if (index != -1) {
                str = url.substring(url.lastIndexOf("=") + 1, url.length);
                console.log(str);
            };
            switch (str) {
                case "01":
                    this.AdddialogFormVisible = true
                    break;
            };
            // var index0 = url.indexOf("username");       //进切片用于传递账号密码，如果两个值均为空，自动跳转到login
            // if (index0 !== '') {
            //     username = url.substring(url.indexOf("=") + 1, url.indexOf('&'));
            //     userId = url.substring(url.indexOf("=", url.length - 8) + 1, url.indexOf('&', url.length - 8));
            //     this.username = username;
            //     this.userId = userId;
            // };
            // console.log(username, userId);
        },
        //修改重置添加表
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //添加新供应商
        handleAdd(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //生成符合标准的时间
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var Hours = date.getHours();
                    var Minutes = date.getMinutes();
                    var Seconds = date.getSeconds();
                    if (month < 10) {
                        month = "0" + month;
                    }
                    if (day < 10) {
                        day = "0" + day;
                    }
                    var s_createtime = year + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;


                    this.Addform.createId = this.userId;
                    this.Addform.createDate = s_createtime;
                    axios.post('/provider/addProvider', this.Addform).then(
                        (res) => {
                            if (res.data) {
                                this.openSec();
                                this.AdddialogFormVisible = false;
                                this.getProviderList();     //自动获取用户表信息
                            }
                        }, (err) => {
                            this.openErr();
                            this.AdddialogFormVisible = false;
                        }
                    )
                } else {
                    this.openErr();
                }
            });
        },
    },
    created() {
        this.urlIndex();
        this.getPageTitle();    //自动执行获取用户访问的当前页面title
        this.getProviderList();     //自动获取用户表信息
    }
});
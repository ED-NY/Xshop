const vm = new Vue({
    el: '#app',
    data() {
        //第一次输入密码验证
        var validatePass = (rule, value, callback) => {
            value = this.Passform.pass;
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            else if (value.length < 6) {
                callback(new Error("请输入大于等于6位的密码"))
            }
            else if (value.length > 15) {
                callback(new Error("密码不能大于15位"))
            }
            else {
                if (this.Passform.checkPass !== '') {
                    this.$refs.Passform.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePassAdd = (rule, value, callback) => {
            value = this.Addform.pass;
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            else if (value.length < 6) {
                callback(new Error("请输入大于等于6位的密码"))
            }
            else if (value.length > 15) {
                callback(new Error("密码不能大于15位"))
            }
            else {
                callback();
            }
        };
        //再次输入密码验证
        var validatePass2 = (rule, value, callback) => {
            value = this.Passform.checkPass;
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.Passform.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        //输入账户名验证
        var validateCode = (rule, value, callback) => {
            value = this.Addform.userCode;
            if (value === '') {
                callback(new Error('账户名不能为空！'));
            }
            else if (value.length > 15) {
                callback(new Error('账户名不能超过15位！'));
            }
            else if (value.length < 3) {
                callback(new Error('账户名不能少于3个字符!'));
            }
            else {
                callback();
            }
        };
        var validateName = (rule, value, callback) => {
            value = this.Addform.userName;
            if (value === '') {
                callback(new Error('姓名为必填项!'))
            }
            else if (value.length < 2) {
                callback(new Error('姓名不能少于1位！'))
            }
            else if (value.length > 7) {
                callback(new Error('超出姓名最大长度！'))
            } else {
                callback();
            }
        };
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
            username: 'admin',   //注册登录功能还未完善临时模拟已经登录的信息
            password: '123456',

            activeIndex2: '0',
            tableData: [],   //全部信息
            multipleSelection: [],

            ChangedialogFormVisible: false,  //编辑用户信息对话框
            PassdialogFormVisible: false,  //编辑当前账户密码对话框
            AdddialogFormVisible: false,    //添加新的用户

            Changeform: {},   //编辑用户信息表单
            Passform: {},          //修改当前账户密码表单
            Addform: {},      //添加新用户表单

            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }   //检查第一次输入的密码
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }  //检查第二次输入的密码
                ],
                userCode: [
                    { validator: validateCode, trigger: 'blur' }   //检查新建用户时usercode的格式是否正确
                ],
                userName: [
                    { validator: validateName, trigger: 'blur' }     //检查姓名信息是否正确
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur' }    //检验手机号位数
                ],
                addpass: [
                    { validator: validatePassAdd, trigger: 'blur' }
                ]
            },

            ChangeformLabelWidth: '120px',
            PassformLabelWidth: '120px',     //修改当前账户密码表单
            AddformLabelWidth: '120px',

            index: 0,
            page_title: '',
            countUserList: null,
            formInline: {     //检索框
                id: '',
                user: '',
                address: '',
                role: ''
            },
            roleOptions: [],      //角色筛选选项
            currentPage: 1, //初始页
            pagesize: 10,    //每页的数据
            loading: true,
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
        //添加新的用户对话框
        handleEditAdd() {
            this.AdddialogFormVisible = true
        },
        //处理修改
        handleUpdate() {
            axios.post("/user/getUpdate", this.Changeform).then(
                (res) => {
                    if (res.data != null) {
                        this.openSec();
                        this.ChangedialogFormVisible = false;
                        this.getUserList();  //更新成功后刷新列表
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

            axios.delete('/user/getDelete', { data: { id: this.tableData[index + (this.currentPage - 1) * this.pagesize].id } }).then(
                (res) => {
                    if (res.data) {
                        this.getUserList();
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
        getUserList() {
            axios.post("/user/getUserList").then(
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
            axios.post("/user/query_some", this.formInline).then(
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
            var info = '账户名:' + this.tableData[index + (this.currentPage - 1) * this.pagesize].userCode + "\n" + '创建时间:' + this.tableData[index + (this.currentPage - 1) * this.pagesize].creationDate;  //用于显示的用户详情信息
            this.$alert(info, '用户详情信息', {
                confirmButtonText: '确定',
            });
        },
        //查询用户角色
        getRole() {
            axios.post("/user/getRole").then(
                (res) => {
                    this.roleOptions = res.data;
                    console.log(res.data)
                },
                (err) => {
                    console.log("查询角色失败！");
                }
            )
        },
        //修改当前账户密码
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.Passform.id = this.userId;
                    //将id与密码传入
                    axios.post("/user/altPassword", this.Passform).then(
                        (res) => {
                            if (res.data) {
                                this.openSec();
                            }
                        },
                        (err) => {
                            this.openErr();
                        }
                    )
                } else {
                    this.openErr();
                    return false;
                }
            });
        },
        //修改密码重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //添加用户以及填写信息验证
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
                    axios.post('/user/addUser', this.Addform).then(
                        (res) => {
                            if (res.data) {
                                this.openSec();
                            }
                        }, (err) => {
                            this.openErr();
                        }
                    )
                } else {
                    this.openErr();
                }
            });
        }
    },
    created() {
        var url = window.location.href;    //连接携带id指定跳转到特定功能
        var index = url.indexOf("id");
        var str;
        if (index != -1) {
            str = url.substring(url.lastIndexOf("=") + 1, url.length);
        };
        switch (str) {
            case "01":
                this.PassdialogFormVisible = true
                break;
            case "02":
                this.AdddialogFormVisible = true
                break;
        };
        this.getPageTitle();    //自动执行获取用户访问的当前页面title
        this.getUserList();     //自动获取用户表信息
        this.getRole();      //读取角色信息表用于筛选用户
    }
});
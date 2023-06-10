const vm = new Vue({
    el: '#app',
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } 
            else if(value.length < 6){
                callback(new Error('请输入大于等于6位的密码！'))
            }
            else if(value.length >15){
                callback(new Error('密码不能大于15位!'));
            }
            else {
                callback();
            }
        };
        var validateCode = (rule, value,callback)=>{
            if(value === ''){
                callback(new Error('请输入账号'));
            }
            else if (value.length > 15) {
                callback(new Error('账户名不能超过15位！'));
            }
            else if (value.length < 3) {
                callback(new Error('账户名不能少于3个字符!'));
            }
            else{
                callback();
            }
        }
        return {
            msg: '',
            ruleForm: {},
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                userCode: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('/user/getLogin',this.ruleForm).then(
                        (res)=>{
                            if(res.data[0]!=null){
                                this.msg = '';
                                console.log(res.data[0].token);
                                if(res.data[0].userCode === this.ruleForm.userCode){
                                    console.log('登录成功！！！');
                                    url="http://localhost:8080/pages/user.html?username="+res.data[0].userCode+"&userId="+res.data[0].id+'&id=00';
                                    location.href = url;  
                                }
                            }else{
                                this.msg = '账号或密码错误，请联系管理员';
                            }
                        },
                        (err)=>{
                            console.log('登录失败处理');
                        }
                    )
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getLogin(){
            
        }
    }
});

var chartDom = document.getElementById('title');
var myChart = echarts.init(chartDom);
var option = {
    graphic: {
        elements: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: 'Xshop管理登录',
                    fontSize: 80,
                    fontWeight: 'bold',
                    lineDash: [0, 200],
                    lineDashOffset: 0,
                    fill: 'transparent',
                    stroke: '#000',
                    lineWidth: 1
                },
                keyframeAnimation: {
                    duration: 3000,
                    loop: true,
                    keyframes: [
                        {
                            percent: 0.7,
                            style: {
                                fill: 'transparent',
                                lineDashOffset: 200,
                                lineDash: [200, 0]
                            }
                        },
                        {
                            // Stop for a while.
                            percent: 0.8,
                            style: {
                                fill: 'transparent'
                            }
                        },
                        {
                            percent: 1,
                            style: {
                                fill: 'black'
                            }
                        }
                    ]
                }
            }
        ]
    }
};
myChart.setOption(option);
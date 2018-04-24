import * as React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import "../../style/Login.css"

const FormItem = Form.Item;

class Login extends React.Component {


  public render() {
    return (
      <div className="login">
        <div className="login-form">
            <div className="login-logo">
                <span>Sense Class</span>
            </div>
            <Form style={{maxWidth:'300px'}}>
                <FormItem>
                    {/* {getFiledDecorator('userName',{
                        rules: [{required:true,message:'请输入用户名'}]
                    })( */}
                        <Input prefix={<Icon type='user' style={{fontSize:13}} />} placeholder=""/>
                    {/* )} */}
                </FormItem>
                <FormItem>
                    {/* {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })( */}
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                    {/* )} */}
                </FormItem>
                <FormItem>
                    {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })( */}
                        <Checkbox>记住我</Checkbox>
                    {/* )} */}
                    <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        登录
                    </Button>
                    <p style={{display: 'flex', justifyContent: 'space-between'}}>
                        <a href="">或 现在就去注册!</a>
                        <a ><Icon type="github" />(第三方登录)</a>
                    </p>
                </FormItem>
            </Form>
        </div>
      </div>
    );
  }
}

export default Login;
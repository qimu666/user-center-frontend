import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';
import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import styles from './index.less';
import {history} from "@@/core/history";

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const handleSubmit = async (values: API.RequiredParams) => {
    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error('输入的密码不一样');
      return;
    }
    try {
      // 登录
      const id = await register(values);
      if (id) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const {query} = history.location;
        history.push({
          pathname: '/user/login',
          query
        });
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      // @ts-ignore
      message.error(error.message ?? defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.jpg"/>}
          title="用户中心"
          subTitle={'用户登录注册中心'}
          initialValues={{
            autoLogin: true,
          }}
          submitter={
            {
              searchConfig: {
                submitText: "注册"
              }
            }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RequiredParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账号注册'}/>
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入要注册的账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  }, {
                    min: 4,
                    type: "string",
                    message: "账号长度不能小于4"
                  }
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: "string",
                    message: "密码长度不能小于8"
                  }
                ]}

              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请确认密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: "string",
                    message: "密码长度不能小于8"
                  }
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;

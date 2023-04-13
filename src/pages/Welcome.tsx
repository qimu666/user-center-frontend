import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'快去试试新项目吧'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a href="https://qimuu.icu" rel="noopener noreferrer" target="__blank">
            点击前往聚交园
          </a>
        </Typography.Text>
        <CodePreview>https://qimuu.icu</CodePreview>
      </Card>
    </PageContainer>
  );
};
export default Welcome;

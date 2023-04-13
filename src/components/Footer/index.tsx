import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '柒木出品';
  const currentYear = new Date().getFullYear();
  // @ts-ignore
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 柒木 GitHub
            </>
          ),
          href: 'https://github.com/qimu666',
          blankTarget: true,
        },
        {
          key: '豫ICP备2023004098号-1',
          title: '豫ICP备2023004098号-1',
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
        {
          key: '豫ICP备2023004098号',
          title: (
            <>
              <img
                src="https://img.qimuu.icu/typory/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png"
                alt={'备案'}
              />
              豫公网安备 41172702000163号
            </>
          ),
          href: 'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172702000163',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

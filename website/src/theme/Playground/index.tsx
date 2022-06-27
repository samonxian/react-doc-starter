import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CodeSection from '../CodeSection';
import Github from '../Github';

import styles from './index.module.less';

export interface FileListMap {
  fileName: string;
  fileSuffix: string;
  fileContent: string;
}
export interface PlaygroundProps {
  /**
   * 文件列表
   */
  fileList: FileListMap[];
  sourceUrl: string;
  children?: React.ReactNode;
}

/**
 * 输入的根据文件列表（需要明确的后缀名），像编辑器一样展示代码。
 * @param props.fileList
 */
export default function Playground({ fileList, sourceUrl, children }: PlaygroundProps) {
  const [codeShowed, setCodeShowed] = useState(false);
  const toggleCode = () => setCodeShowed((s) => !s);
  const { siteConfig: { customFields = {} } = {} } = useDocusaurusContext();
  const { demoSourceUrl = '' } = customFields;

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.playgroundContent}>{children}</div>
      <div className={styles.codeBoxActions}>
        {codeShowed && (
          <img
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
            className={styles.codeExpandIcon}
            onClick={toggleCode}
          />
        )}
        {!codeShowed && (
          <img
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
            className={styles.codeExpandIcon}
            onClick={toggleCode}
          />
        )}
        {sourceUrl && <Github url={`${demoSourceUrl}/${sourceUrl}`} className={styles.codeExpandIcon} />}
      </div>
      {codeShowed && fileList?.length > 0 && (
        <div className={styles.playgroundIDE}>
          {fileList.length === 1 && <CodeSection language={fileList[0].fileSuffix} source={fileList[0].fileContent} />}
          {fileList.length > 1 && (
            <Tabs
              defaultValue={0}
              values={fileList.map(({ fileName, fileSuffix }, index) => {
                const value = `${fileName}.${fileSuffix}`;
                return {
                  label: value,
                  value: index,
                };
              })}
            >
              {fileList.map(({ fileName, fileContent, fileSuffix }, index) => {
                const value = `${fileName}.${fileSuffix}`;

                return (
                  <TabItem value={index} key={value}>
                    <CodeSection language={fileSuffix} source={fileContent} />
                  </TabItem>
                );
              })}
            </Tabs>
          )}
        </div>
      )}
    </div>
  );
}

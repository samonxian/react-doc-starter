import React from 'react';
import classnames from 'classnames';

import styles from './index.module.less';

export default ({ url, className }: { url: string; className: string }) => {
  return (
    <span className={classnames(styles.githubBtn, className)}>
      <a
        className={styles.ghBtn}
        href={url}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
      >
        <span className={styles.ghIco} aria-hidden="true"></span>
        <span className={styles.ghText}>Star</span>
      </a>
    </span>
  );
};

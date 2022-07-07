import React, { createElement, memo, useMemo } from 'react';
import marksy from 'marksy';

import styles from './index.module.css';

function PropsTable(props: { data: Record<string, any> }) {
  const { data } = props;
  const compile = useMemo(() => marksy({ createElement }), []);

  if (!data?.props) {
    return null;
  }

  return (
    <div className={styles.propsTable}>
      <table>
        <thead>
          <tr>
            <th align="left">参数</th>
            <th align="left">类型</th>
            <th align="left">默认值</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.props || {}).map((key) => {
            const { required, description, tsType, defaultValue } = data.props[key];
            const desc = typeof description === 'string' ? compile(description).tree : description;

            return (
              <React.Fragment key={key}>
                <tr>
                  <td className={styles.paramsColumn} align="left" rowSpan={2}>
                    <b>{key}</b>
                    {!required && '?'}
                  </td>
                  <td className={styles.typeColumn} align="left">
                    {tsType?.raw || tsType?.name || '-'}
                  </td>
                  <td className={styles.defaultColumn} align="left">
                    {defaultValue?.value || '-'}
                  </td>
                </tr>
                <tr>
                  <td className={styles.descColumn} align="left" colSpan={2}>
                    {desc || '-'}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default memo(PropsTable);

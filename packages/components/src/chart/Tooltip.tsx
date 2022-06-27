import React from 'react';

import styles from './Tooltip.module.less';

export interface RechartsTooltipProps {
  payload?: any[];
  label?: string | number;
  active?: boolean;
  isPercent?: boolean;
  formatter?: Function | null;
  unit?: React.ReactNode;
  titleColor?: string;
  numberColor?: string;
}
export default function RechartsTooltip(props: RechartsTooltipProps) {
  const { active } = props;
  if (active) {
    const { isPercent, payload = [], label, formatter, unit, titleColor, numberColor } = props;
    let total = 0;

    // isPercent 支持 line area bar
    if (isPercent) {
      total = payload.reduce((result, entry) => result + Number(entry.value), 0);
    }

    return (
      <div className={styles.rechartsTooltip}>
        {label && (
          <div
            className={styles.rechartTooltipLabel}
            style={{
              color: titleColor,
            }}
          >
            {`${label}`}
            {isPercent && <>&nbsp;(总数：{total.toLocaleString()})</>}
          </div>
        )}
        <ul className={styles.rechartsTooltipContent}>
          {
            // prettier-ignore
            payload?.map((v, k) => {
              let lastUnit = unit;
              // percent 目前只在 PieChart中用到
              const { percent } = v.payload;
              const value = formatter ? formatter(v.value) : v.value;

              if (v.value === 0 || v.value === 'N/A') {
                lastUnit = null;
              }

              return (
                <li key={k}>
                  <span className={styles.rechartTooltipItemTitle} style={{ color: numberColor || v.stroke }}>
                    {v.name}：
                  </span>
                  <span className={styles.rechartTooltipItemValue}>
                    {value.toLocaleString()}
                    {lastUnit}
                    {isPercent && <>&nbsp;({`${((v.value / (total || 1)) * 100).toFixed(2)}%`})</>}
                    {percent && <>&nbsp;({`${(percent * 100).toFixed(2)}%`})</>}
                  </span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
  return null;
}

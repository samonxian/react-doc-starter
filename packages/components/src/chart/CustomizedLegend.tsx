import React from 'react';
import classnames from 'classnames';
import { Symbols, Surface } from 'recharts';

const SIZE = 32;
const DISABLED_COLOR = 'rgba(0,0,0,.25)';
/**
 * 基于官方源码进行修改，不使用 ts 进行修改。
 */
class CustomizedLegend extends React.Component<{
  inactiveColor?: string;
  payload?: any[];
  customPayload: Record<string, any>;
  iconSize?: string;
  layout?: string;
  onClick?: Function;
  formatter?: Function;
  align?: any;
}> {
  /**
   * Render the path of icon
   * @param {Object} data Data of each legend item
   * @return {String} Path element
   */
  renderIcon(data: Record<string, any>) {
    const { inactiveColor } = this.props;
    const halfSize = SIZE / 2;
    const sixthSize = SIZE / 6;
    const thirdSize = SIZE / 3;
    const color = (data.inactive ? inactiveColor : data.color) || DISABLED_COLOR;

    if (data.type === 'plainline') {
      return (
        <line
          strokeWidth={4}
          fill="none"
          stroke={color}
          strokeDasharray={data.payload.strokeDasharray}
          x1={0}
          y1={halfSize}
          x2={SIZE}
          y2={halfSize}
          className="recharts-legend-icon"
        />
      );
    }
    if (data.type === 'line') {
      return (
        <path
          strokeWidth={4}
          fill="none"
          stroke={color}
          d={`M0,${halfSize}h${thirdSize}
            A${sixthSize},${sixthSize},0,1,1,${2 * thirdSize},${halfSize}
            H${SIZE}M${2 * thirdSize},${halfSize}
            A${sixthSize},${sixthSize},0,1,1,${thirdSize},${halfSize}`}
          className="recharts-legend-icon"
        />
      );
    }
    if (data.type === 'rect') {
      return (
        <path
          stroke="none"
          fill={color}
          d={`M0,${SIZE / 8}h${SIZE}v${(SIZE * 3) / 4}h${-SIZE}z`}
          className="recharts-legend-icon"
        />
      );
    }

    return <Symbols fill={color} cx={halfSize} cy={halfSize} size={SIZE} sizeType="diameter" type={data.type} />;
  }

  /**
   * Draw items of legend
   * @return {ReactElement} Items
   */
  renderItems() {
    const { payload = [], customPayload = payload, iconSize, layout, onClick, formatter } = this.props;
    const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
    const itemStyle = {
      display: layout === 'horizontal' ? 'inline-block' : 'block',
      marginRight: 10,
    };
    const svgStyle = {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: 4,
    };
    const payloadMap = payload.reduce((acc: any, cur: { dataKey: any }) => ({ ...acc, [cur.dataKey]: cur }), {});

    return customPayload.map((customEntry: { dataKey: string | number }, i: any) => {
      const entry = payloadMap[customEntry.dataKey] || customEntry;
      const finalFormatter = entry.formatter || formatter;
      const className = classnames({
        'recharts-legend-item': true,
        [`legend-item-${i}`]: true,
        inactive: entry.inactive,
      });

      if (entry.type === 'none') {
        return null;
      }

      return (
        <li
          className={className}
          style={{ ...itemStyle, cursor: 'pointer' }}
          key={`legend-item-${i}`} // eslint-disable-line react/no-array-index-key
          onClick={() => {
            onClick?.(entry);
          }}
        >
          <Surface
            width={iconSize as unknown as number}
            height={iconSize as unknown as number}
            viewBox={viewBox}
            style={svgStyle}
          >
            {this.renderIcon(entry)}
          </Surface>
          <span className="recharts-legend-item-text" style={{ color: !entry.color ? DISABLED_COLOR : '' }}>
            {finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value}
          </span>
        </li>
      );
    });
  }

  render() {
    const { payload, customPayload = payload, layout, align } = this.props;

    if (!customPayload || !customPayload.length) {
      return null;
    }

    const finalStyle = {
      padding: 0,
      margin: 0,
      textAlign: layout === 'horizontal' ? align : 'left',
    };

    return (
      <ul className="recharts-default-legend" style={finalStyle}>
        {this.renderItems()}
      </ul>
    );
  }
}

export default CustomizedLegend;

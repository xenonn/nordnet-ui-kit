import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Expand({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g fillRule="nonzero" fill={fill}>
          <path d="M6.2832,5.7168 L1.3664,0.8 L4.4008,0.8 C4.6216,0.8 4.8008,0.6208 4.8008,0.4 C4.8008,0.1792 4.6216,0
            4.4008,0 L0.4008,0 C0.18,0 0.0008,0.1792 0.0008,0.4 L0.0008,4.4 C0.0008,4.6208 0.18,4.8 0.4008,4.8 C0.6216,4.8
            0.8008,4.6208 0.8008,4.4 L0.8008,1.3656 L5.7176,6.2824 C5.796,6.3608 5.8984,6.3992 6.0008,6.3992 C6.1032,6.3992
            6.2056,6.36 6.284,6.2824 C6.44,6.1264 6.44,5.8728 6.284,5.7168 L6.2832,5.7168 Z" />
          <path d="M15.6,0 L11.6,0 C11.3792,0 11.2,0.1792 11.2,0.4 C11.2,0.6208 11.3792,0.8 11.6,0.8 L14.6344,0.8 L9.7176,5.7168
            C9.5616,5.8728 9.5616,6.1264 9.7176,6.2824 C9.796,6.3608 9.8984,6.3992 10,6.3992 C10.1016,6.3992 10.2048,6.36
            10.2824,6.2824 L15.2,1.3656 L15.2,4.4 C15.2,4.6208 15.3792,4.8 15.6,4.8 C15.8208,4.8 16,4.6208 16,4.4 L16,0.4
            C16,0.1792 15.8208,0 15.6,0 Z" />
          <path d="M6.2832,9.7176 C6.1272,9.5616 5.8736,9.5616 5.7176,9.7176 L0.8008,14.6344 L0.8008,11.6 C0.8008,11.3792
            0.6216,11.2 0.4008,11.2 C0.18,11.2 0.0008,11.3792 0.0008,11.6 L0.0008,15.6 C0.0008,15.8208 0.18,16 0.4008,16
            L4.4008,16 C4.6216,16 4.8008,15.8208 4.8008,15.6 C4.8008,15.3792 4.6216,15.2 4.4008,15.2 L1.3664,15.2 L6.2832,10.2824
            C6.4392,10.1264 6.4392,9.8728 6.2832,9.7168 L6.2832,9.7176 Z" />
          <path d="M15.6,11.2 C15.3792,11.2 15.2,11.3792 15.2,11.6 L15.2,14.6344 L10.2824,9.7176 C10.1264,9.5616 9.8728,9.5616
            9.7168,9.7176 C9.5608,9.8736 9.5608,10.1272 9.7168,10.2832 L14.6344,15.2 L11.6,15.2 C11.3792,15.2 11.2,15.3792
            11.2,15.6 C11.2,15.8208 11.3792,16 11.6,16 L15.6,16 C15.8208,16 16,15.8208 16,15.6 L16,11.6 C16,11.3792 15.8208,11.2
            15.6,11.2 Z" />
        </g>
      </g>
    </svg>
  );
}

Expand.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Expand.defaultProps = Icon.defaultProps;

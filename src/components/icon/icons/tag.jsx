import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Tag({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Artboard-1" transform="translate(-915.000000, -141.000000)" stroke={stroke} strokeWidth={strokeWidth}>
          <g id="tag" transform="translate(915.000000, 141.000000)">
            <path d="M1,1 L1,7 L8.5,14.5 L14.5,8.5 L7,1 L1,1 Z" id="base" />
            <path d="M3,4 L5,4" id="hole" />
          </g>
        </g>
      </g>
    </svg>
  );
}

Tag.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Tag.defaultProps = Icon.defaultProps;
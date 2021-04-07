import React from 'react';
import { SVGIconProps } from './Icon.props';

const hello = 'yay'

export const SpeechBubble = ({
  fill = 'white',
  width = 381,
  height = 258,
  className = '',
  viewBox = '0 0 1190 598',
}: SVGIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill={fill} fillRule="nonzero" >
      <path d="M319.848 0H61.152C27.379 0 0 27.379 0 61.152v93.695c0 28.18 19.067 51.894 45 58.98V258l42-42h232.848C353.621 216 381 188.621 381 154.848V61.153C381 27.379 353.621 0 319.848 0z" />
    </g>
  </svg>
);
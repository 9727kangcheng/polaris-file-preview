import React from 'react';
import type { IIconProps } from './types';

const ExcelIcon = (props: IIconProps) => {
  const { size } = props;
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="91972"
      width={size || 60}
      height={size || 60}>
      <path
        d="M160 32c-12 0-24.8 4.8-33.6 14.4S112 68 112 80v864c0 12 4.8 24.8 14.4 33.6 9.6 9.6 21.6 14.4 33.6 14.4h704c12 0 24.8-4.8 33.6-14.4 9.6-9.6 14.4-21.6 14.4-33.6V304L640 32H160z"
        fill="#5ACC9B"
        p-id="91973"></path>
      <path
        d="M912 304H688c-12 0-24.8-4.8-33.6-14.4-9.6-8.8-14.4-21.6-14.4-33.6V32l272 272z"
        fill="#BDEBD7"
        p-id="91974"></path>
      <path
        d="M475.2 537.6l-108.8-152h75.2l71.2 108.8 74.4-108.8h72.8l-111.2 152 116.8 161.6h-76L511.2 584l-78.4 116h-74.4l116.8-162.4z"
        fill="#FFFFFF"
        p-id="91975"></path>
    </svg>
  );
};

export { ExcelIcon };

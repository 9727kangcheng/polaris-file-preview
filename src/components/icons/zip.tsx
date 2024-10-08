import React from 'react';
import type { IIconProps } from './types';

const ZipIcon = (props: IIconProps) => {
  const { size } = props;
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="91153"
      width={size || 16}
      height={size || 16}>
      <path
        d="M944 944H80c-26.4 0-48-18.4-48-40.8V656h960v247.2c0 22.4-21.6 40.8-48 40.8z"
        fill="#5ACC9B"
        p-id="91154"></path>
      <path
        d="M80 80h864c26.4 0 48 18.4 48 40.8V368H32V120.8c0-22.4 21.6-40.8 48-40.8z"
        fill="#6CCBFF"
        p-id="91155"></path>
      <path d="M32 368h960v288H32z" fill="#FFD766" p-id="91156"></path>
      <path d="M352 80h320v864H352z" fill="#FF5562" p-id="91157"></path>
      <path
        d="M444 128h64v48h-64zM508 80h64v48h-64zM508 176h64v48h-64zM444 224h64v48h-64zM508 272h64v48h-64zM444 320h64v48h-64zM508 368h64v48h-64zM444 416h64v48h-64zM508 464h64v48h-64zM444 512h64v48h-64zM508 560h64v48h-64zM444 608h64v48h-64zM508 656h64v48h-64zM444 704h64v48h-64zM508 752h64v48h-64zM444 800h64v48h-64zM444 896h64v48h-64zM508 848h64v48h-64z"
        fill="#FFFFFF"
        p-id="91158"></path>
    </svg>
  );
};

export { ZipIcon };

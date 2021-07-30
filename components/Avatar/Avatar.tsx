import React from 'react';
import cls from './Avatar.module.scss';

type AvatarProps = {
  children: string;
  width: number;
  fontSize: number;
}

const Avatar = ({ children, width, fontSize }: AvatarProps) => {
  return (
    <div className={cls.base} style={{width: width, height: width}}>
      <span style={{fontSize: fontSize}}>{children}</span>
    </div>
  );
};

export default Avatar

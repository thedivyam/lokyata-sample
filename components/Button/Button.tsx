import React from 'react';
import cls from './Button.module.scss';
import classnames from 'classnames';

type ButtonProps = {
  primary?: boolean;
  success?: boolean;
  className?: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const Button = ({ primary, success, className, children, iconLeft, iconRight }: ButtonProps) => {
  return (
    <div
      className={classnames([
        cls.base,
        {
          [cls.primary]: primary,
          [cls.success]: success,
        },
        className,
      ])}
    >
      {iconLeft && <div className={cls.iconLeft}>{iconLeft}</div>}
      <span
        className={classnames(cls.contentBase,
          {[cls.content]: !(primary || success), [cls.contentPrimary]: primary, [cls.contentSuccess]: success}
        )}
      >
        {children}
      </span>
      {iconRight && <div className={cls.iconRight}>{iconRight}</div>}
    </div>
  );
}

export default Button

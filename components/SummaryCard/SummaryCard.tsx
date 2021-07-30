import React from 'react';
import cls from './SummaryCard.module.scss';

type SummaryCardProps = {
  title: string;
  amount: string;
  subHeading: React.ReactNode;
  footer: string;
  footerAmount: string;
}

const SummaryCard = ({
  title,
  amount,
  subHeading,
  footer,
  footerAmount,
  ...rest
}: SummaryCardProps) => {
  return (
    <div className={cls.base} {...rest}>
      <span className={cls.title}>{title}</span>
      <span className={cls.amount}>{amount}</span>
      <span className={cls.subHeading}>{subHeading}</span>
      <span className={cls.footer}>{`${footer} `}<span className={cls.footerAmount}>{footerAmount}</span></span>
    </div>
  );
};

export default SummaryCard

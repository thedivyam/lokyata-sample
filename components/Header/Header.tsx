import React from 'react';
import cls from './Header.module.scss';
import Image from 'next/image';
import { Button } from '../Button';
import printIcon from '../../public/print.png';
import shareIcon from '../../public/share.png';
import downChevronIcon from '../../public/chevron-white.png';

const Header = () => {
  return (
    <div className={cls.base}>
      <div className={cls.tabTitle}>
        <div className={cls.activeTab}>
          <span>Overview</span>
        </div>
        <span style={{ color: '#7F7F7F' }}>Transactions</span>
      </div>
      <div className={cls.buttons}>
        <div className={cls.button}>
          <Button
            iconRight={
              <div
                style={{
                  height: 14,
                  width: 14,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image src={downChevronIcon} width={14} height={14} />
              </div>
            }
          >
            Combined
          </Button>
        </div>
        <div className={cls.button}>
          <Button
            success
            iconLeft={
              <div
                style={{
                  height: 20,
                  width: 20,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image src={shareIcon} width={20} height={20} />
              </div>
            }
          >
            Share
          </Button>
        </div>
        <div className={cls.button}>
          <Button
            primary
            iconLeft={
              <div
                style={{
                  height: 20,
                  width: 20,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image src={printIcon} width={20} height={20} />
              </div>
            }
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;

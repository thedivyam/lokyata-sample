import React from 'react';
import cls from './SideNavigation.module.scss';
import pieIcon from '../../public/pie-chart.svg';
import newFileIcon from '../../public/newfile.png';
import chevronDownIcon from '../../public/chevron-down.png';
import plusIcon from '../../public/plus.png';
import atIcon from '../../public/at.png';
import Image from 'next/image';
import { Avatar } from '../Avatar';

const SideNavigation = () => {
  return (
    <div className={cls.base}>
      <div style={{ justifySelf: 'flex-start' }}>
        <div className={cls.logoContainer}>
          <img className={cls.logo} src='./logo.png' />
        </div>
        <div className={cls.organisationWrapper}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ paddingRight: 12, paddingLeft: 9 }}>
              <Avatar width={22} fontSize={12}>
                D
              </Avatar>
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#404040' }}>
              Default Org.
            </span>
          </div>
            <div style={{ paddingRight: 9, height: 15 }}>
              <Image src={chevronDownIcon} width={15} height={15} />
            </div>
        </div>
        <span
          style={{
            color: '#404040',
            fontSize: 10,
            fontWeight: 700,
            paddingLeft: 19,
            paddingBottom: 15,
          }}
        >
          IBV
        </span>
        <div className={cls.navigation}>
          <div className={cls.overview}>
            <div
              style={{
                paddingRight: 18,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={pieIcon} />
            </div>
            <span>Overview</span>
          </div>
          <div className={cls.reports}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{ paddingRight: 18, height: 18 }}>
                <Image src={newFileIcon} width={18} height={18}/>
              </div>
              <span>Reports</span>
            </div>
            <div style={{ paddingRight: 12, height: 15, display: 'flex' }}><Image src={plusIcon} height={15} width={15}/></div>
          </div>
        </div>
      </div>
      <div style={{ justifySelf: 'flex-end', marginBottom: 18 }}>
        <div className={cls.overview}>
          <div
            style={{
              paddingRight: 18,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={atIcon} width={20} height={20}/>
          </div>
          <span>Support</span>
        </div>
        <div style={{ display: 'flex', paddingTop: 20, alignItems: 'center' }}>
          <div style={{ paddingRight: 12, paddingLeft: 12 }}>
            <Avatar width={30} fontSize={14}>
              A
            </Avatar>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#404040' }}>
            Ashok V.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;

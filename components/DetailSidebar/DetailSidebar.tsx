import React from 'react';
import Image from 'next/image';
import cls from './DetailSidebar.module.scss';
import leftArrowIcon from '../../public/back-arrow.png';
import okIcon from '../../public/success.png';

const DetailSidebar = () => {
  return (
    <div className={cls.base}>
      <div className={cls.headingWrapper}>
        <Image src={leftArrowIcon} width={22} height={22} />
        <span className={cls.mainHeading}>ANJPV5070F</span>
      </div>
      <div className={cls.subHeading}>
        <span>
          Created <b style={{ color: '#404040' }}>6 days ago</b> by{' '}
          <b style={{ color: '#404040' }}>Tommy Eastman</b>
        </span>
      </div>
      <div className={cls.sectionTitle}>
        <span>LEAD DETAILS</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={okIcon} width={12} height={12} />
          <span
            style={{ color: '#0DBC8D', marginLeft: 4.75, letterSpacing: 0 }}
          >
            Success
          </span>
        </div>
      </div>
      <hr className={cls.hr} />
      <div className={cls.userDetailsContainer}>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Type</span>
            <span className={cls.detailValue}>DL90</span>
          </div>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Customer ID</span>
            <span className={cls.detailValue}>12345</span>
          </div>
        </div>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Customer details</span>
            <span className={cls.detailValue}>Bill Gates (bill@gates.com)</span>
          </div>
        </div>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Email address</span>
            <span className={cls.detailValue}>bill@gates.com</span>
          </div>
        </div>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Account details</span>
            <span className={cls.detailValue}>
              1245799{' '}
              <span style={{ color: '#7F7F7F', fontWeight: 500 }}>via</span>{' '}
              124879{' '}
              <span style={{ color: '#7F7F7F', fontWeight: 500 }}>in</span> Bank
              of America
            </span>
          </div>
        </div>
        <div className={cls.detailsWrapper} style={{ marginBottom: 34.25 }}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Profile details</span>
            <span className={cls.detailValue}>
              Default Profile DL 90{' '}
              <span style={{ color: '#7F7F7F', fontWeight: 500 }}>from</span>{' '}
              Lokyata
            </span>
          </div>
        </div>
      </div>
      <div className={cls.sectionTitle}>
        <span>FROM BANK</span>
        <span style={{ color: '#0DBC8D', marginLeft: 4.75, letterSpacing: 0 }}>
          Login/Verified
        </span>
      </div>
      <hr className={cls.hr} />
      <div className={cls.userDetailsContainer}>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Customer name</span>
            <span className={cls.detailValue}>Bill Gates</span>
          </div>
        </div>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Account name</span>
            <span className={cls.detailValue}>TCF Free Checking</span>
          </div>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Account type</span>
            <span className={cls.detailValue}>Checking</span>
          </div>
        </div>
        <div className={cls.detailsWrapper}>
          <div className={cls.detail}>
            <span className={cls.detailHeading}>Routing number</span>
            <span className={cls.detailValue}>124879</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSidebar;

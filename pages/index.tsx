import Head from 'next/head'
import cls from '../styles/Home.module.scss'
import { SideNavigation } from '../components/SideNavigation';
import { DetailSidebar } from '../components/DetailSidebar';
import { Header } from '../components/Header';
import { Body } from '../components/Body';

export default function Home() {
  return (
    <div className={cls.content}>
      <Head>
        <title>Lokyata</title>
        <meta name='description' content='Lokyata Web App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={cls.content}>
        <div className={cls.sidenavigation}>
          <SideNavigation />
        </div>
        <div className={cls.detailsidebar}>
          <DetailSidebar />
        </div>
        <div className={cls.mainContent}>
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}

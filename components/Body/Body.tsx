import React from 'react';
import cls from './Body.module.scss';
import classnames from 'classnames';
import Image from 'next/image';
import tableData from '../../pages/tableData.json';
import chevronBlueIcon from '../../public/chevron-blue.png';
import homeIcon from '../../public/home.png';
import infoIcon from '../../public/info.svg';
import { SummaryCard } from '../SummaryCard';
import { Table } from '../Table';
import { Button } from '../Button';
import balanceData from './ChartData/balance';
import incomeData from './ChartData/income';
import loanData from './ChartData/credit';
import { data as pieData , COLORS } from './ChartData/pieData';
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Label,
  LabelList,
  Cell,
} from 'recharts';

const Body = () => {
  return (
    <div className={cls.base}>
      <div className={cls.links}>
        <div style={{ marginRight: 8.5, height: 18 }}>
          <Image src={homeIcon} width={18} height={18} />
        </div>
        <span style={{ color: '#F2F2F2', marginRight: 4 }}>/</span>
        <span style={{ color: '#1BADFA', marginRight: 4 }}>Reports </span>
        <span style={{ color: '#7F7F7F' }}>/ Overview</span>
      </div>
      <div className={cls.heading}>
        <span style={{ marginRight: 10.5 }}>Summary</span>
        <Image src={infoIcon} />
      </div>
      <div className={cls.cards}>
        <div className={cls.card}>
          <SummaryCard
            title='Balance'
            amount='$86.57'
            subHeading={
              <>
                <span>Available on </span>
                <span style={{ fontWeight: 700, color: '#404040' }}>
                  15 Apr 2021
                </span>
              </>
            }
            footer='Current balance'
            footerAmount='$153.85'
          />
        </div>
        <div className={cls.card}>
          <SummaryCard
            title='Average Balance'
            amount='$744.00'
            subHeading={
              <>
                <span style={{ color: '#0DBC8D' }}>03% </span>
                <span>higher since last month</span>
              </>
            }
            footer='Last month was'
            footerAmount='$733.73'
          />
        </div>
        <div className={cls.card}>
          <SummaryCard
            title='Deposits/Credits'
            amount='$18,506.82'
            subHeading={
              <>
                <span>In </span>
                <span style={{ fontWeight: 700, color: '#404040' }}>50 </span>
                <span>transactions</span>
              </>
            }
            footer='Withdrawals / Debits'
            footerAmount='$18,420.82'
          />
        </div>
      </div>
      <div className={cls.heading} style={{ marginBottom: 7 }}>
        <span style={{ marginRight: 14 }}>Transaction Overview</span>
        <Button
          primary
          iconRight={
            <div
              style={{
                height: 14,
                width: 14,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={chevronBlueIcon} width={14} height={14} />
            </div>
          }
        >{`Bi-Weekly`}</Button>
      </div>
      <div className={cls.table}>
        <Table tableItems={tableData} />
      </div>
      <div className={cls.heading} style={{ marginBottom: 9 }}>
        <span style={{ marginRight: 10.5 }}>Analytics</span>
        <Image src={infoIcon} />
      </div>
      <div className={cls.chartContainer}>
        <div className={cls.chartRow}>
          <ResponsiveContainer
            width='100%'
            height={210}
            className={cls.chartWrapper}
          >
            <LineChart
              data={incomeData}
              margin={{
                top: 18,
                right: 18,
                left: -20,
                bottom: 24,
              }}
            >
              <CartesianGrid strokeDasharray='0' />
              <XAxis dataKey='name' hide />
              <YAxis fontSize={8} fontWeight={600} stroke='#7F7F7F' />
              <Tooltip />
              <Legend
                verticalAlign={'top'}
                iconType='circle'
                iconSize={10}
                align='right'
              />
              <Line
                type='monotone'
                dataKey='Income'
                stroke='#49CDA9'
                strokeWidth={2}
              />
              <Line
                type='monotone'
                dataKey='Loan'
                stroke='#D10099'
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer
            width='100%'
            height={210}
            className={cls.chartWrapper}
          >
            <BarChart
              data={loanData}
              margin={{
                top: 18,
                right: 18,
                left: -20,
                bottom: 24,
              }}
            >
              <CartesianGrid strokeDasharray='0' />
              <XAxis dataKey='name' hide />
              <YAxis fontSize={8} fontWeight={600} stroke='#7F7F7F' />
              <Legend
                verticalAlign={'top'}
                iconType='circle'
                iconSize={10}
                align='right'
              />
              <Tooltip />
              <Bar dataKey='Credit' fill='#49CDA9' barSize={10} />
              <Bar dataKey='Debit' fill='#DC40B2' barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={cls.chartRow}>
          <ResponsiveContainer
            width='100%'
            height={210}
            className={cls.chartWrapper}
          >
            <LineChart
              data={balanceData}
              margin={{
                top: 18,
                right: 18,
                left: -20,
                bottom: 24,
              }}
            >
              <CartesianGrid strokeDasharray='0' />
              <XAxis dataKey='name' hide />
              <YAxis fontSize={8} fontWeight={600} stroke='#7F7F7F' />
              <Legend
                verticalAlign={'top'}
                iconType='circle'
                iconSize={10}
                align='right'
              />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='Balance'
                stroke='#49CDA9'
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer
            width='100%'
            height={210}
            className={classnames([cls.chartWrapper, cls.emptyChart])}
          >
            <span></span>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={cls.heading} style={{ marginBottom: 9, marginTop: 12 }}>
        <span style={{ marginRight: 10.5 }}>Expenses</span>
        <Image src={infoIcon} />
      </div>
      <div className={cls.chartRow}>
        <ResponsiveContainer
          width='100%'
          height={500}
          className={classnames([cls.chartWrapper, cls.pieContainer])}
        >
          <PieChart>
            <Pie
              data={pieData}
              cx={300}
              innerRadius={150}
              outerRadius={220}
              fill='#8884d8'
              paddingAngle={1}
              dataKey='value'
              nameKey='name'
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value='Total $10,087'
                offset={0}
                position='center'
                fontSize={18}
              />
              <LabelList dataKey='label' position='inside' fontSize={10} />
            </Pie>
            <Legend
              iconType='circle'
              layout='vertical'
              iconSize={10}
              align='right'
              verticalAlign='middle'
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Body;

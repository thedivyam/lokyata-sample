import React from 'react';
import cls from './Table.module.scss';

type TableItemProps = {
  id: number;
  date: string;
  debits: string;
  credits: string;
  cashflow: string;
  income: string;
  loanpayments: string;
  balance: string;
  nsf: number;
}

type TableProps = {
  tableItems?: Array<TableItemProps>;
}

const Table = ({ tableItems }: TableProps) => {
  return (
    <table className={cls.base}>
      <thead>
        <tr>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Transaction
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Date
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Debits
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Credits
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Cash Flow
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Income
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Loan Payments
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Average
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Balance
              </span>
            </div>
          </th>
          <th>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '8px', fontWeight: 600, color: '#7F7F7F' }}
              >
                Total
              </span>
              <span
                style={{ fontSize: '10px', fontWeight: 600, color: '#7F7F7F' }}
              >
                #NSF
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableItems?.map((item) => (
          <tr key={Math.random()}>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.date}
                </span>
              ) : (
                <span>{item.date}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.debits}
                </span>
              ) : (
                <span>{item.debits}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.credits}
                </span>
              ) : (
                <span>{item.credits}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.cashflow}
                </span>
              ) : (
                <span>{item.cashflow}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#0DBC8D' }}>
                  {item.income}
                </span>
              ) : (
                <span>{item.income}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#D10099' }}>
                  {item.loanpayments}
                </span>
              ) : (
                <span>{item.loanpayments}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.balance}
                </span>
              ) : (
                <span>{item.balance}</span>
              )}
            </td>
            <td>
              {item.id === 1 ? (
                <span style={{ fontWeight: 700, color: '#000' }}>
                  {item.nsf}
                </span>
              ) : (
                <span style={{ color: '#D10099' }}>{item.nsf}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useState } from 'react';
import styles from './ProductSalesTable.module.css';
import { useAppSelector } from '../../common/hooks';

const formatCurrency = (num: number): string => {
  let formatted = '$' + num.toFixed(2);

  formatted = formatted.replace(/\.00$/, '');

  formatted = formatted.replace(/\d(?=(\d{3})+$)/g, '$&,');

  return formatted;
};

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  return `${(month < 10 ? '0' : '') + month}-${(day < 10 ? '0' : '') + day}-${year}`;
};


const ProductSalesTable: React.FC = () => {
  const sales = useAppSelector(state => state.product.product.sales);

  return (
    <div className={styles['sales-table']}>
      <table>
        <thead>
          <tr>
            <th >Week Ending </th>
            <th >Retail Sales </th>
            <th >Wholesale Sales </th>
            <th >Units Sold </th>
            <th >Retailer Margin </th>
          </tr>
        </thead>
      <tbody>
        {sales.map((entry, index) => (
          <tr key={index}>
            <td>{formatDate(entry.weekEnding)}</td>
            <td>{formatCurrency(entry.retailSales)}</td>
            <td>{formatCurrency(entry.wholesaleSales)}</td>
            <td>{entry.unitsSold}</td>
            <td>{formatCurrency(entry.retailerMargin)}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ProductSalesTable;

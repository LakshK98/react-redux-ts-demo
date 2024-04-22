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
  const [sortBy, setSortBy] = useState<string>('weekEnding');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const sales = useAppSelector(state => state.product.product.sales);

  const handleSort = (column: string) => {
    console.log("touchde" )
    console.log(column )
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedSales = [...sales].sort((a, b) => {
    const aValue = sortBy === 'weekEnding' ? new Date(a[sortBy]) : (a as any)[sortBy];
    const bValue = sortBy === 'weekEnding' ? new Date(b[sortBy]) : (b as any)[sortBy];

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return (
    <div className={styles['sales-table']}>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('weekEnding')}>Week Ending {sortBy === 'weekEnding' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('retailSales')} >Retail Sales {sortBy === 'retailSales' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('wholesaleSales')}>Wholesale Sales {sortBy === 'wholesaleSales' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('unitsSold')}>Units Sold {sortBy === 'unitsSold' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('retailerMargin')}>Retailer Margin {sortBy === 'retailerMargin' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
          </tr>
        </thead>
      <tbody>
        {sortedSales.map((entry, index) => (
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

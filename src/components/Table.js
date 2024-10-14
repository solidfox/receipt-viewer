import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const Table = ({ data, onRowSelect }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Date and Time',
        accessor: 'datetime',
      },
      {
        Header: 'Total Amount',
        accessor: 'total_amount',
      },
      {
        Header: 'Currency',
        accessor: 'currency',
      },
      {
        Header: 'Customer',
        accessor: 'customer',
      },
      {
        Header: 'Merchant',
        accessor: 'merchant',
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: ({ value, row }) => (
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newData = [...data];
              newData[row.index].description = e.target.value;
              onRowSelect(newData[row.index]);
            }}
          />
        ),
      },
    ],
    [data, onRowSelect]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => onRowSelect(row.original)}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

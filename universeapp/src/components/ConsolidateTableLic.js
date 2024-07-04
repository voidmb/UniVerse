import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import "../styles/Table.css";

const generateColumns = (data) => {
  return [
    { Header: "Cohorte Generacional", accessor: "cohorteGeneracionalInicio" },
    {
      Header: "Cuatrimestre",
      columns: [
        
        { Header: `7º (S-D)`, accessor: "cuatrimestre7" },
        { Header: `8º (E-A)`, accessor: "cuatrimestre8" },
        { Header: `9º (M-A)`, accessor: "cuatrimestre9" },
        { Header: `10º (S-D)`, accessor: "cuatrimestre10" },
        { Header: `11º (E-A)`, accessor: "cuatrimestre11" },
      ],
    },
    { Header: "Egreso", accessor: "egreso" },
    { Header: "Colocación", accessor: "colocacion" },
    { Header: "Titulación", accessor: "titulacion" },
  ];
};

const ConsolidateTableTSU = ({ data }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data) {
      setColumns(generateColumns(data[0]));
    }
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data || [] });

    

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, indexColumn) => (
                <th {...column.getHeaderProps()} className="main-header">               
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ConsolidateTableTSU;

import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import "../styles/Table.css";

// const defaultColumns = [
//   { Header: "Cohorte Generacional", accessor: "cohorteGeneracionalInicio",},
//   {
//     Header: "Cuatrimestre",
//     columns: [
//       { Header: "1º", accessor: "" },
//       { Header: "2º", accessor: "" },
//       { Header: "3º", accessor: "" },
//       { Header: "4º", accessor: "" },
//       { Header: "5º", accessor: "" },
//       { Header: "6º", accessor: "" },
//     ],
//   },
//   { Header: "Egreso", accessor: "egreso" },
//   { Header: "Colocación", accessor: "colocacion" },
//   { Header: "Titulación", accessor: "titulacion" },
// ];

const generateColumns = (data) => {
  // if (!data) {
  //   return defaultColumns;
  // }
  return [
    { Header: "Cohorte Generacional", accessor: "cohorteGeneracionalInicio" },
    {
      Header: "Cuatrimestre",
      columns: [
        
        /*{
          Header: data.state,
          columns: [{ Header: "1º", accessor: "state" }],
        },
        {
          Header: "D-E", //data.extraHeader1,
          columns: [{ Header: "2º", accessor: "" }],
        },
        {
          Header: "B-C", //data.extraHeader1,
          columns: [{ Header: "3º", accessor: "" }],
        },
        {
          Header: "E-F", //data.extraHeader1,
          columns: [{ Header: "4º", accessor: "" }],
        },
        {
          Header: "G-H", //data.extraHeader1,
          columns: [{ Header: "5º", accessor: "" }],
        },
        {
          Header: "A-E", //data.extraHeader1,
          columns: [{ Header: "6º", accessor: "" }],
        },*/
        //{ Header: `1º (S-D)`, accessor: row => row.cuatrimestre1 !== null ? row.cuatrimestre1 : 0},
        { Header: `1º (S-D)`, accessor: "cuatrimestre1" },
        { Header: `2º (E-A)`, accessor: "cuatrimestre2" },
        { Header: `3º (M-A)`, accessor: "cuatrimestre3" },
        { Header: `4º (S-D)`, accessor: "cuatrimestre4" },
        { Header: `5º (E-A)`, accessor: "cuatrimestre5" },
        { Header: `6º (M-A)`, accessor: "cuatrimestre6" },
      ],
    },
    { Header: "Egreso", accessor: "egreso" },
    { Header: "Colocación", accessor: "colocacion" },
    { Header: "Titulación", accessor: "titulacion" },
  ];
};

const ConsolidateTableTSUPrev = ({ data }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data) {
      setColumns(generateColumns(data[0]));
    }
  }, [data]);

  //const columns = useMemo(() => generateColumns(data[0]), []);

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

export default ConsolidateTableTSUPrev;

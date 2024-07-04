import React, { useState, useEffect } from "react";
import "../styles/Table.css";
//import "../styles/ConsolidateTable.css";

const ConsolidateTableTSU = ({ data }) => {
  const [tablesData, setTablesData] = useState([]);
  const [modalidad, setModalidad] = useState("");

  useEffect(() => {
    if (data) {
      const filteredData = data.filter(item => item.modalidad === '2.4');
      if (filteredData){
        console.log(filteredData);
      }
      // Agrupar los datos por programa educativo
      const groupedData = {};
      filteredData.forEach((item) => {
        if (!groupedData[item.programaEducativo]) {
          groupedData[item.programaEducativo] = [];
        }
        groupedData[item.programaEducativo].push(item);
      });

      // Convertir el objeto de grupos en un arreglo de objetos
      const tablesDataArray = Object.keys(groupedData).map((programaEducativo) => ({
        programaEducativo,
        data: groupedData[programaEducativo],
      }));

      // Obtener la modalidad (asumiendo que es la misma para todos los datos)
      if (filteredData.length > 0) {
        setModalidad(filteredData[0].modalidadDescripcion);
      }

      setTablesData(tablesDataArray);
    }
  }, [data]);

  const renderCuatrimestreHeaders = () => {
    const cuatrimestres = [
      { index: 1, name: "1º (S-D)" },
      { index: 2, name: "2º (E-A)" },
      { index: 3, name: "3º (M-A)" },
      { index: 4, name: "4º (S-D)" },
      { index: 5, name: "5º (E-A)" },
      { index: 6, name: "6º (M-A)" },
    ];

    return cuatrimestres.map((cuatrimestre) => (
      <th key={cuatrimestre.index}>{cuatrimestre.name}</th>
    ));
  };

  return (
    <div className="table-container">
       <div className="modalidad-title">
        {modalidad && (
          <h2 style={{ textAlign: "center" }}>{`Modalidad: ${modalidad}`}</h2>
        )}
      </div>
      {tablesData.map((tableData, index) => (
        <div key={index} className="table-container">
          <h3>{tableData.programaEducativo}</h3>
          <table>
            <thead>
              <tr>
                <th>Cohorte Generacional</th>
                {renderCuatrimestreHeaders()}
                <th>Egreso</th>
                <th>Colocación</th>
                <th>Titulación</th>
              </tr>
            </thead>
            <tbody>
              {tableData.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{`${row.cohorteGeneracionalInicio} - ${row.cohorteGeneracionalFinal}`}</td>
                  <td>{row.cuatrimestre1 || " "}</td>
                  <td>{row.cuatrimestre2 || " "}</td>
                  <td>{row.cuatrimestre3 || " "}</td>
                  <td>{row.cuatrimestre4 || " "}</td>
                  <td>{row.cuatrimestre5 || " "}</td>
                  <td>{row.cuatrimestre6 || " "}</td>
                  <td>{row.egreso}</td>
                  <td>{row.colocacion}</td>
                  <td>{row.titulacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ConsolidateTableTSU;

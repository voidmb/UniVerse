import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button, // Importar Button desde MUI
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system"; // Importar styled de @mui/system

function TrajectoryForm({ enviarDatosAPI }) {
  const [filas, setFilas] = useState(
    Array.from({ length: 1 }, (_, i) => ({
      id: i,
      dropdownValue: "",
      numeroValues: Array.from({ length: 6 }, (_, j) => ""),
    }))
  );

  const handleNumeroChange = (event, id, index) => {
    const { value } = event.target;
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id
          ? {
              ...fila,
              numeroValues: [
                ...fila.numeroValues.slice(0, index),
                value,
                ...fila.numeroValues.slice(index + 1),
              ],
            }
          : fila
      )
    );
  };

  const handleDropdownChange = (event, id) => {
    const { value } = event.target;
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id ? { ...fila, dropdownValue: value } : fila
      )
    );
  };

  // Función para enviar los datos a la API
  const enviarFormulario = () => {
    // Aquí puedes construir el objeto con los datos capturados
    const formData = {
      filas: filas,
    };

    // Aquí puedes realizar la solicitud a la API utilizando fetch, Axios u otra librería de tu elección
    fetch("https://ejemplo.com/api/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data);
        // Aquí puedes manejar la respuesta de la API, como actualizar el estado de tu aplicación
      })
      .catch((error) => {
        console.error("Error al enviar solicitud:", error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
      });
  };

//   const enviarFormularioAxios = () => {
//     const formData = {
//       filas: filas,
//     };

//     axios
//       .post("https://ejemplo.com/api/endpoint", formData) // Enviar datos utilizando Axios
//       .then((response) => {
//         console.log("Respuesta de la API:", response.data);
//         // Manejar la respuesta de la API aquí
//       })
//       .catch((error) => {
//         console.error("Error al enviar solicitud:", error);
//         // Manejar errores aquí
//       });
//   };

  // Utilizar styled de @mui/system para crear un componente estilizado para TableCell
  const StyledTableCell = styled(TableCell)({
    backgroundColor: "#304b71",
    color: "white",
    textAlign: "center",
    width: "10%", // Cambio en el ancho de la celda
    padding: "8px", // Añadido un padding para los TableCell
  });

  // Reducir el tamaño del TextField cambiando el tamaño de la fuente y el padding
  const SmallTextField = styled(TextField)({
    "& .MuiInputBase-input": {
      fontSize: "1.2rem", // Reducir el tamaño de la fuente del input
      padding: "8px 5px", // Reducir el padding del input
      textAlign: "center",
    },
  });

  const WideFormControl = styled(FormControl)({
    minWidth: "150px", // Ajusta el ancho mínimo del FormControl
  });

  const dropdownLabels = ["Label a", "Label b", "Label 3", "Label 4"];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
            {[...Array(4)].map((_, index) => (
        <WideFormControl key={index} style={{ marginRight: "50px" }}>
          <InputLabel id={`dropdown-label-${index}`}>{dropdownLabels[index]}</InputLabel>
          <Select
            labelId={`dropdown-label-${index}`}
            id={`dropdown-${index}`}
            value={filas[index]?.dropdownValue || ""}
            onChange={(event) => handleDropdownChange(event, index)}
            label={`${dropdownLabels[index]}`}
          >
            {[1, 2, 3, 4].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </WideFormControl>
      ))}
      <div style={{ marginTop: "40px" }}>
        <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "auto" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {[...Array(6)].map((_, index) => (
                  <StyledTableCell key={index}>
                    Semestre {index + 1}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filas.map((fila) => (
                <TableRow key={fila.id}>
                  {fila.numeroValues.map((value, index) => (
                    <TableCell key={index} align="center">
                      <SmallTextField
                        type="number"
                        size="small"
                        variant="outlined"
                        value={value}
                        onChange={(event) =>
                          handleNumeroChange(event, fila.id, index)
                        }
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ marginTop: "40px" }}>
      <Button variant="contained" color="primary" onClick={enviarFormulario}>
        Enviar
      </Button>
      </div>
    </div>
  );
}

export default TrajectoryForm;

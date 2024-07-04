import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, TextField } from '@mui/material';


function InputTable({ enviarDatosAPI }) {
    const [filas, setFilas] = useState(Array.from({ length: 10 }, (_, i) => ({
        id: i,
        dropdownValue: '',
        numeroValues: Array.from({ length: 9 }, (_, j) => ''),
    })));

    const handleChange = (event, id) => {
        const { value } = event.target;
        setFilas(prevFilas => prevFilas.map(fila =>
            fila.id === id ? { ...fila, dropdownValue: value } : fila
        ));
    };

    const handleNumeroChange = (event, id, index) => {
        const { value } = event.target;
        setFilas(prevFilas => prevFilas.map(fila =>
            fila.id === id ? { ...fila, numeroValues: [...fila.numeroValues.slice(0, index), value, ...fila.numeroValues.slice(index + 1)] } : fila
        ));
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        {/* Fila 1 */}
                        <TableRow style={{ backgroundColor: 'blue', color: 'blue' }}>
                            <TableCell style={{ minWidth: '100px' }} rowSpan={3}>Dropdown</TableCell>
                            {[...Array(9)].map((_, index) => (
                                <TableCell key={index} align="right">Número {index + 1}</TableCell>
                            ))}
                        </TableRow>
                        {/* Fila 2 */}
                        <TableRow style={{ backgroundColor: 'blue', color: 'white' }}>
                            {[...Array(8)].map((_, index) => (
                                <TableCell key={index} align="right">Número {index + 1}</TableCell>
                            ))}
                            <TableCell colSpan={1} align="center">Número 9</TableCell>
                        </TableRow>
                        {/* Fila 3 */}
                        <TableRow style={{ backgroundColor: 'blue', color: 'white' }}>
                            {[...Array(9)].map((_, index) => (
                                <TableCell key={index} align="right">Número {index + 1}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filas.map((fila) => (
                            <TableRow key={fila.id}>
                                <TableCell style={{ minWidth: '100px' }}>
                                    <Select value={fila.dropdownValue} onChange={(event) => handleChange(event, fila.id)} displayEmpty>
                                        <MenuItem value="">Seleccione</MenuItem>
                                        <MenuItem value={1}>Opción 1</MenuItem>
                                        <MenuItem value={2}>Opción 2</MenuItem>
                                        <MenuItem value={3}>Opción 3</MenuItem>
                                    </Select>
                                </TableCell>
                                {fila.numeroValues.map((value, index) => (
                                    <TableCell key={index} align="right">
                                        <TextField type="number" size="small" value={value} onChange={(event) => handleNumeroChange(event, fila.id, index)} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InputTable;

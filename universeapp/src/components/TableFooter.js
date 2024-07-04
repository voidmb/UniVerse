import React from 'react';

function TableFooter({ enviarDatosAPI }) {
  return (
    <div className="footer">
      <button onClick={enviarDatosAPI}>Enviar Datos a la API</button>
    </div>
  );
}

export default TableFooter;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import './MainPageStyles.css';
import Example2 from '../consolidate-table/Table';

function App() {
  // Estado para controlar si el side bar está abierto o cerrado
  const [open, setOpen] = React.useState(false);

  // Función para abrir y cerrar el side bar
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      {/* Encabezado con cierto tamaño arriba */}
      <Header/>

      {/* Contenedor principal */}
      <div className="main-content">
        {/* SideBar que se oculta y deja cierto tamaño visible del lado izquierdo */}
        <div className={`sidebar-container ${open ? 'open' : 'closed'}`}>
          <SideBar />
        </div>
        
        {/* Contenido principal que se ajusta al tamaño del side bar */}
        <div className={`data-container ${open ? 'expanded' : 'collapsed'}`}>
          {/* Tu contenido principal aquí */}
          {/* Por ejemplo, datos, gráficos, etc. */}
          <Example2/>
        </div>
      </div>
      
      {/* Botón para expandir y contraer el side bar */}
      <button className="toggle-button" onClick={toggleDrawer(!open)}>
        {open ? 'Cerrar SideBar' : 'Abrir SideBar'}
      </button>
      
      {/* Footer que ocupa cierto tamaño abajo */}
      <Footer />
    </div>
  );
}

export default App;

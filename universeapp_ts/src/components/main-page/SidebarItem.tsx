import React from 'react';

// Propiedades para el componente SidebarItem
interface SidebarItemProps {
  onClick: () => void;
  children: React.ReactNode; // Definimos la prop children como un nodo React
}

// Componente para un elemento del menú lateral
const SidebarItem: React.FC<SidebarItemProps> = ({ onClick, children }) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default SidebarItem;
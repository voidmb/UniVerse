import styled from "styled-components";
import logo from "../Assets/react.svg";
import { stylesVar } from "../styles/Variables";
import { AiOutlineLeft, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineAddchart,
  MdOutlineAnalytics,
  MdLogout,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModifySidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { setTheme, theme } = useContext(ThemeContext);

  const ChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="Sidebarbutton" onClick={ModifySidebarOpen}>
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h3>Menú</h3>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">
              <span>{icon}</span>
            </div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">
              <span>{icon}</span>
            </div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="theme-switcher"
                    onClick={ChangeTheme}
                  ></input>
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#region data Links

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Captura",
    icon: <MdOutlineAddchart />,
    to: "/captura",
  },
  {
    label: "Consolidado",
    icon: <MdOutlineAnalytics />,
    to: "/consolidado",
  },
];

const secondaryLinksArray = [
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
  ,
];

//#endregion

//#region Styled Components

const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .Sidebarbutton {
    position: absolute;
    top: ${stylesVar.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bg3};
    box-shadow: 0 0 4px ${(props) => props.theme.bgtgderecha},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: inherit;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${stylesVar.lgSpacing};
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(.7)` : `scale(1.5)`)};
    }
    h3 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 5px 0;
    padding: 0;
    :hover {
      background: ${(props) => props.theme.bgtgderecha};
      // box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      //   0 0 7px ${(props) => props.theme.bg};
    }
    .Links {
      //color: rgb(85, 26, 139);
      display: flex;
      text-decoration: none;
      //padding: 0 20%;
      color: ${(props) => props.theme.text};
      padding: calc(${stylesVar.smSpacing} - 10px) 20%;
      .Linkicon {
        padding: ${stylesVar.smSpacing} ${stylesVar.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      span {
        /* Alinea verticalmente el texto */
        display: flex;
        align-items: center;
      }
      &.active {
        .Linkicon {
          color:${(props) => props.theme.text};
          svg {
            color: ${(props) => props.theme.bg7};
          }
        }
      }
    }
  }
  .Themecontent{
    //backgound: red; 
    display: flex; //Organiza como si fuera un row, de izq a derecha
    align-items: center;
    justify-content: space-between;
    .titletheme{
      display: block;
      padding: 10 px;
      font-weight: 700;
      //opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap; //sin ajuste de línea". Esto significa que el texto dentro del elemento no se dividirá en varias líneas si es demasiado largo para caber en el contenedor
      overflow: hidden; //Si ay un desbodamiento de texto, entonces ocultalo; cualquier contenido que se extienda más allá del tamaño del contenedor será ocultado y no visible para el usuario
    }
    span{
      display: block;
      padding: 10px
      //font-weight: 700;
    }
    .Togglecontent{
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container{
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid{          
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo{
          font-size: 25px;          
          .switch{
            position: relative;
            display: inline-block;
            width: 45px;
            height: 20px;
            .theme-switcher{
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before{
                left: 4px;
                content: "🌑";
                transform: translateX(16px);
              }
            }
            .slider{
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background:  ${(themeUse) =>
                themeUse === "light"
                  ? stylesVar.lightcheckbox
                  : stylesVar.checkbox};
              transition: 0.4s;
              &::before{
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 11px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round{
                border-radius: 34px;
                &::before{
                  border-radius: 50%;
                }
              }
            }            
          }
        }
      }
    }
  }
`;
//#endregion

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: ${(props) => props.theme.bgtgderecha};
  margin: ${stylesVar.lgSpacing} 0;
`;

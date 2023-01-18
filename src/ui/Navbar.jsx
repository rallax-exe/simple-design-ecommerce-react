import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <NavLink to="/">
            Inicio
          </NavLink>
          <NavLink to="/nosotros">
            Nosotros
          </NavLink>
          <NavLink to="/tienda">
            Tienda
          </NavLink>
          <NavLink to="/blog">
            Blog
          </NavLink>
          <NavLink to="/galeria">
            Galeria
          </NavLink>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </nav>
      </div>
    </>
  )
}

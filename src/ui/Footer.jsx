import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
        <footer>
            
            <div>
                <h3>Categorias</h3>
                <nav id="navegacion">
                    <NavLink to="/">Cocina </NavLink>
                    <NavLink to="/">Oficina </NavLink>
                    <NavLink to="/">Jardin </NavLink>
                    <NavLink to="/">Cochera </NavLink>
                    <NavLink to="/">Dormitorios </NavLink>
                </nav>
            </div>

            <div>
                <h3>Sobre Nosotros</h3>
                <nav className="navegacion">
                    <NavLink to="/">Nuestra Historia </NavLink>
                    <NavLink to="/">Mision, Vision y Valores </NavLink>
                    <NavLink to="/">Carreras </NavLink>
                    <NavLink to="/">Politica de privacidad </NavLink>
                    <NavLink to="/">Terminos del Servicio </NavLink>
                </nav>
            </div>

            <div>
                <h3>Soporte</h3>
                <nav>
                    <NavLink to="/">Preguntas Frecuentes </NavLink>
                    <NavLink to="/">Ayuda en Linea </NavLink>
                    <NavLink to="/">Confianza y Seguridad </NavLink>
                </nav>
            </div>

            <p>Todos los derechos reservados, TiendaMuebles</p>
        </footer>
    </>
  )
}


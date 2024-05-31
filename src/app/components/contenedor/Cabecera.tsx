import { NavLink } from "react-router-dom"
import logo from "../../../assets/img/logo-white.png"

export const Cabecera = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black font-f-sora" data-bs-theme="dark" style={{fontSize:'15px'}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" style={{width:"30px"}}/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>    
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">Almacenes</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Camisas
                                </a>
                                <ul className="dropdown-menu" style={{fontSize:'14px'}}>
                                    <li><NavLink className="dropdown-item" to="/camcrear">Registrar</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/camlistar">Listar</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="dropdown-item" to="/camadmin">Administrar</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
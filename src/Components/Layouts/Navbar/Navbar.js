import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default () =>{
    return (
      <>
        <nav className="navbar navbarMain navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src="/images/faviconTransparent.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
              Shopieezon
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="colslapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    <i className="fas fa-home">&nbsp;Home</i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/electronics">Electronics</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item" to="/login">Sign In</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/registration">Sign Up</NavLink></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search">&nbsp;Search</i></button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
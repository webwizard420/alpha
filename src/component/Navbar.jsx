import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount, setSelectedCategory, logout }) {
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 shadow-sm bg-white">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">task management </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"></Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => handleCategoryChange(null)}></button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => handleCategoryChange(1)}></button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => handleCategoryChange(2)}></button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => handleCategoryChange(3)}></button>
              </li>
            </ul>
            <div className="buttons">
              
              <button onClick={logout} className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-out me-1"></i>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/navbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserContext';

function Header() {

  const { user,logout  } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><strong className='fs-3 text-light'>Sharp Store</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5 " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link  text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/contact">Contact Us</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link  text-light" to="/signup">SignUp</Link>
              </li> */}
              {user ? (
                <li className="nav-item">
                   <button className="nav-link text-light btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/signup">SignUp</Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav fs-4">
              <li className="nav-item d-flex justify-content-around w-100 align-items-center">
                <span className='px-4'>{user ? `Hey ${user}` : 'Hey Guest'}</span>
                <Link className="nav-link  text-light" to="/cart">
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

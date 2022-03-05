import "./Landing.css";


import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pageBody">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
        
          <h3 className="navbar-nav linkText" href="/">
            Add Task 
          </h3>
          <button
            className="navbar-toggler button-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="page-header gradient">
        <div className="container pt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <h1>Welcome to Website!</h1>
              <Link
                type="button"
                className="btn btn-outline-info btn-lg signUpBtn"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            
            {/* image from: https://www.vecteezy.com/vector-art/2043859-man-completed-checklist */}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>
      
    </div>
  );
};

export default Landing;

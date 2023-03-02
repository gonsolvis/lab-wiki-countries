import { Link } from "react-router-dom";
function Navbar() {
    return (
  
    <div className="Navbar">
    <h1>  LAB - WikiCountries. </h1>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-item nav-link" href="#"><Link to="/countries">Country list</Link></a>
      <a className="nav-item nav-link" href="#">Planets</a>
      <a className="nav-item nav-link" href="#"> Solar system</a>
    
    </div>
  </div>
</nav>
  
  </div>
  );
}

export default Navbar;
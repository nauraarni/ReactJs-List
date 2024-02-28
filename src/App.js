import React from "react";
import Utama from './utama'
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      // <div> <hr />
      // <Link to="/">Beranda</Link> |
      // <Link to="/tentangSaya">Tentang Saya</Link> |
      // <Link to="/karya">Karya</Link> |
      // <Link to="/kontak">Kontak</Link> 
      // <Link to="/gallery" className="nav-link">Gallery</Link>
      // <hr />
      // <p><Utama /></p>
      // </div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Beranda</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tentangSaya">Tentang Saya</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/karya">Karya</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontak">Kontak</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <p><Utama /></p>
    </div>
    )
  }
}

export default App;
import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-3 fw-bolder fst-italic" href="/"> LaxmiLal </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* for align this container in right  */}
                <div className='d-flex justif-content-between me'>
                <div></div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
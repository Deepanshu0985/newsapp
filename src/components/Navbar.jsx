import React from 'react'
import { Link } from 'react-router-dom'

import { Component } from 'react'
export default class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">TaazaKhabar - News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: '100px' }}>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/buisness">business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/general">general</Link></li>
                                    <li><Link className="dropdown-item" to="/health">health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </nav>            
            </div>
        )
    }
}

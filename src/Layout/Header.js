import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='sticky-sm-top sticky-top header px-3 bg-white'>
            <div className='container-fluid'>
                <div className='row pt-1'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='logo col-lg-2 col-md-5 col-sm-5'>
                            <img className='' style={ { width: "60px" } } src='https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg'>
                            </img>
                        </div>
                        <div className='col-lg-8  navbar-reponsive'>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto">
                                            <li className="nav-item px-3">
                                                <NavLink className="nav-link fs-20" aria-current="page" to={ "/" }>Home</NavLink>
                                            </li>
                                            <li className="nav-item px-3">
                                                <NavLink className="nav-link fs-20" to={ "/table" }>Table</NavLink>
                                            </li>
                                            <li className="nav-item px-3">
                                                <NavLink className="nav-link fs-20" to={ "/todos" }>Todo</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className='col-lg-2 '>
                            <div className='d-flex gap-0 justify-content-end'>
                                <Link to={ "/cart" } className='py-2 mx-1 '>
                                    <i className="fa-solid fa-cart-shopping fs-5"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
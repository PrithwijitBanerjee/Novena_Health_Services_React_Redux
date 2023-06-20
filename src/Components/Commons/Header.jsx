import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../Redux/LoginSlice'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const name=localStorage.getItem('name');
    const { logouttoggle } = useSelector(state => state?.signIn);
    return (
        <>
            <header>
                <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item">
                                        <Link to="mailto:support@gmail.com">
                                            <i className="icofont-support-faq mr-2" />
                                            support@novena.com
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="icofont-location-pin mr-2" />
                                        Address Ta-134/A, New York, USA{" "}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <Link to="tel:+23-345-67890">
                                        <span>Call Now : </span>
                                        <span className="h4">823-4565-13456</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" className="img-fluid" />
                        </a>
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarmain"
                            aria-controls="navbarmain"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icofont-navigation-menu" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="department.html"
                                        id="dropdown02"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Department <i className="icofont-thin-down" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                        <li>
                                            <Link className="dropdown-item" to="/department">
                                                Departments
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/department-single">
                                                Department Single
                                            </Link>
                                        </li>
                                        <li className="dropdown dropdown-submenu dropright">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#!"
                                                id="dropdown0301"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Sub Menu
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                                                <li>
                                                    <Link className="dropdown-item" to="/">
                                                        Submenu 01
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/">
                                                        Submenu 02
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="doctor.html"
                                        id="dropdown03"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Doctors <i className="icofont-thin-down" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                        <li>
                                            <Link className="dropdown-item" to="/doctor">
                                                Doctors
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/doctor-single">
                                                Doctor Single
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/appoinment">
                                                Appoinment
                                            </Link>
                                        </li>
                                        <li className="dropdown dropdown-submenu dropleft">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#!"
                                                id="dropdown0501"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Sub Menu
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                <li>
                                                    <Link className="dropdown-item" to="/">
                                                        Submenu 01
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/">
                                                        Submenu 02
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="blog-sidebar.html"
                                        id="dropdown05"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Blog <i className="icofont-thin-down" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                        <li>
                                            <Link className="dropdown-item" to="/blog-sidebar">
                                                Blog with Sidebar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/blog-single">
                                                Blog Single
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        Admin
                                    </Link>
                                </li>
                                {
                                    (logouttoggle===false) ? <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signIn">
                                                SignIn
                                            </Link>
                                        </li>
                                    </> : <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" style={{fontSize:'14px',marginTop:'4px'}}>
                                               Hi..{name.split(' ')[0]}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={()=>{
                                                dispatch(signOut());
                                                navigate('/');
                                            }}>
                                               signOut
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
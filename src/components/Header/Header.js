import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo2.png'


const Header = () => {
    return (
     
        <nav className="
            relative
            w-5/6
            mx-auto
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-white
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            
            navbar navbar-expand-lg navbar-light
            ">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="
                    navbar-toggler
                    text-gray-500
                    border-0
                    hover:shadow-none hover:no-underline
                    py-2
                    px-2.5
                    bg-transparent
                    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
                </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                <Link className="text-xl" to={'/'}>
                    <img src={logo} alt="" className='h-[40px]' />
                </Link>
                {/* <!-- Left links --> */}
                <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
                <li className="nav-item px-2  my-3 md:m-0">
                    <Link className="nav-link active" aria-current="page" to={'/cart'}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </Link>
                </li>
                <li className="nav-item px-2 mb-3 md:m-0">
                    <Link className="nav-link active" aria-current="page" to={'/login'}>Login</Link>
                </li>
                <li className="nav-item px-2  mb-3 md:m-0">
                    <Link className="nav-link bg-red-600 py-2 px-2 rounded-2xl text-white" aria-current="page" to={'/signup'} >Signup</Link>
                </li>
                
                </ul>
                {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}
                </div>
        </nav>


    );
};

export default Header;
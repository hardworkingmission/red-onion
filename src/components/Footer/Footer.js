import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-black '>
            <div className="w-5/6 mx-auto flex gap-2 py-4">
                <div className="lg:w-1/2 lg:w-1/2 sm:w-full w-full">
                    <img src={logo} alt="" className='w-[150px]' />
                </div>
                <div className="lg:w-1/2 lg:w-1/2 sm:w-full w-full md:flex text-sm justify-center">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-white gap-5">
                        <nav className='col'>
                            <ul>
                                <li>
                                    <Link to={'/'}>About online food</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Read our blogs</Link>
                                </li>
                                <li>
                                    <Link to={'/signup'}>Sign up to delivery</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Add your Restaurant</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className='col'>
                            <ul>
                                <li>
                                    <Link to={'/'}>Get help</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Read FAQs</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>View all cities</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Restaurants near me</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
            <div className="w-5/6 mx-auto md:flex text-white py-2 ">
                <div className="lg:w-1/2 lg:w-1/2 sm:w-full w-full text-sm">
                    <p>Copyright &copy; {new Date().getFullYear()} online food</p>
                </div>
                <div className="lg:w-1/2 lg:w-1/2 sm:w-full w-full flex justify-center">
                    <nav>
                        <ul className='flex gap-5 text-sm'>
                            <li>
                                <Link to={'/'}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Terms of use</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Pricing</Link>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Footer;
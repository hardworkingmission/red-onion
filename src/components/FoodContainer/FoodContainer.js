import React from 'react';
import {Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const FoodContainer = () => {
    return (
        <div className='text-center my-3'>
            <nav className='text-center text-lg mb-3'>
                <ul className='flex justify-center gap-3'>
                    <li>
                    <CustomLink to="/breakfast">Breakfast</CustomLink>
                    </li>
                    <li>
                    <CustomLink to="/lunch">Lunch</CustomLink>
                    </li>
                    <li>
                    <CustomLink to="/dinner">Dinner</CustomLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
      </div>
    );
};

export default FoodContainer;
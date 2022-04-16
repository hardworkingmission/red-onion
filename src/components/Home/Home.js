import React, { useEffect, useState } from 'react';
import Abouts from '../Abouts/Abouts';
import FoodContainer from '../FoodContainer/FoodContainer';
import './Home.css'
const Home = () => {
    return (
        <div className='w-full mx-auto'>
            <section className='search py-[150px]'>
                <h1 className='text-center lg:text-4xl text-lg font-bold mb-3'>Best Food Wating For You Belly</h1>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96 lg:w-96 md:w-96  sm:w-5/6 w-5/6 mx-auto">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                            <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                            </div>
                    </div>
                </div>
            </section>
            {/* food-conteiner */}
            <section className='w-5/6 mx-auto'>
                <FoodContainer/>

            </section>
            <section className='w-5/6 mx-auto my-2 flex justify-center'>
                <button className='w-2/6 bg-gray-300 text-white text-lg py-2 rounded-lg'>Checkout Your Food</button>

            </section>
            {/* about-container */}
            <section className='w-5/6 mx-auto py-2'>
                <h1 className='text-3xl'>Why you choose us</h1>
                <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, recusandae ad? Autem iste ratione labore ad suscipit harum. Velit, similique.</p>
                <Abouts/>
            </section>
    </div>
    );
};

export default Home;
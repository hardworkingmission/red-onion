import React from 'react';
import FoodContainer from '../FoodContainer/FoodContainer';
import './Home.css'
const Home = () => {
    return (
        <div className='w-full mx-auto'>
            <section className='search py-[150px]'>
                <h1 className='text-center lg:text-4xl text-lg font-bold mb-3'>Best Food Wating For You Belly</h1>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96 lg:w-96 md:w-96  sm:w-5/6 w-5/6 mx-auto">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                            <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                            </div>
                    </div>
                </div>
            </section>
            {/* food-conteiner */}
            <section className='w-5/6 mx-auto'>
                <FoodContainer/>
            </section>
    </div>
    );
};

export default Home;
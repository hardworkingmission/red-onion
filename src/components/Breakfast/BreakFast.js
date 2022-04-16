import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods/useFoods';
import Food from '../Food/Food';

const BreakFast = () => {
    const{breakfasts}=useFoods()
    const imgUrl='/breakfastImages/'
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                breakfasts?.map(breakfast=><Food key={breakfast.id} food={breakfast} url={imgUrl}/>)
            }
            
        </div>
    );
};

export default BreakFast;
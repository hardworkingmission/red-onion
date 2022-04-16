import React, { useEffect, useState } from 'react';
import useFoods from '../../hooks/useFoods/useFoods';
import Food from '../Food/Food';

const Lunch = () => {
    const{lunchs}=useFoods()
    const imgUrl='/lunch/'
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                lunchs?.map(lunch=><Food key={lunch.id} food={lunch} url={imgUrl}/>)
            }
            
        </div>
    );
};

export default Lunch;
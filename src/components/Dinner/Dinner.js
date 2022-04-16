import React from 'react';
import useFoods from '../../hooks/useFoods/useFoods';
import Food from '../Food/Food';

const Dinner = () => {
    const{dinners}=useFoods()
    const imgUrl='/dinner/'
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                dinners?.map(dinner=><Food key={dinner.id} food={dinner} url={imgUrl}/>)
            }
            
        </div>
    );
};

export default Dinner;
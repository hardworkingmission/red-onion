import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const {id}=useParams()
    
    return (
        <div>
            <h1>Food detail: {id}</h1>
        </div>
    );
};

export default FoodDetail;
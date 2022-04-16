import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({food,url}) => {
    const {id,name,img,description,price}=food
    //console.log(url)
    const navigate=useNavigate()
    return (
        <div className={`col rounded-lg ${id==='2'&&'shadow-2xl'}`}>
            <div className="food-img p-2" onClick={()=>navigate(`/fooddetail/${id}`)} role='button'>
               <img src={process.env.PUBLIC_URL+url+`${img}`} alt="" />
            </div>
            <div className="food-info p-2">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Price: $ {price}</p>
            </div>
        </div>
    );
};

export default Food;
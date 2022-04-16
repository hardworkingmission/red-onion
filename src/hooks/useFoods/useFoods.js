import React, { useEffect, useState } from 'react';

const useFoods = () => {
    const [breakfasts,setBreakfasts]=useState([])
    const [lunchs,setLunchs]=useState([])
    const [dinners,setDinners]=useState([])
    useEffect(()=>{
        fetch('breakfast.json')
          .then(res=>res.json())
          .then(data=>setBreakfasts(data))
        fetch('lunchs.json')
           .then(res=>res.json())
           .then(data=>setLunchs(data))
        fetch('dinners.json')
          .then(res=>res.json())
          .then(data=>setDinners(data))
    },[])
    //console.log(foods)
    return {breakfasts,lunchs,dinners}
};

export default useFoods;
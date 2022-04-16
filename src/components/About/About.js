import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const About = ({aboutData}) => {
    const{id,title,description,img,icon}=aboutData
    console.log(aboutData)
    return (
        <div className={`col rounded-lg ${id==='2'&&'shadow-2xl'}`}>
            <div className="food-img p-2">
               <img src={img} alt="" />
            </div>
            <div className="food-info p-2 flex ">
                <div className="w-1/12 bg-red-600 h-[50px] w-[50px] rounded-[50%] flex justify-center items-center">
                    <FontAwesomeIcon icon={icon} className='text-white'/>
                </div>
                <div className='w-11/12 p-2'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p>{description}</p>
                    <Link to={'/'} className='flex text-blue-600 mt-2' >See more<span className='ml-2 flex justify-center items-center h-[30px] w-[30px] rounded-[50%] bg-green-600 text-white' ><FontAwesomeIcon icon={faArrowRightLong} className=''/></span></Link>
                </div>
            </div>

        </div>
    );
};

export default About;
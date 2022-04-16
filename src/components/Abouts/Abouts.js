import React from 'react';
import About from '../About/About';
import { faTruck,faBell,faBus } from '@fortawesome/free-solid-svg-icons'
import about1 from '../../images/adult-blur-blurred-background-687824.png'
import about2 from '../../images/chef-cook-food-33614.png'
import about3 from '../../images/architecture-building-city-2047397.png'


const Abouts = () => {
    const aboutDatas=[
        {id:1,title:'Fast Delivery',description:'The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.',img:about1,icon:faBus},
        {id:2,title:'A Good Auto Responder',description:'The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.',img:about2,icon:faBell},
        {id:3,title:'Home Delivery',description:'The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.',img:about3,icon:faTruck},
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm;grid-cols-1 grid-cols-1'>
            {
                aboutDatas.map(aboutData=><About key={aboutData.id} aboutData={aboutData}/>)
            }
            
        </div>
    );
};

export default Abouts;
import React from 'react';
import Banner from '../Banner/Banner';
import RecentEvent from '../../RecentEvent/RecentEvent';
import Testimonial from '../Testimonial/Testimonial';
import HowToWorks from '../HowToWorks/HowToWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentEvent></RecentEvent>
            <HowToWorks></HowToWorks>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;
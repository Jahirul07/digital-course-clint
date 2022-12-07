import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center mt-5'>
            <h2>Best <span className='text-warning'>Digital Courses</span> Platform</h2>
            <h4>We have everything you need to learn anything</h4>
            <p>Take your career to the next level. This course will give you the knowledge you need to start, run and grow any business.</p>
            <Button variant="outline-secondary" className='fw-semibold mt-3'><Link to='/courses'>View All Courses</Link> <FaAngleDoubleRight></FaAngleDoubleRight></Button>
        </div>
    );
};

export default Home;
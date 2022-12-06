import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './Course.css'

const Course = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2>This is Course Page</h2>
            <div className='container'>
            <div className='row'>
            {
                courses.map( course => <div className='col-lg-6 col-12'>
                    <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>
                </div>)
            }
            </div>
            </div>
        </div>
    );
};

export default Course;
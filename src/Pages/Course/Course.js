import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './Course.css'

const Course = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h2>This is Course Page: {courses.length}</h2>
            <div className='card-container'>
            {
                courses.map(course => <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
            </div>
        </div>
    );
};

export default Course;
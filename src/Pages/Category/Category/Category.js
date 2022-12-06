import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Category = () => {
    const courseCategory = useLoaderData()
    return (
        <div>
            <h2>This is category has Courses</h2>
            <div className='container'>
            <div className='row'>
            {
                courseCategory.map( course => <div className='col-6'>
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

export default Category;
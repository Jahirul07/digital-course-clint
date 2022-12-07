import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TopCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect( () =>{
        fetch('https://digital-course-server-delta.vercel.app/course-categories')
        .then( res => res.json())
        .then( data => setCategories(data))
    }, [])

    return (
        <div>
            <h4>Total Category</h4>
            <div>
                {
                    categories.map( category => <p
                    key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default TopCategory;
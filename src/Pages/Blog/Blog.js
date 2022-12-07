import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div className='mt-5'>
        <Card.Body className='p-5 shadow'>
        <Card.Title className='text-center mb-4 fw-bold fs-2'>Card Title</Card.Title>
        <Card.Text className='fs-4'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </div>
    );
};

export default Blog;
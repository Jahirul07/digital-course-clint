import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div className='mt-5'>
        <Card.Body className='p-5 shadow mb-3'>
        <Card.Title className='text-center mb-4 fw-bold fs-2'>what is cors?</Card.Title>
        <Card.Text className='fs-4'>
        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
        </Card.Text>
      </Card.Body>
        <Card.Body className='p-5 shadow mb-3'>
        <Card.Title className='text-center mb-4 fw-bold fs-2'>How does the private route work?</Card.Title>
        <Card.Text className='fs-4'>
        TheThe react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Card.Text>
      </Card.Body>
        <Card.Body className='p-5 shadow mb-3'>
        <Card.Title className='text-center mb-4 fw-bold fs-2'>What is Node? How does Node work?</Card.Title>
        <Card.Text className='fs-4'>
        Innetworking a node is either a connection point, a redistribution point, or a communication endpoint. In computer science, nodes are devices or data points on a large network, devices such a PC, phone, or printer are considers nodes.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
        </Card.Text>
      </Card.Body>
        <Card.Body className='p-5 shadow mb-3'>
        <Card.Title className='text-center mb-4 fw-bold fs-2'>Why are you using firebase?</Card.Title>
        <Card.Text className='fs-4'>
        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
        </Card.Text>
      </Card.Body>
        </div>
    );
};

export default Blog;
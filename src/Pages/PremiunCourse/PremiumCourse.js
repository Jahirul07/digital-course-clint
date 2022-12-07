import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PremiumCourse = () => {
  const { _id,author,title,} = useLoaderData();
  const notify = () => toast("Wow! You Purcess this Course");
  const handleSubmit = event =>{
    event.preventDefault()
  }
    return (
        <div>
          <div className='my-3 text-center'>
            <h4>ID: {_id}</h4>
            <h5>Auther: {author?.name}</h5>
            <h6>Course Name: {title}</h6>
          </div>
          <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Bangladesh">
            <option>Bangladesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Button onClick={notify} variant="primary" type="submit">
        Submit
      </Button>
      <ToastContainer />
    </Form>
        </div>
    );
};

export default PremiumCourse;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    const { author,title, details, thumbnail_url} = course;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
               {details}
                </Card.Text>
                <Card.Footer className="d-flex justify-content-between">
                    <div>
                    <p>Author: {author.name}</p>
                    </div>
                    <div>
                    <Button variant="light">Bownload PDF</Button>
                    </div>
                    <div><Button variant="primary">Premium Purcess</Button></div>
                </Card.Footer>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;
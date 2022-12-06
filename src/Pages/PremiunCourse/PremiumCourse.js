import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PremiumCourse = () => {

    // const {title, thumbnail_url, details, rating, total_download} = course;
    console.log('course');
    return (
        <div>
            <h2>This is news</h2>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Header>Featured</Card.Header>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Footer className="text-muted">
                <Button variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card.Body>
            </Card>
        </div>
    );
};

export default PremiumCourse;
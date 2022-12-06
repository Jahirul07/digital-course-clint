import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseCard.css'
import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseCard = ({course}) => {
    const {title, thumbnail_url, details, rating, total_download} = course;
    console.log(course);
    return (
        <div className='mb-5'>
            <Card style={{ width: '30rem'}}>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
                <Card.Footer className="d-flex justify-content-between">
                    <div>
                        <p><span className='me-2'><FaStar className='text-warning'></FaStar> {rating?.number}</span> <span><FaDownload></FaDownload>{total_download}</span></p>
                    </div>
                    <div>
                    <Button variant="primary"><Link className='text-light'>Premium Access</Link></Button>
                    </div>
                </Card.Footer>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;
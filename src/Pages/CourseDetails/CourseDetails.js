import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";
import jsPDF from 'jspdf'

const CourseDetails = () => {
    const pdfGenerate = () =>{
        let doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.save('a.pdf')
    }

    const course = useLoaderData()
    const { _id,author,title, details, thumbnail_url} = course;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
               {details}
                </Card.Text>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                    <p>Author: {author.name}</p>
                    </div>
                    <div>
                    <Button onClick={pdfGenerate} variant="light">Download PDF</Button>
                    </div>
                    <div>
                        <Button variant="primary"><Link className='text-light' to={`/premium-course/${_id}`}>Premium Pursecc</Link></Button></div>
                </Card.Footer>
            </Card.Body>
            </Card>
        </div>
    );
};
export default CourseDetails;
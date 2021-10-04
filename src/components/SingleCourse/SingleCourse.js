import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { category, description, title, difficulty, image, loc, stdTotal, price, requires, teacher, typology } = props
    return (
        <div>
            <Col>
                <Card className="bg-light">
                    <Card.Img className="img-fluid" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="fs-1 border border-1 p-3 text-uppercase bg-dark text-white">{title}</Card.Title>
                        <Card.Text> <span className="fw-bold text-danger fs-5">Description:</span> <br />{description}</Card.Text>
                        <Card.Text> <span className="fw-bold text-danger fs-5">Requirements:</span> <br />{requires}</Card.Text>
                        <Card.Text className="fs-5"><span className="fw-bold text-danger">Location:</span> {loc}</Card.Text>
                        <Card.Text className="fs-5"><span className="fw-bold text-danger">Teacher Name:</span> {teacher}</Card.Text>
                        <Card.Text className="fs-5"><span className="fw-bold text-danger">Max Students:</span> {stdTotal}</Card.Text>
                        <Card.Text className="fs-5"><span className="fw-bold text-danger">Difficulty:</span> {difficulty}</Card.Text>
                        <Card.Text className="fs-5"><span className="fw-bold text-danger">Typology:</span> {typology}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Card.Text className="fw-bold fs-5 m-3"> <span className="text-info text-uppercase">Category:</span> {category}</Card.Text>
                        <Card.Text className="fw-bold fs-5 m-3"> <span className="text-info text-uppercase">Price:</span> ${price}</Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;
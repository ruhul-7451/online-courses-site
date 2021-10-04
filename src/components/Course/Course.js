import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { img, title, price, teacher, id } = props;
    const history = useHistory();
    const handleCourseDetails = () => {
        history.push(`/course/${id}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-3">{title}</Card.Title>
                        <Card.Text>Teacher: {teacher}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <p className="my-auto fs-5">Price: ${price}</p>
                        <Button onClick={handleCourseDetails} variant="warning">Course Details</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Course;
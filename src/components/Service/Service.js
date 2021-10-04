import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, image, labs, teacher } = props;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-fluid" variant="top" src={image} style={{ height: 300 }} />
                    <Card.Body>
                        <Card.Title className="fs-3">{title}</Card.Title>
                        <Card.Text>Teacher: {teacher}</Card.Text>
                        <Card.Text>Total Labs: {labs}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
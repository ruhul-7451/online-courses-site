import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
const check = <FontAwesomeIcon className="text-success fs-5" icon={faCheck} />
const times = <FontAwesomeIcon className="text-danger fs-5" icon={faTimes} />

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/servicesData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container my-3">
            <div className="mb-5">
                <h2 className="bg-danger text-white rounded shadow my-3 p-1">Our Prices</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="shadow">
                            <Card.Body className="bg-light bg-gradient rounded">
                                <Card.Title className="text-uppercase fs-3 fw-bold rounded p-3">Basic</Card.Title>
                                <hr />
                                <Card.Text className="text-dark">
                                    <p>{check} Daily Exams</p>
                                    <p>{times} Lab Courses</p>
                                    <p>{check} Mentor Support</p>
                                    <p>{times} Outdoor Activity</p>
                                    <p>{times} Team Competition</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-light bg-gradient">
                                <button className="btn btn-outline-dark fs-3 fw-bold">Price: $39</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow">
                            <Card.Body className="bg-warning rounded">
                                <Card.Title className="text-uppercase fs-3 fw-bold rounded p-3">Standard</Card.Title>
                                <hr />
                                <Card.Text className="text-dark">
                                    <p>{check} Daily Exams</p>
                                    <p>{check} Lab Courses</p>
                                    <p>{check} Mentor Support</p>
                                    <p>{check} Outdoor Activity</p>
                                    <p>{times} Team Competition</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-warning">
                                <button className="btn btn-outline-dark fs-3 fw-bold">Price: $59</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow">
                            <Card.Body className="bg-info rounded">
                                <Card.Title className="text-uppercase fs-3 fw-bold rounded p-3">Premium</Card.Title>
                                <hr />
                                <Card.Text className="text-dark">
                                    <p>{check} Daily Exams</p>
                                    <p>{check} Lab Courses</p>
                                    <p>{check} Mentor Support</p>
                                    <p>{check} Outdoor Activity</p>
                                    <p>{check} Team Competition</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-info">
                                <button className="btn btn-outline-dark fs-3 fw-bold">Price: $79</button>
                            </Card.Footer>

                        </Card>
                    </Col>

                </Row>
            </div>
            <div>
                <h2 className="bg-danger text-white rounded shadow my-3 p-1">Our Services</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.svcId}
                            title={service.svcTitle}
                            image={service.svcImage}
                            labs={service.totalLabs}
                            teacher={service.tskTeacher}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;
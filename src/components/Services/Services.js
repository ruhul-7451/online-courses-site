import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/servicesData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container my-3">
            <h2 className="bg-info text-light rounded shadow my-3 p-1">Services</h2>
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
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("/eSchoolData.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);
    return (
        <div className="container my-3">
            <h2 className="bg-info text-light rounded shadow my-3 p-1">All Courses</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    course.map(course => <Course
                        key={course.courseId}
                        id={course.courseId}
                        title={course.courseTitle}
                        img={course.image}
                        price={course.price}
                        teacher={course.teacher}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;
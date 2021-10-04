import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import image from '../../backgroundImage.png'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("/eSchoolData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const sliceCourses = courses.slice(0, 4)    //Show only 4 Courses from the fetch database.

    const history = useHistory();
    const handleShowMore = () => {  //Click Handler for "Show More" Button.
        history.push("/courses")
    }

    return (
        <div className="container my-3 ">
            <div className="row justify-content-between align-items-center bg-primary rounded mx-auto">
                <div className="col-sm-12 col-lg-6 mx-auto p-3 text-white">
                    <h1>Welcome to E-School</h1>
                    <p>Dear Parents, Here you will get some practical based courses with the best teachers to ensure your children gets the best learning experience. Get the best service from us.</p>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <img className="img-fluid w-75 pb-3" src={image} alt="" />
                </div>
            </div>
            <div>
                <h2 className="bg-info text-light rounded shadow my-3 p-1">Our Courses</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        sliceCourses.map(course => <Course
                            key={course.courseId}
                            id={course.courseId}
                            title={course.courseTitle}
                            img={course.image}
                            price={course.price}
                            teacher={course.teacher}
                        ></Course>)
                    }
                </Row>
                <button className="w-50 btn btn-danger mt-3" onClick={handleShowMore}>Show More</button>
            </div>

        </div>
    );
};

export default Home;

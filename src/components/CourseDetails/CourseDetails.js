import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleCourse from '../SingleCourse/SingleCourse';

const CourseDetails = () => {
    const { course_Id } = useParams();
    const [singelCourse, setSingelCourse] = useState([])
    useEffect(() => {
        fetch("/eSchoolData.json")
            .then(res => res.json())
            .then(data => setSingelCourse(data))
    }, []);
    const findCourse = singelCourse.filter(function (el) {
        return el.courseId === parseInt(course_Id);
    });

    return (
        <div className="container my-3 w-75">
            {
                findCourse.map(getCourse => <SingleCourse
                    key={getCourse.courseId}
                    image={getCourse.image}
                    category={getCourse.category}
                    description={getCourse.courseDescription}
                    title={getCourse.courseTitle}
                    difficulty={getCourse.difficulty}
                    loc={getCourse.location}
                    stdTotal={getCourse.maxAvailability}
                    price={getCourse.price}
                    requires={getCourse.requirements}
                    teacher={getCourse.teacher}
                    typology={getCourse.typology}
                ></SingleCourse>)
            }
        </div>
    );
};

export default CourseDetails;
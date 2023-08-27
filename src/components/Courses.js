import React from "react";
import COURSES from "../data/courses";

const Courses = () => {
  return (
    <div>
      <h2>my websites</h2>
      <div>
          {
              COURSES.map(COURSE => {
                  return <Course key={COURSE.id} course={COURSE}/>
              })
          }
      </div>
    </div>
  );
};

const Course = (props) => {
  const { title, description, image, link} = props.course;

  return (
    <div className="card">
      <img src={image} alt="course" style={{ width: "100%" }}></img>
      <h3 style={{ color: "grey", fontSize: 20 }}>{title}</h3>
      <p style={{ fontSize: 17, padding: 4 }}>
        {description}
      </p>
      <button onClick={() => {
          window.location.href = link;
      }}>Enroll</button>
    </div>
  );
};

export default Courses;

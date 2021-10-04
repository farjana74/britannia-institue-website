import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Subject from '../Subject/Subject';

const Courses = () => {
    const[information,setInformation]=useState([])
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data=>setInformation(data))
    },[])
    return (
        <div>
            <h1 className="text-center"> Top Courses</h1>
            <p className="course-details"> The world best subject you choics and you have to fulfill your carrerr and scholaarship.
<br />
                our university has top ranking and most popular .here you have some good facilities and others research and facilities</p>
                {/* <div className="row">
                    <div className="col-md-5  img-shoe">
                        
                    </div>
                    <div className="col-md-5">
                        <h2>gnfbgdfn</h2>
                    </div>

                </div> */}
            <div className="container">
        <div className="row">
            <div className="">
            <Row xs={1} md={3} className="g-4">
            {
                    information.map(student=><Subject student={student}></Subject>)
                }
</Row>
            </div>
        </div>
    
    </div></div>
    );
};

export default Courses;
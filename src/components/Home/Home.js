import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const[students,setStudents]=useState([])
    useEffect(()=>{
        fetch('./tool.JSON')
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    return (
        <div>
            <Header></Header>
            <h1 className="heading ">our Departments</h1>
            <span className="course-header"> Yours choice our best priority and your future is very important to us.Your thinking is make sure to fulfil your bright future</span>
            <hr />
            <div className="container ">
            <div className="row">
<div className="col-md-7">
    
<Row xs={1} md={2} className="g-4">
  
  {
students.map(student=><Service student={student}></Service>)
 } 
</Row>
</div>

            </div>

<div className="col-md-3">
    
</div>

        </div>
        </div>
    );
};

export default Home;

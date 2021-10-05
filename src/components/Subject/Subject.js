import React from 'react';
import { Card } from 'react-bootstrap';
import './Subject.css';

const Subject = (props) => {
    console.log(props.student)
    const{name,img,describe,cost}=props.student
    return (
        <div>
            <Card className=" card">
   <Card.Img className="w-100 img " src={img}/>
   <Card.Body>
     <Card.Title>{name}</Card.Title>
     <Card.Text>
     {describe}
     </Card.Text>
     <h3 className="fs-5">Cost:{cost}</h3>
   </Card.Body>
   <Card.Footer>
     <small><button className="bg-info p-2 border-0 rounded text-white fs-5">know more</button> </small>
   </Card.Footer>
 </Card>
        </div>
    );
};

export default Subject;
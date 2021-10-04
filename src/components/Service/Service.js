import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    console.log(props.student)
    const{name,describe,img}=props.student
    
    return (
    

        <div className="container">
        
            
            <div className="">
            <Card className=" text-start cards">
   <Card.Img className="img-fluid  " src={img}/>
   <Card.Body>
     <Card.Title>{name}</Card.Title>
     <Card.Text>
     {describe}
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small><button className="bg-info p-2 border-0 rounded text-white fs-5">know more</button> </small>
   </Card.Footer>
 </Card>

            </div>
            
           
 

 

       </div>




       
    );
}

export default Service; 
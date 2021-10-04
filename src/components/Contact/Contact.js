import React from 'react';
// import { InputGroup } from 'react-bootstrap';
import './Contact.css';
import { Form, InputGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';



const Contact = () => {
    return (
    <div className="contact container">
        <Form className="contact-show">
  <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="name" placeholder="Enter First Name" />
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your last name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="bg-info p-2 rownded" type="submit">
    Submit
  </Button>
</Form>
    </div>


    );
};

export default Contact;
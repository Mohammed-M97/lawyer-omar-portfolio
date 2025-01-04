import React from "react";
import { Button, Form } from "react-bootstrap";

function ContactSection() {
    return (
        <Form className="bg-light text-dark p-5 border shadow" action="https://getform.io/f/awnnmjeb" method="POST">
            <div className="row">
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">full name</Form.Label>
                    <Form.Control type="text" name="name"/>
                </Form.Group>
            </div>
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">email address</Form.Label>
                    <Form.Control type="email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} type="text" name="message"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default ContactSection
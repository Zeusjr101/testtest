import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });
    const [error, setError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.text.trim() === '') {
            setError(true);
            return;
        }
        if (!isValidEmail(formData.email)) {
            setEmailInvalid(true);
            return;
        }
        setError(false);
        setEmailInvalid(false);
        setFormData({
            name: '',
            email: '',
            text: '',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <Col className='contactForm' xs={12}>
            <Form onSubmit={handleSubmit} onChange={handleChange} className='contactForm'>
                <Form.Group className="mb-3 ">
                    <Form.Label className='contactHeaders'>Name</Form.Label>
                    {error && formData.name.trim() === '' ? 
                        <Form.Control className='formText' type="text" placeholder="This field is required" name="name" value={formData.name} />
                        : <Form.Control className=' inputField' type="text" placeholder="Name" name="name" value={formData.name} />}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    {error && formData.email.trim() === '' ? 
                        <Form.Control type="text" placeholder="This field is required" className='error' name="email" value={formData.email} />
                        : emailInvalid ? 
                            <Form.Control type="text" placeholder="Invalid email" className='error' name="email" value={formData.email} />
                            : <Form.Control className=' inputField' type="text" placeholder="email" name="email" value={formData.email} />}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    {error && formData.text.trim() === '' ? 
                        <Form.Control as='textarea' type="textarea" placeholder="This field is required" className='error' name="text" value={formData.text} />
                        : <Form.Control className=' inputField' as='textarea' type="textarea" placeholder="Leave a comment!" name="text" value={formData.text} />}
                </Form.Group>
                <Button className="contactBtn" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    )
}

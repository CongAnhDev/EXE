import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignUpForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your sign-in logic here
    };

    const handleSignInWithGmail = () => {
        // Implement your Gmail sign-in logic here
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div style={{ border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <h2>Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPasswordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </Form.Group>

                            <Button href="/home" variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <div className="text-center" style={{ margin: '20px 0' }}>
                            <Button variant="danger" onClick={handleSignInWithGmail}>
                                Sign Up with Gmail
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpForm;
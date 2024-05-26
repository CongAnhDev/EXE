import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignInForm() {
    // Hàm để xử lý sự kiện đăng nhập
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lấy dữ liệu từ form và xử lý đăng nhập ở đây
    };

    // Hàm xử lý đăng nhập bằng Gmail
    const handleSignInWithGmail = () => {
        // Xử lý đăng nhập bằng Gmail ở đây
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div style={{ border: '1px solid #dee2e6', borderRadius: '5px', padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
                        <h2>Sign In</h2>
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
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>

                            <Button href="/home" variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                        <div className="text-center" style={{ margin: '20px 0' }}>
                            <Button variant="danger" onClick={handleSignInWithGmail}>
                                Sign In with Gmail
                            </Button>
                        </div>
                        <div className="text-center" style={{ fontSize: '0.9rem' }}>
                            If you do not have an account, <a href="/signup">click here</a> to register.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SignInForm;
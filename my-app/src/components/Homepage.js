import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Card, Button, CardGroup, Container, Row, Col, CardBody, CardImg, CardTitle, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/workshop')
            .then(response => {
                setWorkshops(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the workshops!', error);
            });
    }, []);
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/TBTS-DHFPT-2024-bannerweb.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/Hocbong-100-e-bannerweb.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/TBTS-DHFPT-2024-bannerweb.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <h1 className="my-4">List of Workshops</h1>
            <Row>
                {workshops.length === 0 ? (
                    <p>No workshops available</p>
                ) : (
                    workshops.map(workshop => (
                        <Col sm="12" md="6" lg="4" key={workshop.idWorkshop} className="mb-4">
                            <Card>
                                <CardImg variant="top" src={`http://localhost:8080/image/path/${workshop.imageWorkshop.split('\\').pop()}`} alt={workshop.nameWorkshop} />
                                <Card.Body>
                                    <Card.Title>{workshop.nameWorkshop}</Card.Title>
                                    <Card.Text>
                                        từ {workshop.descriptionWorkshop}
                                    </Card.Text>
                                    <Button as={Link} to={`/detail/${workshop.idWorkshop}`} variant="primary">Detail</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{workshop.timeWorkshop}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>

            <div style={{ paddingTop: '20px' }}>
                <h1>Hội Họa</h1>
            </div>

            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/art1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Vẽ Tranh</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/art2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Vẽ Tranh</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/art1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Vẽ Tranh</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/art2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Vẽ Tranh</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <div style={{ paddingTop: '20px' }}>
                <h1>Cắm Hoa</h1>
            </div>

            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/hoa1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Cắm Hoa</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/hoa2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Cắm Hoa</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/hoa1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Cắm Hoa</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/hoa2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Cắm Hoa</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


            <div style={{ paddingTop: '20px' }}>
                <h1>Thủ Công</h1>
            </div>

            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/cong1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/cong2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/cong1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/cong2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <div style={{ paddingTop: '20px' }}>
                <h1>Làm Bánh</h1>
            </div>

            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/banh1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/banh2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop Thủ Công</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


            <div style={{ paddingTop: '20px' }}>
                <h1>Other</h1>
            </div>


            <CardGroup style={{ justifyContent: 'center', gap: '20px' }}>
                <Card>
                    <Card.Img variant="top" src="./Images/other1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop</Card.Title>
                        <Card.Text>
                            từ 350.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">24 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/other2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop</Card.Title>
                        <Card.Text>
                            từ 360.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">14 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/other1.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop</Card.Title>
                        <Card.Text>
                            từ 200.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">22 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./Images/other2.jpg" />
                    <Card.Body>
                        <Card.Title>Workshop</Card.Title>
                        <Card.Text>
                            từ 340.000 đ
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">11 tháng 7, 2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Container fluid style={{ backgroundColor: 'red', color: 'white' }}>
                <Row>
                    <Col className="text-center py-3">
                        @2024-Create by FU
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;

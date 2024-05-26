import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';

const WorkshopDetail = () => {
    const workshop = {
        name: 'Workshop Cắm Hoa',
        startDate: '2024-06-15 09:00',
        location: '123 Đường Hoa, Quận 1, TP. Hồ Chí Minh',
        description: 'Hãy tham gia workshop cắm hoa để học cách cắm hoa chuyên nghiệp và sáng tạo.',
        ticketSaleStart: '2024-05-01',
        ticketPrice: 200000, // giá vé tính bằng đồng Việt Nam
        organizerLogo: 'https://via.placeholder.com/150',
        organizerName: 'Công ty Hoa Việt',
        organizerInfo: 'Công ty Hoa Việt chuyên cung cấp dịch vụ cắm hoa và tổ chức các workshop cắm hoa.'
    };

    const [ticketQuantity, setTicketQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(workshop.ticketPrice);

    const handleIncrease = () => {
        setTicketQuantity(ticketQuantity + 1);
        setTotalPrice((ticketQuantity + 1) * workshop.ticketPrice);
    };

    const handleDecrease = () => {
        if (ticketQuantity > 1) {
            setTicketQuantity(ticketQuantity - 1);
            setTotalPrice((ticketQuantity - 1) * workshop.ticketPrice);
        }
    };

    return (
        <Container fluid>
            <Row className="mb-4">
                <Col className="p-0">
                    <div className="position-relative">
                        <Image src="https://via.placeholder.com/1200x400" fluid />
                        <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
                            <h1>{workshop.name}</h1>
                            <p>{new Date(workshop.startDate).toLocaleString()}</p>
                            <p>{workshop.location}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h2>Giới thiệu Workshop</h2>
                    <p>{workshop.description}</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <h2>Thông tin vé</h2>
                    <p>Ngày bắt đầu bán vé: {new Date(workshop.ticketSaleStart).toLocaleDateString()}</p>
                    <p>Giá vé: {workshop.ticketPrice.toLocaleString()} VND</p>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <Form inline className="d-flex align-items-center">
                                <Button variant="outline-secondary" onClick={handleDecrease} disabled={ticketQuantity <= 1}>-</Button>
                                <Form.Control type="text" readOnly value={ticketQuantity} className="mx-2" style={{ width: '60px', textAlign: 'center' }} />
                                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                            </Form>
                        </Col>
                    </Row>
                    <p className="text-center">Tổng số tiền: {totalPrice.toLocaleString()} VND</p>
                    <div className="text-center">
                        <Button href='/bankticket' variant="primary">Mua vé</Button>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4 justify-content-center">
                <Col xs="auto">
                    <h2 className="text-center">Ban tổ chức</h2>
                    <div className="d-flex flex-column align-items-center">
                        <Image src={workshop.organizerLogo} roundedCircle style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
                        <div className="text-center">
                            <h4>{workshop.organizerName}</h4>
                            <p>{workshop.organizerInfo}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WorkshopDetail;

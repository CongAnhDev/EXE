import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const CombinedForm = () => {
    const [workshopForm, setWorkshopForm] = useState({
        workshopName: '',
        workshopType: 'offline',
        location: '',
        city: '',
        district: '',
        ward: '',
        streetAddress: '',
        category: 'Cắm Hoa',
        workshopInfo: '',
        organizerLogo: '',
        organizerName: '',
        organizerInfo: ''
    });

    const [ticketForm, setTicketForm] = useState({
        workshopStart: new Date(),
        workshopEnd: new Date(),
        ticketName: '',
        ticketPrice: '',
        totalTickets: '',
        saleStart: new Date(),
        saleEnd: new Date(),
        ticketInfo: '',
    });

    const handleWorkshopChange = (e) => {
        const { name, value } = e.target;
        setWorkshopForm({
            ...workshopForm,
            [name]: value
        });
    };

    const handleWorkshopFileChange = (e) => {
        const { name, files } = e.target;
        setWorkshopForm({
            ...workshopForm,
            [name]: files[0]
        });
    };

    const handleTicketChange = (e) => {
        const { name, value } = e.target;
        setTicketForm({
            ...ticketForm,
            [name]: value
        });
    };

    const handleTicketDateChange = (date, name) => {
        setTicketForm({
            ...ticketForm,
            [name]: date
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle combined form submission
        console.log({ workshopForm, ticketForm });
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center">Create Workshop & Ticket</h1>
                    <div className="p-4 border rounded">
                        <Form onSubmit={handleSubmit}>
                            {/* Workshop Form Fields */}
                            <h2 className="text-center">Workshop Information</h2>
                            <Form.Group controlId="formWorkshopBackground" className="mb-3">
                                <Form.Label>Workshop Background Image</Form.Label>
                                <Form.Control type="file" name="workshopBackground" onChange={handleWorkshopFileChange} />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopName" className="mb-3">
                                <Form.Label>Workshop Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="workshopName"
                                    value={workshopForm.workshopName}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopType" className="mb-3">
                                <Form.Label>Workshop Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="workshopType"
                                    value={workshopForm.workshopType}
                                    onChange={handleWorkshopChange}
                                >
                                    <option value="offline">Offline</option>
                                    <option value="online">Online</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formLocation" className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={workshopForm.location}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCity" className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={workshopForm.city}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formDistrict" className="mb-3">
                                <Form.Label>District</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="district"
                                    value={workshopForm.district}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formWard" className="mb-3">
                                <Form.Label>Ward</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ward"
                                    value={workshopForm.ward}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formStreetAddress" className="mb-3">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="streetAddress"
                                    value={workshopForm.streetAddress}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCategory" className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={workshopForm.category}
                                    onChange={handleWorkshopChange}
                                >
                                    <option value="Cắm Hoa">Cắm Hoa</option>
                                    <option value="Hội Họa">Hội Họa</option>
                                    <option value="Thủ Công">Thủ Công</option>
                                    <option value="Làm Bánh">Làm Bánh</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formWorkshopInfo" className="mb-3">
                                <Form.Label>Workshop Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="workshopInfo"
                                    value={workshopForm.workshopInfo}
                                    onChange={handleWorkshopChange}
                                    rows={5}
                                />
                            </Form.Group>

                            <Form.Group controlId="formOrganizerName" className="mb-3">
                                <Form.Label>Organizer Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="organizerName"
                                    value={workshopForm.organizerName}
                                    onChange={handleWorkshopChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formOrganizerInfo" className="mb-3">
                                <Form.Label>Organizer Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="organizerInfo"
                                    value={workshopForm.organizerInfo}
                                    onChange={handleWorkshopChange}
                                    rows={5}
                                />
                            </Form.Group>

                            {/* Ticket Form Fields */}
                            <h2 className="text-center">Ticket Information</h2>
                            <Form.Group controlId="formWorkshopStart" className="mb-3">
                                <Form.Label>Workshop Start Time</Form.Label>
                                <DatePicker
                                    selected={ticketForm.workshopStart}
                                    onChange={(date) => handleTicketDateChange(date, 'workshopStart')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formWorkshopEnd" className="mb-3">
                                <Form.Label>Workshop End Time</Form.Label>
                                <DatePicker
                                    selected={ticketForm.workshopEnd}
                                    onChange={(date) => handleTicketDateChange(date, 'workshopEnd')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketName" className="mb-3">
                                <Form.Label>Ticket Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ticketName"
                                    value={ticketForm.ticketName}
                                    onChange={handleTicketChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketPrice" className="mb-3">
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="ticketPrice"
                                    value={ticketForm.ticketPrice}
                                    onChange={handleTicketChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTotalTickets" className="mb-3">
                                <Form.Label>Total Tickets</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="totalTickets"
                                    value={ticketForm.totalTickets}
                                    onChange={handleTicketChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formSaleStart" className="mb-3">
                                <Form.Label>Sale Start Time</Form.Label>
                                <DatePicker
                                    selected={ticketForm.saleStart}
                                    onChange={(date) => handleTicketDateChange(date, 'saleStart')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formSaleEnd" className="mb-3">
                                <Form.Label>Sale End Time</Form.Label>
                                <DatePicker
                                    selected={ticketForm.saleEnd}
                                    onChange={(date) => handleTicketDateChange(date, 'saleEnd')}
                                    showTimeSelect
                                    dateFormat="Pp"
                                    className="form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketInfo" className="mb-3">
                                <Form.Label>Ticket Info</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="ticketInfo"
                                    value={ticketForm.ticketInfo}
                                    onChange={handleTicketChange}
                                    rows={5}
                                />
                            </Form.Group>


                            <Button variant="primary" type="submit" className="me-2">
                                Save
                            </Button>
                            <Button href='/' variant="secondary">
                                Continue
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CombinedForm;

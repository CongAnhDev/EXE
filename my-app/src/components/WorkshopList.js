import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardImg, CardTitle, CardText, Container, Row, Col } from 'reactstrap';

const WorkshopList = () => {
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
        <Container>
            <h1 className="my-4">List of Workshops</h1>
            <Row>
                {workshops.length === 0 ? (
                    <p>No workshops available</p>
                ) : (
                    workshops.map(workshop => (
                        <Col sm="12" md="6" lg="4" key={workshop.idWorkshop} className="mb-4">
                            <Card>
                                <CardImg top width="100%" src={`http://localhost:8080/image/path/${workshop.imageWorkshop.split('\\').pop()}`} alt={workshop.nameWorkshop} />
                                <CardBody>
                                    <CardTitle tag="h5">{workshop.nameWorkshop}</CardTitle>
                                    <CardText>{workshop.descriptionWorkshop}</CardText>
                                    <CardText>
                                        <small className="text-muted">Time: {workshop.timeWorkshop}</small>
                                    </CardText>
                                    <CardText>
                                        <small className="text-muted">Address: {workshop.addressWorkshop}</small>
                                    </CardText>
                                    <CardText>
                                        <small className="text-muted">Company: {workshop.nameCompanyWorkshop}</small>
                                    </CardText>
                                    <CardText>
                                        <small className="text-muted">Category: {workshop.nameCategoryWorkshop}</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default WorkshopList;

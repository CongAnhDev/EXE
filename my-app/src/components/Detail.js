import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const WorkshopDetail = () => {
    const { id } = useParams();
    const [workshop, setWorkshop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/workshop/${id}`)
            .then(response => {
                setWorkshop(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the workshop detail!', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>There was an error loading the workshop details.</p>;
    if (!workshop) return <p>No workshop details available.</p>;

    const imageUrl = workshop.imageWorkshop ? `http://localhost:8080/image/path/${workshop.imageWorkshop.split('\\').pop()}` : '';

    return (
        <Container>
            <Card>
                {imageUrl && <Card.Img variant="top" src={imageUrl} alt={workshop.nameWorkshop} />}
                <Card.Body>
                    <Card.Title>{workshop.nameWorkshop}</Card.Title>
                    <Card.Text>{workshop.descriptionWorkshop}</Card.Text>
                    <Card.Text>Address: {workshop.addressWorkshop}</Card.Text>
                    <Card.Text>Time: {workshop.timeWorkshop}</Card.Text>
                    <Card.Text>Company: {workshop.nameCompanyWorkshop}</Card.Text>
                    <Card.Text>Category: {workshop.nameCategoryWorkshop}</Card.Text>
                    <Button variant="primary" href="/">Back</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default WorkshopDetail;

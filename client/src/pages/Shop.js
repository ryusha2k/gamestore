import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GenreBar from '../components/GenreBar';
import TypeBar from '../components/TypeBar';
import GameList from '../components/GameList';


const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <GenreBar />
                </Col>
                <Col md={9}>
                    <TypeBar />
                    <GameList />
                </Col>
            </Row>
        </Container>
    );
};


export default Shop;
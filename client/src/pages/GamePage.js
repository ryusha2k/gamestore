import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const GamePage = () => {
    const game = { id: 1, name: 'gta5', price: 900, rating: 5, img: 'https://igroray.ru/upload/resize_cache/iblock/c83/400_400_140cd750bba9870f18aada2478b24840a/igra_grand_theft_auto_v_gta_5_xbox_360_russkaya_versiya.jpg.webp' }
    const description = [
        { id: 1, title: 'Жанр', description: 'впывпвап' },
        { id: 2, title: 'вапвп', description: 'вапвп' },
        { id: 3, title: 'впвап', description: 'пвапвап' },
        { id: 4, title: 'вапвап', description: 'пвап' },
        { id: 5, title: 'пвап', description: 'вппа' },
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={game.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{game.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {game.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid red' }}
                    >
                        <h3>Цена: {game.price}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                {description.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};


export default GamePage;
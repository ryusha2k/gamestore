import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateGame from '../components/modals/CreateGame';
import CreateGenre from '../components/modals/CreateGenre';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setGenreVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setGameVisible(true)}
            >
                Добавить игру
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)} />
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)} />
        </Container>
    );
};


export default Admin;
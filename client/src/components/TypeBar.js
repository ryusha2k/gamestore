import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { game } = useContext(Context)

    return (
        <Row className="d-flex">
            {game.types.map(type =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={type.id}
                    className="p-3"
                    onClick={() => game.setSelectedType(type)}
                    border={type.id === game.selectedType.id ? 'danger' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </Row>
    );
});

export default TypeBar;
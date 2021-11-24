import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {GAME_ROUTE} from "../utils/consts"

const GameItem = ({game}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(GAME_ROUTE + '/' + game.id)}>
           <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
            <Image width={150} height={150} src={game.img}/>
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div>GTA 5</div>
                <div className="d-flex align-items-center">
                    <div>{game.rating}</div>
                    <Image width={15} height={15} src={star}/>
                </div>
            </div>
            <div>{game.name}</div>
           </Card>
        </Col>
    );
};

export default GameItem;
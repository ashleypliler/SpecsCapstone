import React from 'react';
import './Cart.css';
import items from './items.json'
import { Col, Row } from 'react-bootstrap';

export default function Cart() {
    return (
        <div className='cart'>
            <h1>STORE</h1>
            <Row>
                {items.map(items => {
                    <Col>{JSON.stringify(items)}</Col>
                })}
            </Row>
        </div>
        
    )
}; 
import React from 'react';
import '../../App.css';
import './Products.css'
import items from './items.json'
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../StoreItem';

export default function Products(imgUrl) {
    return (
        <div className='products'>
            <h1 className='header'>PRODUCTS</h1>

            <Row md={2} xs={1} lg={3} className="g-3" >
            {
                items.map(item => {
                    return(
                        <Col key={item.id}><StoreItem imgUrl={imgUrl} {...item}/></Col>
                    )
                })
            }
            </Row>

        </div>
    )
};
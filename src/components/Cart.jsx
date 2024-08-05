import React, { useEffect, useState } from 'react'
import { Row, Table, Col, Button } from 'react-bootstrap'
import cartImg from '../assets/6.png'
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId) => {
            const details = cartItems[cartItemId];
            tempQuantity += details.quantity;
            tempPrice += details.quantity * details.price;
        });
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    })
    return (
        <div>
            <Row>
                <Col>
                    <h3 style={{ margin: '5rem' }}>Your Cart:</h3>
                    <div style={{ margin: '5rem' }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(cartItems).map((cartItemId) => {
                                        const itemDetails = cartItems[cartItemId];
                                        return (
                                            <tr>
                                                <td>{itemDetails.title}</td>
                                                <td>{itemDetails.quantity}</td>
                                                <td>{itemDetails.quantity * itemDetails.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>Total</td>
                                    <td>{totalQuantity}</td>
                                    <td>{totalPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button onClick={()=>navigate('/CheckOut')} style={{ width: '15rem', marginTop: '2rem' }} >Check Out</Button>
                    </div>
                </Col>
                <Col>
                    <img src={cartImg} style={{ height: '40rem', marginLeft: '2rem' }} />
                </Col>
            </Row>
        </div>
    )
}

export default Cart

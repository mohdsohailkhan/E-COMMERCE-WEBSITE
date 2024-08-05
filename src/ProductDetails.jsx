import React from "react";
import { Row, Col, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function ProductDetails({handleAddToCart,cartItems}) {
    const location = useLocation();
    const { title, price, images, description, category,id} = location.state;
    const navigate = useNavigate();
    const [otherProducts, setOtherProducts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id}/products?limit=20&offset=0`);
            setOtherProducts(response.data);
        }
        getData()
    }, [])
    return (
        <div>
            <Row>
                <Col lg={2}>
                    <div>
                        {
                            images.map((image, index) => {
                                return (
                                    <img key={index} src={image} style={{ width: 150, margin: 20, borderRadius: 8 }} />
                                )
                            })
                        }
                    </div>
                </Col>
                <Col lg={4}>
                    <img src={images[0]} style={{ width: 350, margin: 20, borderRadius: 8 }} />
                    <h3>{title}</h3>
                    <h3 style={{ color: 'blue' }}>${price}</h3>
                    <h6>{description}</h6>
                    <Button onClick={()=>{
                        if(id in cartItems){
                            const currentItem = cartItems[id];
                            handleAddToCart({[id]:{title,price,quantity: currentItem.quantity +1}})
                        }
                        else{
                            handleAddToCart({[id]:{title,price,quantity:1}})
                        }
                    }} style={{ marginTop: 30, width: 200 }}>Add to Cart</Button>
                </Col>
                <Col>
                    <div>
                        <h1 className="headingProduct">Other Products In Same Category</h1>
                        <div className="productsdiv">
                            {
                                otherProducts.map((products) => {
                                    return (
                                        <Card key={products.id} className="cards" >
                                            <Card.Img className="cardimg"  src={products.images[0]} />
                                            <Card.Title>{products.title}</Card.Title>
                                            <Card.Text>${products.price}</Card.Text>
                                            <Button onClick={() =>navigate(`/product/${products.id}`, {state : product})}>View Item</Button>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
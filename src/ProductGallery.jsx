import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductGallery(){
    const [product , setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        async function getProduct(){
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            setProduct(response.data)
        }
        getProduct()
    },[])
    console.log(product)
    return(
        <div>
            <h1 className="headingProduct">Select a Product</h1>
            <div className="productsdiv">
                {
                    product.map((product)=>{
                        return(
                            <Card key={product.id} className="cards">
                                <Card.Img className="cardimg" src={product.images[0]}/>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button onClick={() =>navigate(`/product/${product.id}`, {state : product})}>View Product</Button>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
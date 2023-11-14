import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg } from "react-bootstrap";
import product1 from "../../asset/product1.jpeg";
import product2 from "../../asset/product2.jpeg";
import product3 from "../../asset/product3.jpeg"
import './products.css'

const Products = () =>{
    return(
        <div className="Productscontainer">
            <Card className="col-3">
                <CardImg variant="top" src={product1} />
                <Card.Body>
                    <Card.Header>Date Night Love Box</Card.Header>
                    <Card.Text>250$</Card.Text>
                    <Button variant="secondary">View Product</Button>

                </Card.Body>
            </Card>


            <Card className="col-3">
                <CardImg variant="top" src={product2} />
                <Card.Body>
                    <Card.Header>Jack & Rose vase Collection</Card.Header>
                    <Card.Text>175$-250$</Card.Text>
                    <Button variant="secondary">View Product</Button>

                </Card.Body>
            </Card>

            <Card className="col-3">
                <CardImg variant="top" src={product3} />
                <Card.Body>
                    <Card.Header>Roses Bouquet </Card.Header>
                    <Card.Text>160$</Card.Text>
                    <Button variant="secondary">View Product</Button>

                </Card.Body>
            </Card>
        </div>
    )

}
export default Products;
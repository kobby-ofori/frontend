import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { ProductItem } from "../utils/fetchedProducts";
import "./Product.css";

const Product = () => {
  const [product, setProductData] = useState([]);

  // add to cart funtionalities
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductData(ProductItem);
  }, []);

  console.log(ProductItem);

  return (
    <Container>
      <Row className="content-row">
        {product.map((product) => (
          <Col key={product._id} md={3} xs={12}>
            <div className="card-wrapper">
              {/* Add a wrapper for spacing */}
              <Card style={{ width: "18rem" }} className="card custom-card">
                <Card.Img
                  variant="top"
                  src={`data:image/png;base64,${product.image}`}
                  alt="attire-pics"
                  className="card-img-top img-responsive custom-img"
                  height={"150px"}
                />
                <Card.Body className="custom-card-body">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>by {product.name}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-center">
                    GHS {product.price}
                  </Card.Text>

                  {/* new button functions */}
                  <Button
                    variant="primary"
                    className="card-btn"
                    onClick={() => addToCart(product._id)}
                  >
                    Add to Cart{" "}
                    {cartItems[product._id] > 0 && (
                      <> ({cartItems[product._id]})</>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;

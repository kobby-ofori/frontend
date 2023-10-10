import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";
import { CartContext } from "../context/CartContext";
import { ProductItem } from "../utils/fetchedProducts";
import AddedItems from "./AddedItems";

const CartPage = () => {
  // define useNavigate as navigate to navigate to the store page when continue shopping button is clicked
  const navigate = useNavigate();

  // button functionalities to add and remove products from cartpage
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  // Modal function descriptions
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <Container>
      <h2>Cart</h2>
      <Row>
        <Col className="seleted-products-col">
          <h3>Selected Products:</h3>

          {/* other... */}
          {ProductItem.map((product) => {
            if (cartItems[product._id] !== 0) {
              return (
                <AddedItems key={product._id} data={product} />
              ); /* Use CartItems changed to Use AddedItems */
            }
            return null; // Return null when the condition is not met
          })}

        </Col>
        <Col className="check-out-col">
          {/* other... */}
          {totalAmount > 0 ? (
            <div className="cart-checkout" style={{ position: "fixed" }}>
              <p>Subtotal: GHS {totalAmount}</p>
              <button onClick={() => navigate("/store")} className="Cart-btn">
                Continue Shopping
              </button>
              <button onClick={handleModalShow} className="Cart-btn">
                Checkout
              </button>
            </div>
          ) : (
            <h3>Cart is Empty</h3>
          )}

          {/* button... */}
          {/* <Button onClick={() => navigate("/store")}>Continue Shopping</Button> */}
          {/* <button onClick={handleModalShow} className="Cart-btn">
            Checkout
          </button> */}
        </Col>
      </Row>
      <CheckoutModal
        show={showModal}
        handleShow={handleModalShow}
        handleClose={handleModalClose}
        totalAmount={totalAmount}
      />
    </Container>
  );
};

export default CartPage;

import "./Cart.css";

import {
  FaTrash,
  FaPlus,
  FaMinus
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  /* TOTAL PRICE */

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total +
      (
        Number(
          item.price.replace(/[^0-9]/g, "")
        ) * item.quantity
      ),

    0

  );

  return (

    <div className="cart-page">

      <h1>
        Your Flight Cart
      </h1>

      {

        cartItems.length === 0

          ?

          <p className="empty-cart">
            No Flights Added Yet ✈️
          </p>

          :

          <div className="cart-container">

            {

              cartItems.map((item, index) => (

                <div
                  className="cart-card"
                  key={index}
                >

                  {/* INFO */}

                  <div className="cart-info">

                    <h2>
                      {item.from} ✈ {item.to}
                    </h2>

                    <p>
                      Flight Time:
                      {" "}
                      {item.time}
                    </p>

                    <h3>
                      {item.price}
                    </h3>

                  </div>

                  {/* QUANTITY */}

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.from,
                          item.to
                        )
                      }
                    >

                      <FaMinus />

                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.from,
                          item.to
                        )
                      }
                    >

                      <FaPlus />

                    </button>

                  </div>

                  {/* REMOVE */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(
                        item.from,
                        item.to
                      )
                    }
                  >

                    <FaTrash />

                  </button>

                </div>

              ))

            }

            {/* TOTAL */}

            <div className="total-box">

              <h2>
                Total:
                {" "}
                ₹{totalPrice.toLocaleString()}
              </h2>

            </div>

          </div>

      }

    </div>

  );
}

export default Cart;
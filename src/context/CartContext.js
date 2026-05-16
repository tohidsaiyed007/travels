import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("travelCart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  /* SAVE LOCAL STORAGE */

  useEffect(() => {

    localStorage.setItem(
      "travelCart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  /* ADD TO CART */

  const addToCart = (flight) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) =>
          item.from === flight.from &&
          item.to === flight.to
      );

      if(existingItem){

        return prevItems.map((item) =>

          item.from === flight.from &&
          item.to === flight.to

            ? {
                ...item,
                quantity: item.quantity + 1
              }

            : item
        );

      }

      return [
        ...prevItems,
        {
          ...flight,
          quantity: 1
        }
      ];

    });

  };

  /* REMOVE */

  const removeFromCart = (from, to) => {

    setCartItems((prevItems) =>

      prevItems.filter(
        (item) =>
          !(item.from === from && item.to === to)
      )

    );

  };

  /* INCREASE */

  const increaseQuantity = (from, to) => {

    setCartItems((prevItems) =>

      prevItems.map((item) =>

        item.from === from && item.to === to

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      )

    );

  };

  /* DECREASE */

  const decreaseQuantity = (from, to) => {

    setCartItems((prevItems) =>

      prevItems
        .map((item) =>

          item.from === from && item.to === to

            ? {
                ...item,
                quantity: item.quantity - 1
              }

            : item

        )

        .filter((item) => item.quantity > 0)

    );

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;
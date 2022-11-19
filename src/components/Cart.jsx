import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartState,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../features/CartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import CartSumary from './cart/CartSumary';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);

  // console.log(cartItems)

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? 'opacity-100 visible translate-x-0'
              : 'opacity-0 invisible translate-x-8'
          }`}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <CartSumary />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

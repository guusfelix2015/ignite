import React, { createContext, useState } from 'react';
import { Coffe } from '../pages/Home/components/CoffeeCard';
import { produce } from 'immer';

export interface CartItem extends Coffe {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  cartQuantity: number;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, draft => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  console.log(cartItems);
  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

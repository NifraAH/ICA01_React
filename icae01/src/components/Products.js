import React, { useState } from 'react';
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import Cart from './Cart';

export default function Products(){

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (flower) => {
        setCartItems((prevItems) => {
          const existingItem = prevItems.find((item) => item.id === flower.id);
          if (existingItem) {
            return prevItems.map((item) =>
              item.id === flower.id ? { ...item, qty: item.qty + flower.qty } : item
            );
          } else {
            return [...prevItems, flower];
          }
        });
      };
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}
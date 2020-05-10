import React, { useState, useContext } from 'react';
import './Cart.css';
import ThemeContext from '../Context/ThemeContext';

const CartItem = ({id, title, price, quantity, removeCartItem }) => {
    return (
        <div className="cart-item">
            <button onClick={()=>removeCartItem(id)}>X</button>
            <div className="info">
                <span>{title} x {quantity}</span>
                <span>$ {price * quantity}</span>
            </div>
        </div>
    );
}

const Cart = ({ cartItems, removeCartItem, clearCart }) => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [address, setAddress] = useState("");
    const {dark} = useContext(ThemeContext);

    const toggleCheckout = () => {
        setCheckoutOpen(status => !status); // It will set opposite value of the current value
    }

    const handleChange = (e) => {
        setAddress(e.target.value);
    }

    const total = cartItems.reduce((sum,current)=> sum + current.price * current.quantity, 0);
    return (
        <div className={`cart ${dark ? 'dark' : 'light'}`}>
            <h4>Cart Items</h4>
            <div className="cart-items">

                {cartItems.length === 0 && (<div className="cart-item">
                    <div className="info">
                        <span>Cart is empty!</span>
                    </div>
                </div> )}

                { cartItems.length !== 0 && cartItems.map(item => <CartItem key={item.id} {...item} removeCartItem={removeCartItem} />) }

                { cartItems.length !== 0 &&
                <>
                    <div className="cart-item">
                        <div className="info">
                            <span>Total</span>
                            <span>$ {total}</span>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="info">
                            <button
                                style={{ backgroundColor:'red' }} 
                                onClick={clearCart}>
                                    Cancel
                            </button>
                            <button 
                                style={{ backgroundColor:'green' }}
                                onClick={toggleCheckout}>
                                    {checkoutOpen ? 'Hide' : 'Checkout'}
                            </button>
                        </div>
                    </div>
                </>
                }

                    {cartItems.length !== 0 && checkoutOpen === true && 
                    <div className="cart-item">
                        <div className="info">
                            <span><input placeholder="Address" onChange={handleChange} /></span>
                            <button 
                                style={{ backgroundColor: !address ? 'grey' : 'green' }}
                                disable={!address}
                                onClick={clearCart}>
                                    Checkout
                            </button>
                        </div>
                    </div>}
                
            </div>
        </div>
    );
};

export default Cart;
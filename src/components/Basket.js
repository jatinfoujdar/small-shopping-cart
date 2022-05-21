import React from 'react';

export default function Basket(props)
{
    const {cartItem ,onAdd , onRemove } = props;
    const itemPrice = cartItem.reduce((a,c) => a+c.price* c.qty,0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice >2000 ? 0 : 50;
     const totalPrice =itemPrice + taxPrice + shippingPrice;
    return <aside className="block col-1">
        <h2>Cart Item</h2>
        <div>
            {cartItem.length === 0 && <div> Cart Is Empty </div> }
        </div>
        {cartItem.map((item) => (
        <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">+</button>
                <button onClick={() => onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>))}
        {cartItem.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">itemPrice</div>
                <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
                
                </div>
                <div className="row">
                <div className="col-2">tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                
                </div>
                <div className="row">
                <div className="col-2">shipping</div>
                <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                
                </div>
                <div className="row">
                <div className="col-2"><strong>Total</strong></div>
                <div className="col-1 text-right"><strong>${ totalPrice.toFixed(2)}</strong></div>
                
                </div>
                </>
        )
        }
        </aside>
};
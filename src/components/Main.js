import React from 'react';
import Product from './Product';

export default function Main(props)
{
    const {product , onAdd} =props;
    return  ( <main className="block col-2">
        <h2>product</h2>
        <div className="row">
            {product.map((product) => (
                <Product key={product.id} product ={product} onAdd={onAdd}></Product>
            ))}

        </div>
    </main>
    );
}
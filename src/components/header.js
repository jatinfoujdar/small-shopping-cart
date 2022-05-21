import React from 'react';

export default function Header(props)
{
    const { countCartitem} =props;
    return (
        <header className="row block center">
            <div>
                <a href="#">
                <h1>Small Shopping Cart</h1></a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartitem ?(
                        <button className="badge">{countCartitem}</button>
                    ):(
                        ''
                    )
                    }
                    
                    </a> 
                     <a href="#/signin">SignIn</a>
            </div>
        </header>
    )
}
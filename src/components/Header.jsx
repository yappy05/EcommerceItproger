import React, {useState} from 'react';
import { FaCartShopping } from "react-icons/fa6";

function Header() {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className="Logo">House staff</span>
                <ul className="nav">
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaCartShopping onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen && <div className="shop-cart"></div>}
            </div>
            <div className="presentetion"></div>
        </header>
    );
}

export default Header;
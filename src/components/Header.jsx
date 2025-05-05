import React, {useState} from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order.jsx";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (<Order item={el} key={el.id} onDelete={props.onDelete}/>))}
            <p className="summa">Сумма: {summa}₽</p>
        </div>
    )
}
const showNothing = () => {
    return (
        <div className="empty">
            <h2>Товаров нет</h2>
        </div>
    )
}

function Header(props) {
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
                {cartOpen && <div className="shop-cart">
                    {props.orders.length > 0? showOrders(props): showNothing()}
                </div>}

            </div>
            <div className="presentetion"></div>
        </header>
    );
}

export default Header;
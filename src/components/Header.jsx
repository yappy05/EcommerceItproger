import React from 'react';

function Header() {
    return (
        <header>
            <div>
                <span className="Logo">House staff</span>
                <ul className="nav">
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
            </div>
            <div className="presentetion"></div>
        </header>
    );
}

export default Header;
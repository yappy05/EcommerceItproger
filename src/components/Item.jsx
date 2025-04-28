import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <b>{this.props.item.price}₽</b>
                <div className="add-to-cart">+</div>
            </div>
        );
    }
}

export default Item;
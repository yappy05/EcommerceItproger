import React, {Component} from 'react';
import { FaTrash } from "react-icons/fa";

class Order extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}₽</b>
                <FaTrash className="deleteItem" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;
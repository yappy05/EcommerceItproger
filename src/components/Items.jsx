import React, {Component} from 'react';
import Item from "./Item.jsx";

class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <Item item={el} key={el.id}/>
                ))}
            </main>
        );
    }
}

export default Items;
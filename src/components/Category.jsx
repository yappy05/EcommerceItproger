import React, {Component} from 'react';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все"
                },
                {
                    key: "table",
                    name: "Столы"
                },
                {
                    key: "bed",
                    name: "Кровати"
                },
                {
                    key: "sofa",
                    name: "Диваны"
                },
                {
                    key: "cupboard",
                    name: "Шкафы"
                },
                {
                    key: "armchair",
                    name: "Кресла"
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Category;
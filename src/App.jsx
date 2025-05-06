import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import Items from "./components/Items.jsx";
import Category from "./components/Category.jsx";




class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Диван Комфорт",
                    img: "./img/sofa.jpg",
                    description: "Удобный трехместный диван с обивкой из экокожи. Раскладывается в двуспальную кровать.",
                    category: "sofa",
                    price: 45000
                },
                {
                    id: 2,
                    title: "Кресло Уют",
                    img: "./img/armchair.jpeg",
                    description: "Мягкое кресло с высокой спинкой и подлокотниками. Идеально для чтения и отдыха.",
                    category: "armchair",
                    price: 15000
                },
                {
                    id: 3,
                    title: "Стол Модерн",
                    img: "./img/table.jpg",
                    description: "Обеденный стол из массива дуба на 6 персон. Современный дизайн.",
                    category: "table",
                    price: 28000
                },
                {
                    id: 4,
                    title: "Шкаф Классик",
                    img: "./img/cupboard.jpeg",
                    description: "Трехстворчатый шкаф с зеркалом и отделением для одежды. Классический дизайн.",
                    category: "cupboard",
                    price: 35000
                },
                {
                    id: 5,
                    title: "Кровать Люкс",
                    img: "./img/bed.jpeg",
                    description: "Двуспальная кровать с мягким изголовьем и ортопедическим основанием.",
                    category: "bed",
                    price: 42000
                }
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Category chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    deleteOrder(id){
        {
            this.setState({orders: this.state.orders.filter(el => el.id !== id)})
        }
    }

    addToOrder(item){
        let isInArray = false;
        this.state.orders.forEach(el => {
            if(el.id === item.id) isInArray = true;

        })
        if(!isInArray) this.setState({orders: [...this.state.orders, item]});
    }

    chooseCategory(category){
        if (category === "all"){
            this.setState({currentItems: this.state.items});
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

}
export default App
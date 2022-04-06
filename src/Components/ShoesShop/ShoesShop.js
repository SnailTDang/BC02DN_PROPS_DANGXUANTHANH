import React, { Component } from "react";
import ProductsList from "./ProductsList";
import ModalDetails from "./ModalDetails";

export default class ShoesShop extends Component {
    productsList = [
        {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "https://giayxshop.vn/wp-content/uploads/2019/02/MG_4335.jpg",
        },
        {
            id: 2,
            name: "Adidas Prophere Black White",
            alias: "adidas-prophere-black-white",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 990,
            image: "https://giayxshop.vn/wp-content/uploads/2019/02/MG_4989.jpg",
        },
        {
            id: 3,
            name: "Adidas Prophere Customize",
            alias: "adidas-prophere-customize",
            price: 375,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 415,
            image: "https://giayxshop.vn/wp-content/uploads/2019/02/MG_4341.jpg",
        },
        {
            id: 4,
            name: "Adidas Super Star ",
            alias: "adidas-super-star-white",
            price: 465,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 542,
            image: "https://giayxshop.vn/wp-content/uploads/2021/12/z2265026843498_cca13cd65db8b63ec98082fc2f77fe27-scaled.jpg",
        },
        {
            id: 5,
            name: "Adidas Swift Run",
            alias: "adidas-swift-run",
            price: 550,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 674,
            image: "https://giayxshop.vn/wp-content/uploads/2019/02/MG_4978.jpg",
        },
        {
            id: 6,
            name: "Adidas Tenisky Super Star",
            alias: "adidas-tenisky-super-star",
            price: 250,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 456,
            image: "https://giayxshop.vn/wp-content/uploads/2019/10/MG_8178-300x300.jpg",
        },
        {
            id: 7,
            name: "Adidas Ultraboost 4",
            alias: "adidas-ultraboost-4",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 854,
            image: "https://giayxshop.vn/wp-content/uploads/2019/01/MG_3400-300x300.jpg",
        },
        {
            id: 8,
            name: "Adidas Yeezy 350",
            alias: "adidas-yeezy-350",
            price: 750,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 524,
            image: "https://giayxshop.vn/wp-content/uploads/2018/12/MG_0344-600x600.jpg",
        },
        {
            id: 9,
            name: "Nike Adapt BB",
            alias: "nike-adapt-bb",
            price: 630,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 599,
            image: "https://cf.shopee.vn/file/3fc583bd6b44c8b6732a637a378b62de",
        },
        {
            id: 10,
            name: "Nike Air Max 97",
            alias: "nike-air-max-97",
            price: 650,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 984,
            image: "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5864-600x600.jpg",
        },
        {
            id: 11,
            name: "Nike Air Max 97 Blue",
            alias: "nike-air-max-97-blue",
            price: 450,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 875,
            image: "https://product.hstatic.net/1000375638/product/806032_01_89d6d278c4984b6aaad829e8feb08ff8_master.jpg",
        },
        {
            id: 12,
            name: "Nike Air Max 270 React",
            alias: "nike-air-max-270-react",
            price: 750,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 445,
            image: "https://cdn.vortexs.io/api/images/bd96a5ca-7efe-4aa5-982d-1274dd6da877/1920/w/sale-t3-giay-nike-air-max-270-react-vast-grey-ci3866-100-ap-dung-chuyen-khoan.jpeg",
        },
    ];
    state = {
        product: [],
    };
    showDetail = (product) => {
        this.setState({
            product: product,
        });
        console.log(product);
    };
    render() {
        return (
            <div>
                <div className="container">
                    <ProductsList
                        productsList={this.productsList}
                        showDetail={this.showDetail}
                    />
                    <ModalDetails productDetail={this.state.product} />
                </div>
            </div>
        );
    }
}

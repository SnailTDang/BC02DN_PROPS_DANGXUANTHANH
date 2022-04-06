import React, { Component } from "react";
import Products from "./Products";

export default class ProductsList extends Component {
    renderList = () => {
        return this.props.productsList.map((item) => {
            return (
                <div className="col-4 mb-5" key={`item${item.id}`}>
                    <Products
                        product={item}
                        showDetail={this.props.showDetail}
                    />
                </div>
            );
        });
    };
    render() {
        return (
            <div>
                <h1 className="text-center">Shoes Shop</h1>
                <div className="row">{this.renderList()}</div>
            </div>
        );
    }
}

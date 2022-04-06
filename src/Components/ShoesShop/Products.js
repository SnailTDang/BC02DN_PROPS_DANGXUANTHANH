import React, { Component } from "react";

export default class Products extends Component {
    render() {
        let { id, name, price, shortDescription, image } = this.props.product;
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-text">
                        {price.toLocaleString("de-DE", {
                            style: "currency",
                            currency: "EUR",
                        })}
                    </h5>
                    <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                            this.props.showDetail(this.props.product);
                        }}
                    >
                        Xem chi tiết
                    </a>
                </div>
            </div>
        );
    }
}

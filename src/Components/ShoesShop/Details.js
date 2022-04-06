import React, { Component } from "react";

export default class Details extends Component {
    render() {
        let {
            id,
            name,
            price,
            alias,
            description,
            shortDescription,
            quantity,
            image,
        } = this.props.detail;
        return (
            <div>
                <div className="row">
                    <div className="col-5">
                        <h4 className="text-center">{name}</h4>
                        <img
                            src={image}
                            alt="..."
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                    <div className="col-7">
                        <h2 className="text-center">Chi tiết</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Thuộc tính</th>
                                    <th scope="col">Thông tin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Tên gọi khác</td>
                                    <td>{alias}</td>
                                </tr>
                                <tr>
                                    <td>Giá</td>
                                    <td>{price  }</td>
                                </tr>
                                <tr>
                                    <td>Mô tả</td>
                                    <td>{description}</td>
                                </tr>
                                <tr>
                                    <td>Số Lượng</td>
                                    <td>{quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

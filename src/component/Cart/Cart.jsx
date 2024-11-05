import React from 'react'
import "./Cart.css"

function Cart() {
    return (
        <>
            <div>
                <div className="cart-box">
                    <div className="cart-tag">
                        <h1>Cart</h1>
                        <p>
                            Very us move be blessed multiply night
                        </p>
                    </div>
                    <div className="cart-tag2">
                        <a href="index.html">
                            Home /
                        </a>
                        <a href> Cart </a>
                    </div>
                </div>
                <div className="cart-product">
                    <div className="table">
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ width: '66%' }}>Product</th>
                                    <th style={{ width: '12%' }}>Price</th>
                                    <th style={{ width: '12%' }}>Quantity</th>
                                    <th style={{ width: '12%' }}>Total</th>
                                </tr>
                                {/*  */}
                                <tr>
                                    <td>
                                        <div className="media">
                                            <div className="product1">
                                                <img
                                                    src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                                                    alt />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    Minimalistic shop for multipurpose use
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>$360.00</h5>
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <h5>$720.00</h5>
                                    </td>
                                </tr>
                                {/*  */}
                                <tr>
                                    <td>
                                        <div className="media">
                                            <div className="product1">
                                                <img
                                                    src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                                                    alt />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    Minimalistic shop for multipurpose use
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>$360.00</h5>
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <h5>$720.00</h5>
                                    </td>
                                </tr>
                                {/*  */}
                                <tr>
                                    <td>
                                        <div className="media">
                                            <div className="product1">
                                                <img
                                                    src="https://themewagon.github.io/eiser/img/product/single-product/cart-1.jpg"
                                                    alt />
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    Minimalistic shop for multipurpose use
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>$360.00</h5>
                                    </td>
                                    <td>
                                        <input type="number" />
                                    </td>
                                    <td>
                                        <h5>$720.00</h5>
                                    </td>
                                </tr>
                                {/*  */}
                                <tr>
                                    <td>
                                        <a className="gray_btn" href="#">
                                            Update Cart
                                        </a>
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Coupon Code" />
                                    </td>
                                    <td>
                                        <a className="main_btn" href="#">Apply</a>
                                    </td>
                                    <td>
                                        <a className="gray_btn" href="#">
                                            Close Coupon
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>$2160.00</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cart

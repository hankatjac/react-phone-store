import React from 'react';
import {NavLink} from 'react-router-dom';


const CartTotasls = ({value}) => {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <NavLink to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                clear cart
                            </button>
                        </NavLink>
                        <h5>
                            <span className="text-title">
                                subtotal: <strong>$ {cartSubTotal}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax: <strong>$ {cartTax}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total: <strong>$ {cartTotal}</strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>     
        </React.Fragment>
    );
};

export default CartTotasls;
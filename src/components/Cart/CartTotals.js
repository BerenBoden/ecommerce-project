import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const OrderSum = styled.div`
    .container {
        border: 1px solid #777;
        border-radius: 3px;
    }
`

export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
    <React.Fragment>
        <OrderSum>
            <div className="container">
                <div className="row">
                    <div className="summary-total col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <h5>
                            <span className="text-title">
                                Subtotal:
                            </span>
                            <strong>
                                &nbsp;${cartSubTotal}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax:
                            </span>
                            <strong>
                                &nbsp;${cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:
                            </span>
                            <strong>
                                 &nbsp;${cartTotal}
                            </strong>
                        </h5>
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </OrderSum>
        </React.Fragment>
    )
}

import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {
                        id, 
                        company, 
                        img, 
                        info, 
                        price, 
                        title, 
                        inCart
                    } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product img" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-captalize">
                                    <h2>
                                        Model: {title}
                                    </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made By: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4>
                                        <strong>
                                            Price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-captalize font-weight-bold mt-3 mb-0">
                                        Product Description:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back To Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? "In Cart" : "Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

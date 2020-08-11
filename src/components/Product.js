import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
 
const ProductWrapper = styled.div`
    .card{
        .img-container {
            position: relative;
            overflow: hidden;
            .card-img-top{
                transition: all 0.2s ease-in-out;
            }
        }
        .img-container:hover .cart-btn{
            transform: translate(0, 0);
        }
        .img-container:hover .card-img-top{
            transform: scale(1.2);
        }
        background: #fff;
        .card-footer{
            position: relative;
            height: 50px;
            z-index: 2;
        }
        .cart-btn{
            z-index: 1;
            position: absolute;
            border: none;
            padding: 5px 10px;
            border-radius: 5px 0 0 0;
            bottom: 0;
            right: 0;
            transition: all 0.1s linear;
            transform: translate(100%,100%);
            &:focus{
                outline: 0;
            }
            &:hover{
                color: #fff;
                background: #000;
                transform: scale(1.2);
            }
            .card-img-top{
                transition: all 1s linear;
        }
    }
    @media only screen and (max-width: 1024px){
        .cart-btn{
            transform: translate(0,0);
        }
    }
`

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {value => (
                    <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product img" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" 
                        disabled = {inCart ? true : false} 
                        onClick = {() => {
                            value.addToCart(id);
                            value.openModal(id);
                            }}
                        >
                            {inCart?(<p className="text-captalize mb-0" disabled>In Cart</p>):<i className="fas fa-cart-plus"/>}
                        </button>
                    </div>
                    )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

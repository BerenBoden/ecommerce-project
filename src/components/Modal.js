import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

const ModalContainer = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.4);
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--background);
        border-radius: 5px;
        transition: 0.2s all linear;
    }
`

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const{img, title, price } = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-captalize p-5">
                                        <h5>Item added to your cart</h5>
                                        <img src={img} className="img-fluid" alt="Product img"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price: ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Go Back
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Go To Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}


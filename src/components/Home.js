import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context';
import Showcase from './Showcase';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Showcase />
                <div className="py-5">
                    <div className="container">
                        <Title name="Our Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <Product />
        )
    }
}

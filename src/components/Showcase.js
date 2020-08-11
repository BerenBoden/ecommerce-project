import React, { Component } from 'react';
import styled from 'styled-components';

export const Carousel = styled.div`
.carousel .carousel-item{
    height: 500px;
}
.carousel-item img{
    position: absolute;
    object-fit:cover;
    min-height: 500px;
    width: 80%!important;
    text-align: center;
    left: 50%;
    transform: translate(-50%, 5%);
    z-index: 1;
}
.next-icon i, .prev-icon i{
    color: #000;
    font-size: 1.2rem;
}
.carousel-indicators {
    color: #000!important;
}
`

export default class Showcase extends Component {
    render() {
        return (
            <Carousel>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../img/img_slide1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../img/img_slide2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../img/img_slide3.png" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="prev-icon" aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="next-icon" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </Carousel>
        )
    }
}

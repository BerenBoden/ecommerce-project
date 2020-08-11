import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

const NavWrapper = styled.nav`
    background: #FFF;
    height: 90px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
    img {
        width: 200px;
    }
    .nav-link {
        color: #000;
        transition: all ease-in-out 0.3s;
        border-radius: 5px;
        &:hover {
            background: var(--lightRed);
            padding: 5px 10px;
            color: #fff;
        }
    }
    @media only screen and (max-width: 768px){
        .nav-item{
            display: none;
        }
    }
`

export const Navigation = () => (
    <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
            <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center d-flex">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/details" className="nav-link">
                    Details
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
                </span>
            </ButtonContainer>
        </Link>
    </NavWrapper>
)


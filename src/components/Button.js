import React, { Component } from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: none;
    margin: 5px 5px;
    color: ${props => (props.cart ? "var(--lightRed)" : "var(--lightBlue)")};
    border:1px solid ${props => (props.cart ? "var(--lightRed)" : "var(--lightBlue)")};
    border-radius: 3px;
    outline: 0;
    text-transform: captalize;
    font-size: 1rem;
    padding: 5px 10px;
    transition:all 0.2s ease-in-out;
    &:hover {
        background: ${props => (props.cart ? "var(--lightRed)" : "var(--lightBlue)")};
        color: #fff;
        border: none;
    }
    &:focus {
        outline: 0;
    }
    @media only screen and (max-width: 768px) {
        .navbar-nav{
            display: none
        }
    }
`;

export default class Button extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

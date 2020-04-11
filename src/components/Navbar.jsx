import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
                <NavLink to="/">
                    <img src={logo} alt="store logo" className="navbar-brand" />
                </NavLink>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <NavLink to="/" className="nav-NavLink">
                            Products
                        </NavLink>
                    </li>
                </ul>

                <NavLink to="/cart" className="ml-auto" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </NavLink>
            </NavWrapper>
        );
    }
}


export default Navbar;

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-NavLink {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;
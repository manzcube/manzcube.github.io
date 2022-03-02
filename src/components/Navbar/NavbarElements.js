import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: #2d2d30;
height: 8ch;
display: flex;
justify-content: space-between;
z-index: 10;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
z-index: 10;

&:hover {
    text-decoration: underline !important;
    color: white;
}

@media screen and (max-width: 992px) {
    display: none;
}
`

export const Bars = styled(FaBars)`
display: none;
color: white;

@media screen and (max-width: 992px) {
    display: block;
    font-size: 3ch;

}
`





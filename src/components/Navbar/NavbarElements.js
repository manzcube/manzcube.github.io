import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
background: #2d2d30;
height: 8ch;
display: flex;
justify-content: space-between;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`







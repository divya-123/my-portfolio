// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

// rgba(0,255,0,0.4)
// rgba(0,255,0,0.2)
const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #cad0d7;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(81, 38, 53, 0.5);
    box-shadow: 0 0 8px 6px rgba(81, 38, 53, 0.5);
    color: #cad0d7
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn width={30} height={30} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton

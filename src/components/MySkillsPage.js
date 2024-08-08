import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, SpaceTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1rem;
width: 35vw;
height: 70vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
border-radius: 20px;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition-property: background-color;
    transition-timing-function: ease-in-out;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={SpaceTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />
            <Main>
<Title>
    <Design width={40} height={40} /> Designer
</Title>
<Description>
As a front-end designer, I craft seamless and intuitive digital experiences, turning ideas into visually engaging interfaces that users love to explore.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Websites
    </li>
    <li>
        Mobile Apps
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I bridge the gap between design and functionality, bringing concepts to life while collaborating effectively to ensure every detail aligns with the user's vision.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Tailwind, Firebase
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, CodeSandbox
</p>
</Description>

</Main>

    <BigTitle text="SKILLS" top="80%" right="30%" />

</Box>

</ThemeProvider>
        
    )
}

export default MySkillsPage

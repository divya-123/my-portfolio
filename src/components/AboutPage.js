import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {SpaceTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import girlcoder from '../assets/Images/girlcoder.png';
import girldancer from '../assets/Images/dancer.png';
import girlplayer from '../assets/Images/badminton-player.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Coder = styled.div`
position: absolute;
top: 5%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Dancer = styled.div`
position: absolute;
top: 30%;
right: 15%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Player = styled.div`
position: absolute;
top: 50%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  border-radius: 20px;
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 7rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={SpaceTheme}>
    <Box>

        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark' />

        <Coder>
            <img src={girlcoder} alt="coder" />
        </Coder> 
        <Player>
            <img src={girlplayer} alt="player" />
        </Player> 
        <Dancer>
            <img src={girldancer} alt="dancer" />
        </Dancer>    
        <Main>
        I'm a front-end developer. I love creating web applications using React, Redux, Javascript and so on. 
        I am a team player and understand the dynamics of team projects and timelines. 
        <br/>
        When I’m not weaving lines of code, I bring precision on the badminton court or I lose myself in the art of Kathak. 
        Whether I’m crafting digital worlds, chasing shuttlecocks, or spinning in graceful circles, each passion fuels the other, creating a rhythm that drives me forward. 
        <br/> <br/>
        Do connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage

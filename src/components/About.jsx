// Este componente se encarga de presentar un elemento en el navegador
import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutAvatarImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #020249;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #065b7c;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #065b7c;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

//retorn explicito: como solo hay un elemento que retornar
const About = ({ avatar, name, profession ,bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                    <AboutAvatarImg src={avatar} alt={name} />
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <AboutProfession>
                {profession}
            </AboutProfession>
            <AboutBio>
                {bio}
            </AboutBio>
            <AboutLocation>
                {address}
            </AboutLocation>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
    );

//lo exportamos para poderlo utilizar donde sea necesario
export default About;
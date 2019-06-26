import React from 'react';
import styled from 'styled-components';

const mainStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    padding: 1em;
`;

const mainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    grid-row-gap: 0.5em;

    @media only screen and (max-width : 767px) {
        grid-template-columns: 1fr;
    };
`;

//Esto significa que es un return explícito: que no requiere mas indicaciones y solo exporta cuando se requiera
const Main = ({children }) => (
    < mainStyled >
        <mainContainer>
            {children}
        </mainContainer>
    </mainStyled>
);

export default Main;


import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: 0% 5rem;
    background-color: #F7C0C0;
    max-width: 400px;
    margin-top: 0rem;
    font-size: medium;
`;
const ContenedorH1 = styled.h1`
    font-size: 30px;
    text-align: center;
    position: relative;
`;
const ContenedorP = styled.p`
    font-size: 25px;
    padding: 0.5rem;
    text-align: right;
`;

const Frase = ({frase}) => {
    return ( 
        <ContenedorFrase>
            <ContenedorH1>{frase.quote}</ContenedorH1>
            <ContenedorP>{frase.author}</ContenedorP>
        </ContenedorFrase>
     );
}
 
export default Frase;

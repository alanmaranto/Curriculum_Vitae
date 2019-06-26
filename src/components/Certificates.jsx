import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificates"/>

        {
                props.data.map((cer, index) => (
                    <div className="Certificates-item" key={`Certificates-${index}`}>
                    <H3Styled>{cer.name} @ {cer.institution} 
                        <span> {cer.date} </span>
                    </H3Styled>
                    <PStyled content={cer.description} />
                    </div>
                ))
        }
    </div>
);

export default Certificates;
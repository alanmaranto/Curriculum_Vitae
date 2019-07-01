import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = props => (
    <div className="Education">
        <H2Styled name="Education"/>
            {
                props.data.map((edu, index) => (
                    <div className="Education-item" key={`Education-${index}`}>
                        <H3Styled>{edu.degree} @ {edu.institution} 
                            <span>{edu.startDate} - {edu.endDate}</span>
                        </H3Styled>
                        <PStyled content={edu.description}/>
                    </div>
                ))
            }
    </div>
);

export default Education;
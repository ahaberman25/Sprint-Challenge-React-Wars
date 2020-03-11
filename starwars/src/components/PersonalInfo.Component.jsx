import React from 'react';
import styled from 'styled-components'

const PersonalInfo = (props) => {
    const PersonalInfoContainer = styled.div`
        width: 49%;
    `;
    const PersonalInfoTitle = styled.p`
        font-weight: bold;
    `;

    return (
        <PersonalInfoContainer>
            <PersonalInfoTitle>Personal Information</PersonalInfoTitle>
            <p><b>Born:</b> {props.info.birth_year}</p>
            <p><b>Hair Color:</b> {props.info.hair_color}</p>
            <p><b>Skin Color:</b> {props.info.skin_color}</p>
            <p><b>Eye Color:</b> {props.info.eye_color}</p>
            <p><b>Gender:</b> {props.info.gender}</p>
        </PersonalInfoContainer>
    )
}

export default PersonalInfo;
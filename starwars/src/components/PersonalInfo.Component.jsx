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
            <p>Born {props.info.birth_year}</p>
            <p>Hair Color {props.info.hair_color}</p>
            <p>Skin Color {props.info.skin_color}</p>
            <p>Eye Color {props.info.eye_color}</p>
            <p>Gender {props.info.gender}</p>
        </PersonalInfoContainer>
    )
}

export default PersonalInfo;
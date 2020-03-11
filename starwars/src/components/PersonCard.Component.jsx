import React from 'react';
import PersonalInfo from './PersonalInfo.Component'
import Films from './Films.Component'
import Vehicles from './Vehicles.Component'
import Starships from './Starships.Component'
import styled from 'styled-components'

const PersonCard = (props) => {
    // styles
    const Container = styled.div`
        width: 30%;
        padding: 10px;
        margin: 1%;
        background-color: rgba(245,245,245,.7);
        border-color: grey;
        border-radius: 10px;
    `;
    const PersonalInfoContainer = styled.div`
        display: flex;
    `;


    return (
        <Container>
            <h1>{props.person.name}</h1>
                <PersonalInfoContainer>
                    <PersonalInfo info={props.person} />
                    <Films movies={props.person} />
                    <Vehicles vehicle={props.person} />
                    <Starships starship={props.person} />
                </PersonalInfoContainer>
        </Container>
    )
}

export default PersonCard;


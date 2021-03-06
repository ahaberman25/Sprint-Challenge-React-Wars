import React from 'react';
import PersonalInfo from './PersonalInfo.Component'
import Films from './Films.Component'
import Vehicles from './Vehicles.Component'
import Starships from './Starships.Component'
import Species from './Species.Component'

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
        flex-wrap: wrap;
    `;
    const InfoRow = styled.div`
        display: flex;
        flex-wrap: wrap;
    `;


    return (
        // all data pulled here
        <Container>
            <h1>{props.person.name}</h1>            
            <Species species={props.person} />
                <PersonalInfoContainer>
                    <PersonalInfo info={props.person} />
                    <Films movies={props.person} />
                    <InfoRow>
                        <Vehicles vehicle={props.person} />
                        <Starships starship={props.person} />
                    </InfoRow>
                </PersonalInfoContainer>
        </Container>
    )
}

export default PersonCard;


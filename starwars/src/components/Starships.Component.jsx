import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Starships = (props) => {
    

    const [state, setState] = useState([])

        
    useEffect(() => {
        axios.all(props.starship.starships.map(l => axios.get(l)))
            .then(res => {
                // all requests are now complete
                console.log(res)
                setState(res)
            })
    }, [props])  

    const StarshipContainer = styled.div`
        width: 100%;
    `;
    const StarshipHeader = styled.p`
        font-weight: bold;
    `;
    const StarshipUl = styled.ul`
        display: flex;
        flex-direction: row;
    `;
    const StarshipLi = styled.li` 
        padding-left: 20px;
        list-style: none;
    `;

    return (
        <StarshipContainer>
            <StarshipHeader>Starships</StarshipHeader>
            <StarshipUl>
                {state.map(film => {
                    return <StarshipLi>{film.data.name}</StarshipLi>
                })}    
            </StarshipUl>
        </StarshipContainer>
    )
}

export default Starships;
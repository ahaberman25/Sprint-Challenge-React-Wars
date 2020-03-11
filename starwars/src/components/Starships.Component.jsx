import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Starships = (props) => {
    

    const [state, setState] = useState([])

        
    useEffect(() => {
        axios.all(props.starship.starships.map(l => axios.get(l)))
            .then(res => {
                // all requests are now complete
                // console.log(res)
                setState(res)
            })
    }, [props])  

    const StarshipContainer = styled.div`
        width: 100%;
    `;
    const StarshipHeader = styled.p`
        font-weight: bold;
        text-align: left;
    `;
    const StarshipUl = styled.ul`
        display: flex;
        flex-direction: row;
        padding: 0;
        flex-wrap: wrap;
    `;
    const StarshipLi = styled.li` 
        width: 100%;
        list-style: none;
        text-align: left;
        padding-left: 20px;
    `;

    return (
        <StarshipContainer>
            <StarshipHeader>Starships</StarshipHeader>
            <StarshipUl>
                {state.map(film => {
                    if (props.starship.starships === []) {
                        return <p>N/A</p>  
                    } else {
                        return <StarshipLi>{film.data.name}</StarshipLi>                      
                    }
                })}    
            </StarshipUl>
        </StarshipContainer>
    )
}

export default Starships;
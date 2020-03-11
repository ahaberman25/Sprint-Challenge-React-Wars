import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Vehicles = (props) => {
    

    const [state, setState] = useState([])

        
    useEffect(() => {

        axios.all(props.vehicle.vehicles.map(l => axios.get(l)))
            .then(res => {
                // all requests are now complete
                // console.log(res)
                setState(res)
            })
    }, [props])  

    const VehiclesContainer = styled.div`
       width: 100%;
    `;
    const VehiclesHeader = styled.p`
        font-weight: bold;
        text-align: left;
    `;
    const VehiclesUl = styled.ul`
        display: flex;
        flex-direction: row;
        padding: 0;
    `;
    const VehiclesLi = styled.li` 
        padding-left: 20px;
        list-style: none;
    `;

    return (
        <VehiclesContainer>
            <VehiclesHeader>Vehicles:</VehiclesHeader>
            <VehiclesUl>
                {state.map(film => {
                    return <VehiclesLi>{film.data.name}</VehiclesLi>
                })}    
            </VehiclesUl>
        </VehiclesContainer>
    )
}

export default Vehicles;
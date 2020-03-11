import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Vehicles = (props) => {
    

    const [state, setState] = useState([])

        
    useEffect(() => {

        axios.all(props.vehicle.vehicles.map(l => axios.get(l)))
            .then(res => {
                // all requests are now complete
                console.log(res)
                setState(res)
            })
    }, [])  

    const MovieInfoContainer = styled.div`
        width: 49%;
    `;


    return (
        <MovieInfoContainer>
            <p></p>
            <ul>
                {state.map(film => {
                    // console.log('filmsarray map', film)
                    return <li>{film.data.name}</li>
                })}    
            </ul>
        </MovieInfoContainer>
    )
}

export default Vehicles;
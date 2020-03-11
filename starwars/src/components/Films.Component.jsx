import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Films = (props) => {
    

    const [state, setState] = useState([])

        
    useEffect(() => {

        axios.all(props.movies.films.map(l => axios.get(l)))
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
            <p>Movies appeared in</p>
            <ul>
                {state.map(film => {
                    // console.log('filmsarray map', film)
                    return <li>{film.data.title}</li>
                })}    
            </ul>
        </MovieInfoContainer>
    )
}

export default Films;
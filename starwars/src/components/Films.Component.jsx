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
    }, [props])  

    const MovieInfoContainer = styled.div`
        width: 49%;
    `;
    const MovieInfoHeader = styled.p`
        font-weight: bold;
    `;
    const MovieInfoUl = styled.ul`
        display: flex;
        flex-direction: column;
        padding: 0;
    `;
    const MovieInfoLi = styled.li` 
        list-style: none;
        padding-top: 5px;
    `;


    return (
        <MovieInfoContainer>
            <MovieInfoHeader>Movies appeared in</MovieInfoHeader>
            <MovieInfoUl>
                {state.map(film => {
                    return <MovieInfoLi>{film.data.title}</MovieInfoLi>
                })}    
            </MovieInfoUl>
        </MovieInfoContainer>
    )
}

export default Films;
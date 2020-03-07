import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Films = (props) => {
    
    var [films, setFilms] = useState(props.movies)
    // console.log('movies', films.films)

    // get films api
    useEffect(() => {
        films.films.map((movie) => {
            axios.get(movie)
                .then(response => {            
                    setFilms(response.data)
                }).catch(error => {
                    console.log(error)
            })
        })        
    }, [])

    // console.log('movie data', films.characters)
    // console.log('character url', props.movies.url)    

    const MovieInfoContainer = styled.div`
        width: 49%;
    `;
    const MovieHeader = styled.p`
        font-weight: bold;
    `;

    return (
        <MovieInfoContainer>
            {props.movies.url === films.characters ? (
                <div>
                    <p>Last Movie Appeared in</p>
                    <ul>
                        {films.title.forEach((title) => {
                            return <li>{title}</li>
                        })}
                    </ul>
                </div>
                
            ) : (
                <div>
                    <MovieHeader>Last Movies Appeared in</MovieHeader>
                    <p>{films.title}</p>
                </div>
            )}
        </MovieInfoContainer>
    )
}

export default Films;
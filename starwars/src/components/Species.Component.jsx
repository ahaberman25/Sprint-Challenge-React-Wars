import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Species = (props) => {
    

    const [state, setState] = useState([])
    // console.log('spiec props', props)

        
    useEffect(() => {
        axios.get(props.species.species)
          .then(response => {
            //   console.log('species', response)
            setState(response.data)
          }).catch(error => {
            console.log(error)
          })
      }, [props])

    return (
        <p><b>Species:</b> {state.name} / <b>Average Lifespan</b> {state.average_lifespan} / <b>Language:</b> {state.language}</p>
    )
}

export default Species;
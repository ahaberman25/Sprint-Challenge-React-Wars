import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PersonCard from './components/PersonCard.Component'
import styled from 'styled-components'

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [sw, setSw] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // get people api
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        setSw(response.data.results)
      }).catch(error => {
        console.log(error)
      })
  }, [])


  // console.log data
  console.log(sw)

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {sw.map(item => {
          return <PersonCard person={item} key={item.name} />
        })}      
      </Container>
    </div>
  );
}

export default App;

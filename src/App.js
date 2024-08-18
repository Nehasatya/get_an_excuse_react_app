import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { getRoles } from '@testing-library/react';

function App() {

  const get_an_excuse = (thing) =>
  {

    console.log(thing)

    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${thing}`).then((res) => 
    {
      console.log(res.data[0].excuse);
    })
  }

  return (
    <div className="App">
      <h1>Get an Excuse</h1>
      <button onClick={() => get_an_excuse('party')}> Party </button>
      <button onClick={() => get_an_excuse('family')}> Family </button>
      <button onClick={() => get_an_excuse('office')}> Office </button>
    </div>
  );
}

export default App;

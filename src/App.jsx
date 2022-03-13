import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Character from './components/character';
import Navigation from './components/Navigation';

const App = () => {

  const [rest, setRest] = useState([])
  const [info, setInfo] = useState({})

  const initUrl = 'https://rickandmortyapi.com/api/character'

  const getCharacters = async(url) => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setRest(data.results)
      setInfo(data.info)
    }catch(err){
      console.log(err)
    }
  }

  const onPrev = () => {
    getCharacters(info.prev)
  }

  const onNext = () => {
    getCharacters(info.next)
  }

  useEffect(()=> {
    getCharacters(initUrl)
  },[])

  return (
    <>
      <Nav/>
      <Navigation prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
      <Character characters={rest} />
    </>
  );
}

export default App;

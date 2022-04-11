import React, { useEffect, useState } from "react";
import Character from '../../components/Character/Character';
import Navigation from '../../components/Navigation/Navigation';


const Home = () => {
    const [rest, setRest] = useState([])
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

    const initUrl = 'https://rickandmortyapi.com/api/character'

    const getCharacters = async(url) => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            setLoading(false)
            setRest(data.results)
            setInfo(data.info)
        }catch(err){
            setLoading(false)
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

    return(
        <>
            <Navigation prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
            {
                loading ? <p style={{textAlign: 'center',fontSize:'2rem'}}>cargando... </p> : <Character characters={rest} />
            }
            
        </>
    )
}
export default Home
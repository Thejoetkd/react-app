import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Detail = () => {
    const params = useParams()
    const initUrl = `https://rickandmortyapi.com/api/character/${params.id}`
    const getCharacterDetail = async(url) => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setDetail(data)
        }catch(error){
            console.log(error)
        }
    }
    const [detail, setDetail] = useState([])
    useEffect(()=> {
        getCharacterDetail(initUrl)
    },[initUrl])
    return (
        <section className="container">
            <div className="row">
                <div className="col">
                    <Link to={'/'} className="btn btn-primary mt-3 mb-5"> Atras </Link>
                    <div className="card mb-3" style={{maxWidth: '600px', margin: 'auto'}}>
                        <img className="card-img-top" src={detail.image} alt={detail.name} />
                        <div className="card-body">
                            <h5 className="card-title"> {detail.name} </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Detail
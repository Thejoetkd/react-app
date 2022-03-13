import React, {useState} from "react"
import StatusCircle from "./StatusCircle"



const Card = (props) => {
   const { name, status, image } = props.info
   useState(()=> {
   },[])
    return(
        <>
            {
                props ? 
                    <div className="card mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{width: '18rem'}}>
                        <img src={image} className="card-img-top" alt={ name } />
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                            <p className="card-text">{ status } <StatusCircle estado={status} /> </p>
                        </div>
                    </div>
                    : 
                    <p>Cargando Personajes... </p>
            }   
        </>
    )
}
export default Card
import React, {useState} from "react"
import StatusCircle from "../StatusCircle/StatusCircle"
import { useNavigate } from "react-router-dom"



const Card = (props) => {
   const { name, status, image, gender, id } = props.info
   const navigate = useNavigate()
   useState(()=> {
   },[])
    return(  
        <div className="card mt-3 mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{width: '18rem'}} onClick={()=> navigate(`/detail/${id}`)}>
            <img src={image} className="card-img-top" alt={ name } />
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ status } - { gender } <StatusCircle estado={status} /> </p>
            </div>
        </div>    
    )
}
export default Card
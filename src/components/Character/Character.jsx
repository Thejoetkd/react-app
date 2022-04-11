import React from "react"
import Card from "../Card/Card"

const Character = (props) => {
    const {characters} = props
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="content-flex">
                    {
                        characters.map((item)=>{
                            return(
                                <Card info={item} key={item.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Character
import React, { useState, useEffect } from "react"



const StatusCircle = (props) => {
    const { estado } = props
    const [color, setColor] =  useState('')
    const colorCircle = (status) => {
        switch(status){
            case 'Alive':
                setColor('green')
                break;
            case 'unknown':
                setColor('gray')
                break;
            case 'Dead':
                setColor('red')
                break;
            default:
                return setColor('gray')
        }
    }
    useEffect(()=> {
        colorCircle(estado)
    },[estado])
    return(
        <span className="card-status-circle" style={{background: color}}></span>
    )
}
export default StatusCircle
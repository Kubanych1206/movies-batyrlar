import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCinema } from '../Redux/actions'
import "./Movies.css"
import { Link } from 'react-router-dom'

const Movie = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="box">
                <div className="img" onClick={()=> dispatch(AddCinema(props.id))}>
                
                    <Link to='/zakladka'>
                    <img src={props.img} alt="photo" />
                    </Link>
                </div>
                <div className="minibox">
                    
                    <div className="name">{props.name}</div>
                    <div>Год выпуска: {props.release}</div>
                    <div>Продолжительность: {props.duration}</div>
                    {/* <div>Описание: {props.description}</div> */}

                </div>
            </div> 
        </div>
    )
}

export default Movie;
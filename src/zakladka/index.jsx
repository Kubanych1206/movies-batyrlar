import React from 'react'
import { useSelector } from 'react-redux'

export const Zakladka = () => {
    const zakItem = useSelector(state => state.cinema)
    const zakNum = useSelector(state => state.num)
    let items = zakNum === 0 ? zakItem[zakNum] : zakItem[zakNum - 1]
    
    return (
        <div className="container">
            <div className="box">
                <div className="img">
                    <img src={items.img} alt="photo" />
                </div>
                <div className="minibox">
                    <div>Название: {items.name}</div>
                    <div>Год выпуска: {items.release}</div>
                    <div>Продолжительность: {items.duration}</div>
                    <div>Описание: {items.description}</div>
                    <div>Подробное описание</div>
                </div>
            </div> 
        </div>
    )
    
}


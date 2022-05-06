import React from 'react'
import cardtop from './CardTop'
import cardbot from './CardBottom'
import "../styles/Card1.css"

function Card1() {
    return (
        <div className='container__cont-cards'>
            <CardTop/>
            <CardBottom/>
        </div>
    )
}

export default Card1
import React from 'react'

export const GifGridItem = ({gif}) => {
    return (
        <div className = "card animate__animated animate__jackInTheBox">
            <img src={gif.url} alt= {gif.title} />
            
            <h2 key={gif.id}>{gif.title}</h2>
        </div>
    )
}

import React from 'react'

const SliderItem = ({ img, title }) => {
    return (
        <div className='text-center'>
            <img className='rounded-circle p-2 mb-2 s-img mx-auto' style={ { border: "3px solid grey" } } src={ img }></img>
            <p className='text-center'>{ title }</p>
        </div>
    )
}

export default SliderItem
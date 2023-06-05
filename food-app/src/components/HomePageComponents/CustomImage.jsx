import React from 'react'

function CustomImage({ imageSrc }) {
    return (
        <div className='custom-image'>
            <img src={imageSrc} alt='' srcSet="" />
        </div>
    )
}

export default CustomImage;
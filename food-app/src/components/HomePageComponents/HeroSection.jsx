import React from 'react'
import CustomImage from './CustomImage'

function HeroSection() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return (
        <div className='section hero'>
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae similique distinctio porro cum cumque dolorem architecto suscipit modi ex deserunt qui ipsum, enim, itaque sed nesciunt quia illum totam consequuntur?</p>
                <button className='btn'>Explore Now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imageSrc = {src}/>
                ))}
            </div>
        </div>
    )
}

export default HeroSection

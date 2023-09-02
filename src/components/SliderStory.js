import React from 'react'
import Slider from "react-slick";
import SliderItem from './SliderItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderStory = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 6
    };
    return (
        <Slider { ...settings }>
            <SliderItem title={ "ReactJS" } img={ "https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png" } />
            <SliderItem title={ "JavaScript" } img={ "https://img.icons8.com/?size=512&id=108784&format=png" } />
            <SliderItem title={ "Boostrap 5" } img={ "https://img.icons8.com/?size=512&id=84710&format=png" } />
            <SliderItem title={ "NodeJS" } img={ "https://img.icons8.com/?size=512&id=54087&format=png" } />
            <SliderItem title={ "HTML" } img={ "https://img.icons8.com/?size=512&id=EAUyKy3IwmqM&format=png" } />
            <SliderItem title={ "CSS" } img={ "https://img.icons8.com/?size=512&id=21278&format=png" } />
            <SliderItem title={ "SCSS" } img={ "https://cdn-icons-png.flaticon.com/512/5968/5968358.png" } />
            <SliderItem title={ "MongoDB" } img={ "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png" } />
            <SliderItem title={ "Ant Design" } img={ "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png" } />
        </Slider>
    )
}

export default SliderStory
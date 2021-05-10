import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const data=[
    {
        id:1,
        image:"https://kdq-react-movie-app.surge.sh/images/hero2.png"
    },
    {
        id:2,
        image:"https://kdq-react-movie-app.surge.sh/images/hero4.png"
    },
    {
        id:3,
        image:"https://kdq-react-movie-app.surge.sh/images/hero1.jpg"
    },
    {
        id:4,
        image:"https://kdq-react-movie-app.surge.sh/images/hero3.png"
    }
]
function Sliders() {
    const renderSlides = () =>
    data.map((num,index) => (
      <div key={index}>
        <img src={num.image}  className="anhchay"></img>
      </div>
    ));
    
    
    return (
        <div>
     <Slider
     dots={true}
     slidesToShow={1}
     slidesToScroll={1}
     autoplay={true}
     speed={500}
     arrows={true}
     adaptiveHeight={false}
     infinite={true}
     autoplaySpeed={6000}>
         {renderSlides()}

     </Slider>
    
     </div>
    )
}

export default Sliders

import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const data=[
    {
        id:1,
        image:"https://kdq-react-movie-app.surge.sh/images/slide1.jpg"
    },
    {
        id:2,
        image:"https://kdq-react-movie-app.surge.sh/images/slide12.jpg"
    },
    {
        id:3,
        image:"https://kdq-react-movie-app.surge.sh/images/slide13.jpg"
    },
    {
        id:4,
        image:"https://kdq-react-movie-app.surge.sh/images/slide14.jpg"
    },
    {
        id:5,
        image:"https://kdq-react-movie-app.surge.sh/images/slide5.jpg"
    },
    {
        id:6,
        image:"https://kdq-react-movie-app.surge.sh/images/slide6.jpg"
    },
    {
        id:7,
        image:"https://kdq-react-movie-app.surge.sh/images/slide7.jpg"
    },
    {
        id:8,
        image:"https://kdq-react-movie-app.surge.sh/images/slide8.jpg"
    },
    {
        id:9,
        image:"https://kdq-react-movie-app.surge.sh/images/slide9.jpg"
    },
    {
        id:10,
        image:"https://kdq-react-movie-app.surge.sh/images/slide10.jpg"
    },
    {
        id:11,
        image:"https://kdq-react-movie-app.surge.sh/images/slide11.jpg"
    },
    {
        id:12,
        image:"https://kdq-react-movie-app.surge.sh/images/slide12.jpg"
    },
    {
        id:13,
        image:"https://kdq-react-movie-app.surge.sh/images/slide13.jpg"
    },
    {
        id:14,
        image:"https://kdq-react-movie-app.surge.sh/images/slide14.jpg"
    },
    {
        id:15,
        image:"https://kdq-react-movie-app.surge.sh/images/slide15.jpg"
    },
    {
        id:16,
        image:"https://kdq-react-movie-app.surge.sh/images/slide16.jpg"
    },

]
function UngDung() {
    const renderSlides = () =>
    data.map((num,index) => (
      <div key={index}>
        <img src={num.image}  className="anhungdung fluid"></img>
      </div>
    ));
    
    return (
        <div className="container-fluid ungdung mt-2 mt-md-5" id="ungdung">
            <div className="row justify-content-center pb-md-5 ungdung-nen pt-md-5">
                <div className="offset-lg-1 col-lg-5 text-center text-lg-left pt-3 pt-md-5 text-light">
                    <h3>Ứng Dụng Tiện Lợi Dành Cho</h3>
                    <h3>Người Yêu Điện Ảnh</h3>
                    <p className="mb-3">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button className="btn btn-lg btn-danger">App miễn phí - Tải về ngay</button>
                    <p className="mt-2">TIX có hai phiên bản iOS &Android</p>
                </div>
                <div className="col-lg-3 col-7 pb-5 pt-md-5">
                <Slider
              
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
            </div>
        </div>
    )
}

export default UngDung

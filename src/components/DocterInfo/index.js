import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const DocterInfo = () => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="info-container">
          <img
            src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665671383/samples/doctor_1_a54old.jpg"
            alt="doctor"
            className="doctor-img"
          />
          <div className="about-doctor">
            <p className="d-name">Dr.Mary</p>
            <p className="role">gynecologist</p>
            <div className="availability">
              <p className="date">22-Aug-2022</p>
              <p className="time">10:30am</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default DocterInfo

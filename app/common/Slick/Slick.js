import React from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Slick = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        <div>
          <img src='/public/img/1.jpg' alt='banner' />
        </div>
        <div>
          <img src='/public/img/2.jpg' alt='banner' />
        </div>
        <div>
          <img src='/public/img/3.jpg' alt='banner' />
        </div>
        <div>
          <img src='/public/img/4.jpg' alt='banner' />
        </div>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    )
  }
})

export default Slick

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SlideShowRating() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }
  return (
    <div className='max-w-screen-xl m-0'>
      <Slider {...settings}>
        <div className='bg-black'>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SlideShowRating

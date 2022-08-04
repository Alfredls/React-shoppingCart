import Carousel from 'react-bootstrap/Carousel';
import sliderItem from '../data/slider.json'

export const CarouselSlider = () => {
  return (
    <Carousel>
      {
        sliderItem.map(item =>(
          <Carousel.Item interval={5000} key={item.id}>
            <img className="d-block w-100" src={item.imgUrl} alt={item.title} />
            <Carousel.Caption>
              <h3 className='txt-color'>{item.title}</h3>
              <p className='txt-color'>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

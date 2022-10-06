import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function Slider(){
    return(
        <>
        <section>
        
          <div className="row mt-3">
            <div className="col">
              <Carousel variant="dark" >
                <Carousel.Item className='slid slider1'>
                  {/* <img
                    className="d-block w-100"
                    src={require("./image/s1.jpg")}
                    alt="First slide"
                  /> */}
                  <Carousel.Caption className='carousel'>
                    <p>Events At</p>
                    <h1>tinysalt</h1>
                    <p>We offer a highly seasonal and continuously evolving tasting menu experience.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slid slider2'>
                <Carousel.Caption className='carousel'>
                    <p>Dinning At</p>
                    <h1>tinysalt</h1>
                    <p>We offer a highly seasonal and continuously evolving tasting menu experience.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slid slider3'>
                <Carousel.Caption className='carousel'>
                    <p>Happy Hours At</p>
                    <h1>tinysalt</h1>
                    <p>We offer a highly seasonal and continuously evolving tasting menu experience.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        
      </section>
        </>

    );
}
export default Slider;
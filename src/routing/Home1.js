import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Footer from '../component/Footer';
import Slider from '../component/Slider';

function Home1(){
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 300 });
    }, []);
    return(
        <>
            <Slider/>
            <section>
                <div className="container">
                    <div className="mt-5 pt-5">
                        <div style={{color:"#9fc4ce"}}>
                                <h4>Since 1997</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-3'>Welcome to tinysalt</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px" ,marginTop:"20px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------start our Mission sec------------------------- */}
            <section>
                <div className="row mt-5 pt-5">
                    <div data-aos="fade-right" className="col-12 col-lg-6">
                        <div className="mission_color">
                            <div className="mission_img">
                                <h2>
                            <img src={require('../image/mission.jpg')} alt="" />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}} className="pt-5">
                                <h4>Come and See</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Our Mission</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>FIND MORE</button></h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div data-aos="fade-right" className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}} className="pt-5">
                                <h4>Discover</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Gastronomic Experience</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>FIND MORE</button></h6>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-12 col-lg-6">
                        <div className="mission_color">
                            <div className="mission_img">
                                <h2>
                            <img src={require('../image/mission1.jpg')} alt="" />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-5 mb-5 pb-3">
                    <div className="parallex2">
                       <div className="para_color">
                       <h5>Book Now</h5>
                       <h1>Reserve a Table</h1>
                       <div className="d-flex justify-content-evenly mt-4">
                        <div>
                            <h5>Mon - Fri:</h5>
                            <h5>8AM - 12PM</h5>
                            <h5>+1 800 000 111</h5>
                        </div>
                        <div className='d-none d-md-block'>
                            <h5>Mon - Fri:</h5>
                            <h5>8AM - 12PM</h5>
                            <h5>contact@example.com</h5>

                        </div>
                       </div>
                       </div>
                    </div>
                </div>
            </section>

            <Footer/>
            {/* ------------------------end our Mission sec------------------------- */}
        </>       
    );
}
export default Home1;
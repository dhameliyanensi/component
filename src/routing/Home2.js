import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Footer from '../component/Footer';
import Slider from '../component/Slider';

function Home2()
{
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 300 });
    }, []);
    return(
            <>
            <Slider/>
                {/* ---------------------start fine dinning sec---------------------- */}
                <section>
                    <div className="row mt-5 pt-5 pb-5">
                        <div className="col-md-6">
                            <div className="home2"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-evenly">
                                <div>
                                    <div className='px-5'>
                                    <img src={require('../image/home2-2.png')} style={{width:"40%" , marginLeft:"100px"}} alt="" />
                                    </div>
                                    <h4>FINE DINNING</h4>
                                    <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                                <div>
                                    <div className='px-5'>
                                <img src={require('../image/home2-3.png')} style={{width:"40%" ,marginLeft:"100px"}} alt="" />
                                        </div>                                
                                    <h4>INGREDIANTS</h4>
                                    <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <div>
                                    <div className='px-5'>
                                    <img src={require('../image/home2-4.png')} style={{width:"40%" , marginLeft:"100px"}} alt="" />
                                    </div>
                                    <h4>ENJOY WINE</h4>
                                    <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                                <div>
                                    <div className='px-5'>
                                <img src={require('../image/home2-5.png')} style={{width:"40%" ,marginLeft:"100px"}} alt="" />
                                        </div>                                
                                    <h4>SWEET DESSERT</h4>
                                    <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ---------------------end fine dinning sec---------------------- */}
                {/* -------------------strat atmosphere sec-------------------------- */}
                <section>
                    <div className="container">
                <div className="row mt-5 pt-5 pb-5">
                    <div data-aos="fade-right" className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}}>
                                <h4>ATMOSPHERE</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Our Space</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>FIND MORE</button></h6>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-12 col-lg-6">
                        <div>
                            <div>
                                <h2>
                            <img src={require('../image/home2-6.jpg')} alt="" />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5 pb-5">
                <div data-aos="fade-left" className="col-12 col-lg-6">
                        <div>
                            <div>
                                <h2>
                            <img src={require('../image/home2-7.jpg')} alt="" />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}}>
                                <h4>INSPIRATION</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Wine Taste</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>FIND MORE</button></h6>
                        </div>
                    </div>
                </div>
                </div>
            </section>
                {/* -------------------end atmosphere sec-------------------------- */}
                {/* -----------------start testimonial sec-------------------------- */}
                <section className='pb-5 mb-5'>
                    <div className="bg_testi">
                        <div className="owl-carousel owl-theme">
                            <div>
                                <h4>TESTIMONIAL</h4>
                                <h1 className='pt-4'>What Clients Say</h1>
                                <p className='pt-4'>"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat. Duis leo. Sed fringilla mauris sit amet nibh."</p>
                                <h6 className='pt-5'>The Smiths</h6>
                                <p>Agro</p>
                            </div>
                            <div>
                                <h4>TESTIMONIAL</h4>
                                <h1 className='pt-4'>What Clients Say</h1>
                                <p className='pt-4'>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque."</p>
                                <h6 className='pt-5'>Angaela Ray</h6>
                                <p>Rays</p>
                            </div>
                            <div>
                                <h4>TESTIMONIAL</h4>
                                <h1 className='pt-4'>What Clients Say</h1>
                                <p className='pt-4'>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque."</p>
                                <h6 className='pt-5'>Garry Griffin</h6>
                                <p>Smiths</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* -----------------end testimonial sec-------------------------- */}
                {/* ---------------start megical sec------------------------- */}
                <section>
                    <div className="container">
                <div className="row mt-5 pt-5 pb-5">
                    <div data-aos="fade-right" className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}}>
                                <h4>MEGICAL</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Private Events</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>CONTACT US</button></h6>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-12 col-lg-6">
                        <div>
                            <div>
                                <h2>
                            <img src={require('../image/home2-9.jpg')} alt="" />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
                {/* ---------------end megical sec------------------------- */}

            <Footer/>
            </>
    )
}
export default Home2;
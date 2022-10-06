import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Footer from '../component/Footer';

function Home4() {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 300 });
    }, []);
    return (
        <>
            {/* -----------------------start sushi sec----------------------- */}
            <section className='bg-dark'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7">
                        <div className="sushi_relat">
                            <img style={{ width: "50%" }} src={require('../image/home4-1.jpg')} alt="" />
                            <h1 className='sushi_welcome'>Welcome to <br></br> tinysalt <br></br> Sushi</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5">
                        <img src={require('../image/home4-2.jpg')} alt="" />
                    </div>
                </div>
            </section>

            <section className='bg-dark pt-5'>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div data-aos="fade-right" className="col-12 col-lg-6">
                            <div>
                                <div>
                                    <h2>
                                        <img src={require('../image/home4-3.jpg')} alt="" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-12 col-lg-6">
                            <div style={{ color: "#9fc4ce" }}>
                                <img style={{ width: "10%" }} src={require('../image/home4-icon.png')} alt="" />
                            </div>
                            <div>
                                <h1 style={{ letterSpacing: "2px", fontSize: "80px" }} className='pt-5'>Feel the Taste of Japanese Delicious Sushi</h1>
                                <p style={{ fontSize: "18px", color: "white", letterSpacing: "1px", padding: "60px" }}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                                <h6> <button className='find'>
                                    <a style={{ color: "black" }} href="/Home4">EXPLORE</a>
                                </button></h6>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                        <div data-aos="fade-right" className="col-12 col-lg-6">
                            <div style={{ color: "#9fc4ce" }}>
                                <img style={{ width: "10%" }} src={require('../image/home4-icon.png')} alt="" />
                            </div>
                            <div>
                                <h1 style={{ letterSpacing: "2px", fontSize: "80px" }} className='pt-5'>We Make Exquisite & Artistic Sushi</h1>
                                <p style={{ fontSize: "18px", color: "white", letterSpacing: "1px", padding: "60px" }}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                                <h6> <button className='find'>
                                    <a style={{ color: "black" }} href="/Home4">EXPLORE</a>
                                </button></h6>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-12 col-lg-6">
                            <div>
                                <div>
                                    <h2>
                                        <img src={require('../image/home4-5.jpg')} alt="" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -----------------------end sushi sec----------------------- */}
            {/* ---------------------start testimonial sec---------------- */}
            <section>
                <div className="bg_home4">
                    <div>
                        <h1 className='pt-4'>What Clients Say</h1>
                        <div className="row g-3">
                            <div className="col-lg-6 col-xl-4 p-2">
                                <div className="bg-light p-5">
                                    <p>"Caverta is a special place tiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. .</p>
                                    <div className="rounded d-flex">
                                        <img style={{ width: "50%" }} className="img-fluid img-thumbnail" src={require('../image/home4-7.jpg')} alt="" />
                                        <p className='pt-5'>Rachhel Griffin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 p-2">
                                <div className="bg-light p-5">
                                    <p>"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum."</p>
                                    <div className="rounded d-flex">
                                        <img style={{ width: "50%" }} className="img-fluid img-thumbnail" src={require('../image/home4-8.jpg')} alt="" />
                                        <p className='pt-5'>Jesee Castilo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4 p-2">
                                <div className="bg-light p-5">
                                    <p>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."</p>
                                    <div className="rounded d-flex">
                                        <img style={{ width: "50%" }} className="img-fluid img-thumbnail" src={require('../image/home4-9.jpg')} alt="" />
                                        <p className='pt-5'>Danise Pena</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------end testimonial sec---------------- */}
            <Footer/>
        </>
    );
}
export default Home4;
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { IoHeartCircleOutline } from "react-icons/io5"
import './Latest.css';

function Latest() {
    useEffect(() => {
        Aos.init({ duration: 1500, offset: 100 });
    }, []);
    return (
        <>
            <section>
                <div className="container">
                    <h2 className='mt-5 pb-4'>LATEST RECEIPES</h2>
                    <div class="row g-3 row-cols-md-2 row-cols-lg-3">
                        <div data-aos="fade-up" class="feature col">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l1.jpg')} alt="" />
                            </div>
                            <h2>Brain Power Smoothie</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div data-aos="fade-up" class="feature col d-none d-md-block">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l2.jpg')} alt="" />
                            </div>
                            <h2>Rustic Crusty Bread</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div data-aos="fade-up" class="feature col d-none d-lg-block">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l3.jpg')} alt="" />
                            </div>
                            <h2>Almond Pastry Cookies</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                    </div>
                    <div class="row g-3 py-5 row-cols-md-2 row-cols-lg-3">
                        <div data-aos="fade-up" class="feature col">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l4.jpg')} alt="" />
                            </div>
                            <h2>8 Easy Instant Pot Recipes</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div data-aos="fade-up" class="feature col d-none d-md-block">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l5.jpg')} alt="" />
                            </div>
                            <h2>Rose Syrup Ice Tea</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div data-aos="fade-up" class="feature col d-none d-lg-block    ">
                            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 opacity">
                                <img src={require('../image/l6.jpg')} alt="" />
                            </div>
                            <h2>Flat Irons Skillet Potatoes</h2>
                            <p>Aenean quam nunc, condimentum quis orci quis. Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel leo est. Duis blandit rhoncus nisi, eget …</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>

                    </div>
                </div>
            </section>
            {/* --------------------start make this today sec----------------- */}
             <section className='mb-5 pb-5'>
                <h2 className='mt-3 mb-5'>MAKE THIS TODAY!</h2>
                    <div className="back_img">
                       <div className="black1">
                       <h1>8 Easy Instant Pot Receipes</h1>
                       </div>
                        <div className="box1">
                            <div className="flex1">
                                <div className='date1'>
                                    march 19-2020
                                </div>
                                <div className='icon1'>
                                    <IoHeartCircleOutline />
                                </div>
                            </div>
                        </div>
                    </div>
            </section> 

            <hr></hr>
            {/* --------------------end make this today sec----------------- */}
            {/*-------------------start category sec--------------  */}
            <section>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <h2 className='pb-2'>Receipes By Category</h2>
                        <p className='pb-4'>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
                        <div className="col">
                            <div className="category">
                                <img src={require('../image/cate1.jpg')} alt="" />
                                <div className="sweet">
                                    <h3>sweets</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="category">
                                <img src={require('../image/cate2.jpg')} alt="" />
                                <div className="sweet">
                                    <h3>Burger</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="category">
                                <img src={require('../image/cate3.jpg')} alt="" />
                                <div className="sweet">
                                    <h3>Drinks</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="category">
                                <img src={require('../image/cate4.jpg')} alt="" />
                                <div className="sweet">
                                    <h3>pizzas</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------------end category sec--------------  */}
            

        </>
    );
}
export default Latest;
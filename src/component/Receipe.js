import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { IoHeartCircleOutline } from "react-icons/io5"
import '../App.css';
import './Receipe.css';

function Receipe() {
    useEffect(() => {
        Aos.init({ duration: 3000, offset: 300 });
    }, []);
    return (
        <div className='App'>
            <>
                {/* -------------start welcome sec--------------------- */}
                <section>
                    <div className="container">

                        <div className="row mt-5 pt-5">
                            <div className="col-md-3">
                                <img src={require('../image/welcome-1.jpg')} alt="" />
                            </div>
                            <div className="col-md-6 ">
                                <div className="text">
                                    <p>WELCOME</p>
                                </div>
                                <h2 className='pt-2' style={{ letterSpacing: "1px" }}>Dining at Caverta</h2>
                                <p className='pt-5'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../image/welcome-2.jpg')} alt="" />
                            </div>
                        </div>
                    </div>

                </section>
                {/* ------------------start parallex sec------------------- */}
                <section>
                    <div className="mt-5 pt-4">
                        <div className="parallex">
                            <div className="bg_black"></div>
                            <div className="black">
                                <p style={{ paddingTop: "200px" }}>Come and See</p>
                                <h1>We Create Delicious Experiance!!</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ------------------end parallex sec------------------- */}
                {/* -------------end welcome sec--------------------- */}
                {/* -----------------start popular receipe sec-------------------- */}
                <section>
                    <div className="container">
                        <div className="mt-5">
                            <h2>MOST POPULAR RECEIPES</h2>
                            <p className='pb-2'>There are many variation in our Receipes</p>
                        </div>
                        <div className="row mt-1 g-1">
                            <div data-aos="fade-right" className="col">
                                <div className="bread relative">
                                    <a href="">
                                        <div className="f3">
                                        <div className="box">
                                            <div className="flex1">
                                                <div className='date'>
                                                    march 19-2020
                                                </div>
                                                <div className='icon'>
                                                    <IoHeartCircleOutline />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="child">
                                            <h3>8 Easy Instant Pot Recipes</h3>
                                            <div className="flex">
                                                <p>BREAD/ SWEET</p>
                                                <i class="fa-solid fa-comments">0</i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col d-none d-sm-block">
                                <div className="bread relative">
                                    <a href="">
                                        <div className="f4">
                                            <div className="box">
                                                <div className="flex1">
                                                    <div className='date'>
                                                        march 19-2020
                                                    </div>
                                                    <div className='icon'>
                                                        <IoHeartCircleOutline />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="child">
                                            <h3>rustic crusty bread</h3>
                                            <div className="flex">
                                                <p>BREAD/ SWEET</p>
                                                <i class="fa-solid fa-comments">0</i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div data-aos="fade-left" className="col d-none d-xs-none d-md-block">
                                <div className="bread relative">
                                    <a href="">
                                        <div className="f5">
                                        <div className="box">
                                            <div className="flex1">
                                                <div className='date'>
                                                    march 19-2020
                                                </div>
                                                <div className='icon'>
                                                    <IoHeartCircleOutline />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="child">
                                            <h3>rose syrup ice tea</h3>
                                            <div className="flex">
                                                <p>BEVERAGES</p>
                                                <i class="fa-solid fa-comments">0</i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='mt-5'>
                        <h2>Our Features</h2>
                        <p>There are many variation in our Receipes</p>
                    </div>
                    <div className="bg">
                        <div className="container">
                            <div className="row mt-5 mb-5">
                                <div className="col">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c1.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>APPETIZER</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c2.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>BEVRAGES</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c3.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>BREAD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c4.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>PASTA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c5.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>SALAD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-block d-md-none d-xl-block">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c6.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>SOUP</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-none d-xl-block">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c7.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>SWEET</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-none d-xl-block">
                                    <div className="image mt-5 mb-5 parent">
                                        <a href="">
                                            <img src={require('../image/c8.jpg')}></img>
                                        </a>
                                        <div className="child1">
                                            <p>VEGAN</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* -----------strat behind scene sec-------------------- */}
                <section>
                    <div className="container">
                        <div className="row mt-5 pt-5 pb-5">
                            <div className="col-sm-6">
                                <div className="text">
                                    <p>BEHIND THE SCNESE</p>
                                </div>
                                <h2 className='pt-2' style={{ letterSpacing: "1px" }}>THE TEAM</h2>
                                <p className='pt-5 d-block d-sm-none d-lg-block'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                                <h2 className='pt-4'>
                                    <button className='team_btn'>
                                        <a href="/Behind">FIND MORE</a>
                                    </button>
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="row pt-5 g-3">
                                    <div className="col-sm-6">
                                        <div className="category">
                                            <img src={require('../image/team1.jpg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="category">
                                            <img src={require('../image/team2.jpg')} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* -----------end behind scene sec-------------------- */}
            </>
        </div>
    );
}
export default Receipe;
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Footer from '../component/Footer';

function Menu() {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 300 });
    }, []);
    return (
        <>
            <section>
                <div className="bg_team">
                    <div className="container">
                        <h2 className='text-black'>Menu Restaurant</h2>
                        <p>Home > Our Team</p>
                    </div>
                    </div>
                    <div className="container">
                        <div className="mt-5 pt-5">
                            <h2 data-aos="fade-right" className='pb-5'>Menus of The Day</h2>
                        </div>
                        <div className="row g-5">
                            <div className="col-12 col-md-6">
                                <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu1.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Vegge Lover</h2>
                                            <p className='menu_p'> Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives</p>
                                            <span class="price">£10.18</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu2.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Trio Cheese</h2>
                                            <p className='menu_p'>  Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella.. </p>
                                            <del>
                                            <span class="del">£16.30</span>
                                            </del>
                                            <span class="price">£12.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt-2">
                            <div className="col-12 col-md-6">
                                <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu3.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Tropicana Juice</h2>
                                            <p className='menu_p'>  View great tasting Tropicana Orange Juice and Juice Drink Products. Featuring Tropicana Orange Juice</p>
                                            <span class="price">£11.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu4.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Water Bottle</h2>
                                            <p className='menu_p'>   Investing in a reusable water bottle that you can refill throughout the day.Carrying one water bottle....... </p>
                                            <del>
                                            {/* <span class="del">£16.30</span> */}
                                            </del>
                                            <span class="price">£12.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt-2">
                            <div className="col-12 col-md-6">
                                <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu5.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Trio Cafe</h2>
                                            <p className='menu_p'>  Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center in trio.</p>
                                            <span class="price">£12.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu6.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Water Bottle</h2>
                                            <p className='menu_p'> Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and…</p>
                                            <del>
                                            {/* <span class="del">£16.30</span> */}
                                            </del>
                                            <span class="price">£12.50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt-2">
                            <div className="col-12 col-md-6">
                                <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu7.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Supreme Pizza</h2>
                                            <p className='menu_p'> Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and…</p>
                                            <span class="price">£14.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="b-yellow">
                                    <div className="d-flex">
                                        <img src={require('../image/menu8.png')} style={{width:"100%"}} alt="" />
                                        <div className='pt-5'>
                                            <h2>Summer Pizza</h2>
                                            <p className='menu_p'> Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli..</p>
                                            <del>
                                            {/* <span class="del">£16.30</span> */}
                                            </del>
                                            <span class="price">£15.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            {/* ------------------start explore sec---------------------------- */}
            <section className='mb-5'>
                <div className="space">
                <div className="row mt-5 pt-5">
                    <div className="col-12 col-sm-6">
                        <div className='burger'>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="explore">
                            <div className="underline">
                            <h2 data-aos="fade-up" className='pt-5'>Pizza Hut</h2>
                            </div>
                            <p>Shrimp, Squid, Pineapple</p>
                            <div className="underline">
                            <h2 data-aos="fade-up" className='pt-5'>Pepperoni Pizza</h2>
                            </div>
                            <p>Shrimp, Squid, Pineapple</p>
                            <div className="underline">
                            <h2 data-aos="fade-up" className='pt-5'>Apricot Pizza</h2>
                            </div>
                            <p>Shrimp, Squid, Pineapple</p>
                            <div className="underline">
                            <h2 data-aos="fade-up" className='pt-5'>Summer Pizza</h2>
                            </div>
                            <p>Shrimp, Squid, Pineapple</p>
                            
                        </div>
                    </div>
                </div>
                </div>
            </section>
            
            {/* ------------------end explore sec---------------------------- */}
            <Footer/>
        </>
    );
}
export default Menu;
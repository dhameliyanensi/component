import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Footer from '../component/Footer';
import Slider from '../component/Slider';

function Home3() {
    return (
        <>
            <Slider />
            {/* --------------start taste experiance sec------------------------- */}
            <section>
                <div className="container">
                    <div style={{ color: "#9fc4ce" }} className="pt-5 mt-3">
                        <h4>TASTE EXPERIANCE</h4>
                        <h1 style={{ color: "black", paddingTop: "20px" }}>Welcome to Tinysalt Restaurant</h1>
                    </div>
                    <div className="row pb-5 mb-5">
                        <div className="col-md-6">
                            <p className='pt-5 fs-5'>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='pt-5 fs-5'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magnis.</p>
                        </div>
                    </div>
                </div>

            </section>
            {/* --------------end taste experiance sec------------------------- */}
            {/* ---------------start book table sec---------------------- */}
            <section>
                <div className="row pb-5">
                    <div className="col">
                        <div className="dine">
                            <h4>A LA CARTE</h4>
                            <h2 className='pt-3'>Dine a Style</h2>
                            <h6 className='pt-5'> <button className='find'>VIEW MENU</button></h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="table">
                            <h4>RESERVATION</h4>
                            <h2 className='pt-3'>Book A Table</h2>
                            <h6 className='pt-5'> <button className='find'>CONTACT US</button></h6>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------end book table sec---------------------- */}
            {/* ------------------start testimonial sec---------------- */}
            <section className='pb-5 mb-5'>
                <div className="container">
               <div className="owl-carousel owl-theme">
                    <div>
                        <h4>TESTIMONIAL</h4>
                        <p className='pt-4 fs-3'>"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat. Duis leo. Sed fringilla mauris sit amet nibh."</p>
                        <h4 className='pt-5'>The Smiths</h4>
                         <p className="fs-3">Agro</p>
                    </div>
                    <div>
                        <h4>TESTIMONIAL</h4>
                        <p className='pt-4 fs-3'>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque."</p>
                        <h4 className='pt-5'>Angaela Ray</h4>
                         <p className="fs-3">Rays</p>
                    </div>
                    <div>
                        <h4>TESTIMONIAL</h4>
                        <p className='pt-4 fs-3'>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque."</p>
                        <h4 className='pt-5'>Garry Griffin</h4>
                        <p className="fs-3">Smiths</p>
                    </div>
               </div>
               </div>
            </section>
            {/* ------------------end testimonial sec---------------- */}
            {/* ----------------start meet our team sec---------------- */}
            <section>
                    <div className="container">

                        <div className="row mt-5 pt-5 pb-5">
                            <div className="col-md-3">
                                <img src={require('../image/home3-chef1.jpg')} alt="" />
                            </div>
                            <div className="col-md-6 ">
                                <div className="text">
                                    <p>OUR CHEF</p>
                                </div>
                                <h2 className='pt-2' style={{ letterSpacing: "1px" }}>Meets The Team</h2>
                                <p className='pt-5'>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                                <h6> <button className='find'><a style={{color:"white"}} href="/Ourteam">VIEW ALL TEAM</a></button></h6>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../image/home3-chef2.jpg')} alt="" />
                            </div>
                        </div>
                    </div>

                </section>
            {/* ----------------end meet our team sec---------------- */}
            {/* -------------start gallery sec------------------ */}
            <section className='bg-dark'>
                <div className="container">
                    <div className="mt-5 pt-5">
                        <div style={{color:"#9fc4ce"}}>
                                <h4>THE GALLERY</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-3' style={{color:"white"}}>Seasonal Chef Dishes</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px" ,marginTop:"40px", color:"white"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
                        </div>
                    </div>
                    <div className="row g-3 pt-4 pb-5">
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-3.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-4.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-5.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-9.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-10.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-11.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-6.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-7.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="gallery">
                            <img src={require('../image/home3-8.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------end gallery sec------------------ */}
            <Footer />
        </>
    )
}
export default Home3;
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Footer from '../component/Footer';

function Aboutus()
{
    return(
        <>
        <section>
            <div className="about_bg">
            <div className="about">
                        <h1 style={{fontSize:"60px"}}>About Us</h1>
                        <h2 className='pt-4'>Experianced and Proffesional</h2>
                    </div>
            </div>
        </section>
        {/* --------------------start concept sec----------------- */}
        <section>
                <div className="container">
                    <div className="mt-5 pt-5">
                        <div style={{color:"#9fc4ce"}}>
                                <h4 className='pt-5 mt-5'>CONCEPT</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-3'>Culinary Vision</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px" ,marginTop:"20px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                        <h2 className='pt-4 pb-5'>
                                    <button className='team_btn'>
                                        <a href="/Behind">CONTACT US</a>
                                    </button>
                                </h2>
                        </div>
                    </div>
                    <div className="row pt-3 g-3">
                        <div className="col-sm-6 px-3">
                            <img src={require('../image/foot3.jpg')} alt="" />
                        </div>
                        <div className="col-sm-6">
                            <img src={require('../image/home2-7.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        {/* --------------------end concept sec----------------- */}
        {/* --------------------start great chef sec---------------- */}
            <section>
                <div className="container">
                    <div className="row pt-5 mt-3">
                        <div className="col-md-6">
                        <div style={{color:"#9fc4ce"}}>
                                <h5 className='pt-5 mt-5'>CHEF'S</h5>
                                <h1 className='text-black'>Great Chef's</h1>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <p className='pt-5 mt-5 about_p'>Id pri probo nonumy tractatos, illum deserunt qui no, eum at torquatos philosophia. Postea causae delectus vim ei, has insolens phaedrum ut, has id latine laboramus. An cum adipiscing conclusionemque, summo blandit eum id.</p>
                        <p className='pt-3 about_p'>Vel ad expetendis comprehensam, eu cum senserit vituperatoribus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row mt-5 pt-3 g-3">
                        <div className=" px-3 col-sm-6 col-md-3">
                            <img style={{height:"70%" , width:"100%"}} src={require('../image/behind2.jpg')} alt="" />
                            <div className='pt-3'>
                                <h4>Anna Smith</h4>
                                <h5 className='department'>
                                    CHEF
                                </h5>
                                <p className="pt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className=" px-3 col-sm-6 col-md-3">
                            <img style={{height:"70%" , width:"100%"}} src={require('../image/behind3.jpg')} alt="" />
                            <div className='pt-3'>
                                <h4>Michel Cartel</h4>
                                <h5 className='department'>
                                    MANAGER
                                </h5>
                                <p className="pt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className=" px-3 col-sm-6 col-md-3">
                            <img style={{height:"70%" , width:"100%"}} src={require('../image/behind4.jpg')} alt="" />
                            <div className='pt-3'>
                                <h4>Sara Burton</h4>
                                <h5 className='department'>
                                    FINANCE
                                </h5>
                                <p className="pt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className="px-3 col-sm-6 col-md-3">
                            <img style={{height:"70%" , width:"100%"}} src={require('../image/behind5.jpg')} alt="" />
                            <div className='pt-3'>
                                <h4>Tyler Hart</h4>
                                <h5 className='department'>
                                    MARKETING
                                </h5>
                                <p className="pt-3">Totam rem aperiam. Et iusto odio digniss ducimus qui blandi praesentium voluptatum deleniti atque. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* --------------------end great chef sec---------------- */}
        {/* --------------------start testimonial sec------------- */}
        <section className='pb-5 mb-5 pt-5 mt-5'>
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


                <section>
                    <div className="container">
                <div className="row mt-5 pt-5 pb-5">
                    <div className="col-12 col-lg-6">
                    <div style={{color:"#9fc4ce"}}>
                                <h4>OPEN DAILY</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-4'>Come and Discover Our Restaurant</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px",    padding:"60px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                            <h6> <button className='find'>
                                <a href="/Aboutus">CONTACT US</a></button></h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
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
                {/* --------------------end testimonial sec------------------ */}
                <Footer/>
        </>
    )
}
export default Aboutus;
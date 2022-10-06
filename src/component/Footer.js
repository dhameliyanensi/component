import '../App.css';
import '../css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Footer.css';
function Footer()
{
    return(
        <>
        <section className='footer' style={{color:"white"}}>
            <div className="bg-black pt-5 pb-5">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <h2 className='tiny footer_h2'>tinysolt.studio</h2>
                            <div className="d-flex px-5 mx-5 d-none d-lg-block">
                            <i class="fa-brands fa-twitter footer-icon"></i>
                            <i class="fa-brands fa-facebook-f footer-icon"></i>
                            <i class="fa-brands fa-instagram footer-icon"></i>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h2 className='footer_h2'>Links</h2>
                                    <Link to="/Menu">
                                        <h6 className='line'>Menu</h6></Link>
                                    <a href=""><h6>Allergence</h6></a>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <h2 className='footer_h2'>Contact</h2>
                                    <h6>701-931-6789</h6>
                                    <h6>info@tiny.com</h6>

                                </div>
                                <div className="col-6 col-sm-3">
                                <h2 className='footer_h2'>Hours</h2>
                                <h6>Monday To Sunday</h6>
                                <h6>10am - 10pm</h6>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <h2 className='footer_h2'>Location</h2>
                                    <h6>1420 Willis Aveneu</h6>
                                    <h6>Jacksonville, FL6</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_image">
            <div className="row">
                <div className="col">
                    <img src={require('../image/foot1.jpg')} alt="" />
                </div>
                <div className="col"> <img src={require('../image/foot2.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot3.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot4.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot5.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot6.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot7.jpg')} alt="" /></div>
                <div className="col"> <img src={require('../image/foot8.jpg')} alt="" /></div>
            </div>
            </div>
        </section>
        </>
    );
}
export default Footer;
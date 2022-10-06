import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Footer from '../component/Footer';
function Behind()
{
    return(
        <>
            <section>
                <div className="behind_bg">
                    <div className="meet">
                        <h1>MEET THE TEAM</h1>
                        <h2>We Love What We Do</h2>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                <div className="row">
                    <div className="col">
                    <h4 className='mt-5 behind1'>We are a diverse group from different cultures and backgrounds working toward the same goal. Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</h4>
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


            <section>
                <div className="container">
                    <div className="mt-5 pt-5">
                        <div style={{color:"#9fc4ce"}}>
                                <h4 className='pt-5 mt-5'>JOIN OUR TEAM</h4>
                        </div>
                        <div className="since">
                        <h1 className='pt-3'>We Are Looking For New Talent</h1>
                        <p style={{fontSize:"18px" , letterSpacing:"1px" ,marginTop:"20px"}}>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero tempore.</p>
                        <h2 className='pt-4 pb-5'>
                                    <button className='team_btn'>
                                        <a href="/Behind">CONTACT US</a>
                                    </button>
                                </h2>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}
export default Behind;
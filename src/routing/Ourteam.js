import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css'
import Footer from '../component/Footer';

function Ourteam() {
    return (
        <>
            <section>
                <div className="bg_team">
                    <div className="container">
                        <h2>Our Team</h2>
                        <p>Home > Our Team</p>
                    </div>
                    <div class="album py-5 bg-light">
                        <div class="container">

                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef1.jpg')} alt="" />
                                        <div class="card-body">
                                        <button>CHEF</button>
                                            <h2>william smith</h2>
                                            <p>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef2.jpg')} alt="" />
                                        <div class="card-body">
                                        <button>MANAGER</button>
                                            <h2>John Doe</h2>
                                            <p>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef3.jpg')} alt="" />
                                        <div class="card-body">
                                        <button>CHEF</button>
                                            <h2>Bradd L.</h2>
                                            <p>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef4.jpg')} alt="" />

                                        <div class="card-body">
                                            <button>Manager</button>
                                        <h2>william smith</h2>
                                        <p>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                             </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef5.jpg')} alt="" />

                                        <div class="card-body">
                                        <button>CHEF</button>
                                        <h2>John Doe</h2>
                                        <p>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <img src={require('../image/chef6.jpg')} alt="" />

                                        <div class="card-body">
                                        <button>CHEF</button>
                                        <h2>Bradd L.</h2>
                                        <p className='pt-2'>Everything We Pizza, We Pizza With Love.
                                                Designer Fastfood.</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Ourteam;
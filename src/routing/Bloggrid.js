import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Footer from '../component/Footer';

function Bloggrid() {
    return (
        <>
            <section>
                <div className="blog_bg">
                    <div className="about">
                        <h1 style={{ fontSize: "100px", letterSpacing: "5px" }}>Blog 2 Grid Column</h1>
                        <h2 className='pt-4'>LATEST NEWS</h2>
                    </div>
                </div>
            </section>

            {/* ===================strat summer dish sec========================== */}
            <section>
                <div className="container">
                    <div className="row g-5 pt-5 mt-5 pb-5">
                        <div className="col-md-9">
                            <div className="row g-3">
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-3.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 15, 2022</li>
                                            <li>-</li>
                                            <li>Food Receipe</li>
                                        </ul>
                                        <h6 className='display-6'>Chef New Summer Dish</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-11.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 14, 2022</li>
                                            <li>-</li>
                                            <li>Receipes</li>
                                        </ul>
                                        <h6 className='display-6'>Resturant Signature Dinner</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                            </div>
                            <div className="row g-3 pt-5">
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-5.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 15, 2022</li>
                                            <li>-</li>
                                            <li>Cocktail</li>
                                        </ul>
                                        <h6 className='display-6'>Royal Yacth Club Cocktail</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-4.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 20, 2022</li>
                                            <li>-</li>
                                            <li>Desserts</li>
                                        </ul>
                                        <h6 className='display-6'>Chocolate Muffins Gift</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                            </div>
                            <div className="row g-3 pt-5">
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-7.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 15, 2022</li>
                                            <li>-</li>
                                            <li>Food Receipe</li>
                                        </ul>
                                        <h6 className='display-6'>Chef New Vegatable Dish</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                               <div className="col-md-6">
                               <div className="opacity">
                                        <img src={require('../image/home3-8.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <ul className='d-flex'>
                                            <li>February 14, 2022</li>
                                            <li>-</li>
                                            <li>Receipes</li>
                                        </ul>
                                        <h6 className='display-6'>Realm of the Spirit Whisky</h6>
                                        <p className='fs-5 px-3'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                                    </div>
                               </div>
                            </div>
                            
                        </div>

                        <div className="col-md-3">
                            <div>
                                <ol className='pb-3 fs-4'>CATEGORIES</ol>
                                <ul>
                                    <li className='pb-3 fs-5'>Desserts</li>
                                    <li className='pb-3 fs-5'>Food</li>
                                    <li className='pb-3 fs-5'>Italian</li>
                                    <li className='pb-3 fs-5'>Receipes</li>
                                </ul>
                                <span className='px-5'>
                                    <input type="text" name="s" class="pb-3 px-3" placeholder="type and hit enter"></input>
                                </span>
                                <ol className='pb-3 pt-5 fs-4'>RECENT POSTS</ol>
                                <ul>
                                    <li className='pb-3 fs-5'>Chef New Summer Dish</li>
                                    <li className='pb-3 fs-5'>Realm of the Spirit Whisky</li>
                                    <li className='pb-3 fs-5'>Restaurant Signature Dinner</li>
                                </ul>
                                <ol className='pb-3 pt-5 fs-4'>ARCHEIVE</ol>
                                <ul>
                                    <li className='pb-3 fs-5'>February 2022</li>
                                    <li className='pb-3 fs-5'>January 2022</li>
                                </ul>
                                <ol className='pb-3 pt-5 fs-4'>TAGS</ol>
                                <ul>
                                    <li className='pb-3 fs-5'>
                                        <button>Chef</button>
                                    </li>
                                    <li className='pb-3 fs-5'><button>Chocolate</button></li>
                                    <li className='pb-3 fs-5'><button>Corn</button></li>
                                    <li className='pb-3 fs-5'><button>Dish</button></li>
                                    <li className='pb-3 fs-5'><button>Muffins</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===================end summer dish sec========================== */}
            <Footer/>
        </>
    )
}
export default Bloggrid;
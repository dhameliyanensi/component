import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routing.css';
import Footer from '../component/Footer';

function Blogclassic() {
    return (
        <>
            <section>
                <div className="blog_bg">
                    <div className="about">
                        <h1 style={{ fontSize: "100px", letterSpacing: "5px" }}>Blog Classic</h1>
                        <h2 className='pt-4'>LATEST NEWS</h2>
                    </div>
                </div>
            </section>

            {/* ===================strat summer dish sec========================== */}
            <section>
                <div className="container">
                    <div className="row g-5 pt-5 mt-5">
                        <div className="col-md-9">
                            <div className="opacity">
                                <img src={require('../image/home3-3.jpg')} alt="" />
                            </div>
                            <div>
                                <ul className='d-flex pt-5'>
                                    <li>February 15, 2022</li>
                                    <li>-</li>
                                    <li>Food Receipe</li>
                                </ul>
                                <span className='display-6 pb-5 px-5'>Chef New Summer Dish</span>
                                <p className='fs-5 px-3 pt-4'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                            </div>
                            <div className="opacity">
                                <img src={require('../image/home3-11.jpg')} alt="" />
                            </div>
                            <div>
                                <ul className='d-flex pt-5'>
                                    <li>February 15, 2022</li>
                                    <li>-</li>
                                    <li>Food Receipe</li>
                                </ul>
                                <span className='display-6 pb-5 px-5'>Realm of the Spirit Whisky</span>
                                <p className='fs-5 px-3 pt-4'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                            </div>
                            <div className="opacity">
                                <img src={require('../image/home3-5.jpg')} alt="" />
                            </div>
                            <div>
                                <ul className='d-flex pt-5'>
                                    <li>February 15, 2022</li>
                                    <li>-</li>
                                    <li>Food Receipe</li>
                                </ul>
                                <span className='display-6 pb-5 px-5'>Royal Yacth Club Cocktail</span>
                                <p className='fs-5 px-3 pt-4'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
                            </div>
                            <div className="opacity">
                                <img src={require('../image/home3-4.jpg')} alt="" />
                            </div>
                            <div>
                                <ul className='d-flex pt-5'>
                                    <li>February 15, 2022</li>
                                    <li>-</li>
                                    <li>Food Receipe</li>
                                </ul>
                                <span className='display-6 pb-5 px-5'>Chocolate Muffins Gift</span>
                                <p className='fs-5 px-3 pt-4 pb-5'> Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet ...</p>
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

            {/* <section className='mt-5 pt-5 pb-5 mb-3'>
               <h1>
               <nav aria-label="Page navigation example" style={{paddingLeft:"300px"}}>
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="/Bloglist" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/Blogclaasic">1</a></li>
                        <li class="page-item"><a class="page-link" href="/Bloglist1">2</a></li>
                        <li class="page-item"><a class="page-link" href="/Bloglist2">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

               </h1>
            </section> */}
            {/* ===================end summer dish sec========================== */}
            <Footer />
        </>
    )
}
export default Blogclassic;
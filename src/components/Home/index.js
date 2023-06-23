import React from "react";
import {Link} from "react-router-dom";
import About from "../About";
import How from "../How";
import "../../Assets/css/style.css";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import image1 from "../../Assets/images/slider-img.png";
import appstore from "../../Assets/images/app-store.png";
import playstore from "../../Assets/images/play-store.png";
import autoimg from "../../Assets/images/auto-img.png";
import client1 from "../../Assets/images/client-1.jpg";
import client2 from "../../Assets/images/client-2.jpg";


const Home = () => {
  return (
    <div>
      <div>
        <body>
          <div className="hero_area">
            {/* <!-- slider section --> */}
            <div>
              <section className=" slider_section position-relative">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={3}
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={4}
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    {/* <img src="../images/hero-bg.jpg"  /> */}
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="box">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="detail-box">
                                <div>
                                  <h1>Digital Currency</h1>
                                  <h2>The Future of Trading.</h2>
                                  <div className="">
                                    <Link to="/SignUp">Get Started</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="img-box">
                                <img src={image1} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="box">
                          <div className="row">
                            <div className="col'-md-7">
                              <div className="detail-box">
                                <div>
                                  <h1>Digital Currency</h1>
                                  <h2>The Future of Trading.</h2>
                                  <div className="">
                                    <a href="">Get Started</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="img-box">
                                {/* <img src="../images/hero-bg.jpg"  /> */}
                                <img src={image1} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="box">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="detail-box">
                                <div>
                                  <h1>Digital Currency</h1>
                                  <h2>The Future of Trading.</h2>
                                  <div className="">
                                    <a href="">Get Started</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="img-box">
                                <img src={image1} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="box">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="detail-box">
                                <div>
                                  <h1>Digital Currency</h1>
                                  <h2>The Future of Trading.</h2>
                                  <div className="">
                                    <a href="">Get Started</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="img-box">
                                <img src={image1} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="box">
                          <div className="row">
                            <div className="col-md-7">
                              <div className="detail-box">
                                <div>
                                  <h1>Digital Currency</h1>
                                  <h2>The Future of Trading.</h2>
                                  <div className="">
                                    <a href="">Get Started</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="img-box">
                                <img src={image1} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end slider section */}

              {/*About Section Starts*/}
              <About />
              {/*About Section ends*/}

              {/* <!-- how section --> */}
              <How />
              {/* <!-- how section ends --> */}

              {/* <!-- app section --> */}
              <section className="app_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h2>Our Powerful app to connect it all</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="download_box">
                          <h5>Download Now</h5>
                          <div className="btn-box">
                            <a href="">
                              <img src={appstore} alt="" />
                            </a>
                            <a href="">
                              <img src={playstore} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={image1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- end of app section --> */}



              {/* <!-- auto section --> */}
              <section className="auto_section layout_padding">
                <div className="container">
                  <div className="heading_container">
                    <h2>Start Automatic Now</h2>
                  </div>
                  <div className="box">
                    <div className="img-box">
                      <img src={autoimg} alt="" />
                    </div>
                    <div className="detail-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniamLorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim
                      </p>
                      <div className="btn-box">
                        <a href="">Register Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- auto section ends--> */}



              {/* <!-- client section --> */}
              <section className="client_section layout_padding-bottom">
                <div className="container">
                  <div className="heading_container">
                    <h2>Testimonial</h2>
                  </div>
                  <div className="box">
                    <div className="b-1">
                      <div className="client_id">
                        <div className="img-box">
                          <img src={client1} alt="" />
                        </div>
                        <div className="name">
                          <h5>Readable</h5>
                          <h6>Content of a page</h6>
                        </div>
                      </div>
                    </div>
                    <div className="client_detail">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="client_id">
                      <div className="img-box">
                        <img src={client2} alt="" />
                      </div>
                      <div className="name">
                        <h5>Readable</h5>
                        <h6>Content of a page</h6>
                      </div>
                    </div>
                    <div className="client_detail">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </p>
                    </div>
                  </div>
                  <div className="btn-box">
                    <a href="">Read More</a>
                  </div>
                </div>
              </section>
              {/* <!-- end of client section --> */}


            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import aboutimage from "../../Assets/images/about-img.png";



const About = () => {
  return (
    <div className='How' style={{marginTop:"7%"}}>
      {/* <!-- start of about section --> */}
    <section className="about_section layout_padding-bottom">
              <div className="container">
                <div className="heading_container">
                  <h2>About Cryptop</h2>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img src={aboutimage} alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim
                    </p>
                    <div className="btn-box">
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- end of about section --> */}

    </div>
  )
}

export default About;
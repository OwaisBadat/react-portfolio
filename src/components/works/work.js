import React, { Component } from 'react';
export default class Works extends Component {
  render() {
    return (


<section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/cellar.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Cellar</h5>
                        <p><i className="fa fa-code" /><br/>HTML, JavaScript, BootStrap, CSS, AWS, API</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/nomads.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Digital Nomads</h5><br/>
                        <p><i className="fa fa-code" /><br/>HTML, JavaScript, BootStrap, CSS, AWS, API</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/funko.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Funko Pop Ecommerce Site</h5><br/>
                        <p><i className="fa fa-code" /><br/>HTML, React, Redux, JavaScript, BootStrap, CSS, API</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-cellar.png" alt />
            <div className="description-box">
                <h4>Cellar App</h4>
              <p>This web application allows user to save their favorite adult beverage to a digital Cellar. Within the Cellar, users are able to add, edit and delete items. They also have the ability to read and write reviews on the items available within the database.</p>
              <span className="categories"><i className="fa fa-code" />HTML, JavaScript, BootStrap, CSS, AWS, API</span>
            </div>
            <div className="link-box">
              <a href="https://dc-cellar.herokuapp.com/">Website</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-nomads.png" alt />
            <div className="description-box">
              <h4>Digital Nomads</h4>
              <p>We allow the user to input any destination world wide and see a variety of factors of life within that city. From weather, walkability score, highly rated restaurants, shared workspace options, living spaces, and living standard statistics (health, crime, affordability).</p>
              <span className="categories"><i className="fa fa-code" />HTML, CSS, Bootstrap, API, jQuery, Express</span>
            </div>
            <div className="link-box">
              <a href="http://digitalnomads.surge.sh/">Website</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-funko.PNG" alt />
            <div className="description-box">
              <h4>Funko Pop Ecommerce Site</h4>
              <p>Ecommerce site built using reusable react components and redux to manage the state of the customers shopping cart.</p>
              <span className="categories"><i className="fa fa-code" />HTML, React, Redux, JavaScript, BootStrap, CSS, API</span>
            </div>
            <div className="link-box">
              <a href="">Website</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
        </div> {/* row End */}
      </section>
    );
  }
}

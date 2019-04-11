import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>Wybrane projekty...</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt src="images/portfolio/aluminium.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Swiat-Aluminium.pl</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt src="images/portfolio/21w.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Prasa 21.WIEK</h5>
                  <p>DTP Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt src="images/portfolio/sa.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Prasa Świat Aluminium</h5>
                  <p>DTP Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt src="images/portfolio/foto01.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Photography</h5>
                  <p>Down</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt src="images/portfolio/21we.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Prasa 21.WIEK Extra</h5>
                  <p>DTP Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt src="images/portfolio/podpora.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Centrum Podpora</h5>
                  <p>Design Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt src="images/portfolio/podporawww.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>CentrumPodpora.pl</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt src="images/portfolio/waplewo.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>REWITA WAPLEWO</h5>
                  <p>Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-09" title>
              <img alt src="images/portfolio/RPS.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>ROCK PAPER SCISSOR</h5>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-10" title>
              <img alt src="images/portfolio/robofriends.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>ROBOFRIENDS</h5>
                  <p>React</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-11" title>
              <img alt src="images/portfolio/ticcolo.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Ticcolo</h5>
                  <p>Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-12" title>
              <img alt src="images/portfolio/grafikart.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>GRAFIKART.pl</h5>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-aluminium.jpg" alt />
      <div className="description-box">
        <h4>www.swiat-aluminium.pl</h4>
        <p>Projekt i prowadzenie strony w oparciu o CMS Joomla</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="http://www.swiat-aluminium.pl">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-21w.jpg" alt />
      <div className="description-box">
        <h4>21.WIEK</h4>
        <p>Skład DTP i oprawa graficzna miesięcznika popularno-naukowego.</p>
        <span className="categories"><i className="fa fa-tag" />Design, DTP</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
      <div className="description-box">
        <h4>Judah</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-foto1.jpg" alt />
      <div className="description-box">
        <h4>Down</h4>
        <p>Morning in the middle of Poland...</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="https://www.instagram.com/grafik__art">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-21we.jpg" alt />
      <div className="description-box">
        <h4>21.WIEK EXTRA</h4>
        <p>Skład DTP i oprawa graficzna dwumiesięcznica popularno-naukowego.</p>
        <span className="categories"><i className="fa fa-tag" />Design, DTP</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
      <div className="description-box">
        <h4>Girl</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
      <div className="description-box">
        <h4>Origami</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-waplewo.jpg" alt />
      <div className="description-box">
        <h4>Retrocam</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Illustration, Design</span>
      </div>
      <div className="link-box">
        <a href="">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-09" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-RPS.jpg" alt />
      <div className="description-box">
        <h4>ROCK PAPER SCISSOR</h4>
        <p>Popularna gra napisana w JaveScript.</p>
        <span className="categories"><i className="fa fa-tag" />JavaScript, Programming</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="https://ralesz.github.io/RockPaperScissor">Link</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-09 End */}
    <div id="modal-10" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-robofriends.jpg" alt />
      <div className="description-box">
        <h4>ROBOFRIENDS</h4>
        <p>Prosta wyszukiwarka robotów zbudowana w opraciu o REACT i API.</p>
        <span className="categories"><i className="fa fa-tag" />React, Programming</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="https://github.com/ralesz/robofriends">Link</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-10 End */}
    <div id="modal-11" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-ticcolo.jpg" alt />
      <div className="description-box">
        <h4>Ulotka</h4>
        <p>Projekt i druk ulotki dla Spaghetterii TiCCOLO.</p>
        <span className="categories"><i className="fa fa-tag" />Design, Print</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="">Link</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-11 End */}
    <div id="modal-12" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-grafikart.jpg" alt />
      <div className="description-box">
        <h4>Ulotka</h4>
        <p>Strona agencji reklamowej w oparciu o CMS Joomla.</p>
        <span className="categories"><i className="fa fa-tag" />Design, Print</span>
      </div>
      <div className="link-box">
        <a target="_blank" href="">Link</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-11 End */}
  </div> {/* row End */}
</section>

      </React.Fragment>
    );
  }
}
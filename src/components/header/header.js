import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">O mnie</a></li>
      <li><a className="smoothscroll" href="#resume">Doświadczenie</a></li>
      <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
      {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
      <li><a className="smoothscroll" href="#contact">Kontakt</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{resumeData.name}</h1>
      {/* <h3>Inżynier i <span>Graphic designer</span> z 16-letnim doświadczeniem z zakresu grafiki, informatyki i technologii internetowych. Od roku uczę się programowania i rozwijam się w kierunku <span>Web designer</span> i <span>Junior front-end developer.</span> Ciekawy nowych wyzwań i zdobywania kolejnych doświadczeń zawodowych. Zdolności interpersonalne i dobra organizacja pracy. <br></br><a className="smoothscroll" href="#about">Przewiń w dół </a>
        i dowiedz się więcej <a className="smoothscroll" href="#about">o mnie</a>.</h3> */}
        <h3><span>Graphic designer, </span> <span>Web designer, </span> <span>Junior front-end developer.</span> <br></br> <br></br> 
        <a className="smoothscroll" href="#about">O mnie </a>
        </h3>
      <hr />
      <ul className="social">
        {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
        <li><a target="_blank"  href="https://www.linkedin.com/in/rafal-leszczynski/"><i className="fa fa-linkedin" /></a></li>
        <li><a target="_blank"  href="https://github.com/ralesz"><i className="fa fa-github" /></a></li>
        {/* <li><a href="#"><i className="fa fa-facebook" /></a></li> */}
        <li><a target="_blank"  href="#"><i className="fa fa-skype" /></a></li>
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header>

      </React.Fragment>
    );
  }
}
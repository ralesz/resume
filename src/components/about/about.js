import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>O mnie</h2>
      <p>Inżynier, grafik z 16-letnim doświadczeniem z zakresu grafiki komputerowej, informatyki i technologii internetowych. Od roku uczę się programowania i rozwijam się w kierunku Web Designu. Ciekawy nowych wyzwań i zdobywania kolejnych doświadczeń zawodowych.  Zdolności interpersonalne i dobra organizacja pracy. 
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Kontakt</h2>
          <p className="address">
            <span>Rafał Leszczyński</span><br />
            <span>+48 698 669 284</span><br />
            <span>info@grafikart.pl </span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="images/Rafal_Leszczynski_CV.pdf" className="button"><i className="fa fa-download" />Pobierz CV</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
      </React.Fragment>
    );
  }
}
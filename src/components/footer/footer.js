import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
        <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/rafal-leszczynski"><i className="fa fa-linkedin" /></a></li>
        <li><a href="#"><i className="fa fa-instagram" /></a></li>
        <li><a a target="_blank"  href="https://github.com/ralesz"><i className="fa fa-github" /></a></li>
        <li><a href="#"><i className="fa fa-skype" /></a></li>
      </ul>
      <ul className="copyright">
        <li>© Copyright 2019 CeeVee</li>
        <li>Design by <a title="Rav" href="styleshout.com">Styleshout</a></li>   
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer>

      </React.Fragment>
    );
  }
}
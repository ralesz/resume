import React, { Component } from 'react';
export default class Contactus extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1><span>Get In Touch.</span></h1>
    </div>
    <div className="ten columns">
      <p className="lead">Napisz do mnie poprzez formularz kontaktowy lub bezpośrednio wysyłając e-mail. 
      Postaram się odpowiedzieć najszybciej jak będzie to mozliwe. 
      </p>
    </div>
  </div>
  <div className="row">
    <div className="eight columns">
      {/* form */}
      <form action="mailto:info@grafikart.pl" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
          </div>
          <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
          </div>
          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
          </div>
          <div>
            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
          </div>
          <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form> {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
      </div>
    </div>
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Kontakt</h4>
        <p className="address">
          Rafał Leszczyński<br />
          <span>+48 698 669 284 </span>
          <span>rafal.leszczynski(a)grafikart.pl</span>
        </p>
      </div>
      <div className="widget widget_tweets">
        <h4 className="widget-title">Follow Me</h4>
        <ul id="twitter">
          <li>
            <span>
              <a href="https://www.linkedin.com/in/rafal-leszczynski">LinkedIN</a>
              <br></br> 
              <a href="https://github.com/ralesz">GitHub</a>
            </span>
          </li>
          {/* <li>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi
              <a href="#">http://t.co/CGIrdxIlI3</a>
            </span>
            <b><a href="#">3 Days Ago</a></b>
          </li> */}
        </ul>
      </div>
    </aside>
  </div>
</section>

      </React.Fragment>
    );
  }
}
import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
  <div className="text-container">
    <div className="row">
      <div className="two columns header-col">
        <h1><span>Client Testimonials</span></h1>
      </div>
      <div className="ten columns flex-container">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <blockquote>
                <p>Jeśli ktokolwiek kiedyś powie, że pojedynczy głos się nie liczy, przyślijcie go do mnie. Ja mu wyjaśnię...
                </p>
                <cite>Al Gore</cite>
              </blockquote>
            </li> {/* slide ends */}
            <li>
              <blockquote>
                <p>Są dwa sposoby na tworzenie projektu oprogramowania. Jednym jest stworzenie go tak prostym, żeby nie było w nim żadnych oczywistych braków. Drugim stworzenie go tak skomplikowanym, żeby nie było w nim żadnych oczywistych braków.
                </p>
                <cite>C.A.R. Hoare</cite>
              </blockquote>
            </li> {/* slide ends */}
          </ul>
        </div> {/* div.flexslider ends */}
      </div> {/* div.flex-container ends */}
    </div> {/* row ends */}
  </div>  {/* text-container ends */}
</section>

      </React.Fragment>
    );
  }
}
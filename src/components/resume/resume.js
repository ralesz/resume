import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Edukacja</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Politechnika Warszawska</h3>
          <p className="info">Inżynier – Specjalność: Inżynieria komputerowa
 <span>•</span> <em className="date">Luty 2002</em></p>
          <p>
            Praca dyplomowa poświęcona zastosowaniu L-systemów w grafice komputerowej. 
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Technikum elektroniczne im. gen. Zajączka</h3>
          <p className="info">Technik-Elektronik<span>•</span> <em className="date">Maj 1997</em></p>
          {/* <p>
            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
          </p> */}
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Praca</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Grafik Art</h3>
          <p className="info">Grafik, Programista, Freelancer <span>•</span> <em className="date">Od 2006 - obecnie</em></p>
          <p>
            Własna działalność gospodarcza. 
            <br></br><span>•</span> Usługi z zakresu: projektowanie i prowadzenie stron internetowych w oparciu o CMS: Joomla i Wordpress,
            <br></br><span>•</span> opracowanie grafik i prezentacji na potrzeby social mediów; skład i opracowanie graficzne wydawnictw prasowych, 
            <br></br><span>•</span> przygotowanie materiałów promocyjnych: reklam, ulotek, banerów, plakatów itp.,
            <br></br><span>•</span> usługi z zakresu: kreacja i druk, reklama, web design, social media, technical support; digital publishing (Adobe Digital Publishing).
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Drukarnia Wydawnictw Specjalnych</h3>
          <p className="info">Kierownik Sekcji Informatyki <span>•</span> <em className="date">Od 2010 - obecnie</em></p>
          <p>
          <span>•</span> Nadzór nad zespołem sekcji informatyki i wsparcie dla wydziału grafiki komputerowej;
          <br></br><span>•</span> wdrożenie i obsługa portalu typu web to print dla klientów drukarni – Kodak InSite Prepress Portal System,
          <br></br><span>•</span> obsługa strony firmowej,
<br></br><span>•</span> nadzór nad wdrożeniem i wsparcie techniczne użytkowników systemów zarządzania produkcją typu MIS dla poligrafii,
<br></br><span>•</span> planowanie, wdrażanie i nadzór nad systemami teleinformatycznymi,
<br></br><span>•</span> wdrożenie, obsługa i nadzór systemu workflow Kodak Prinergy, 
<br></br><span>•</span> nadzorowanie rozbudowy parku maszynowego i oprogramowania graficznego, 
<br></br><span>•</span> wdrożenie procedur zarządzania barwą w oparciu o grupy norm ISO 12647,
<br></br><span>•</span> nadzór nad przestrzeganiem procedur bezpieczeństwa informacji niejawnych,
<br></br><span>•</span> tworzenie autonomicznych systemów teleinformatycznych do przetwarzania i wydruku informacji niejawnych (konfiguracja stacji roboczych w oparciu o GPO, urządzeń sieciowych 
i produkcyjnych urządzeń drukujących),
<br></br><span>•</span> wsparcie użytkowników w zakresie działania systemów informatycznych i urządzeń biurowo – poligraficznych,
<br></br><span>•</span> opracowywanie dokumentacji bezpieczeństwa i procedur bezpiecznej eksploatacji dla planowanych i funkcjonujących systemów i sieci informatycznych, 
<br></br><span>•</span> udział w opracowaniu dokumentacji przetargowych sekcji informatyki i produkcji.
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Umiejętności</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>Programy w których pracuje na codzień i od święta :)
      </p>
      <div className="bars">
        <ul className="skills">
          <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
          <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
          <li><span className="bar-expand indesign" /><em>Indesign</em></li>
          <li><span className="bar-expand sketch" /><em>Sketch, Adobe XD, InVision</em></li>
          <li><span className="bar-expand wordpress" /><em>Wordpress, Joomla</em></li>
          <li><span className="bar-expand css" /><em>HTML5, CSS</em></li>
          <li><span className="bar-expand jquery" /><em>Bootstrap</em></li>
          <li><span className="bar-expand react" /><em>React</em></li>
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
</section>

      </React.Fragment>
    );
  }
}
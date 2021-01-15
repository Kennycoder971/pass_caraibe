import React from "react";

import BookForm from "../components/book-form/BookForm";
import NavBar from "../components/common/NavBar";
import PassCaraibeLogo from "../components/common/PassCaraibeLogo";

export default function Accueil() {
  return (
    <React.Fragment>
      <main
        className="accueil gradient-below"
        style={{
          background: `url(${process.env.PUBLIC_URL +
            "/images/background-top/home-bg.jpg"}) no-repeat center center/cover`,
        }}
      >
        <div className="container">
          <div className="title-container">
            <div className="logo">
              <div className="img-container">
                <div className="logo-filler"></div>
              </div>
            </div>

            <h1>
              <PassCaraibeLogo />
            </h1>
            <h2 className="slogan">Tout voir, tout faire, tout vivre !</h2>
          </div>

          <BookForm />
        </div>
      </main>
      <NavBar />

      <section className="incontournables rounded-edge">
        <div className="container-s">
          <div className="text-incontournables">
            <div className="activities">
              <div className="square">
                {" "}
                <p>-20%</p>
              </div>
              <h2>
                <p>
                  sur <span className="dark-pink-txt big-txt">20</span>{" "}
                  <span className="big-txt uppercase">activités</span>
                </p>
                <p className="green-txt">incontournables</p>
                en accès <span className="dark-pink-txt big-txt">
                  gratuit
                </span>{" "}
                !
              </h2>
            </div>

            <p className="incontournable-copyright">
              Le <PassCaraibeLogo /> est une sélection des meilleurs activités à
              faire en <span className="turquoise-txt">GUADELOUPE</span> et en{" "}
              <span className="green-txt">MARTINIQUE</span>, regroupées pour
              vous offrir en un seul <span className="dark-pink-txt">Pass</span>{" "}
              les meilleurs prix, pour votre plus grand plaisir : en{" "}
              <span className="dark-pink-txt">solo</span> entre{" "}
              <span className="dark-pink-txt">amis</span> ou en{" "}
              <span className="dark-pink-txt">famille</span>
            </p>
          </div>
        </div>
      </section>

      <section className="choose-pass">
        <div className="container-s">
          <div className="cta-discount">
            <div className="cta-discount-txt">
              <p className="pass-caraibe-is">
                Pass<span className="bold-txt">Caraïbe c'est </span>
              </p>
              <p className="yellow-txt bold-txt">sur tout! tout de suite!</p>{" "}
            </div>
            <div className="cta-percenage bold-txt">
              -20 <span className="small-percentage-sign">%</span>
            </div>
          </div>

          <div className="choose-pass-txt">
            <h2 className="choose-pass-title">
              {" "}
              <span>Choisissez votre pass</span>
              <div className="hand-logo"></div>{" "}
            </h2>

            <div className="choose-pass-choices">
              <div className="pass-integral-choice">
                {" "}
                <div className="arrow-banner">Pass intégral</div>
                <div className="pass-integral-choice-txt">
                  <div className="choice-discount-percentage green-txt bold-txt">
                    -20%
                  </div>
                  <p>
                    + 20 <span className="bold-txt uppercase">Activités</span>{" "}
                    incontournable en accès gratuit !
                  </p>
                </div>
                <div className="pass-promo-choice-txt">
                  <div className="choice-discount-percentage green-txt bold-txt">
                    -20%
                  </div>
                  <p>
                    <span className="bold-txt uppercase">
                      Sur toutes nos activités!
                    </span>{" "}
                  </p>
                </div>
              </div>

              <h3 className="subtitle">
                <span className="uppercase">Et</span> accédez à{" "}
                <span className="green-txt">
                  {" "}
                  <span className="uppercase">toutes</span> nos{" "}
                  <span className="uppercase">activités</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

import React from "react";
import BookForm from "../components/book-form/BookForm";
import NavBar from "../components/common/NavBar";

export default function Accueil() {
  return (
    <React.Fragment>
      <main className="accueil">
        <div className="container">
          <div className="title-container">
            <div className="logo">
              <div className="img-container">
                <div className="logo-filler"></div>
              </div>
            </div>

            <h1>
              <span className="dark-pink-txt">Pass</span>
              <span className="green-txt">caraibes</span>{" "}
            </h1>
            <h2 className="slogan">Tout voir, tout faire, tout vivre !</h2>
          </div>

          <BookForm />
        </div>
      </main>
      <NavBar />
    </React.Fragment>
  );
}

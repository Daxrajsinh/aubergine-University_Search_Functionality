import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

function University() {
  const { university, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <section className="university-page">
        <div className="grid grid-4-col">
          {university && university.map((curUniversityElem) => {
            const Name = curUniversityElem.name;
            const Country = curUniversityElem.country;
            const State = curUniversityElem["state-province"];            ;
            const webpages = curUniversityElem.web_pages[0];

            // const { Name, Country, State, Image } = curUniversityElem;

            return (
              <NavLink>
                <div className="card">
                  <div className="card-info">
                  <h2>{Name}</h2>
                  <h3>Country: {Country}</h3>
                  <h3>State: {State}</h3>
                  <a href={webpages}>{webpages}</a>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default University;

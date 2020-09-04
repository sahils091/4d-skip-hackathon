import React from "react";
import "./Recommendations.scss";
import Add from "../../assets/Group98.svg";
import Chart from "../../assets/Chart.svg";

const Recommendations = () => {
  return (
    <section className="rec">
      <h2 className="rec__header">Here are our Recommendations</h2>
      <h4 className="rec__subheader">Packaging</h4>

      <div className="rec__container">
        <div className="rec__text-container">
          <p className="rec__text--one">
            Invest in thermal Packaging to keep food warmer for longer
          </p>
          <img className="rec__img-one" src={Chart} alt="chart" />
          <p className="rec__text--two">See a 14.2% rise </p>
          <span>
            <img className="rec__img-two" src={Add} alt="add" />
          </span>
        </div>
      </div>
      <div className="rec__container">
        <div className="rec__text-container">
          <p className="rec__text--one">
            If drivers are taking long to arrive once the food has been made,
            use following heated storage solutions, so the food stays warm while
            waiting for the drivers.{" "}
          </p>
          <img className="rec__img-one" src={Chart} alt="chart" />
          <p className="rec__text--two">See a 14.2% rise </p>
          <span>
            <img className="rec__img-two" src={Add} alt="add" />
          </span>
        </div>
      </div>

      <h4 className="rec__subheader">Item Lists</h4>

      <div className="rec__container">
        <div className="rec__text-container">
          <p className="rec__text--one">
            Create a system so that when the items are placed in the delivery
            bags the items are checked off a list{" "}
          </p>
          <img className="rec__img-one" src={Chart} alt="chart" />
          <p className="rec__text--two">See a 14.2% rise </p>
          <span>
            <img className="rec__img-two" src={Add} alt="add" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;

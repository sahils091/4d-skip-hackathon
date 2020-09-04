import React from "react";
import { Link, Router } from "react-router-dom";
import "./DashBoard.scss";

import Place from "../../assets/place_24px.svg";
import Star from "../../assets/star_24px.svg";
import StarBorder from "../../assets/star_border_24px.svg";
import StarHalf from "../../assets/star_half_24px.svg";
import Expand from "../../assets/expand_more_24px.svg";
import StarGold from "../../assets/star_24px.svg";
import StarEmpty from "../../assets/star_border_purple500_24px.svg";
import GroupStar from "../../assets/Group97.svg";
import More from "../../assets/Group100.svg";

const DashBoard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-head">
        <div className="dashboard__head-container">
          <div className="dashboard__head-image"></div>
          <div className="dashboard__head-text--container">
            <div>
              <h1 className="dashboard__header">Restaurant Name</h1>
            </div>
            <div className="dashboard__header-review">
              <img
                className="dashboard__header-review--img"
                src={StarGold}
                alt="Stars"
              />
              <img
                className="dashboard__header-review--img"
                src={StarGold}
                alt="Stars"
              />
              <img
                className="dashboard__header-review--img"
                src={StarGold}
                alt="Stars"
              />
              <img
                className="dashboard__header-review--img"
                src={StarEmpty}
                alt="Stars"
              />
              <img
                className="dashboard__header-review--img"
                src={StarEmpty}
                alt="Stars"
              />

              <p className="dashboard__header-review--blurb">227 reviews</p>
            </div>
            <div className="dashboard__header-type">
              <p>$$$</p>

              <p className="dashboard__header-type--blurb">Food Type</p>

              <p className="dashboard__header-type--location">
                <img src={Place} alt="location icon" /> Toronto, Ontario
              </p>
            </div>
            <div className="dashboard__header-timing">
              <p className="dashboard__header-timing--status"> Open</p>
              <p className="dashboard__header-timing--window ">
                {" "}
                11.30 AM - 10.00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-rev">
        <div className="dashboard__review-header--container">
          <h2 className="dashboard__review-header">Reviews</h2>
          <div className="dashboard__review-recent--container">
            <p className="dashboard__review-recent--text">Most Recent</p>
            <span>
              <img
                className="dashboard__review-header--img"
                src={Expand}
                alt="Expand Logo"
              />
            </span>
          </div>
        </div>

        <div className="dashboard__review">
          <div className="dashboard__review-container">
            <div className="dashboard__review-img"></div>
            <div className="dashboard__review-blurb--container">
              <div className="dashboard__review-name">
                <p className="dashboard__review-txt">Susan Carter</p>
                <p>Toronto, ON </p>
              </div>
              <div className="dashboard__review-date">
                <p className="dashboard__review-date-text">Date</p>

                <img
                  className="dashboard__header-review--img"
                  src={GroupStar}
                  alt="Stars"
                />
                <img
                  className="dashboard__header-review--img"
                  src={More}
                  alt="more"
                />
              </div>
            </div>
          </div>

          <p>
            "Seems like there are a few kinks to be worked out at this location.
            Food delivery was a bit rushed however all dishes were cold and
            tacos were brought out before appetizers. Bartenders were quite
            attentive but again, the margaritas were unbalanced with too much
            lime and no salt rim. \n\nOverall disappointed given the college
            location is consistently superb. I'd recommend sticking with that
            location."
          </p>
        </div>
      </section>

      <section className="dashboard-rev">
        <div className="dashboard__review">
          <div className="dashboard__review-container">
            <div className="dashboard__review-img dashboard__review-img--two"></div>
            <div className="dashboard__review-blurb--container">
              <div className="dashboard__review-name">
                <p className="dashboard__review-txt">Abbas Isa</p>
                <p>Toronto, ON </p>
              </div>
              <div className="dashboard__review-date">
                <p className="dashboard__review-date-text">Date</p>

                <img
                  className="dashboard__header-review--img"
                  src={GroupStar}
                  alt="Stars"
                />
                <img
                  className="dashboard__header-review--img"
                  src={More}
                  alt="more"
                />
              </div>
            </div>
          </div>

          <p>
            So I was stupid enough to order from here again.this Time after I
            placed my order, I called the store to make sure they got everything
            correct. After I got my order which again I payed just under 70
            bucks for, ONE OF THE MAIN ENTREES I ORDERED WASNT THERE. I called
            and spoke to the "owner" who first told me I could come drive there
            and pick it up. I told the wonder that to drive there and pick it up
            would be absurd, as the entire REASON I payed extra for delivery was
            that I was working late and could not leave. Then the wonder told me
            to call UBEREATS and said it was the fault of UBEREATS.Then the
            owner said he would maybe drive the food over to me, but then he
            said that THE KITCHEN WAS CLOSED AND THERE WAS NOTHING HE COULD DO.
            He told me that the next day I could call and he would deliver the
            one item. It meant one of the people that was with me had to share
            an entree and we were both still hungry. I don't need to get fooled
            more than once to know that this place is a fucking mess and can't
            even complete a simple order. The food is inconsistent and not even
            good. It's also heavily overpriced.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DashBoard;

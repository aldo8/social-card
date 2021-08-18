import React from "react";
import Location from "../Location/Location";
import Phone from "../Phone/Phone";
import "./SocialCard.scss";

function SocialCard({ userData }) {
  return (
    <div className="card">
      <div className="card__title">{`${userData.name.first} ${userData.name.first}`}</div>
      <div className="card__body">
        <div className="card__image">
          <img src={userData.picture.large} alt={userData.email} />
        </div>
        <Location location={userData.location} />
        <Phone number={userData.phone} type="Home" />
        <Phone number={userData.cell} type="Mobile" />
      </div>
    </div>
  );
}

export default SocialCard;

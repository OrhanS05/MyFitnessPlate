import React from "react";
import "./Dagboek.css";
import getFormattedDate from "../../helpers/dateHelper";

function Dagboek() {
  const todayString = getFormattedDate();

  return (
    <div className="dagboek-container">
      <h2>Mijn Dagboek voor {todayString}</h2>
    </div>
  );
}

export default Dagboek;

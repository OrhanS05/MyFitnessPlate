import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
import Button from "../../components/Button/Button";


import image1 from "../../assets/about-us/gym-photo-1.jpg";
import image2 from "../../assets/about-us/gym-photo-2.jpg";
import image3 from "../../assets/about-us/gym-photo-3.jpg";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="aboutus-container">
      <h2 className="aboutus-title">About Us - Meer over ons</h2>

      <p>
        Welkom bij MyFitnessPlate, een platform gecreëerd door Orhan, een gepassioneerde 
        fitnessliefhebber en voedingsexpert. De afgelopen jaren heb ik me op verschillende 
        manieren professioneel ontwikkeld binnen de fitness- en voedingsindustrie. Van 
        intensieve trainingsprogramma’s tot gedetailleerde voedingsbegeleiding – ik heb 
        mezelf volledig toegewijd aan het helpen van anderen bij het behalen van hun 
        gezondheidsdoelen.
      </p>

      <p>
        Door mijn ervaring heb ik al veel mensen begeleid met hun voeding en 
        trainingsschema’s. Maar ik wilde verder gaan. Ik wilde een manier vinden om een 
        nog bredere groep mensen te bereiken, ongeacht hun locatie of ervaring. Daarom 
        heb ik MyFitnessPlate ontwikkeld: een toegankelijk en gebruiksvriendelijk platform 
        waarmee iedereen zijn voedingsdoelen kan bijhouden en verbeteren.
      </p>

      <p>
        Met deze website hoop ik jou te helpen op je reis naar een gezonder leven. Of je 
        nu je calorieën wilt tracken, recepten zoekt die bij je doelen passen, of simpelweg 
        meer structuur wilt in je voedingspatroon – MyFitnessPlate is er voor jou!
      </p>

      <Button
        text="Join Us"
        className="blue aboutus-join-button"
        onClick={() => navigate("/login")}
      />

      <div className="aboutus-images">
        <img src={image1} alt="Over ons 1" className="aboutus-img" />
        <img src={image2} alt="Over ons 2" className="aboutus-img" />
        <img src={image3} alt="Over ons 3" className="aboutus-img" />
      </div>
    </div>
  );
}

export default AboutUs;

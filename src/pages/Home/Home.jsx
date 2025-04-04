import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Reviews from "../../components/Reviews/Reviews";

function Home() {
  return (
    <>
      <main className="page-container">
        <Carousel />

        <section className="intro">
          <h2>Welkom bij MyFitnessPlate - Jouw Persoonlijke gids naar Gezond eten.</h2>
        </section>
        <section className="content-container-col1">
          <p>
            Gezond eten en je voedingsdoelen behalen zou eenvoudig en toegankelijk moeten zijn. Toch merken veel mensen dat het bijhouden van calorieën en voedingsstoffen al snel tijdrovend en verwarrend wordt. Bestaande apps zijn vaak complex, vol reclame of missen echt persoonlijke aanbevelingen. Daarom hebben we MyFitnessPlate ontwikkeld - een gebruiksvriendelijke en doelgerichte applicatie die je helpt je voedingsdoelen te bereiken, zonder gedoe.
          </p>
        </section>
        <p className="unique-tekst">
          <i> Wat maakt MyFitnessPlate uniek? </i>
        </p>
        <section className="content-container-col2">
          <p>
            <strong>✅ Persoonlijke voedingsdoelen</strong> <br />
            Stel eenvoudig je calorie- en macrodoelen in en laat de app je helpen om binnen je richtlijnen te blijven.
          </p>
          <p>
            <strong>🍽️ Slimme Receptenzoeker</strong> <br />
            Vind heerlijke en gezonde recepten door alleen het recept op te zoeken in een zoekbalk. Niet eindeloos meer dus in een ouderwets boek! - Wij doen het werk voor jou!
          </p>
          <p>
            <strong>📊 Eenvoudig Voedingsinname Bijhouden</strong> <br/>
            Voeg snel en moeiteloos je geconsumeerde nutriënten toe en krijg een helder overzicht van je dagelijkse calorie-inname en macronutriënten.
          </p>
          <p>
            <strong>🔄 Gebruiksvriendelijk en Efficiënt</strong> <br/>
            Geen ingewikkelde instellingen of overbodige functies. MyFitnessPlate is ontworpen voor gemak, zodat jij je kunt focussen op een gezonde levensstijl.
          </p>
          <p>
            <strong>📊 Houd je voortgang bij</strong> <br/>
            Naast je voedingsinname kun je met MyFitnessPlate ook eenvoudig je stappen en gewicht bijhouden. Zo krijg je een compleet beeld van je gezondheid en blijf je gemotiveerd om je doelen te behalen!
          </p>
          <section className="start-today"> 
            <h3>Start vandaag nog!</h3>
            <p>
              Klaar om de controle te krijgen over je voeding te nemen? Registreer je gratis en begin direct met het bereiken van je doelen.
            </p>
            <p>🚀 Jouw reis naar een gezondere levensstijl begint <Link to="/login">hier! </Link></p>
          </section>
        </section>
        <section className="aboutUs"> 
          <p>Meer info? Kijk in <Link to="about-us">About Us!</Link></p>
        </section>
        <Reviews />
      </main>
    </>
  );
}

export default Home;

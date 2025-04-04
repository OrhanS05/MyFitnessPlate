import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Jan",
    rating: 5,
    message: "Dankzij MyFitnessPlate kan ik al mijn macro's eenvoudig bijhouden en nieuwe recepten vinden. Ik behaal nu eindelijk mijn doelen!"
  },
  {
    id: 2,
    name: "Sanne",
    rating: 5,
    message: "Ik was altijd te druk om mijn voeding te tracken, maar deze app maakt het supermakkelijk. Geweldige interface!"
  },
  {
    id: 3,
    name: "Tom",
    rating: 5,
    message: "Als vader van twee heb ik weinig tijd, maar met MyFitnessPlate houd ik alles overzichtelijk bij en bespaar ik veel tijd!"
  },
  {
    id: 4,
    name: "Lisa",
    rating: 5,
    message: "Geen onnodige functies, precies wat ik zocht. Duidelijk, snel en handig!"
  },
  {
    id: 5,
    name: "Sarah",
    rating: 5,
    message: "Door MyFitnessPlate heb ik een gezondere levensstijl kunnen aannemen. De app motiveert me elke dag!"
  },
  {
    id: 6,
    name: "Kevin",
    rating: 5,
    message: "Heel overzichtelijk en simpel in gebruik. Ik raad het iedereen aan die wil afvallen of gezonder wil eten."
  }
];

function Reviews() {
  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">Wat klanten over ons zeggen</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3 className="review-name">{review.name}</h3>
            <div className="review-rating">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="review-message">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

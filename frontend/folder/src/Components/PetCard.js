import React from 'react';
import './PetCard.css';

const PetCard = ({ pet, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <h5>{pet.name}</h5>
        <p>Type: {pet.type}</p> {/* Ensure this line is present */}
        <p>Breed: {pet.breed}</p>
        <p>Price: ${pet.price}</p>
      </div>
      <div className="cardActions">
        <button className="button" onClick={onEdit}>
          Edit
        </button>
        <button className="button" onClick={onDelete}>
r          Delete
        </button>
      </div>
    </div>
  );
};

export default PetCard;

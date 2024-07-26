import React from 'react';
import './PetList.css';
import PetCard from './PetCard';

const PetList = ({ pets, onEdit, onDelete }) => {
  return (
    <div className="petList">
      {pets.map((pet, index) => (
        <PetCard key={index} pet={pet} onEdit={() => onEdit(index)} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default PetList;

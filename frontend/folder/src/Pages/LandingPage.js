import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import PetList from '../Components/PetList';
import PetDialog from '../Components/PetDialog';

const LandingPage = () => {
  const [pets, setPets] = useState([]);
  const [open, setOpen] = useState(false);
  const [petData, setPetData] = useState({ name: '', type: '', breed: '', price: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [currentPetIndex, setCurrentPetIndex] = useState(null);

  useEffect(() => {
    const storedPets = localStorage.getItem('pets');
    if (storedPets) {
      setPets(JSON.parse(storedPets));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPetData({ name: '', type: '', breed: '', price: '' });
    setIsEdit(false);
  };

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleAddPet = () => {
    setPets([...pets, petData]);
    handleClose();
  };

  const handleEditPet = (index) => {
    setPetData(pets[index]);
    setIsEdit(true);
    setCurrentPetIndex(index);
    setOpen(true);
  };

  const handleUpdatePet = () => {
    // Creates a new array with the updated pet data.
    const updatedPets = pets.map((pet, index) => (index === currentPetIndex ? petData : pet));
    setPets(updatedPets);
    handleClose();
  };

  const handleDeletePet = (index) => {
    if (window.confirm('Do you want to delete this pet?')) {
     // filtering out the data of given index
      setPets(pets.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button className="addButton" onClick={handleOpen}>
          Add New Pet
        </button>
      </div>
      <div className="petListContainer">
        {pets.length > 0 && (
          <PetList pets={pets} onEdit={handleEditPet} onDelete={handleDeletePet} />
        )}
      </div>
      <PetDialog
        open={open}
        onClose={handleClose}
        petData={petData}
        handleChange={handleChange}
        handleSave={isEdit ? handleUpdatePet : handleAddPet}
        isEdit={isEdit}
      />
    </div>
  );
};

export default LandingPage;

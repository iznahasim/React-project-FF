import React from 'react';
import './PetDialog.css';

const PetDialog = ({ open, onClose, petData, handleChange, handleSave, isEdit }) => {
  if (!open) return null;

  return (
    <div className="dialog">
      <div className="dialogTitle">{isEdit ? 'Edit Pet' : 'Add New Pet'}</div>
      <div className="dialogContent">
        <input
          type="text"
          className="textField"
          placeholder="Name"
          name="name"
          value={petData.name}
          onChange={handleChange}
        />
        <select
          name="type"
          className="select"
          value={petData.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="Bird">Bird</option>
          <option value="Animal">Animal</option>
          <option value="Fish">Fish</option>
        </select>
        <input
          type="text"
          className="textField"
          placeholder="Breed"
          name="breed"
          value={petData.breed}
          onChange={handleChange}
        />
        <input
          type="text"
          className="textField"
          placeholder="Price"
          name="price"
          value={petData.price}
          onChange={handleChange}
        />
      </div>
      <div className="dialogActions">
        <button className="button" onClick={onClose}>
          Cancel
        </button>
        <button className="button" onClick={handleSave}>
          {isEdit ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default PetDialog;

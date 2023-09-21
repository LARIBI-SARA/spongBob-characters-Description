import React, { useState } from "react";
import "./SpongChar.css";
function SpongChar({ index, name, image, info, setSpongBobCharacters, SpongBobCharacters }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(info || "");
  const [editedImage, setEditedImage] = useState(image);
  const [showPopup, setShowPopup] = useState(false);

  const handleSaveClick = () => {
    const characters = [...SpongBobCharacters];
    characters[index] = {
      ...characters[index],
      name: editedName,
      description: editedDescription,
      image: editedImage,
    };

    setIsEditing(false);
    setSpongBobCharacters(characters); 
  };

  const handleDeleteClick = () => {
    const characters = [...SpongBobCharacters];
    characters.splice(index, 1); 
    setSpongBobCharacters(characters)
    setShowPopup(false);

  }
  const handleHideDescriptionClick = () => {
    setShowPopup(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedImage(imageUrl);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <div className="carte-container" onClick={() => setShowPopup(true)}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
        </div>
      ) : null}

      {showPopup &&
        (!isEditing ? (
          <div className="popup-container">
            <div className="popup-content">
              <h2>{editedName}</h2>
              <p>{editedDescription}</p>
              <div className="btns">
                <button className="close-btn" onClick={handleHideDescriptionClick}>Close</button>
                <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="popup-container">
            <div className="popup-content">
              <label htmlFor="">Name :</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <label htmlFor="">Description :</label>
            <textarea
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <label htmlFor="">Edit {name}'s image : </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange} 
            />

            <button className="save-btn" onClick={handleSaveClick}>Save</button>
            </div>
           
          </div>
        ))}
    </div>
  );
}

export default SpongChar;

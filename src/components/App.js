import React, { useEffect, useState } from "react";
import request from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext" 
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {
  addPlaceFormContent,
  addAvatarFormContent,
} from "../utils/utils";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    request.getUserData().then(userData => setCurrentUser({
      name: userData.name, 
      description: userData.about,
      avatar: userData.avatar,
      currentUserId: userData._id
    }))
  }, []);

  function handleUpdateUser(newUserData) {
    request.editUserInfo(newUserData).then(userData => setCurrentUser({
      name: userData.name, 
      description: userData.about,
      avatar: userData.avatar,
      currentUserId: userData._id
    }) )

    closeAllPopups();
  }


  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function closeAllPopups() {
    setSelectedCard(undefined);
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    
      <div className="page">
        <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>  
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <PopupWithForm
          title="Новое место"
          name="add-place"
          children={addPlaceFormContent}
          isOpen={isAddPlacePopupOpen}
          onClosePopup={closeAllPopups}
        />
        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          children={addAvatarFormContent}
          isOpen={isEditAvatarPopupOpen}
          onClosePopup={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          name="full-image"
          onClosePopup={closeAllPopups}
        />
        </CurrentUserContext.Provider>
        </div>
      </div>
  );
}

export default App;

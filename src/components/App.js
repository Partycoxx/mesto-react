import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { editProfileFormContent, addPlaceFormContent, addAvatarFormContent } from '../utils/utils';

function App() {
  document.body.classList.add('root');

const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
const [selectedCard, setSelectedCard] = useState([]);
const [isImagePopupOpen, setImagePopupState] = useState(false)

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
    setImagePopupState(false);
    setSelectedCard([]);
    setEditAvatarPopupState(false)
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
}

function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupState(true);
}


  return (
    <>
<div className="page">
        {<Header />}
        {<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>}
        {<Footer />}
        {<PopupWithForm title="Редактировать данные" name="edit-profile" children={editProfileFormContent} isOpen={isEditProfilePopupOpen} onClosePopup={closeAllPopups}  />}
        {<PopupWithForm title="Новое место" name="add-place" children={addPlaceFormContent} isOpen={isAddPlacePopupOpen} onClosePopup={closeAllPopups}  />}
        {<PopupWithForm title="Обновить аватар" name="edit-avatar" children={addAvatarFormContent} isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups}  />}
        {<ImagePopup card={selectedCard} name="full-image" isOpen={isImagePopupOpen} onClosePopup={closeAllPopups}/>}


</div>
</>
  );
}

export default App;
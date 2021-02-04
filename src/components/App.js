import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import request from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([request.getUserData(), request.getCardList()])
      .then(([userData, cardList]) => {
        setCurrentUser({
          name: userData.name,
          description: userData.about,
          avatar: userData.avatar,
          currentUserId: userData._id,
        });
        setCards(cardList);
      })
      .catch((err) => console.log(err));
  }, []);

  // ↑ Запрашиаем с сервера список карточек и данные о пользователе

  //Обработчик лайков карточек
  function handleLikeClick(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser.currentUserId);

    request
      .changeLike(card, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  // Обработчик удаления карточек
  function handleDeleteClick(card) {
    request
      .deleteCard(card)
      .then((data) => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  //Обработчик обновления информации о пользователе
  function handleUpdateUser(newUserData) {
    request
      .editUserInfo(newUserData)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          description: userData.about,
          avatar: userData.avatar,
          currentUserId: userData._id,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Обработчик обновления аватара
  function handleUpdateAvatar(newAvatarLink) {
    request
      .addUserAvatar(newAvatarLink)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          description: userData.about,
          avatar: userData.avatar,
          currentUserId: userData._id,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Обработчик добавления новой карточки
  function handleAddNewPlace(newCardData) {
    request
      .addNewCard(newCardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // Обработчик, раскрывающий изображение карточки в полном формате

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //Обработчики, открывающие и закрывающие модалки

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

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Route component={Header} />
          <Switch>
            <ProtectedRoute exact path="/app" isLoggedIn={isLoggedIn}>
              <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleLikeClick}
                onCardDelete={handleDeleteClick}
              />
              <Footer />
            </ProtectedRoute>
            <Route exact path="/sign-in" component={Login} />

            <Route exact path="/sign-up" component={Register} />
            <ProtectedRoute path={'/'} isLoggedIn={isLoggedIn}>
              {isLoggedIn ? <Redirect to="/app" /> : <Redirect to="/sign-in" />}
            </ProtectedRoute>
          </Switch>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddNewPlace={handleAddNewPlace}
          />
          <ImagePopup card={selectedCard} name="full-image" onClosePopup={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

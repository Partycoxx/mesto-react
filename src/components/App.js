import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import InfoTooltip from './InfoTooltip';
import request from '../utils/Api';
import authRequest from '../utils/Auth';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setUserEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
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
    }
    authRequest.checkTokenValidity().then((res) => {
      console.log('success', res);
      const {
        data: { email },
      } = res;
      setUserEmail((prev) => email);
      setIsLoggedIn((prev) => true);
      history.push('/');
    });
  }, [isLoggedIn]);

  // ↑ Запрашиаем с сервера список карточек и данные о пользователе

  // Обработчик выхода из приложени

  function onSignOut() {
    localStorage.removeItem('token');
    setIsLoggedIn((prev) => false);
    history.push('/sign-in');
  }

  //Обработчик входа в приложение

  function onLogIn(token) {
    localStorage.setItem('token', token);
    setIsLoggedIn((prev) => true);
    history.push('/');
  }
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
    setInfoTooltipState(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Route
            render={(props) => (
              <Header
                {...props}
                userEmail={email}
                setIsLoggedIn={setIsLoggedIn}
                onLogOut={onSignOut}
              />
            )}
          />
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
            <Route
              exact
              path="/sign-in"
              render={(props) => <Login {...props} onLogIn={onLogIn} />}
            />

            <Route
              exact
              path="/sign-up"
              render={(props) => (
                <Register
                  {...props}
                  setUserEmail={setUserEmail}
                  setInfoTooltipState={setInfoTooltipState}
                />
              )}
            />
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
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            currentUserData={email}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

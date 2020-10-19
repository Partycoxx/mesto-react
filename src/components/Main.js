import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const { name, description, avatar } = useContext(CurrentUserContext);

  return (
    <main className="main narrow">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__pic-container">
            <img
              className="profile__pic"
              src={
                avatar
                  ? avatar
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png"
              }
              alt="Фото профиля"
            />
            <div className="profile__pic-overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__container">
            <h1 className="profile__title">{name}</h1>
            <button
              className="button profile__edit-button change-opacity"
              aria-label="Редактировать"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__subtitle">{description}</p>
          </div>
        </div>
        <button
          className="button profile__add-button change-opacity"
          aria-label="Добавить фото"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((items) => (
            <Card
              card={items}
              key={items._id}
              cardClickHandler={onCardClick}
              likeClickHandler={onCardLike}
              deleteClickHandler={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({
  card,
  cardClickHandler,
  likeClickHandler,
  deleteClickHandler,
}) {
  const { currentUserId } = useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUserId;
  const isLiked = card.likes.some((item) => item._id === currentUserId);
  const cardLikeButtonClassName = `button card__like-button change-opacity ${
    isLiked && "card__like-button_type_liked"
  }`;

  function handleClick() {
    cardClickHandler(card);
  }

  function handleLikeClick() {
    likeClickHandler(card);
  }

  function handleDeleteClick() {
    deleteClickHandler(card);
  }

  return (
    <li className="card">
      {isOwner && (
        <button
          className="button card__button-trash change-opacity"
          onClick={handleDeleteClick}
          type="button"
          aria-label="Удалить фото"
        ></button>
      )}
      <img
        className="card__image"
        src={card.link}
        alt={`На фото: ${card.name}`}
        onClick={handleClick}
      />
      <div className="card__content">
        <h2 className="card__heading">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Оценить фото"
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;

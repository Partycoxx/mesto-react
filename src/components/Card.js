import React from 'react';

function Card({card, clickHandler}) {

    function handleClick() {
        clickHandler(card)
    }


    return (
        <li className="card">
        <button className="button card__button-trash change-opacity" type="button" aria-label="Удалить фото"></button>
        <img className="card__image" src={card.link} alt={`На фото: ${card.title}`} onClick={handleClick}/>
        <div className="card__content">
    <h2 className="card__heading">{card.title}</h2>
            <div className="card__like-container">
                <button className="button card__like-button change-opacity" type="button" aria-label="Оценить фото"></button>
                <p className="card__like-counter">0</p>
            </div>
        </div>
       </li>
    )
}

export default Card;
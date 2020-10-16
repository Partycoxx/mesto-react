import React, {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import request from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [cards, setCards] = useState([]);
    const {name, description, avatar, currentUserId} = useContext(CurrentUserContext);

    useEffect(() => {
        request.getCardList().then(cardList => setCards(cardList))
    }, []);

    function handleLikeClick(card) {
        const isLiked = card.likes.some(i => i._id === currentUserId);

        request.changeLike(card, isLiked).then(newCard => {
            const newCards = cards.map(c => c._id === card._id ? newCard : c);
            setCards(newCards);
        })}

    function handleDeleteClick(card) {
        request.deleteCard(card).then(data => {
            const newCards = cards.filter(c => c._id !== card._id)
            setCards(newCards);
        
        })
    }

    return (
        <main className="main narrow">
        <section className="profile">
            <div className="profile__data">
                <div className="profile__pic-container">
                    <img className="profile__pic" src={avatar ? avatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png" } alt="Фото профиля" />
                    <div className="profile__pic-overlay" onClick={onEditAvatar}>
                    </div>
                </div>
                <div className="profile__container">
                    <h1 className="profile__title">{name}</h1>
                    <button className="button profile__edit-button change-opacity" aria-label="Редактировать" type="button" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{description}</p>
                </div>
            </div>
            <button className="button profile__add-button change-opacity" aria-label="Добавить фото" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="photo-grid">
            <ul className="photo-grid__list">
                {
                    cards.map((items) => <Card card={items} key={items._id} cardClickHandler={onCardClick} likeClickHandler={handleLikeClick} deleteClickHandler={handleDeleteClick}   />)
                }                                   
                                   
            </ul>
        </section>
    </main>
    )
}

export default Main;
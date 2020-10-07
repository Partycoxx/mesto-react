import React, {useState, useEffect} from 'react';
import request from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);


    useEffect(() => {
        Promise.all([request.getUserData(), request.getCardList()]).then(([data, cardList]) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);

            const items = cardList.map(item => ({
                title: item.name,
                link: item.link,
                id: item._id
            }));
            setCards(items);
        })}, []);

    return (
        <main className="main narrow">
        <section className="profile">
            <div className="profile__data">
                <div className="profile__pic-container">
                    <img className="profile__pic" src={userAvatar ? userAvatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png" } alt="Фото профиля" />
                    <div className="profile__pic-overlay" onClick={onEditAvatar}>
                    </div>
                </div>
                <div className="profile__container">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="button profile__edit-button change-opacity" aria-label="Редактировать" type="button" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
            </div>
            <button className="button profile__add-button change-opacity" aria-label="Добавить фото" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="photo-grid">
            <ul className="photo-grid__list">
                {
                    cards.map(({id, ...items}) => <Card card={items} key={id} clickHandler={onCardClick}   />)
                }                                   
                                   
            </ul>
        </section>
    </main>
    )
}

export default Main;